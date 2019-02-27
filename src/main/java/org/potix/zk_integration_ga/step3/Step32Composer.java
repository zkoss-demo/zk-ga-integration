package org.potix.zk_integration_ga.step3;

import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zk.ui.util.Clients;

public class Step32Composer extends SelectorComposer {

	/* listen to 'onClick' events on component with ID myBtn*/
	@Listen("onClick = #myBtn")
	public void doBtnClick(){
		/* listen to 'onClick' events on component with ID myBtn*/
		Clients.showNotification("Hello World");
		/* Use the GaUtil class to send a GA event with provided data */
		GaUtil.sendGaEvent("Server-side", "Test-Events", "Sent by GA Util","my value",false);
	}
	
}
