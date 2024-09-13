!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n,r,o,i,a,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u={},l={},c=s.parcelRequire11b0;null==c&&((c=function(e){if(e in u)return u[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return u[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},s.parcelRequire11b0=c),c.register;var d={};function f(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}t="undefined"!=typeof window?window:void 0,n=function(e,t){var n,r=[],o=Object.getPrototypeOf,i=r.slice,a=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},s=r.push,u=r.indexOf,l={},c=l.toString,d=l.hasOwnProperty,p=d.toString,h=p.call(Object),g={},v=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},y=e.document,b={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,o,i=(n=n||y).createElement("script");if(i.text=e,t)for(r in b)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(o=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r,o);n.head.appendChild(i).parentNode.removeChild(i)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":void 0===e?"undefined":f(e)}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var C="3.7.1",S=/HTML$/i,w=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new w.fn.init(e,t)};function H(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=E(e);return!(v(e)||m(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function T(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}w.fn=w.prototype={// The current version of jQuery being used
jquery:C,constructor:w,// The default length of a jQuery object is 0
length:0,toArray:function(){return i.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?i.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=w.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(w.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(w.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:r.sort,splice:r.splice},w.extend=w.fn.extend=function(){var e,t,n,r,o,i,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(w.isPlainObject(r)||(o=Array.isArray(r)))?(n=a[t],i=o&&!Array.isArray(n)?[]:o||w.isPlainObject(n)?n:{},o=!1,// Never move original objects, clone them
a[t]=w.extend(l,i,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},w.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(C+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===c.call(e)&&(!(t=o(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=d.call(t,"constructor")&&t.constructor)&&p.call(n)===h))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(H(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",r=0,o=e.nodeType;if(!o)for(;t=e[r++];)n+=w.text(t);return 1===o||11===o?e.textContent:9===o?e.documentElement.textContent:3===o||4===o?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(H(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!S.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},// arg is for internal usage only
map:function(e,t,n){var r,o,i=0,s=[];// Go through the array, translating each of the items to their new values
if(H(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&s.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&s.push(o);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:g}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var k=r.pop,R=r.sort,j=r.splice,A="[\\x20\\t\\r\\n\\f]",N=RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");// Note: an element does not contain itself
w.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var q=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function L(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}w.escapeSelector=function(e){return(e+"").replace(q,L)},function(){var t,n,o,a,l,c,f,p,h,v,m=s,b=w.expando,x=0,E=0,C=ee(),S=ee(),H=ee(),q=ee(),L=function(e,t){return e===t&&(l=!0),0},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
P="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",D="\\["+A+"*("+P+")(?:"+A+// Operator (capture 2)
"*([*^$|!~]?=)"+A+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+A+"*\\]",F=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+D+")*)|.*)\\)|)",B=RegExp(A+"+","g"),U=RegExp("^"+A+"*,"+A+"*"),O=RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),V=RegExp(A+"|>"),J=new RegExp(F),M=RegExp("^"+P+"$"),I={ID:RegExp("^#("+P+")"),CLASS:RegExp("^\\.("+P+")"),TAG:RegExp("^("+P+"|[*])"),ATTR:RegExp("^"+D),PSEUDO:RegExp("^"+F),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:RegExp("^(?:"+_+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,$=/^h\d$/i,z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Q=RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Y=function(){ea()},K=ec(function(e){return!0===e.disabled&&T(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{m.apply(r=i.call(y.childNodes),y.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
r[y.childNodes.length].nodeType}catch(e){m={apply:function(e,t){s.apply(e,i.call(t))},call:function(e){s.apply(e,i.call(arguments,1))}}}function Z(e,t,n,r){var o,i,a,s,u,l,d,f=t&&t.ownerDocument,v=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(ea(t),t=t||c,p)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==v&&(u=z.exec(e))){// ID selector
if(o=u[1]){// Document context
if(9===v){if(!(a=t.getElementById(o)))return n;if(a.id===o)return m.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(f&&(a=f.getElementById(o))&&Z.contains(t,a)&&a.id===o)return m.call(n,a),n}else if(u[2])return m.apply(n,t.getElementsByTagName(e)),n;else if((o=u[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(o)),n}// Take advantage of querySelectorAll
if(!q[e+" "]&&(!h||!h.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(d=e,f=t,1===v&&(V.test(e)||O.test(e))){for(// Expand context for sibling selectors
(f=X.test(e)&&ei(t.parentNode)||t)==t&&g.scope||((s=t.getAttribute("id"))?s=w.escapeSelector(s):t.setAttribute("id",s=b)),i=// Prefix every selector in the list
(l=eu(e)).length;i--;)l[i]=(s?"#"+s:":scope")+" "+el(l[i]);d=l.join(",")}try{return m.apply(n,f.querySelectorAll(d)),n}catch(t){q(e,!0)}finally{s===b&&t.removeAttribute("id")}}}// All others
return eh(e.replace(N,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(r,o){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=o}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[b]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function er(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&K(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function eo(e){return et(function(t){return t=+t,et(function(n,r){// Match elements found at the specified indexes
for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ei(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,r=e?e.ownerDocument||e:y;return r!=c&&9===r.nodeType&&r.documentElement&&(f=// Update global variables
(c=r).documentElement,p=!w.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
v=f.matches||f.webkitMatchesSelector||f.msMatchesSelector,f.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
y!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",Y),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
g.getById=en(function(e){return f.appendChild(e).id=w.expando,!c.getElementsByName||!c.getElementsByName(w.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
g.disconnectedMatch=en(function(e){return v.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
g.scope=en(function(){return c.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
g.cssHas=en(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),g.getById?(n.filter.ID=function(e){var t=e.replace(Q,G);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&p){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(Q,G);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&p){var n,r,o,i=t.getElementById(e);if(i){if(// Verify the id attribute
(n=i.getAttributeNode("id"))&&n.value===e)return[i];for(// Fall back on getElementsByName
o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&p)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
h=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;f.appendChild(e).innerHTML="<a id='"+b+"' href='' disabled='disabled'></a><select id='"+b+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+A+"*(?:value|"+_+")"),e.querySelectorAll("[id~="+b+"-]").length||h.push("~="),e.querySelectorAll("a#"+b+"+*").length||h.push(".#.+[+~]"),e.querySelectorAll(":checked").length||h.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&h.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||h.push("\\["+A+"*name"+A+"*="+A+"*(?:''|\"\")")}),g.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
h.push(":has"),h=h.length&&new RegExp(h.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
L=function(e,t){// Flag for duplicate removal
if(e===t)return l=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!g.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===c||e.ownerDocument==y&&Z.contains(y,e)?-1:t===c||t.ownerDocument==y&&Z.contains(y,t)?1:a?u.call(a,e)-u.call(a,t):0:4&n?-1:1)}),c}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ea(e),p&&!q[t+" "]&&(!h||!h.test(t)))try{var n=v.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||g.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){q(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&ea(e),w.contains(e,t)},Z.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=c&&ea(e);var r=n.attrHandle[t.toLowerCase()],o=r&&d.call(n.attrHandle,t.toLowerCase())?r(e,t,!p):void 0;return void 0!==o?o:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */w.uniqueSort=function(e){var t,n=[],r=0,o=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
l=!g.sortStable,a=!g.sortStable&&i.call(e,0),R.call(e,L),l){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)j.call(e,n[r],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},w.fn.uniqueSort=function(){return this.pushStack(w.uniqueSort(i.apply(this)))},(n=w.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:I,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Q,G),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Q,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return I.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&J.test(n)&&// Get excess from tokenize (recursively)
(t=eu(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Q,G).toLowerCase();return"*"===e?function(){return!0}:function(e){return T(e,t)}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+A+")"+e+"("+A+"|$)"),C(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=Z.attr(r,e);return null==o?"!="===t:!t||((o+="","="===t)?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(B," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,u){var l,c,d,f,p,h=i!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,y=!1;if(g){// :(first|last|only)-(child|of-type)
if(i){for(;h;){for(d=t;d=d[h];)if(s?T(d,v):1===d.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
p=h="only"===e&&!p&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(p=[a?g.firstChild:g.lastChild],a&&m){for(y=(f=(l=// Seek `elem` from a previously-cached index
(c=g[b]||(g[b]={}))[e]||[])[0]===x&&l[1])&&l[2],d=f&&g.childNodes[f];d=++f&&d&&d[h]||// Fallback to seeking `elem` from the start
(y=f=0)||p.pop();)if(1===d.nodeType&&++y&&d===t){c[e]=[x,f,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(m&&(y=f=(l=(c=t[b]||(t[b]={}))[e]||[])[0]===x&&l[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(d=++f&&d&&d[h]||(y=f=0)||p.pop())&&(!((s?T(d,v):1===d.nodeType)&&++y)||(m&&((c=d[b]||(d[b]={}))[e]=[x,y]),d!==t)););return(// Incorporate the offset, then check against cycle size
(y-=o)===r||y%r==0&&y/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,o=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
o[b]?o(t):o.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var r,i=o(e,t),a=i.length;a--;)r=u.call(e,i[a]),e[r]=!(n[r]=i[a])}):function(e){return o(e,0,r)}):o)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=ep(e.replace(N,"$1"));return r[b]?et(function(e,t,n,o){// Match elements unmatched by `matcher`
for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(Q,G),function(t){return(t.textContent||w.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return M.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(Q,G).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:er(!1),disabled:er(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return T(e,"input")&&!!e.checked||T(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return $.test(e.nodeName)},input:function(e){return W.test(e.nodeName)},button:function(e){return T(e,"input")&&"button"===e.type||T(e,"button")},text:function(e){var t;return T(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:eo(function(){return[0]}),last:eo(function(e,t){return[t-1]}),eq:eo(function(e,t,n){return[n<0?n+t:n]}),even:eo(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:eo(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:eo(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:eo(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return T(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(T(t,"input")||T(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function es(){}function eu(e,t){var r,o,i,a,s,u,l,c=S[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=n.preFilter;s;){// Filters
for(a in(!r||(o=U.exec(s)))&&(o&&(s=s.slice(o[0].length)||s),u.push(i=[])),r=!1,(o=O.exec(s))&&(r=o.shift(),i.push({value:r,// Cast descendant combinators to space
type:o[0].replace(N," ")}),s=s.slice(r.length)),n.filter)(o=I[a].exec(s))&&(!l[a]||(o=l[a](o)))&&(r=o.shift(),i.push({value:r,type:a,matches:o}),s=s.slice(r.length));if(!r)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?Z.error(e):S(e,u).slice(0))}function el(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ec(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=E++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,u){var l,c,d=[x,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(c=t[b]||(t[b]={}),o&&T(t,o))t=t[r]||t;else{if((l=c[i])&&l[0]===x&&l[1]===s)return d[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[i]=d,d[2]=e(t,n,u))return!0}}return!1}}function ed(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function ef(e,t,n,r,o){for(var i,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(i=e[s])&&(!n||n(i,r,o))&&(a.push(i),l&&t.push(s));return a}function ep(e,t/* Internal Use Only */){var r,i,a,s,l=[],d=[],f=H[e+" "];if(!f){for(t||(t=eu(e)),s=t.length;s--;)(f=function e(t){for(var r,i,a,s=t.length,l=n.relative[t[0].type],c=l||n.relative[" "],d=l?1:0,f=ec(function(e){return e===r},c,!0),p=ec(function(e){return u.call(r,e)>-1},c,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var i=!l&&(n||t!=o)||((r=t).nodeType?f(e,t,n):p(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,i)}];d<s;d++)if(i=n.relative[t[d].type])h=[ec(ed(h),i)];else{// Return special upon seeing a positional matcher
if((i=n.filter[t[d].type].apply(null,t[d].matches))[b]){for(// Find the next relative operator (if any) for proper handling
a=++d;a<s&&!n.relative[t[a].type];a++);return function e(t,n,r,o,i,a){return o&&!o[b]&&(o=e(o)),i&&!i[b]&&(i=e(i,a)),et(function(e,a,s,l){var c,d,f,p,h=[],g=[],v=a.length,y=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)Z(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),b=t&&(e||!n)?ef(y,h,t,s,l):y;// Apply postFilter
if(r?// Find primary matches
r(b,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
p=i||(e?t:v||o)?[]:a,s,l):p=b,o)for(c=ef(p,g),o(c,[],s,l),// Un-match failing elements by moving them back to matcherIn
d=c.length;d--;)(f=c[d])&&(p[g[d]]=!(b[g[d]]=f));if(e){if(i||t){if(i){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],d=p.length;d--;)(f=p[d])&&c.push(b[d]=f);i(null,p=[],c,l)}for(// Move matched elements from seed to results to keep them synchronized
d=p.length;d--;)(f=p[d])&&(c=i?u.call(e,f):h[d])>-1&&(e[c]=!(a[c]=f))}}else p=ef(p===a?p.splice(v,p.length):p),i?i(null,a,p,l):m.apply(a,p)})}(d>1&&ed(h),d>1&&el(t.slice(0,d-1).concat({value:" "===t[d-2].type?"*":""})).replace(N,"$1"),i,d<a&&e(t.slice(d,a)),a<s&&e(t=t.slice(a)),a<s&&el(t))}h.push(i)}return ed(h)}(t[s]))[b]?l.push(f):d.push(f);// Save selector and tokenization
// Cache the compiled function
(f=H(e,(r=l.length>0,i=d.length>0,a=function(e,t,a,s,u){var f,h,g,v=0,y="0",b=e&&[],E=[],C=o,S=e||i&&n.find.TAG("*",u),H=x+=null==C?1:Math.random()||.1,T=S.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(u&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(o=t==c||t||u);y!==T&&null!=(f=S[y]);y++){if(i&&f){for(h=0,t||f.ownerDocument==c||(ea(f),a=!p);g=d[h++];)if(g(f,t||c,a)){m.call(s,f);break}u&&(x=H)}// Track unmatched elements for set filters
r&&((f=!g&&f)&&v--,e&&b.push(f))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
v+=y,r&&y!==v){for(h=0;g=l[h++];)g(b,E,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(v>0)for(;y--;)b[y]||E[y]||(E[y]=k.call(s));// Discard index placeholder values to get only actual matches
E=ef(E)}// Add matches to results
m.apply(s,E),u&&!e&&E.length>0&&v+l.length>1&&w.uniqueSort(s)}return u&&(x=H,o=C),b},r?et(a):a))).selector=e}return f}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,r,o){var i,a,s,u,l,c="function"==typeof e&&e,d=!o&&eu(e=c.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(r=r||[],1===d.length){if(// Reduce context if the leading compound selector is an ID
(a=d[0]=d[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&p&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(Q,G),t)||[])[0]))return r;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
i=I.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
i--&&(s=a[i],!n.relative[u=s.type]);)if((l=n.find[u])&&(o=l(s.matches[0].replace(Q,G),X.test(a[0].type)&&ei(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(i,1),!(e=o.length&&el(a)))return m.apply(r,o),r;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||ep(e,d))(o,t,!p,r,!t||X.test(e)&&ei(t.parentNode)||t),r)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
g.sortStable=b.split("").sort(L).join("")===b,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
g.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(c.createElement("fieldset"))}),w.find=Z,// Deprecated
w.expr[":"]=w.expr.pseudos,w.unique=w.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=ep,Z.select=eh,Z.setDocument=ea,Z.tokenize=eu,Z.escape=w.escapeSelector,Z.getText=w.text,Z.isXML=w.isXMLDoc,Z.selectors=w.expr,Z.support=w.support,Z.uniqueSort=w.uniqueSort;/* eslint-enable */}();var _=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&w(e).is(n))break;r.push(e)}return r},P=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function B(e,t,n){return v(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(o[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)w.find(e,o[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(B(this,e||[],!1))},not:function(e){return this.pushStack(B(this,e||[],!0))},is:function(e){return!!B(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var U,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(w.fn.init=function(e,t,n){var r,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||U,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:O.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(o=y.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof w?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
w.merge(this,w.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),F.test(r[1])&&w.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,// Initialize central reference
U=w(y);var V=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};function M(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&w(e);// Positional selectors never match, since there's no _selection_ context
if(!D.test(e)){for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){i.push(n);break}}return this.pushStack(i.length>1?w.uniqueSort(i):i)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return _(e,"parentNode")},parentsUntil:function(e,t,n){return _(e,"parentNode",n)},next:function(e){return M(e,"nextSibling")},prev:function(e){return M(e,"previousSibling")},nextAll:function(e){return _(e,"nextSibling")},prevAll:function(e){return _(e,"previousSibling")},nextUntil:function(e,t,n){return _(e,"nextSibling",n)},prevUntil:function(e,t,n){return _(e,"previousSibling",n)},siblings:function(e){return P((e.parentNode||{}).firstChild,e)},children:function(e){return P(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
o(e.contentDocument)?e.contentDocument:(T(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var o=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=w.filter(r,o)),this.length>1&&(J[e]||w.uniqueSort(o),V.test(e)&&o.reverse()),this.pushStack(o)}});var I=/[^\x20\t\r\n\f]+/g;function W(e){return e}function $(e){throw e}function z(e,t,n,r){var o;try{// Check for promise aspect first to privilege synchronous behavior
e&&v(o=e.promise)?o.call(e).done(t).fail(n):e&&v(o=e.then)?o.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */w.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},w.each(t.match(I)||[],function(e,t){n[t]=!0}),n):w.extend({},e);var t,n,r,o,i,a,s=[],u=[],l=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=r=!0;u.length;l=-1)for(o=u.shift();++l<s.length;)!1===s[l].apply(o[0],o[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,o=!1);e.memory||(o=!1),r=!1,a&&(s=o?[]:"")},d={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(o&&!r&&(l=s.length-1,u.push(o)),function t(n){w.each(n,function(n,r){v(r)?e.unique&&d.has(r)||s.push(r):r&&r.length&&"string"!==E(r)&&t(r)})}(arguments),o&&!r&&c()),this},// Remove a callback from the list
remove:function(){return w.each(arguments,function(e,t){for(var n;(n=w.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?w.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=o="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],o||r||(s=o=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return d.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return d},w.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=v(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
i[r[1]](function(){var e=o&&o.apply(this,arguments);e&&v(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,r,o){var i=0;function a(t,n,r,o){return function(){var s=this,u=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<i)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
v(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?o?l.call(e,a(i,n,W,o),a(i,n,$,o)):(// ...and disregard older resolution values
i++,l.call(e,a(i,n,W,o),a(i,n,$,o),a(i,n,W,n.notifyWith))):(r!==W&&(s=void 0,u=[e]),// Process the value(s)
// Default process is resolve
(o||n.resolveWith)(s,u))}},c=o?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.error),t+1>=i&&(r!==$&&(s=void 0,u=[e]),n.rejectWith(s,u))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?c():(w.Deferred.getErrorHook?c.error=w.Deferred.getErrorHook():w.Deferred.getStackHook&&(c.error=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,v(o)?o:W,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,v(t)?t:W)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,v(r)?r:$))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?w.extend(e,o):o}},i={};// All done!
return(// Add list-specific methods
w.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
i[t[0]]=function(){return i[t[0]+"With"](this===i?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
i[t[0]+"With"]=a.fireWith}),// Make the deferred a promise
o.promise(i),t&&t.call(i,i),i)},// Deferred helper
when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(z(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||v(o[n]&&o[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)z(o[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var X=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
w.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&X.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var Q=w.Deferred();// The ready event handler and self cleanup method
function G(){y.removeEventListener("DOMContentLoaded",G),e.removeEventListener("load",G),w.ready()}w.fn.ready=function(e){return Q.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){w.readyException(e)}),this},w.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--w.readyWait:w.isReady)&&(// Remember that the DOM is ready
w.isReady=!0,!0!==e&&--w.readyWait>0||// If there are functions bound, to execute
Q.resolveWith(y,[w]))}}),w.ready.then=Q.then,"complete"!==y.readyState&&("loading"===y.readyState||y.documentElement.doScroll)?(// Use the handy event callback
y.addEventListener("DOMContentLoaded",G),// A fallback to window.onload, that will always work
e.addEventListener("load",G)):e.setTimeout(w.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Y=function(e,t,n,r,o,i,a){var s=0,u=e.length,l=null==n;// Sets many values
if("object"===E(n))for(s in o=!0,n)Y(e,t,s,n[s],!0,i,a);else if(void 0!==r&&(o=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return o?e:l?t.call(e):u?t(e[0],n):i},K=/^-ms-/,Z=/-([a-z])/g;// Used by camelCase as callback to replace()
function ee(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function et(e){return e.replace(K,"ms-").replace(Z,ee)}var en=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function er(){this.expando=w.expando+er.uid++}er.uid=1,er.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},en(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[et(t)]=n;else for(r in t)o[et(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][et(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(et):((t=et(t))in r)?[t]:t.match(I)||[]).length;n--;)delete r[t[n]];// Remove the expando if there's no more data
(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var eo=new er,ei=new er,ea=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,es=/[A-Z]/g;function eu(e,t,n){var r,o;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(es,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{o=n,n="true"===o||"false"!==o&&("null"===o?null:o===+o+""?+o:ea.test(o)?JSON.parse(o):o)}catch(e){}// Make sure we set the data so it isn't changed later
ei.set(e,t,n)}else n=void 0}return n}w.extend({hasData:function(e){return ei.hasData(e)||eo.hasData(e)},data:function(e,t,n){return ei.access(e,t,n)},removeData:function(e,t){ei.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return eo.access(e,t,n)},_removeData:function(e,t){eo.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,o,i=this[0],a=i&&i.attributes;// Gets all values
if(void 0===e){if(this.length&&(o=ei.get(i),1===i.nodeType&&!eo.get(i,"hasDataAttrs"))){for(n=a.length;n--;)// The attrs elements can be null (trac-14894)
a[n]&&0===(r=a[n].name).indexOf("data-")&&eu(i,r=et(r.slice(5)),o[r]);eo.set(i,"hasDataAttrs",!0)}return o}return(// Sets multiple values
"object"==typeof e?this.each(function(){ei.set(this,e)}):Y(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(i&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=ei.get(i,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=eu(i,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
ei.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){ei.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=eo.get(e,t),n&&(!r||Array.isArray(n)?r=eo.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,o=n.shift(),i=w._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete i.stop,o.call(e,function(){w.dequeue(e,t)},i)),!r&&i&&i.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return eo.get(e,n)||eo.access(e,n,{empty:w.Callbacks("once memory").add(function(){eo.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);// Ensure a hooks for this queue
w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,o=w.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=eo.get(i[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var el=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ec=RegExp("^(?:([+-])=|)("+el+")([a-z%]*)$","i"),ed=["Top","Right","Bottom","Left"],ef=y.documentElement,ep=function(e){return w.contains(e.ownerDocument,e)},eh={composed:!0};ef.getRootNode&&(ep=function(e){return w.contains(e.ownerDocument,e)||e.getRootNode(eh)===e.ownerDocument});var eg=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ep(e)&&"none"===w.css(e,"display")};function ev(e,t,n,r){var o,i,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=e.nodeType&&(w.cssNumber[t]||"px"!==l&&+u)&&ec.exec(w.css(e,t));if(c&&c[3]!==l){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,// Trust units reported by jQuery.css
l=l||c[3],// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
w.style(e,t,c+l),(1-i)*(1-(i=s()/u||.5))<=0&&(a=0),c/=i;c*=2,w.style(e,t,c+l),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=o)),o}var em={};function ey(e,t){// Determine new display value for elements that need to change
for(var n,r,o=[],i=0,a=e.length;i<a;i++)(r=e[i]).style&&(n=r.style.display,t?("none"!==n||(o[i]=eo.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&eg(r)&&(o[i]=function(e){var t,n=e.ownerDocument,r=e.nodeName,o=em[r];return o||(t=n.body.appendChild(n.createElement(r)),o=w.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),em[r]=o),o}(r))):"none"!==n&&(o[i]="none",// Remember what we're overwriting
eo.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}w.fn.extend({show:function(){return ey(this,!0)},hide:function(){return ey(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eg(this)?w(this).show():w(this).hide()})}});var eb=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eE=/^$|^module$|\/(?:java|ecma)script/i;e5=y.createDocumentFragment().appendChild(y.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e6=y.createElement("input")).setAttribute("type","radio"),e6.setAttribute("checked","checked"),e6.setAttribute("name","t"),e5.appendChild(e6),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
g.checkClone=e5.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e5.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!e5.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e5.innerHTML="<option></option>",g.option=!!e5.lastChild;// We have to close these tags to support XHTML (trac-13200)
var eC={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eS(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&T(e,t))?w.merge([e],n):n}// Mark scripts as having already been evaluated
function ew(e,t){for(var n=0,r=e.length;n<r;n++)eo.set(e[n],"globalEval",!t||eo.get(t[n],"globalEval"))}eC.tbody=eC.tfoot=eC.colgroup=eC.caption=eC.thead,eC.th=eC.td,g.option||(eC.optgroup=eC.option=[1,"<select multiple='multiple'>","</select>"]);var eH=/<|&#?\w+;/;function eT(e,t,n,r,o){for(var i,a,s,u,l,c=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if((i=e[f])||0===i){// Add nodes directly
if("object"===E(i))// push.apply(_, arraylike) throws on ancient WebKit
w.merge(d,i.nodeType?[i]:i);else if(eH.test(i)){for(a=a||c.appendChild(t.createElement("div")),s=eC[(ex.exec(i)||["",""])[1].toLowerCase()]||eC._default,a.innerHTML=s[1]+w.htmlPrefilter(i)+s[2],// Descend through wrappers to the right content
l=s[0];l--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
w.merge(d,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else d.push(t.createTextNode(i))}for(// Remove wrapper from fragment
c.textContent="",f=0;i=d[f++];){// Skip elements already in the context collection (trac-4087)
if(r&&w.inArray(i,r)>-1){o&&o.push(i);continue}// Capture executables
if(u=ep(i),// Append to fragment
a=eS(c.appendChild(i),"script"),u&&ew(a),n)for(l=0;i=a[l++];)eE.test(i.type||"")&&n.push(i)}return c}var ek=/^([^.]*)(?:\.(.+)|)/;function eR(){return!0}function ej(){return!1}function eA(e,t,n,r,o,i){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)eA(e,s,n,r,t[s],i);return e}if(null==r&&null==o?(// ( types, fn )
o=n,r=n=void 0):null==o&&("string"==typeof n?(// ( types, selector, fn )
o=r,r=void 0):(// ( types, data, fn )
o=r,r=n,n=void 0)),!1===o)o=ej;else if(!o)return e;return 1===i&&(a=o,// Use same guid so caller can remove using origFn
(o=function(e){return(// Can use an empty set, since event contains the info
w().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,o,r,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eN(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===eo.get(e,t)&&w.event.add(e,t,eR);return}// Register the controller as a special universal handler for all event namespaces
eo.set(e,t,!1),w.event.add(e,t,{namespace:!1,handler:function(e){var n,r=eo.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(r)(w.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
r=i.call(arguments),eo.set(this,t,r),// Trigger the native event and capture its result
this[t](),n=eo.get(this,t),eo.set(this,t,!1),r!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else r&&(// ...and capture the result
eo.set(this,t,w.event.trigger(r[0],r.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eR)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */w.event={global:{},add:function(e,t,n,r,o){var i,a,s,u,l,c,d,f,p,h,g,v=eo.get(e);// Only attach events to objects that accept data
if(en(e))for(n.handler&&(n=(i=n).handler,o=i.selector),o&&w.find.matchesSelector(ef,o),n.guid||(n.guid=w.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=// Handle multiple events separated by a space
(t=(t||"").match(I)||[""]).length;l--;)// There *must* be a type, no attaching namespace-only handlers
p=g=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(// If event changes its type, use the special event handlers for the changed type
d=w.event.special[p]||{},// If selector defined, determine special event api type, otherwise given type
p=(o?d.delegateType:d.bindType)||p,// Update special based on newly reset type
d=w.event.special[p]||{},// handleObj is passed to all event handlers
c=w.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&w.expr.match.needsContext.test(o),namespace:h.join(".")},i),(f=u[p])||((f=u[p]=[]).delegateCount=0,(!d.setup||!1===d.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(p,a)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,c):f.push(c),// Keep track of which events have ever been used, for event optimization
w.event.global[p]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,o){var i,a,s,u,l,c,d,f,p,h,g,v=eo.hasData(e)&&eo.get(e);if(v&&(u=v.events)){for(l=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(I)||[""]).length;l--;){// Unbind all events (on this namespace, if provided) for the element
if(p=g=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!p){for(p in u)w.event.remove(e,p+t[l],n,r,!0);continue}for(d=w.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=i=f.length;i--;)c=f[i],(o||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(f.splice(i,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,v.handle)||w.removeEvent(e,p,v.handle),delete u[p])}w.isEmptyObject(u)&&eo.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=Array(arguments.length),u=w.event.fix(e),l=(eo.get(this,"events")||Object.create(null))[u.type]||[],c=w.event.special[u.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=u;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(// Determine handlers
a=w.event.handlers.call(this,u,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(o=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!u.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!u.rnamespace||!1===i.namespace||u.rnamespace.test(i.namespace))&&(u.handleObj=i,u.data=i.data,void 0!==(r=((w.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,o,i,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,i=[],a={};n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
o=(r=t[n]).selector+" "]&&(a[o]=r.needsContext?w(o,this).index(l)>-1:w.find(o,this,null,[l]).length),a[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}}return(// Add the remaining (directly-bound) handlers
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s)},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return eb.test(t.type)&&t.click&&T(t,"input")&&eN(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return eb.test(t.type)&&t.click&&T(t,"input")&&eN(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return eb.test(t.type)&&t.click&&T(t,"input")&&eo.get(t,"click")||T(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eR:ej,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[w.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
w.Event.prototype={constructor:w.Event,isDefaultPrevented:ej,isPropagationStopped:ej,isImmediatePropagationStopped:ej,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eR,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eR,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eR,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(y.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=eo.get(this,"handle"),r=w.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,// First, handle focusin/focusout
n(e),r.target===r.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(r)}else // while someone wants focusin/focusout.
w.event.simulate(t,e.target,w.event.fix(e))}w.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var r;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eN(this,e,!0),!y.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(r=eo.get(this,t))||this.addEventListener(t,n),eo.set(this,t,(r||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eN(this,e),!0)},teardown:function(){var e;if(!y.documentMode)return!1;(e=eo.get(this,t)-1)?eo.set(this,t,e):(this.removeEventListener(t,n),eo.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return eo.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
w.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var r=this.ownerDocument||this.document||this,o=y.documentMode?this:r,i=eo.get(o,t);i||(y.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),eo.set(o,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,o=y.documentMode?this:r,i=eo.get(o,t)-1;i?eo.set(o,t,i):(y.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),eo.remove(o,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,o=e.handleObj;return r&&(r===this||w.contains(this,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return eA(this,e,t,n,r)},one:function(e,t,n,r){return eA(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=ej),this.each(function(){w.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eq=/<script|<style|<link/i,eL=/checked\s*(?:[^=]|=\s*.checked.)/i,e_=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eP(e,t){return T(e,"table")&&T(11!==t.nodeType?t:t.firstChild,"tr")&&w(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eD(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eF(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eB(e,t){var n,r,o,i,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(eo.hasData(e)&&(s=eo.get(e).events))for(o in eo.remove(t,"handle events"),s)for(n=0,r=s[o].length;n<r;n++)w.event.add(t,o,s[o][n]);// 2. Copy user data
ei.hasData(e)&&(i=ei.access(e),a=w.extend({},i),ei.set(t,a))}}function eU(e,t,n,r){// Flatten any nested arrays
t=a(t);var o,i,s,u,l,c,d=0,f=e.length,p=f-1,h=t[0],m=v(h);// We can't cloneNode fragments that contain checked, in WebKit
if(m||f>1&&"string"==typeof h&&!g.checkClone&&eL.test(h))return e.each(function(o){var i=e.eq(o);m&&(t[0]=h.call(this,o,i.html())),eU(i,t,n,r)});if(f&&(i=(o=eT(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=i),i||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(u=(s=w.map(eS(o,"script"),eD)).length;d<f;d++)l=o,d!==p&&(l=w.clone(l,!0,!0),u&&// push.apply(_, arraylike) throws on ancient WebKit
w.merge(s,eS(l,"script"))),n.call(e[d],l,d);if(u)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
w.map(s,eF),d=0;d<u;d++)l=s[d],eE.test(l.type||"")&&!eo.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&!l.noModule&&w._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(l.textContent.replace(e_,""),l,c))}return e}function eO(e,t,n){for(var r,o=t?w.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||w.cleanData(eS(r)),r.parentNode&&(n&&ep(r)&&ew(eS(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),u=ep(e);// Fix IE cloning issues
if(!g.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!w.isXMLDoc(e))for(r=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=eS(s),o=(i=eS(e)).length;r<o;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&eb.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(i[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,i=i||eS(e),a=a||eS(s),o=i.length;r<o;r++)eB(i[r],a[r]);else eB(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=eS(s,"script")).length>0&&ew(a,!u&&eS(e,"script")),s)},cleanData:function(e){for(var t,n,r,o=w.event.special,i=0;void 0!==(n=e[i]);i++)if(en(n)){if(t=n[eo.expando]){if(t.events)for(r in t.events)o[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[eo.expando]=void 0}n[ei.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[ei.expando]=void 0)}}}),w.fn.extend({detach:function(e){return eO(this,e,!0)},remove:function(e){return eO(this,e)},text:function(e){return Y(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eU(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eP(this,e).appendChild(e)})},prepend:function(){return eU(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eP(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eU(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eU(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
w.cleanData(eS(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return Y(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eq.test(e)&&!eC[(ex.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(w.cleanData(eS(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eU(this,arguments,function(t){var n=this.parentNode;0>w.inArray(this,e)&&(w.cleanData(eS(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],o=w(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),w(o[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(r,n.get());return this.pushStack(r)}});var eV=RegExp("^("+el+")(?!px)[a-z%]+$","i"),eJ=/^--/,eM=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eI=function(e,t,n){var r,o,i={};// Remember the old values, and insert the new ones
for(o in t)i[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in r=n.call(e),t)e.style[o]=i[o];return r},eW=RegExp(ed.join("|"),"i");function e$(e,t,n){var r,o,i,a,s=eJ.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
u=e.style;return(n=n||eM(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
a=n.getPropertyValue(t)||n[t],s&&a&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(a=a.replace(N,"$1")||void 0),""!==a||ep(e)||(a=w.style(e,t)),!g.pixelBoxStyles()&&eV.test(a)&&eW.test(t)&&(// Remember the original values
r=u.width,o=u.minWidth,i=u.maxWidth,// Put in the new values to get a computed value out
u.minWidth=u.maxWidth=u.width=a,a=n.width,// Revert the changed values
u.width=r,u.minWidth=o,u.maxWidth=i)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function ez(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ef.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
u=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
c.style.right="60%",a=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
o=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",i=12===n(c.offsetWidth/3),ef.removeChild(l),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function n(e){return Math.round(parseFloat(e))}var r,o,i,a,s,u,l=y.createElement("div"),c=y.createElement("div");// Finish early in limited (non-browser) environments
c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(g,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),i},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,r,o;return null==s&&(t=y.createElement("table"),n=y.createElement("tr"),r=y.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",r.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
r.style.display="block",ef.appendChild(t).appendChild(n).appendChild(r),s=parseInt((o=e.getComputedStyle(n)).height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),s}}))}();var eX=["Webkit","Moz","ms"],eQ=y.createElement("div").style,eG={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eY(e){return w.cssProps[e]||eG[e]||(e in eQ?e:eG[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eX.length;n--;)if((e=eX[n]+t)in eQ)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eK=/^(none|table(?!-c[ea]).+)/,eZ={position:"absolute",visibility:"hidden",display:"block"},e0={letterSpacing:"0",fontWeight:"400"};function e1(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=ec.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function e2(e,t,n,r,o,i){var a="width"===t?1:0,s=0,u=0,l=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=w.css(e,n+ed[a],!0,o)),r?("content"===n&&(u-=w.css(e,"padding"+ed[a],!0,o)),"margin"!==n&&(u-=w.css(e,"border"+ed[a]+"Width",!0,o))):(// Add padding
u+=w.css(e,"padding"+ed[a],!0,o),"padding"!==n?u+=w.css(e,"border"+ed[a]+"Width",!0,o):s+=w.css(e,"border"+ed[a]+"Width",!0,o));return!r&&i>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-i-u-s-.5))||0),u+l}function e3(e,t,n){// Start with computed style
var r=eM(e),o=(!g.boxSizingReliable()||n)&&"border-box"===w.css(e,"boxSizing",!1,r),i=o,a=e$(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eV.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!g.boxSizingReliable()&&o||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!g.reliableTrDimensions()&&T(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===w.css(e,"display",!1,r))&&// Make sure the element is visible & connected
e.getClientRects().length&&(o="border-box"===w.css(e,"boxSizing",!1,r),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(i=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e2(e,t,n||(o?"border":"content"),i,r,a)+"px"}function e4(e,t,n,r,o){return new e4.prototype.init(e,t,n,r,o)}w.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=e$(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,i,a,s=et(t),u=eJ.test(t),l=e.style;// Check if we're setting a value
if(u||(t=eY(s)),// Gets hook for the prefixed version, then unprefixed version
a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(o=a.get(e,!1,r))?o:l[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"===(i=void 0===n?"undefined":f(n))&&(o=ec.exec(n))&&o[1]&&(n=ev(e,t,o),// Fixes bug trac-9237
i="number"),null!=n&&n==n&&("number"!==i||u||(n+=o&&o[3]||(w.cssNumber[s]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var o,i,a,s=et(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eJ.test(t)||(t=eY(s)),// Try prefixed name followed by the unprefixed name
(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=e$(e,t,r)),"normal"===o&&t in e0&&(o=e0[t]),""===n||n)?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o)}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eK.test(w.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e3(e,t,r):eI(e,eZ,function(){return e3(e,t,r)})},set:function(e,n,r){var o,i=eM(e),// to avoid forcing a reflow.
a=!g.scrollboxSize()&&"absolute"===i.position,s=(a||r)&&"border-box"===w.css(e,"boxSizing",!1,i),u=r?e2(e,t,r,s,i):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-e2(e,t,"border",!1,i)-.5)),u&&(o=ec.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),e1(e,n,u)}}}),w.cssHooks.marginLeft=ez(g.reliableMarginLeft,function(e,t){if(t)return(parseFloat(e$(e,"marginLeft"))||e.getBoundingClientRect().left-eI(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+ed[r]+t]=i[r]||i[r-2]||i[0];return o}},"margin"!==e&&(w.cssHooks[e+t].set=e1)}),w.fn.extend({css:function(e,t){return Y(this,function(e,t,n){var r,o,i={},a=0;if(Array.isArray(t)){for(r=eM(e),o=t.length;a<o;a++)i[t[a]]=w.css(e,t[a],!1,r);return i}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}}),w.Tween=e4,e4.prototype={constructor:e4,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(w.cssNumber[n]?"":"px")},cur:function(){var e=e4.propHooks[this.prop];return e&&e.get?e.get(this):e4.propHooks._default.get(this)},run:function(e){var t,n=e4.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e4.propHooks._default.set(this),this}},e4.prototype.init.prototype=e4.prototype,e4.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
w.fx.step[e.prop]?w.fx.step[e.prop](e):1===e.elem.nodeType&&(w.cssHooks[e.prop]||null!=e.elem.style[eY(e.prop)])?w.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e4.propHooks.scrollTop=e4.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=e4.prototype.init,// Back compat <1.8 extension point
w.fx.step={};var e5,e6,e9,e7,e8=/^(?:toggle|show|hide)$/,te=/queueHooks$/;// Animations created synchronously will run synchronously
function tt(){return e.setTimeout(function(){e9=void 0}),e9=Date.now()}// Generate parameters to create a standard animation
function tn(e,t){var n,r=0,o={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)o["margin"+(n=ed[r])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function tr(e,t,n){for(var r,o=(to.tweeners[t]||[]).concat(to.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function to(e,t,n){var r,o,i=0,a=to.prefilters.length,s=w.Deferred().always(function(){// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(o)return!1;for(var t=e9||tt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),i=0,a=l.tweens.length;i<a;i++)l.tweens[i].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[l]),!1))},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:e9||tt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?l.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,o,i,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(o=t[r=et(n)],Array.isArray(i=e[n])&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(a=w.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in i=a.expand(i),delete e[r],i)(n in e)||(e[n]=i[n],t[n]=o);else t[r]=o}(c,l.opts.specialEasing);i<a;i++)if(r=to.prefilters[i].call(l,e,c,l.opts))return v(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,tr,l),v(l.opts.start)&&l.opts.start.call(e,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(to,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ev(n.elem,e,ec.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(I);for(var n,r=0,o=e.length;r<o;r++)n=e[r],to.tweeners[n]=to.tweeners[n]||[],to.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,o,i,a,s,u,l,c,d="width"in t||"height"in t,f=this,p={},h=e.style,g=e.nodeType&&eg(e),v=eo.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){// Ensure the complete handler is called before this completes
f.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})})),t)if(o=t[r],e8.test(o)){if(delete t[r],i=i||"toggle"===o,o===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!v||void 0===v[r])continue;g=!0}p[r]=v&&v[r]||w.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(u=!w.isEmptyObject(t))&&w.isEmptyObject(p)))for(r in d&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(l=v&&v.display)&&(l=eo.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(// Get nonempty value(s) by temporarily forcing visibility
ey([e],!0),l=e.style.display||l,c=w.css(e,"display"),ey([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(f.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,p)u||(v?"hidden"in v&&(g=v.hidden):v=eo.access(e,"fxshow",{display:l}),i&&(v.hidden=!g),g&&ey([e],!0),/* eslint-disable no-loop-func */f.done(function(){for(r in g||ey([e]),eo.remove(e,"fxshow"),p)w.style(e,r,p[r])})),// Per-property setup
u=tr(g?v[r]:0,r,f),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?to.prefilters.unshift(e):to.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(eg).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=w.isEmptyObject(e),i=w.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=to(this,w.extend({},e),i);// Empty animations, or finishing resolves immediately
(o||eo.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=w.timers,a=eo.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&te.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem===this&&(null==e||i[o].queue===e)&&(i[o].anim.stop(n),t=!1,i.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=eo.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=w.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
w.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tn(t,!0),e,r,o)}}),// Generate shortcuts for custom animations
w.each({slideDown:tn("show"),slideUp:tn("hide"),slideToggle:tn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(e9=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),e9=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){e7||(e7=!0,function t(){e7&&(!1===y.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,w.fx.interval),w.fx.tick())}())},w.fx.stop=function(){e7=null},w.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
w.fn.delay=function(t,n){return t=w.fx&&w.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var o=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(o)}})},ti=y.createElement("input"),ta=y.createElement("select").appendChild(y.createElement("option")),ti.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
g.checkOn=""!==ti.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
g.optSelected=ta.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(ti=y.createElement("input")).value="t",ti.type="radio",g.radioValue="t"===ti.value;var ti,ta,ts,tu=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return Y(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return w.prop(e,t,n);if(1===i&&w.isXMLDoc(e)||(o=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?ts:void 0)),void 0!==n){if(null===n){w.removeAttr(e,t);return}return o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return o&&"get"in o&&null!==(r=o.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&T(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(I);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ts={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=tu[t]||w.find.attr;tu[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
i=tu[a],tu[a]=o,o=null!=n(e,t,r)?a:null,tu[a]=i),o}});var tl=/^(?:input|select|textarea|button)$/i,tc=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function td(e){return(e.match(I)||[]).join(" ")}function tf(e){return e.getAttribute&&e.getAttribute("class")||""}function tp(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}w.fn.extend({prop:function(e,t){return Y(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)return(1===i&&w.isXMLDoc(e)||(// Fix name and attach hooks
t=w.propFix[t]||t,o=w.propHooks[t]),void 0!==n)?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):tl.test(e.nodeName)||tc.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(w.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this}),w.fn.extend({addClass:function(e){var t,n,r,o,i,a;return v(e)?this.each(function(t){w(this).addClass(e.call(this,t,tf(this)))}):(t=tp(e)).length?this.each(function(){if(r=tf(this),n=1===this.nodeType&&" "+td(r)+" "){for(i=0;i<t.length;i++)o=t[i],0>n.indexOf(" "+o+" ")&&(n+=o+" ");r!==// Only assign if different to avoid unneeded rendering.
(a=td(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,o,i,a;return v(e)?this.each(function(t){w(this).removeClass(e.call(this,t,tf(this)))}):arguments.length?(t=tp(e)).length?this.each(function(){if(r=tf(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+td(r)+" "){for(i=0;i<t.length;i++)// Remove *all* instances
for(o=t[i];n.indexOf(" "+o+" ")>-1;)n=n.replace(" "+o+" "," ");r!==// Only assign if different to avoid unneeded rendering.
(a=td(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,o,i,a=void 0===e?"undefined":f(e),s="string"===a||Array.isArray(e);return v(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,tf(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=tp(e),this.each(function(){if(s)for(o=0,// Toggle individual class names
i=w(this);o<n.length;o++)r=n[o],i.hasClass(r)?i.removeClass(r):i.addClass(r);else(void 0===e||"boolean"===a)&&((r=tf(this))&&eo.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":eo.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+td(tf(n))+" ").indexOf(t)>-1)return!0;return!1}});var th=/\r/g;w.fn.extend({val:function(e){var t,n,r,o=this[0];return arguments.length?(r=v(e),this.each(function(n){var o;1!==this.nodeType||(null==(o=r?e.call(this,n,w(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=w.map(o,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=w.valHooks[o.type]||w.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(th,""):null==n?"":n:void 0}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
td(w.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?i+1:o.length;// Loop through all the selected options
for(r=i<0?u:a?i:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=o[r]).selected||r===i)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!T(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=w(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=w.makeArray(t),a=o.length;a--;)/* eslint-disable no-cond-assign */((r=o[a]).selected=w.inArray(w.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),// Radios and checkboxes getter/setter
w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},g.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var tg=e.location,tv={guid:Date.now()},tm=/\?/;// Cross-browser xml parsing
w.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&w.error("Invalid XML: "+(r?w.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var ty=/^(?:focusinfocus|focusoutblur)$/,tb=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,r,o){var i,a,s,u,l,c,f,p,h=[r||y],g=d.call(t,"type")?t.type:t,b=d.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=p=s=r=r||y,!(3===r.nodeType||8===r.nodeType||ty.test(g+w.event.triggered))&&(g.indexOf(".")>-1&&(g=// Namespaced trigger; create a regexp to match event type in handle()
(b=g.split(".")).shift(),b.sort()),l=0>g.indexOf(":")&&"on"+g,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[w.expando]?t:new w.Event(g,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:w.makeArray(n,[t]),// Allow special events to draw outside the lines
f=w.event.special[g]||{},o||!f.trigger||!1!==f.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!o&&!f.noBubble&&!m(r)){for(u=f.delegateType||g,ty.test(u+g)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||y)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
i=0;(a=h[i++])&&!t.isPropagationStopped();)p=a,t.type=i>1?u:f.bindType||g,// jQuery handler
(c=(eo.get(a,"events")||Object.create(null))[t.type]&&eo.get(a,"handle"))&&c.apply(a,n),// Native handler
(c=l&&a[l])&&c.apply&&en(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=g,!o&&!t.isDefaultPrevented()&&(!f._default||!1===f._default.apply(h.pop(),n))&&en(r)&&l&&v(r[g])&&!m(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=r[l])&&(r[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
w.event.triggered=g,t.isPropagationStopped()&&p.addEventListener(g,tb),r[g](),t.isPropagationStopped()&&p.removeEventListener(g,tb),w.event.triggered=void 0,s&&(r[l]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}});var tx=/\[\]$/,tE=/\r?\n/g,tC=/^(?:submit|button|image|reset|file)$/i,tS=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
w.param=function(e,t){var n,r=[],o=function(e,t){// If value is a function, invoke it and use its return value
var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){o(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,o){var i;if(Array.isArray(n))w.each(n,function(n,i){r||tx.test(t)?o(t,i):e(t+"["+("object"==typeof i&&null!=i?n:"")+"]",i,r,o)});else if(r||"object"!==E(n))o(t,n);else for(i in n)e(t+"["+i+"]",n[i],r,o)}(n,e[n],t,o);// Return the resulting serialization
return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!w(this).is(":disabled")&&tS.test(this.nodeName)&&!tC.test(e)&&(this.checked||!eb.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(tE,"\r\n")}}):{name:t.name,value:n.replace(tE,"\r\n")}}).get()}});var tw=/%20/g,tH=/#.*$/,tT=/([?&])_=[^&]*/,tk=/^(.*?):[ \t]*([^\r\n]*)$/mg,tR=/^(?:GET|HEAD)$/,tj=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tA={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tN={},tq="*/".concat("*"),tL=y.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function t_(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(I)||[];if(v(n))// For each dataType in the dataTypeExpression
for(;r=i[o++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tP(e,t,n,r){var o={},i=e===tN;function a(s){var u;return o[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||i||o[l]?i?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!o["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tD(e,t){var n,r,o=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}tL.href=tg.href,w.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:tg.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tg.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tq,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":w.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tD(tD(e,w.ajaxSettings),t):tD(w.ajaxSettings,e)},ajaxPrefilter:t_(tA),ajaxTransport:t_(tN),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,o,i,a,s,u,l,c,d,f,p=w.ajaxSetup({},n),h=p.context||p,g=p.context&&(h.nodeType||h.jquery)?w(h):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),b=p.statusCode||{},x={},E={},C="canceled",S={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=tk.exec(i);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return l?i:null},// Caches the header
setRequestHeader:function(e,t){return null==l&&(x[e=E[e.toLowerCase()]=E[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(l)S.always(e[S.status]);else for(t in e)b[t]=[b[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||C;return r&&r.abort(t),H(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
v.promise(S),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
p.url=((t||p.url||tg.href)+"").replace(tj,tg.protocol+"//"),// Alias method option to type as per ticket trac-12004
p.type=n.method||n.type||p.method||p.type,// Extract dataTypes list
p.dataTypes=(p.dataType||"*").toLowerCase().match(I)||[""],null==p.crossDomain){u=y.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{u.href=p.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
u.href=u.href,p.crossDomain=tL.protocol+"//"+tL.host!=u.protocol+"//"+u.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
p.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=w.param(p.data,p.traditional)),// Apply prefilters
tP(tA,p,n,S),l)return S;// Check for headers option
for(d in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=w.event&&p.global)&&0==w.active++&&w.event.trigger("ajaxStart"),// Uppercase the type
p.type=p.type.toUpperCase(),// Determine if request has content
p.hasContent=!tR.test(p.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=p.url.replace(tH,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(tw,"+")):(// Remember the hash so we can put it back
f=p.url.slice(o.length),p.data&&(p.processData||"string"==typeof p.data)&&(o+=(tm.test(o)?"&":"?")+p.data,// trac-9682: remove data so that it's not used in an eventual retry
delete p.data),!1===p.cache&&(o=o.replace(tT,"$1"),f=(tm.test(o)?"&":"?")+"_="+tv.guid+++f),// Put hash and anti-cache on the URL that will be requested (gh-1732)
p.url=o+f),p.ifModified&&(w.lastModified[o]&&S.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&S.setRequestHeader("If-None-Match",w.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&S.setRequestHeader("Content-Type",p.contentType),// Set the Accepts header for the server, depending on the dataType
S.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+tq+"; q=0.01":""):p.accepts["*"]),p.headers)S.setRequestHeader(d,p.headers[d]);// Allow custom headers/mimetypes and early abort
if(p.beforeSend&&(!1===p.beforeSend.call(h,S,p)||l))return S.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
C="abort",// Install callbacks on deferreds
m.add(p.complete),S.done(p.success),S.fail(p.error),// Get transport
r=tP(tN,p,n,S)){// If request was aborted inside ajaxSend, stop there
if(S.readyState=1,c&&g.trigger("ajaxSend",[S,p]),l)return S;p.async&&p.timeout>0&&(s=e.setTimeout(function(){S.abort("timeout")},p.timeout));try{l=!1,r.send(x,H)}catch(e){// Rethrow post-completion exceptions
if(l)throw e;// Propagate others as results
H(-1,e)}}else H(-1,"No Transport");// Callback for when everything is done
function H(t,n,a,u){var d,f,y,x,E,C=n;// Ignore repeat invocations
l||(l=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
i=u||"",// Set readyState
S.readyState=t>0?4:0,// Determine if successful
d=t>=200&&t<300||304===t,a&&(x=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,o,i,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r){for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}}// Check to see if we have a response for the expected dataType
if(u[0]in n)i=u[0];else{// Try convertible dataTypes
for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){i=o;break}a||(a=o)}// Or just use first one
i=i||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(i)return i!==u[0]&&u.unshift(i),n[i]}(p,S,a)),!d&&w.inArray("script",p.dataTypes)>-1&&0>w.inArray("json",p.dataTypes)&&(p.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
x=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,r){var o,i,a,s,u,l={},c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=i,i=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===i)i=u;else if("*"!==u&&u!==i){// If none found, seek a pair
if(!// Seek a direct converter
(a=l[u+" "+i]||l["* "+i])){for(o in l)if(// If conv2 outputs current
(s=o.split(" "))[1]===i&&// If prev can be converted to accepted input
(a=l[u+" "+s[0]]||l["* "+s[0]])){// Condense equivalence converters
!0===a?a=l[o]:!0!==l[o]&&(i=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+i}}}}}return{state:"success",data:t}}(p,x,S,d),d?(p.ifModified&&((E=S.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=E),(E=S.getResponseHeader("etag"))&&(w.etag[o]=E)),204===t||"HEAD"===p.type?C="nocontent":304===t?C="notmodified":(C=x.state,f=x.data,d=!(y=x.error))):(// Extract error from statusText and normalize for non-aborts
y=C,(t||!C)&&(C="error",t<0&&(t=0))),// Set data for the fake xhr object
S.status=t,S.statusText=(n||C)+"",d?v.resolveWith(h,[f,C,S]):v.rejectWith(h,[S,C,y]),// Status-dependent callbacks
S.statusCode(b),b=void 0,c&&g.trigger(d?"ajaxSuccess":"ajaxError",[S,p,d?f:y]),// Complete
m.fireWith(h,[S,C]),!c||(g.trigger("ajaxComplete",[S,p]),--w.active||w.event.trigger("ajaxStop")))}return S},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,o){// The url can be an options object (which then must have .url)
return v(n)&&(o=o||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:o,data:n,success:r},w.isPlainObject(e)&&e))}}),w.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),w._evalUrl=function(e,t,n){return w.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){w.globalEval(e,t,n)}})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return v(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tF={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tB=w.ajaxSettings.xhr();g.cors=!!tB&&"withCredentials"in tB,g.ajax=tB=!!tB,w.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(g.cors||tB&&!t.crossDomain)return{send:function(o,i){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)s.setRequestHeader(a,o[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(tF[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){// Check readyState before timeout as it changes
4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&r()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
s.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),// Handle cache's special case and crossDomain
w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
w.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,o){t=w("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tU=[],tO=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tU.pop()||w.expando+"_"+tv.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
w.ajaxPrefilter("json jsonp",function(t,n,r){var o,i,a,s=!1!==t.jsonp&&(tO.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tO.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
o=t.jsonpCallback=v(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tO,"$1"+o):!1!==t.jsonp&&(t.url+=(tm.test(t.url)?"&":"?")+t.jsonp+"="+o),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||w.error(o+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
i=e[o],e[o]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===i?w(e).removeProp(o):e[o]=i,t[o]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tU.push(o)),a&&v(i)&&i(a[0]),a=i=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
g.createHTMLDocument=((n=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
w.parseHTML=function(e,t,n){var r,o,i;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)):t=y),o=F.exec(e),i=!n&&[],o)?[t.createElement(o[1])]:(o=eT([e],t,i),i&&i.length&&w(i).remove(),w.merge([],o.childNodes))},/**
 * Load a url into a page
 */w.fn.load=function(e,t,n){var r,o,i,a=this,s=e.indexOf(" ");return s>-1&&(r=td(e.slice(s)),e=e.slice(0,s)),v(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&w.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
i=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
w("<div>").append(w.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,o,i,a,s,u,l=w.css(e,"position"),c=w(e),d={};"static"===l&&(e.style.position="relative"),s=c.offset(),i=w.css(e,"top"),u=w.css(e,"left"),("absolute"===l||"fixed"===l)&&(i+u).indexOf("auto")>-1?(a=(r=c.position()).top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(u)||0),v(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+o),"using"in t?t.using.call(e,d):c.css(d)}},w.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
o=w(e).offset(),o.top+=w.css(e,"borderTopWidth",!0),o.left+=w.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-o.top-w.css(r,"marginTop",!0),left:t.left-o.left-w.css(r,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===w.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return Y(this,function(e,r,o){// Coalesce documents and windows
var i;if(m(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o)return i?i[t]:e[r];i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
w.each(["top","left"],function(e,t){w.cssHooks[t]=ez(g.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=e$(e,t),eV.test(n)?w(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
w.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===i?"margin":"border");return Y(this,function(t,n,o){var i;return m(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?w.css(t,n,s):w.style(t,n,o,s)},t,a?o:void 0,a)}})}),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tV=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
w.proxy=function(e,t){var n,r,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return(// Simulated bind
r=i.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||w.guid++,o)},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=T,w.isFunction=v,w.isWindow=m,w.camelCase=et,w.type=E,w.now=Date.now,w.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=w.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},w.trim=function(e){return null==e?"":(e+"").replace(tV,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var tJ=e.jQuery,tM=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=tM),t&&e.jQuery===w&&(e.jQuery=tJ),w},void 0===t&&(e.jQuery=e.$=w),w},"object"==typeof d?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
d=t.document?n(t,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return n(e)}:n(t),/*@__PURE__*/e(d)(document).ready(function(){function t(e,t){var n=e.find(".top").clone(),r=e.find(".bottom").clone();n.addClass("new"),r.addClass("new"),r.find(".text").text(t),e.find(".top").after(n),e.find(".top.new").append(r),e.addClass("flipping"),e.find(".top:not(.new)").find(".text").text(t),setTimeout(function(){e.find(".bottom:not(.new)").find(".text").text(t)},500)}var n=/*@__PURE__*/e(d)(".clock .flipper:nth-child(1) div:not(.new) .text"),r=/*@__PURE__*/e(d)(".clock .flipper:nth-child(2) div:not(.new) .text"),o=/*@__PURE__*/e(d)(".clock .flipper:nth-child(3) div:not(.new) .text"),i=/*@__PURE__*/e(d)(".clock .flipper:nth-child(4) div:not(.new) .text");// Додай це для днів
!function a(){/*@__PURE__*/e(d)(".flipper").removeClass("flipping"),/*@__PURE__*/e(d)(".flipper .new").remove();var s=new Date,u=s.getSeconds().toString().padStart(2,"0"),l=s.getMinutes().toString().padStart(2,"0"),c=s.getHours();c>12&&(c-=12),0==c&&(c=12),c=c.toString().padStart(2,"0");var f=s.getDate().toString().padStart(2,"0");/*@__PURE__*/e(d)(r[0]).text()!==c&&t(/*@__PURE__*/e(d)(r[0]).closest(".flipper"),c),/*@__PURE__*/e(d)(o[0]).text()!==l&&t(/*@__PURE__*/e(d)(o[0]).closest(".flipper"),l),/*@__PURE__*/e(d)(i[0]).text()!==u&&t(/*@__PURE__*/e(d)(i[0]).closest(".flipper"),u),/*@__PURE__*/e(d)(n[0]).text()!==f&&t(/*@__PURE__*/e(d)(n[0]).closest(".flipper"),f),setTimeout(function(){a()},500)}()});var p=document.querySelectorAll(".slider-box .slider-line img"),h=document.querySelector(".slider-line"),g=0;function v(){console.log("resize"),a=document.querySelector(".slider-box").offsetWidth,h.style.width=a*p.length+"px",p.forEach(function(e){e.style.width=a+"px";// item.style.height = 'auto';
}),m()}function m(){h.style.transform="translate(-"+g*a+"px)"}window.addEventListener("resize",v),v(),document.querySelector(".slider-next").addEventListener("click",function(){++g>=p.length&&(g=0),m()}),document.querySelector(".slider-prev").addEventListener("click",function(){--g<0&&(g=p.length-1),m()});// const submit = document.querySelector('.submit');
// const form = document.querySelector('.form');
// const okMessage = document.querySelector('.ok_message');
// const close = document.querySelector('.btn-close')
// const order = document.querySelector('.order-btn');
// order.addEventListener('click', function () {
//   form.classList.add('active');
// });
// submit.addEventListener('click', function() {
//   submit.parent().parent().hide(300);
//   okMessage.classList.add("active");
// });
// close.addEventListener('click', function() {
//   console.log('poc')
//   form.classList.remove('active');
// });
// okMessage.addEventListener('click', function() {
//   okMessage.classList.remove("active");
// //   form.classList.remove("active").show();
// });
var y={};y=c("aNJCr").getBundleURL("EVgbq")+"1desk@1x.5703d9b4.jpg";var b={};b=c("aNJCr").getBundleURL("EVgbq")+"1tab@1x.673653b2.jpg";var x={};x=c("aNJCr").getBundleURL("EVgbq")+"1mob@1x.69785b6f.jpg";var E={};E=c("aNJCr").getBundleURL("EVgbq")+"2desk@1x.96833ea4.jpg";var C={};C=c("aNJCr").getBundleURL("EVgbq")+"2tab@1x.fe3ecb27.jpg";var S={};S=c("aNJCr").getBundleURL("EVgbq")+"2mob@1x.ede91e6f.jpg";var w={};w=c("aNJCr").getBundleURL("EVgbq")+"3desk@1x.6d1f071d.jpg";var H={};H=c("aNJCr").getBundleURL("EVgbq")+"3tab@1x.9ee26a87.jpg";var T={};T=c("aNJCr").getBundleURL("EVgbq")+"3mob@1x.6bd378f8.jpg";var k={};k=c("aNJCr").getBundleURL("EVgbq")+"4desk@1x.345a1318.jpg";var R={};R=c("aNJCr").getBundleURL("EVgbq")+"4tab@1x.cf493627.jpg";var j={};j=c("aNJCr").getBundleURL("EVgbq")+"4mob@1x.2afe27c2.jpg";var A={};A=c("aNJCr").getBundleURL("EVgbq")+"5desk@1x.6181253e.jpg";var N={};N=c("aNJCr").getBundleURL("EVgbq")+"5tab@1x.d3bf8586.jpg";var q={};q=c("aNJCr").getBundleURL("EVgbq")+"5mob@1x.33de1c8f.jpg";var L={};L=c("aNJCr").getBundleURL("EVgbq")+"6desk@1x.22c4d2ad.jpg";var _={};_=c("aNJCr").getBundleURL("EVgbq")+"6tab@1x.b1cfdde8.jpg";var P={};P=c("aNJCr").getBundleURL("EVgbq")+"6mob@1x.4ca7edf6.jpg";var D={};D=c("aNJCr").getBundleURL("EVgbq")+"7desk@1x.bd263f1b.jpg";var F={};F=c("aNJCr").getBundleURL("EVgbq")+"7tab@1x.3cc9ea70.jpg";var B={};B=c("aNJCr").getBundleURL("EVgbq")+"7mob@1x.f672273d.jpg";var U={};U=c("aNJCr").getBundleURL("EVgbq")+"8desk@1x.0fe487a9.jpg";var O={};O=c("aNJCr").getBundleURL("EVgbq")+"8tab@1x.fa92e96a.jpg";var V={};V=c("aNJCr").getBundleURL("EVgbq")+"8mob@1x.ada5ba30.jpg";var J={};J=c("aNJCr").getBundleURL("EVgbq")+"9desk@1x.3627d42f.jpg";var M={};M=c("aNJCr").getBundleURL("EVgbq")+"9tab@1x.78c3aa74.jpg";var I={};I=c("aNJCr").getBundleURL("EVgbq")+"9mob@1x.9c41dce6.jpg";var W={};W=c("aNJCr").getBundleURL("EVgbq")+"10desk@1x.bf93d187.jpg";var $={};$=c("aNJCr").getBundleURL("EVgbq")+"10tab@1x.bc96d452.jpg";var z={};z=c("aNJCr").getBundleURL("EVgbq")+"10mob@1x.5c2e3975.jpg";var X={};X=c("aNJCr").getBundleURL("EVgbq")+"11desk@1x.016fce68.jpg";var Q={};Q=c("aNJCr").getBundleURL("EVgbq")+"11tab@1x.cedb6327.jpg";var G={};G=c("aNJCr").getBundleURL("EVgbq")+"11mob@1x.72753896.jpg";var Y={};Y=c("aNJCr").getBundleURL("EVgbq")+"12desk@1x.ab64a7f3.jpg";var K={};K=c("aNJCr").getBundleURL("EVgbq")+"12tab@1x.a6cc30bb.jpg",c("aNJCr").getBundleURL("EVgbq");var Z={};Z=c("aNJCr").getBundleURL("EVgbq")+"13desk@1x.dbe006b3.jpg";var ee={};ee=c("aNJCr").getBundleURL("EVgbq")+"13tab@1x.409b8dde.jpg";var et={};et=c("aNJCr").getBundleURL("EVgbq")+"13mob@1x.d7b3fe15.jpg";var en={};en=c("aNJCr").getBundleURL("EVgbq")+"1desk@2x.5703d9b4.jpg";var er={};er=c("aNJCr").getBundleURL("EVgbq")+"1tab@2x.673653b2.jpg";var eo={};eo=c("aNJCr").getBundleURL("EVgbq")+"1mob@2x.69785b6f.jpg";var ei={};ei=c("aNJCr").getBundleURL("EVgbq")+"2desk@2x.8c19d163.jpg";var ea={};ea=c("aNJCr").getBundleURL("EVgbq")+"2tab@2x.18bde6d7.jpg";var es={};es=c("aNJCr").getBundleURL("EVgbq")+"2mob@2x.6f894f8f.jpg";var eu={};eu=c("aNJCr").getBundleURL("EVgbq")+"3desk@2x.c58e2d86.jpg";var el={};el=c("aNJCr").getBundleURL("EVgbq")+"3tab@2x.5b680e31.jpg";var ec={};ec=c("aNJCr").getBundleURL("EVgbq")+"3mob@2x.f34a86fa.jpg";var ed={};ed=c("aNJCr").getBundleURL("EVgbq")+"4desk@2x.967ef7e1.jpg";var ef={};ef=c("aNJCr").getBundleURL("EVgbq")+"4tab@2x.a2fd7cc6.jpg";var ep={};ep=c("aNJCr").getBundleURL("EVgbq")+"4mob@2x.eaaaa84d.jpg";var eh={};eh=c("aNJCr").getBundleURL("EVgbq")+"5desk@2x.d42ed89e.jpg";var eg={};eg=c("aNJCr").getBundleURL("EVgbq")+"5tab@2x.efacb099.jpg";var ev={};ev=c("aNJCr").getBundleURL("EVgbq")+"5mob@2x.e176f762.jpg";var em={};em=c("aNJCr").getBundleURL("EVgbq")+"6desk@2x.fefc695a.jpg";var ey={};ey=c("aNJCr").getBundleURL("EVgbq")+"6tab@2x.51635a43.jpg";var eb={};eb=c("aNJCr").getBundleURL("EVgbq")+"6mob@2x.5df99d17.jpg";var ex={};ex=c("aNJCr").getBundleURL("EVgbq")+"7desk@2x.e64cb8f6.jpg";var eE={};eE=c("aNJCr").getBundleURL("EVgbq")+"7tab@2x.84e640e3.jpg";var eC={};eC=c("aNJCr").getBundleURL("EVgbq")+"7mob@2x.90eaadbf.jpg";var eS={};eS=c("aNJCr").getBundleURL("EVgbq")+"8desk@2x.af305e8d.jpg";var ew={};ew=c("aNJCr").getBundleURL("EVgbq")+"8tab@2x.7a0607cf.jpg";var eH={};eH=c("aNJCr").getBundleURL("EVgbq")+"8mob@2x.ac4ff740.jpg";var eT={};eT=c("aNJCr").getBundleURL("EVgbq")+"9desk@2x.600598e0.jpg";var ek={};ek=c("aNJCr").getBundleURL("EVgbq")+"9tab@2x.d69c0800.jpg";var eR={};eR=c("aNJCr").getBundleURL("EVgbq")+"9mob@2x.5198122d.jpg";var ej={};ej=c("aNJCr").getBundleURL("EVgbq")+"10desk@2x.6e9ab827.jpg";var eA={};eA=c("aNJCr").getBundleURL("EVgbq")+"10tab@2x.00d99014.jpg";var eN={};eN=c("aNJCr").getBundleURL("EVgbq")+"10mob@2x.e4aef60c.jpg";var eq={};eq=c("aNJCr").getBundleURL("EVgbq")+"11desk@2x.be416a78.jpg";var eL={};eL=c("aNJCr").getBundleURL("EVgbq")+"11tab@2x.ac7bf444.jpg";var e_={};e_=c("aNJCr").getBundleURL("EVgbq")+"11mob@2x.89239162.jpg";var eP={};eP=c("aNJCr").getBundleURL("EVgbq")+"12desk@2x.c75ee5fa.jpg";var eD={};eD=c("aNJCr").getBundleURL("EVgbq")+"12tab@2x.b1dde642.jpg";var eF={};eF=c("aNJCr").getBundleURL("EVgbq")+"12mob@2x.c4f0f812.jpg";var eB={};eB=c("aNJCr").getBundleURL("EVgbq")+"13desk@2x.60df23ce.jpg";var eU={};eU=c("aNJCr").getBundleURL("EVgbq")+"13tab@2x.fe1c9190.jpg";var eO={};eO=c("aNJCr").getBundleURL("EVgbq")+"13mob@2x.e9966fb3.jpg";var eV=[{id:1,deskPhoto:/*@__PURE__*/e(y),tabPhoto:/*@__PURE__*/e(b),mobPhoto:/*@__PURE__*/e(x),deskPhoto2x:/*@__PURE__*/e(en),tabPhoto2x:/*@__PURE__*/e(er),mobPhoto2x:/*@__PURE__*/e(eo),// photo: desk1x1,
// photo2x: g1x2,
title:"Misha",alt:"tort dlya Mishy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:2,deskPhoto:/*@__PURE__*/e(E),tabPhoto:/*@__PURE__*/e(C),mobPhoto:/*@__PURE__*/e(S),deskPhoto2x:/*@__PURE__*/e(ei),tabPhoto2x:/*@__PURE__*/e(ea),mobPhoto2x:/*@__PURE__*/e(es),// photo: g2,
title:"",alt:"",description:"July 2023"},{id:3,deskPhoto:/*@__PURE__*/e(w),tabPhoto:/*@__PURE__*/e(H),mobPhoto:/*@__PURE__*/e(T),deskPhoto2x:/*@__PURE__*/e(eu),tabPhoto2x:/*@__PURE__*/e(el),mobPhoto2x:/*@__PURE__*/e(ec),// photo: g3,
title:"",alt:"",description:"July 2023"},{id:4,deskPhoto:/*@__PURE__*/e(k),tabPhoto:/*@__PURE__*/e(R),mobPhoto:/*@__PURE__*/e(j),deskPhoto2x:/*@__PURE__*/e(ed),tabPhoto2x:/*@__PURE__*/e(ef),mobPhoto2x:/*@__PURE__*/e(ep),// photo: g4,
title:"",alt:"",description:"July 2023"},{id:5,deskPhoto:/*@__PURE__*/e(A),tabPhoto:/*@__PURE__*/e(N),mobPhoto:/*@__PURE__*/e(q),deskPhoto2x:/*@__PURE__*/e(eh),tabPhoto2x:/*@__PURE__*/e(eg),mobPhoto2x:/*@__PURE__*/e(ev),// photo: g5,
title:"",alt:"",description:"July 2023"},{id:6,deskPhoto:/*@__PURE__*/e(L),tabPhoto:/*@__PURE__*/e(_),mobPhoto:/*@__PURE__*/e(P),deskPhoto2x:/*@__PURE__*/e(em),tabPhoto2x:/*@__PURE__*/e(ey),mobPhoto2x:/*@__PURE__*/e(eb),// photo: g6,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:7,deskPhoto:/*@__PURE__*/e(D),tabPhoto:/*@__PURE__*/e(F),mobPhoto:/*@__PURE__*/e(B),deskPhoto2x:/*@__PURE__*/e(ex),tabPhoto2x:/*@__PURE__*/e(eE),mobPhoto2x:/*@__PURE__*/e(eC),// photo: g7,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:8,deskPhoto:/*@__PURE__*/e(U),tabPhoto:/*@__PURE__*/e(O),mobPhoto:/*@__PURE__*/e(V),deskPhoto2x:/*@__PURE__*/e(eS),tabPhoto2x:/*@__PURE__*/e(ew),mobPhoto2x:/*@__PURE__*/e(eH),// photo: g8,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:9,deskPhoto:/*@__PURE__*/e(J),tabPhoto:/*@__PURE__*/e(M),mobPhoto:/*@__PURE__*/e(I),deskPhoto2x:/*@__PURE__*/e(eT),tabPhoto2x:/*@__PURE__*/e(ek),mobPhoto2x:/*@__PURE__*/e(eR),// photo: g9,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:10,deskPhoto:/*@__PURE__*/e(W),tabPhoto:/*@__PURE__*/e($),mobPhoto:/*@__PURE__*/e(z),deskPhoto2x:/*@__PURE__*/e(ej),tabPhoto2x:/*@__PURE__*/e(eA),mobPhoto2x:/*@__PURE__*/e(eN),// photo: g10,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:11,deskPhoto:/*@__PURE__*/e(X),tabPhoto:/*@__PURE__*/e(Q),mobPhoto:/*@__PURE__*/e(G),deskPhoto2x:/*@__PURE__*/e(eq),tabPhoto2x:/*@__PURE__*/e(eL),mobPhoto2x:/*@__PURE__*/e(e_),// photo: g11,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:12,deskPhoto:/*@__PURE__*/e(Y),tabPhoto:/*@__PURE__*/e(K),mobPhoto:/*@__PURE__*/e(eF),deskPhoto2x:/*@__PURE__*/e(eP),tabPhoto2x:/*@__PURE__*/e(eD),mobPhoto2x:/*@__PURE__*/e(eF),// photo: g12,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:13,deskPhoto:/*@__PURE__*/e(Z),tabPhoto:/*@__PURE__*/e(ee),mobPhoto:/*@__PURE__*/e(et),deskPhoto2x:/*@__PURE__*/e(eB),tabPhoto2x:/*@__PURE__*/e(eU),mobPhoto2x:/*@__PURE__*/e(eO),// photo: g13,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"}],eJ={gallery:document.querySelector(".container__gallery")};function eM(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(e){n(e);return}s.done?t(u):Promise.resolve(u).then(r,o)}console.log(eV),r=eV.map(function(e){var t=e.id,n=e.deskPhoto,r=e.deskPhoto2x,o=e.tabPhoto,i=e.tabPhoto2x,a=e.mobPhoto,s=e.mobPhoto2x,u=e.alt,l=e.title,c=e.description;return'        \n            <li class="card" key='.concat(t,'>                \n                \n                    <div class="face face1">\n                        <div class="content">\n                            <picture>\n                                <source srcset="\n                                    ').concat(n," 1x, \n                                    ").concat(r,' 2x"\n                                    media="(min-width:1200px)"/>\n                                <source srcset="\n                                    ').concat(o," 1x, \n                                    ").concat(i,' 2x" \n                                    media="(min-width:768px)"/>\n                                <source srcset="\n                                    ').concat(a," 1x, \n                                    ").concat(s,' 2x" \n                                    media="(max-width:767px)"/>\n                                <img\n                                    src=').concat(n," \n                                    alt=").concat(u,' \n                                    width="250" \n                                    height="200" \n                                    loading="lazy"\n                                    sizes="226.8046875px"\n                                />\n                            </picture>\n                        </div>\n                    </div>\n                    <div class="face face2">\n                        <div class="content">\n                            <h3>').concat(l,"</h3>\n                            <p>").concat(c,"</p>\n                        </div>\n                    </div>\n                 \n            </li>        \n        ")}).join(""),eJ.gallery.insertAdjacentHTML("beforeend",r),"function"==typeof SuppressedError&&SuppressedError,document.getElementById("contactForm").addEventListener("submit",(o=function(e){var t,n,r,o;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,function(i){switch(i.label){case 0:e.preventDefault(),t=e.target,n=new FormData(t),r="https://cakes-backend.onrender.com",console.log(o={}),n.forEach(function(e,t){o[t]=e}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,fetch("".concat(r,"/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})];case 2:return i.sent().ok?alert("Заказ успішно надіслано!"):alert("Сталася помилка при надсиланні заказу."),[3,4];case 3:return console.error("Помилка:",i.sent()),alert("Сталася помилка при надсиланні заказу."),[3,4];case 4:return[2]}})},i=function(){var e=this,t=arguments;return new Promise(function(n,r){var i=o.apply(e,t);function a(e){eM(i,n,r,a,s,"next",e)}function s(e){eM(i,n,r,a,s,"throw",e)}a(void 0)})},function(e){return i.apply(this,arguments)})),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".about-item");console.log(e);var t=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")})},{threshold:.1});e.forEach(function(e){t.observe(e)})})}();//# sourceMappingURL=index.32bb34cd.js.map

//# sourceMappingURL=index.32bb34cd.js.map
