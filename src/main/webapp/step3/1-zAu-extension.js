/* afterLoad on "zk" package will trigger once the ZK client engine has been loaded. */
/* If the package has already been loaded, the callback will trigger immediately */
zk.afterLoad("zk", function() {
	zAu.cmd0.sendGaEvent = function(eventAction, eventCategory, eventLabel, eventValue, eventNonInteraction) {
		/*calling the zkgtag object directly*/
		zkgtag.sendEvent(eventAction, eventCategory, eventLabel, eventValue, eventNonInteraction);
	};
	zAu.cmd0.sendTimingSincePageLoad = function(){
		zkgtag.sendTimingSincePageLoad();
	};
	zAu.cmd0.sendScreenView = function(screenName, appName, appId, appVersion){
		zkgtag.sendScreenView(screenName, appName, appId, appVersion);
	};
});// afterload
