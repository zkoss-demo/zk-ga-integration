package org.potix.zk_integration_ga.step3;

import org.zkoss.zk.au.AuResponse;
import org.zkoss.zk.ui.Executions;

public class GaUtil {
	
	/* Send a command to client to trigger a GA event with provided parameters*/
	public static void sendGaEvent(String eventAction, String eventCategory, String eventLabel, String eventValue, boolean eventNonInteraction){
		/* build the data object*/
		Object[] data = new Object[]{eventAction, eventCategory, eventLabel,
				eventValue, eventNonInteraction};
		/* add the command to the response */
		Executions.getCurrent().addAuResponse(new AuResponse("sendGaEvent",data));
	}
	
	/* Send a command to client to trigger a GA screenview with provided parameters*/
	public static void sendScreenView(String screenName, String appName, String appId, String appVersion){
		Object[] data = new Object[]{screenName, appName, appId,
				appVersion};
		Executions.getCurrent().addAuResponse(new AuResponse("sendScreenView",data));
	}
	
	/* Send a command to client to trigger a GA timing*/
	public static void sendTimingSincePageLoad(){
		Executions.getCurrent().addAuResponse(new AuResponse("sendTimingSincePageLoad"));
	}
}
