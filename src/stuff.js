function Stuff() {
 	this.do = function() {
 		return 42
 	};
}

/* Hack to test this code, global is not available in the browser */
if (typeof global !== 'undefined') {
    global.Stuff = Stuff;
}