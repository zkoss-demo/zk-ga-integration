package org.potix.zk_integration_ga.step3;

import org.zkoss.zk.au.AuResponse;
import org.zkoss.zk.ui.Executions;
import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zk.ui.util.Clients;

public class Step31Composer extends SelectorComposer {

	/* listen to 'onClick' events on component with ID myBtn*/
	@Listen("onClick = #myBtn")
	public void doBtnClick(){
		Clients.showNotification("Hello World");
		Clients.evalJavaScript("gtag('event', 'Hello world server button clicked');");
	}
	
	/* listen to 'onClick' events on component with ID myAuBtn*/
	@Listen("onClick = #myAuBtn")
	public void doAuBtnClick(){
		/* build the data object*/
		Object[] data = new Object[]{"Server-side", "Test-Events", "Sent by zAu command", "my value", false};
		/* add the command to the response */
		Executions.getCurrent().addAuResponse(new AuResponse("sendGaEvent",data));
		
		/* send timing info of the session when the user reach this step*/
		Executions.getCurrent().addAuResponse(new AuResponse("sendTimingSincePageLoad"));
		
	}
}
