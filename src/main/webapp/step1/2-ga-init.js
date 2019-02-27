/*define the callback to be executed once the library has been loaded*/
function afterLibraryLoaded(){
	/* reuse the init script provided by the google analytics console*/
	window.dataLayer = window.dataLayer || [];
	window.gtag=function(){dataLayer.push(arguments);}
	window.gtag('js', new Date());
	window.gtag('config', 'XX-000000000-0');
}
/* the jq object is a jQuery ($) library bundled in ZK framework available at client side */
/* getScript will retrieve a JS resource then execute a callback after it has been loaded */
jq.getScript("https://www.googletagmanager.com/gtag/js?id=XX-000000000-0",afterLibraryLoaded);