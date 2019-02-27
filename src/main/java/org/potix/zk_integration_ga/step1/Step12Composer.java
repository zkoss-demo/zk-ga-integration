package org.potix.zk_integration_ga.step1;

import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zk.ui.util.Clients;

public class Step12Composer extends SelectorComposer {

	/* listen to 'onClick' events on component with ID myBtn*/
	@Listen("onClick = #myBtn")
	public void doBtnClick(){
		/* do business code here*/
		Clients.showNotification("Hello World");
		/* add a JavaScript evaluation to client*/
		Clients.evalJavaScript("gtag('event', 'Hello world server button clicked');");
	}
}
