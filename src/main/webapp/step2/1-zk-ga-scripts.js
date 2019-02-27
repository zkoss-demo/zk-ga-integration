zkgtag = {
	/* could be defined dynamicaly*/
	trackingId: "XX-000000000-0",
	/* could be defined dynamicaly*/
	pageTitle: "",
	/* could be defined dynamicaly*/
	pagePath: "",
	/* initilalization code to be ran after the library script has been loaded*/
	afterLibraryLoaded : function() {
		/* https://developers.google.com/analytics/devguides/collection/gtagjs/pages */
		window.dataLayer = window.dataLayer || [];
		window.gtag = function() {
			dataLayer.push(arguments);
		}
		/* initialized the data object*/
		var eventContent={};
		/* add option to the data object if not null or empty*/
		if (zkgtag.pageTitle != "") {
			eventContent.event_label = zkgtag.pageTitle;
		}
		if (zkgtag.pagePath != "") {
			eventContent.pagePath = zkgtag.pagePath;
		}
		window.gtag('js', new Date());
		gtag('config', zkgtag.trackingId, eventContent);
		/* use the client-side onError global listener to retrieve client-side exceptions*/
		/* warning: this may cause a large amount of tracking events to be logged if the current application triggers client-side errors*/
		//window.addEventListener('error', zkgtag.trackClientException);
	},
	sendEvent : function(eventAction, eventCategory, eventLabel, eventValue,
			eventNonInteraction) {
		/* https://developers.google.com/analytics/devguides/collection/gtagjs/events */
		var eventContent = {
			'event_category' : eventCategory
		};
		if (eventLabel != null) {
			eventContent.event_label = eventLabel;
		}
		if (eventValue != null) {
			eventContent.value = eventValue;
		}
		if (eventNonInteraction != null) {
			eventContent.non_interaction = eventNonInteraction;
		}
		gtag('event', eventAction, eventContent);
	},
	sendTimingSincePageLoad : function() {
		/* https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings */
		if (window.performance) {
			var timeSincePageLoad = Math.round(performance.now());
			gtag('event', 'timing_complete', {
				'name' : 'load',
				'value' : timeSincePageLoad,
				'event_category' : 'JS Dependencies'
			});
		}
	},
	sendScreenView : function(screenName, appName, appId, appVersion) {
		/* https://developers.google.com/analytics/devguides/collection/gtagjs/screens */
		var eventContent = {};
		if (screenName != null) {
			eventContent.screen_name = screenName;
		}
		if (appName != null) {
			eventContent.app_name = appName;
		}
		if (appId != null) {
			eventContent.app_id = appId;
		}
		if (appVersion != null) {
			eventContent.app_version = appVersion;
		}
		gtag('event', 'screen_view', eventContent);
	},
	/*used by the global error handler if active. see comment in afterLibraryLoaded*/
	trackClientException: function(errorEvent){
		var description = "";
		if(errorEvent.message != null && errorEvent.message!=""){
			description += errorEvent.message;
		}
		if(errorEvent.exception != null && errorEvent.exception!=""){
			description += errorEvent.exception;
		}
		if(errorEvent.error != null && errorEvent.error!=""){
			description += errorEvent.error.stack;
		}
		gtag('event', 'exception', {
		  'description': description,
		  'fatal': false
		});
	}
}
/*using the tracking ID defined in the zkgtag object to load the library with ID*/
jq.getScript("https://www.googletagmanager.com/gtag/js?id="+zkgtag.trackingId,zkgtag.afterLibraryLoaded);