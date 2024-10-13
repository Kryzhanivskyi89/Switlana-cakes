let e;function t(e){return e&&e.__esModule?e.default:e}var n,r,o={};n="undefined"!=typeof window?window:o,r=function(e,t){var n,r=[],o=Object.getPrototypeOf,i=r.slice,a=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},s=r.push,l=r.indexOf,u={},c=u.toString,p=u.hasOwnProperty,d=p.toString,f=d.call(Object),h={},g=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},y=e.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,o,i=(n=n||y).createElement("script");if(i.text=e,t)for(r in v)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(o=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r,o);n.head.appendChild(i).parentNode.removeChild(i)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[c.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",j=/HTML$/i,S=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new S.fn.init(e,t)};function k(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!(g(e)||m(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function T(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}S.fn=S.prototype={// The current version of jQuery being used
jquery:w,constructor:S,// The default length of a jQuery object is 0
length:0,toArray:function(){return i.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?i.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=S.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return S.each(this,e)},map:function(e){return this.pushStack(S.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:r.sort,splice:r.splice},S.extend=S.fn.extend=function(){var e,t,n,r,o,i,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===l&&(a=this,s--);s<l;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(u&&r&&(S.isPlainObject(r)||(o=Array.isArray(r)))?(n=a[t],i=o&&!Array.isArray(n)?[]:o||S.isPlainObject(n)?n:{},o=!1,// Never move original objects, clone them
a[t]=S.extend(u,i,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},S.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===c.call(e)&&(!(t=o(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=p.call(t,"constructor")&&t.constructor)&&d.call(n)===f))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(k(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",r=0,o=e.nodeType;if(!o)for(;t=e[r++];)n+=S.text(t);return 1===o||11===o?e.textContent:9===o?e.documentElement.textContent:3===o||4===o?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(k(Object(e))?S.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!j.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},// arg is for internal usage only
map:function(e,t,n){var r,o,i=0,s=[];// Go through the array, translating each of the items to their new values
if(k(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&s.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&s.push(o);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var E=r.pop,C=r.sort,A=r.splice,H="[\\x20\\t\\r\\n\\f]",P=RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g");// Note: an element does not contain itself
S.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var L=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function R(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}S.escapeSelector=function(e){return(e+"").replace(L,R)},function(){var t,n,o,a,u,c,d,f,g,m,v=s,x=S.expando,b=0,w=0,j=ee(),k=ee(),L=ee(),R=ee(),D=function(e,t){return e===t&&(u=!0),0},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
q="(?:\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",_="\\["+H+"*("+q+")(?:"+H+// Operator (capture 2)
"*([*^$|!~]?=)"+H+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+H+"*\\]",F=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+_+")*)|.*)\\)|)",O=RegExp(H+"+","g"),M=RegExp("^"+H+"*,"+H+"*"),U=RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),$=RegExp(H+"|>"),I=new RegExp(F),W=RegExp("^"+q+"$"),B={ID:RegExp("^#("+q+")"),CLASS:RegExp("^\\.("+q+")"),TAG:RegExp("^("+q+"|[*])"),ATTR:RegExp("^"+_),PSEUDO:RegExp("^"+F),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:RegExp("^(?:"+N+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},z=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,V=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
J=RegExp("\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Y=function(){ea()},K=ec(function(e){return!0===e.disabled&&T(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{v.apply(r=i.call(y.childNodes),y.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
r[y.childNodes.length].nodeType}catch(e){v={apply:function(e,t){s.apply(e,i.call(t))},call:function(e){s.apply(e,i.call(arguments,1))}}}function Z(e,t,n,r){var o,i,a,s,l,u,p,d=t&&t.ownerDocument,m=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(ea(t),t=t||c,f)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==m&&(l=Q.exec(e))){// ID selector
if(o=l[1]){// Document context
if(9===m){if(!(a=t.getElementById(o)))return n;if(a.id===o)return v.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(d&&(a=d.getElementById(o))&&Z.contains(t,a)&&a.id===o)return v.call(n,a),n}else if(l[2])return v.apply(n,t.getElementsByTagName(e)),n;else if((o=l[3])&&t.getElementsByClassName)return v.apply(n,t.getElementsByClassName(o)),n}// Take advantage of querySelectorAll
if(!R[e+" "]&&(!g||!g.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(p=e,d=t,1===m&&($.test(e)||U.test(e))){for(// Expand context for sibling selectors
(d=V.test(e)&&ei(t.parentNode)||t)==t&&h.scope||((s=t.getAttribute("id"))?s=S.escapeSelector(s):t.setAttribute("id",s=x)),i=// Prefix every selector in the list
(u=el(e)).length;i--;)u[i]=(s?"#"+s:":scope")+" "+eu(u[i]);p=u.join(",")}try{return v.apply(n,d.querySelectorAll(p)),n}catch(t){R(e,!0)}finally{s===x&&t.removeAttribute("id")}}}// All others
return eh(e.replace(P,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];function t(r,o){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=o}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[x]=!0,e}/**
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
 */function ea(e){var t,r=e?e.ownerDocument||e:y;return r!=c&&9===r.nodeType&&r.documentElement&&(d=// Update global variables
(c=r).documentElement,f=!S.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
m=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,d.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
y!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",Y),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return d.appendChild(e).id=S.expando,!c.getElementsByName||!c.getElementsByName(S.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return m.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
h.scope=en(function(){return c.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
h.cssHas=en(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(J,G);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(J,G);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n,r,o,i=t.getElementById(e);if(i){if(// Verify the id attribute
(n=i.getAttributeNode("id"))&&n.value===e)return[i];for(// Fall back on getElementsByName
o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&f)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;d.appendChild(e).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+H+"*(?:value|"+N+")"),e.querySelectorAll("[id~="+x+"-]").length||g.push("~="),e.querySelectorAll("a#"+x+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+H+"*name"+H+"*="+H+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
D=function(e,t){// Flag for duplicate removal
if(e===t)return u=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===c||e.ownerDocument==y&&Z.contains(y,e)?-1:t===c||t.ownerDocument==y&&Z.contains(y,t)?1:a?l.call(a,e)-l.call(a,t):0:4&n?-1:1)}),c}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ea(e),f&&!R[t+" "]&&(!g||!g.test(t)))try{var n=m.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){R(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&ea(e),S.contains(e,t)},Z.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=c&&ea(e);var r=n.attrHandle[t.toLowerCase()],o=r&&p.call(n.attrHandle,t.toLowerCase())?r(e,t,!f):void 0;return void 0!==o?o:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */S.uniqueSort=function(e){var t,n=[],r=0,o=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
u=!h.sortStable,a=!h.sortStable&&i.call(e,0),C.call(e,D),u){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)A.call(e,n[r],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},S.fn.uniqueSort=function(){return this.pushStack(S.uniqueSort(i.apply(this)))},(n=S.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:B,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(J,G),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(J,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
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
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return B.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&I.test(n)&&// Get excess from tokenize (recursively)
(t=el(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(J,G).toLowerCase();return"*"===e?function(){return!0}:function(e){return T(e,t)}},CLASS:function(e){var t=j[e+" "];return t||(t=RegExp("(^|"+H+")"+e+"("+H+"|$)"),j(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=Z.attr(r,e);return null==o?"!="===t:!t||((o+="","="===t)?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(O," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,f,h=i!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!l&&!s,v=!1;if(g){// :(first|last|only)-(child|of-type)
if(i){for(;h;){for(p=t;p=p[h];)if(s?T(p,m):1===p.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
f=h="only"===e&&!f&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(f=[a?g.firstChild:g.lastChild],a&&y){for(v=(d=(u=// Seek `elem` from a previously-cached index
(c=g[x]||(g[x]={}))[e]||[])[0]===b&&u[1])&&u[2],p=d&&g.childNodes[d];p=++d&&p&&p[h]||// Fallback to seeking `elem` from the start
(v=d=0)||f.pop();)if(1===p.nodeType&&++v&&p===t){c[e]=[b,d,v];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(y&&(v=d=(u=(c=t[x]||(t[x]={}))[e]||[])[0]===b&&u[1]),!1===v)// Use the same loop as above to seek `elem` from the start
for(;(p=++d&&p&&p[h]||(v=d=0)||f.pop())&&(!((s?T(p,m):1===p.nodeType)&&++v)||(y&&((c=p[x]||(p[x]={}))[e]=[b,v]),p!==t)););return(// Incorporate the offset, then check against cycle size
(v-=o)===r||v%r==0&&v/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,o=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
o[x]?o(t):o.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var r,i=o(e,t),a=i.length;a--;)r=l.call(e,i[a]),e[r]=!(n[r]=i[a])}):function(e){return o(e,0,r)}):o)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=ef(e.replace(P,"$1"));return r[x]?et(function(e,t,n,o){// Match elements unmatched by `matcher`
for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(J,G),function(t){return(t.textContent||S.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return W.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(J,G).toLowerCase(),function(t){var n;do if(n=f?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===// Support: IE <=9 only
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
header:function(e){return X.test(e.nodeName)},input:function(e){return z.test(e.nodeName)},button:function(e){return T(e,"input")&&"button"===e.type||T(e,"button")},text:function(e){var t;return T(e,"input")&&"text"===e.type&&// Support: IE <10 only
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
function es(){}function el(e,t){var r,o,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=n.preFilter;s;){// Filters
for(a in(!r||(o=M.exec(s)))&&(o&&(s=s.slice(o[0].length)||s),l.push(i=[])),r=!1,(o=U.exec(s))&&(r=o.shift(),i.push({value:r,// Cast descendant combinators to space
type:o[0].replace(P," ")}),s=s.slice(r.length)),n.filter)(o=B[a].exec(s))&&(!u[a]||(o=u[a](o)))&&(r=o.shift(),i.push({value:r,type:a,matches:o}),s=s.slice(r.length));if(!r)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?Z.error(e):k(e,l).slice(0))}function eu(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ec(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=w++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,l){var u,c,p=[b,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,l))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(c=t[x]||(t[x]={}),o&&T(t,o))t=t[r]||t;else{if((u=c[i])&&u[0]===b&&u[1]===s)return p[2]=u[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[i]=p,p[2]=e(t,n,l))return!0}}return!1}}function ep(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function ed(e,t,n,r,o){for(var i,a=[],s=0,l=e.length,u=null!=t;s<l;s++)(i=e[s])&&(!n||n(i,r,o))&&(a.push(i),u&&t.push(s));return a}function ef(e,t/* Internal Use Only */){var r,i,a,s,u=[],p=[],d=L[e+" "];if(!d){for(t||(t=el(e)),s=t.length;s--;)(d=function e(t){for(var r,i,a,s=t.length,u=n.relative[t[0].type],c=u||n.relative[" "],p=u?1:0,d=ec(function(e){return e===r},c,!0),f=ec(function(e){return l.call(r,e)>-1},c,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var i=!u&&(n||t!=o)||((r=t).nodeType?d(e,t,n):f(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,i)}];p<s;p++)if(i=n.relative[t[p].type])h=[ec(ep(h),i)];else{// Return special upon seeing a positional matcher
if((i=n.filter[t[p].type].apply(null,t[p].matches))[x]){for(// Find the next relative operator (if any) for proper handling
a=++p;a<s&&!n.relative[t[a].type];a++);return function e(t,n,r,o,i,a){return o&&!o[x]&&(o=e(o)),i&&!i[x]&&(i=e(i,a)),et(function(e,a,s,u){var c,p,d,f,h=[],g=[],m=a.length,y=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)Z(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),x=t&&(e||!n)?ed(y,h,t,s,u):y;// Apply postFilter
if(r?// Find primary matches
r(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
f=i||(e?t:m||o)?[]:a,s,u):f=x,o)for(c=ed(f,g),o(c,[],s,u),// Un-match failing elements by moving them back to matcherIn
p=c.length;p--;)(d=c[p])&&(f[g[p]]=!(x[g[p]]=d));if(e){if(i||t){if(i){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],p=f.length;p--;)(d=f[p])&&c.push(x[p]=d);i(null,f=[],c,u)}for(// Move matched elements from seed to results to keep them synchronized
p=f.length;p--;)(d=f[p])&&(c=i?l.call(e,d):h[p])>-1&&(e[c]=!(a[c]=d))}}else f=ed(f===a?f.splice(m,f.length):f),i?i(null,a,f,u):v.apply(a,f)})}(p>1&&ep(h),p>1&&eu(t.slice(0,p-1).concat({value:" "===t[p-2].type?"*":""})).replace(P,"$1"),i,p<a&&e(t.slice(p,a)),a<s&&e(t=t.slice(a)),a<s&&eu(t))}h.push(i)}return ep(h)}(t[s]))[x]?u.push(d):p.push(d);// Save selector and tokenization
// Cache the compiled function
(d=L(e,(r=u.length>0,i=p.length>0,a=function(e,t,a,s,l){var d,h,g,m=0,y="0",x=e&&[],w=[],j=o,k=e||i&&n.find.TAG("*",l),T=b+=null==j?1:Math.random()||.1,C=k.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(o=t==c||t||l);y!==C&&null!=(d=k[y]);y++){if(i&&d){for(h=0,t||d.ownerDocument==c||(ea(d),a=!f);g=p[h++];)if(g(d,t||c,a)){v.call(s,d);break}l&&(b=T)}// Track unmatched elements for set filters
r&&((d=!g&&d)&&m--,e&&x.push(d))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=y,r&&y!==m){for(h=0;g=u[h++];)g(x,w,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;y--;)x[y]||w[y]||(w[y]=E.call(s));// Discard index placeholder values to get only actual matches
w=ed(w)}// Add matches to results
v.apply(s,w),l&&!e&&w.length>0&&m+u.length>1&&S.uniqueSort(s)}return l&&(b=T,o=j),x},r?et(a):a))).selector=e}return d}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,r,o){var i,a,s,l,u,c="function"==typeof e&&e,p=!o&&el(e=c.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(r=r||[],1===p.length){if(// Reduce context if the leading compound selector is an ID
(a=p[0]=p[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&f&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(J,G),t)||[])[0]))return r;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
i=B.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
i--&&(s=a[i],!n.relative[l=s.type]);)if((u=n.find[l])&&(o=u(s.matches[0].replace(J,G),V.test(a[0].type)&&ei(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(i,1),!(e=o.length&&eu(a)))return v.apply(r,o),r;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||ef(e,p))(o,t,!f,r,!t||V.test(e)&&ei(t.parentNode)||t),r)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=x.split("").sort(D).join("")===x,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(c.createElement("fieldset"))}),S.find=Z,// Deprecated
S.expr[":"]=S.expr.pseudos,S.unique=S.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=ef,Z.select=eh,Z.setDocument=ea,Z.tokenize=el,Z.escape=S.escapeSelector,Z.getText=S.text,Z.isXML=S.isXMLDoc,Z.selectors=S.expr,Z.support=S.support,Z.uniqueSort=S.uniqueSort;/* eslint-enable */}();var D=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&S(e).is(n))break;r.push(e)}return r},N=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},q=S.expr.match.needsContext,_=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function F(e,t,n){return g(t)?S.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?S.grep(e,function(e){return e===t!==n}):"string"!=typeof t?S.grep(e,function(e){return l.call(t,e)>-1!==n}):S.filter(t,e,n)}S.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(o[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)S.find(e,o[t],n);return r>1?S.uniqueSort(n):n},filter:function(e){return this.pushStack(F(this,e||[],!1))},not:function(e){return this.pushStack(F(this,e||[],!0))},is:function(e){return!!F(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&q.test(e)?S(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var O,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
M=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(S.fn.init=function(e,t,n){var r,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||O,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:M.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(o=y.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof S?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),_.test(r[1])&&S.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,// Initialize central reference
O=S(y);var U=/^(?:parents|prev(?:Until|All))/,$={children:!0,contents:!0,next:!0,prev:!0};function I(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&S(e);// Positional selectors never match, since there's no _selection_ context
if(!q.test(e)){for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&S.find.matchesSelector(n,e))){i.push(n);break}}return this.pushStack(i.length>1?S.uniqueSort(i):i)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(S(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return D(e,"parentNode")},parentsUntil:function(e,t,n){return D(e,"parentNode",n)},next:function(e){return I(e,"nextSibling")},prev:function(e){return I(e,"previousSibling")},nextAll:function(e){return D(e,"nextSibling")},prevAll:function(e){return D(e,"previousSibling")},nextUntil:function(e,t,n){return D(e,"nextSibling",n)},prevUntil:function(e,t,n){return D(e,"previousSibling",n)},siblings:function(e){return N((e.parentNode||{}).firstChild,e)},children:function(e){return N(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
o(e.contentDocument)?e.contentDocument:(T(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(e,t){S.fn[e]=function(n,r){var o=S.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=S.filter(r,o)),this.length>1&&($[e]||S.uniqueSort(o),U.test(e)&&o.reverse()),this.pushStack(o)}});var W=/[^\x20\t\r\n\f]+/g;function B(e){return e}function z(e){throw e}function X(e,t,n,r){var o;try{// Check for promise aspect first to privilege synchronous behavior
e&&g(o=e.promise)?o.call(e).done(t).fail(n):e&&g(o=e.then)?o.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
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
 */S.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},S.each(t.match(W)||[],function(e,t){n[t]=!0}),n):S.extend({},e);var t,n,r,o,i,a,s=[],l=[],u=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=r=!0;l.length;u=-1)for(o=l.shift();++u<s.length;)!1===s[u].apply(o[0],o[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
u=s.length,o=!1);e.memory||(o=!1),r=!1,a&&(s=o?[]:"")},p={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(o&&!r&&(u=s.length-1,l.push(o)),function t(n){S.each(n,function(n,r){g(r)?e.unique&&p.has(r)||s.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),o&&!r&&c()),this},// Remove a callback from the list
remove:function(){return S.each(arguments,function(e,t){for(var n;(n=S.inArray(t,s,n))>-1;)s.splice(n,1),n<=u&&u--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?S.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=l=[],s=o="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=l=[],o||r||(s=o=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return p.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return p},S.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return S.Deferred(function(t){S.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=g(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
i[r[1]](function(){var e=o&&o.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,r,o){var i=0;function a(t,n,r,o){return function(){var s=this,l=arguments,u=function(){var e,u;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<i)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
u=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?o?u.call(e,a(i,n,B,o),a(i,n,z,o)):(// ...and disregard older resolution values
i++,u.call(e,a(i,n,B,o),a(i,n,z,o),a(i,n,B,n.notifyWith))):(r!==B&&(s=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(o||n.resolveWith)(s,l))}},c=o?u:function(){try{u()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,c.error),t+1>=i&&(r!==z&&(s=void 0,l=[e]),n.rejectWith(s,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?c():(S.Deferred.getErrorHook?c.error=S.Deferred.getErrorHook():S.Deferred.getStackHook&&(c.error=S.Deferred.getStackHook()),e.setTimeout(c))}}return S.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,g(o)?o:B,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,g(t)?t:B)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,g(r)?r:z))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?S.extend(e,o):o}},i={};// All done!
return(// Add list-specific methods
S.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
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
when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=S.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(X(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(o[n]&&o[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)X(o[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
S.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&Q.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},S.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var V=S.Deferred();// The ready event handler and self cleanup method
function J(){y.removeEventListener("DOMContentLoaded",J),e.removeEventListener("load",J),S.ready()}S.fn.ready=function(e){return V.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){S.readyException(e)}),this},S.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--S.readyWait:S.isReady)&&(// Remember that the DOM is ready
S.isReady=!0,!0!==e&&--S.readyWait>0||// If there are functions bound, to execute
V.resolveWith(y,[S]))}}),S.ready.then=V.then,"complete"!==y.readyState&&("loading"===y.readyState||y.documentElement.doScroll)?(// Use the handy event callback
y.addEventListener("DOMContentLoaded",J),// A fallback to window.onload, that will always work
e.addEventListener("load",J)):e.setTimeout(S.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var G=function(e,t,n,r,o,i,a){var s=0,l=e.length,u=null==n;// Sets many values
if("object"===b(n))for(s in o=!0,n)G(e,t,s,n[s],!0,i,a);else if(void 0!==r&&(o=!0,g(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(S(e),n)})),t))for(;s<l;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return o?e:u?t.call(e):l?t(e[0],n):i},Y=/^-ms-/,K=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(Y,"ms-").replace(K,Z)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=S.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[ee(t)]=n;else for(r in t)o[ee(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
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
t=Array.isArray(t)?t.map(ee):((t=ee(t))in r)?[t]:t.match(W)||[]).length;n--;)delete r[t[n]];// Remove the expando if there's no more data
(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var er=new en,eo=new en,ei=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function es(e,t,n){var r,o;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{o=n,n="true"===o||"false"!==o&&("null"===o?null:o===+o+""?+o:ei.test(o)?JSON.parse(o):o)}catch(e){}// Make sure we set the data so it isn't changed later
eo.set(e,t,n)}else n=void 0}return n}S.extend({hasData:function(e){return eo.hasData(e)||er.hasData(e)},data:function(e,t,n){return eo.access(e,t,n)},removeData:function(e,t){eo.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return er.access(e,t,n)},_removeData:function(e,t){er.remove(e,t)}}),S.fn.extend({data:function(e,t){var n,r,o,i=this[0],a=i&&i.attributes;// Gets all values
if(void 0===e){if(this.length&&(o=eo.get(i),1===i.nodeType&&!er.get(i,"hasDataAttrs"))){for(n=a.length;n--;)// The attrs elements can be null (trac-14894)
a[n]&&0===(r=a[n].name).indexOf("data-")&&es(i,r=ee(r.slice(5)),o[r]);er.set(i,"hasDataAttrs",!0)}return o}return(// Sets multiple values
"object"==typeof e?this.each(function(){eo.set(this,e)}):G(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(i&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=eo.get(i,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=es(i,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
eo.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){eo.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=er.get(e,t),n&&(!r||Array.isArray(n)?r=er.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,o=n.shift(),i=S._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete i.stop,o.call(e,function(){S.dequeue(e,t)},i)),!r&&i&&i.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return er.get(e,n)||er.access(e,n,{empty:S.Callbacks("once memory").add(function(){er.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?S.queue(this[0],e):void 0===t?this:this.each(function(){var n=S.queue(this,e,t);// Ensure a hooks for this queue
S._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&S.dequeue(this,e)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,o=S.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=er.get(i[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var el=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,eu=RegExp("^(?:([+-])=|)("+el+")([a-z%]*)$","i"),ec=["Top","Right","Bottom","Left"],ep=y.documentElement,ed=function(e){return S.contains(e.ownerDocument,e)},ef={composed:!0};ep.getRootNode&&(ed=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(ef)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ed(e)&&"none"===S.css(e,"display")};function eg(e,t,n,r){var o,i,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},l=s(),u=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==u&&+l)&&eu.exec(S.css(e,t));if(c&&c[3]!==u){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
u=u||c[3],// Iteratively approximate from a nonzero starting point
c=+l||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
S.style(e,t,c+u),(1-i)*(1-(i=s()/l||.5))<=0&&(a=0),c/=i;c*=2,S.style(e,t,c+u),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=c,r.end=o)),o}var em={};function ey(e,t){// Determine new display value for elements that need to change
for(var n,r,o=[],i=0,a=e.length;i<a;i++)(r=e[i]).style&&(n=r.style.display,t?("none"!==n||(o[i]=er.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&eh(r)&&(o[i]=function(e){var t,n=e.ownerDocument,r=e.nodeName,o=em[r];return o||(t=n.body.appendChild(n.createElement(r)),o=S.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),em[r]=o),o}(r))):"none"!==n&&(o[i]="none",// Remember what we're overwriting
er.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}S.fn.extend({show:function(){return ey(this,!0)},hide:function(){return ey(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?S(this).show():S(this).hide()})}});var ev=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eb=/^$|^module$|\/(?:java|ecma)script/i;e4=y.createDocumentFragment().appendChild(y.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e7=y.createElement("input")).setAttribute("type","radio"),e7.setAttribute("checked","checked"),e7.setAttribute("name","t"),e4.appendChild(e7),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e4.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e4.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e4.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e4.innerHTML="<option></option>",h.option=!!e4.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ej(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&T(e,t))?S.merge([e],n):n}// Mark scripts as having already been evaluated
function eS(e,t){for(var n=0,r=e.length;n<r;n++)er.set(e[n],"globalEval",!t||er.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,h.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var ek=/<|&#?\w+;/;function eT(e,t,n,r,o){for(var i,a,s,l,u,c=t.createDocumentFragment(),p=[],d=0,f=e.length;d<f;d++)if((i=e[d])||0===i){// Add nodes directly
if("object"===b(i))// push.apply(_, arraylike) throws on ancient WebKit
S.merge(p,i.nodeType?[i]:i);else if(ek.test(i)){for(a=a||c.appendChild(t.createElement("div")),s=ew[(ex.exec(i)||["",""])[1].toLowerCase()]||ew._default,a.innerHTML=s[1]+S.htmlPrefilter(i)+s[2],// Descend through wrappers to the right content
u=s[0];u--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(p,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else p.push(t.createTextNode(i))}for(// Remove wrapper from fragment
c.textContent="",d=0;i=p[d++];){// Skip elements already in the context collection (trac-4087)
if(r&&S.inArray(i,r)>-1){o&&o.push(i);continue}// Capture executables
if(l=ed(i),// Append to fragment
a=ej(c.appendChild(i),"script"),l&&eS(a),n)for(u=0;i=a[u++];)eb.test(i.type||"")&&n.push(i)}return c}var eE=/^([^.]*)(?:\.(.+)|)/;function eC(){return!0}function eA(){return!1}function eH(e,t,n,r,o,i){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)eH(e,s,n,r,t[s],i);return e}if(null==r&&null==o?(// ( types, fn )
o=n,r=n=void 0):null==o&&("string"==typeof n?(// ( types, selector, fn )
o=r,r=void 0):(// ( types, data, fn )
o=r,r=n,n=void 0)),!1===o)o=eA;else if(!o)return e;return 1===i&&(a=o,// Use same guid so caller can remove using origFn
(o=function(e){return(// Can use an empty set, since event contains the info
S().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,o,r,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eP(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===er.get(e,t)&&S.event.add(e,t,eC);return}// Register the controller as a special universal handler for all event namespaces
er.set(e,t,!1),S.event.add(e,t,{namespace:!1,handler:function(e){var n,r=er.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(r)(S.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
r=i.call(arguments),er.set(this,t,r),// Trigger the native event and capture its result
this[t](),n=er.get(this,t),er.set(this,t,!1),r!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else r&&(// ...and capture the result
er.set(this,t,S.event.trigger(r[0],r.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eC)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */S.event={global:{},add:function(e,t,n,r,o){var i,a,s,l,u,c,p,d,f,h,g,m=er.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(i=n).handler,o=i.selector),o&&S.find.matchesSelector(ep,o),n.guid||(n.guid=S.guid++),(l=m.events)||(l=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return S.event.triggered!==t.type?S.event.dispatch.apply(e,arguments):void 0}),u=// Handle multiple events separated by a space
(t=(t||"").match(W)||[""]).length;u--;)// There *must* be a type, no attaching namespace-only handlers
f=g=(s=eE.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),f&&(// If event changes its type, use the special event handlers for the changed type
p=S.event.special[f]||{},// If selector defined, determine special event api type, otherwise given type
f=(o?p.delegateType:p.bindType)||f,// Update special based on newly reset type
p=S.event.special[f]||{},// handleObj is passed to all event handlers
c=S.extend({type:f,origType:g,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&S.expr.match.needsContext.test(o),namespace:h.join(".")},i),(d=l[f])||((d=l[f]=[]).delegateCount=0,(!p.setup||!1===p.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(f,a)),p.add&&(p.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),// Keep track of which events have ever been used, for event optimization
S.event.global[f]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,o){var i,a,s,l,u,c,p,d,f,h,g,m=er.hasData(e)&&er.get(e);if(m&&(l=m.events)){for(u=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(W)||[""]).length;u--;){// Unbind all events (on this namespace, if provided) for the element
if(f=g=(s=eE.exec(t[u])||[])[1],h=(s[2]||"").split(".").sort(),!f){for(f in l)S.event.remove(e,f+t[u],n,r,!0);continue}for(p=S.event.special[f]||{},d=l[f=(r?p.delegateType:p.bindType)||f]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=i=d.length;i--;)c=d[i],(o||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(d.splice(i,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(e,c));a&&!d.length&&(p.teardown&&!1!==p.teardown.call(e,h,m.handle)||S.removeEvent(e,f,m.handle),delete l[f])}S.isEmptyObject(l)&&er.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=Array(arguments.length),l=S.event.fix(e),u=(er.get(this,"events")||Object.create(null))[l.type]||[],c=S.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=l;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){for(// Determine handlers
a=S.event.handlers.call(this,l,u),// Run delegates first; they may want to stop propagation beneath us
t=0;(o=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===i.namespace||l.rnamespace.test(i.namespace))&&(l.handleObj=i,l.data=i.data,void 0!==(r=((S.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))&&!1===(l.result=r)&&(l.preventDefault(),l.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,r,o,i,a,s=[],l=t.delegateCount,u=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;u!==this;u=u.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===u.nodeType&&!("click"===e.type&&!0===u.disabled)){for(n=0,i=[],a={};n<l;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
o=(r=t[n]).selector+" "]&&(a[o]=r.needsContext?S(o,this).index(u)>-1:S.find(o,this,null,[u]).length),a[o]&&i.push(r);i.length&&s.push({elem:u,handlers:i})}}return(// Add the remaining (directly-bound) handlers
u=this,l<t.length&&s.push({elem:u,handlers:t.slice(l)}),s)},addProp:function(e,t){Object.defineProperty(S.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return ev.test(t.type)&&t.click&&T(t,"input")&&eP(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return ev.test(t.type)&&t.click&&T(t,"input")&&eP(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ev.test(t.type)&&t.click&&T(t,"input")&&er.get(t,"click")||T(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eC:eA,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[S.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
S.Event.prototype={constructor:S.Event,isDefaultPrevented:eA,isPropagationStopped:eA,isImmediatePropagationStopped:eA,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eC,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eC,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eC,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(y.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=er.get(this,"handle"),r=S.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,// First, handle focusin/focusout
n(e),r.target===r.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(r)}else // while someone wants focusin/focusout.
S.event.simulate(t,e.target,S.event.fix(e))}S.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var r;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eP(this,e,!0),!y.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(r=er.get(this,t))||this.addEventListener(t,n),er.set(this,t,(r||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eP(this,e),!0)},teardown:function(){var e;if(!y.documentMode)return!1;(e=er.get(this,t)-1)?er.set(this,t,e):(this.removeEventListener(t,n),er.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return er.get(t.target,e)},delegateType:t},// Support: Firefox <=44
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
S.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var r=this.ownerDocument||this.document||this,o=y.documentMode?this:r,i=er.get(o,t);i||(y.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),er.set(o,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,o=y.documentMode?this:r,i=er.get(o,t)-1;i?er.set(o,t,i):(y.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),er.remove(o,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){S.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,o=e.handleObj;return r&&(r===this||S.contains(this,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),S.fn.extend({on:function(e,t,n,r){return eH(this,e,t,n,r)},one:function(e,t,n,r){return eH(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eA),this.each(function(){S.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eL=/<script|<style|<link/i,eR=/checked\s*(?:[^=]|=\s*.checked.)/i,eD=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eN(e,t){return T(e,"table")&&T(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eq(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function e_(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eF(e,t){var n,r,o,i,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(er.hasData(e)&&(s=er.get(e).events))for(o in er.remove(t,"handle events"),s)for(n=0,r=s[o].length;n<r;n++)S.event.add(t,o,s[o][n]);// 2. Copy user data
eo.hasData(e)&&(i=eo.access(e),a=S.extend({},i),eo.set(t,a))}}function eO(e,t,n,r){// Flatten any nested arrays
t=a(t);var o,i,s,l,u,c,p=0,d=e.length,f=d-1,m=t[0],y=g(m);// We can't cloneNode fragments that contain checked, in WebKit
if(y||d>1&&"string"==typeof m&&!h.checkClone&&eR.test(m))return e.each(function(o){var i=e.eq(o);y&&(t[0]=m.call(this,o,i.html())),eO(i,t,n,r)});if(d&&(i=(o=eT(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=i),i||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(s=S.map(ej(o,"script"),eq)).length;p<d;p++)u=o,p!==f&&(u=S.clone(u,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
S.merge(s,ej(u,"script"))),n.call(e[p],u,p);if(l)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
S.map(s,e_),p=0;p<l;p++)u=s[p],eb.test(u.type||"")&&!er.access(u,"globalEval")&&S.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(u.textContent.replace(eD,""),u,c))}return e}function eM(e,t,n){for(var r,o=t?S.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||S.cleanData(ej(r)),r.parentNode&&(n&&ed(r)&&eS(ej(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),l=ed(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!S.isXMLDoc(e))for(r=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=ej(s),o=(i=ej(e)).length;r<o;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&ev.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(i[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,i=i||ej(e),a=a||ej(s),o=i.length;r<o;r++)eF(i[r],a[r]);else eF(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=ej(s,"script")).length>0&&eS(a,!l&&ej(e,"script")),s)},cleanData:function(e){for(var t,n,r,o=S.event.special,i=0;void 0!==(n=e[i]);i++)if(et(n)){if(t=n[er.expando]){if(t.events)for(r in t.events)o[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[er.expando]=void 0}n[eo.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[eo.expando]=void 0)}}}),S.fn.extend({detach:function(e){return eM(this,e,!0)},remove:function(e){return eM(this,e)},text:function(e){return G(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eO(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eN(this,e).appendChild(e)})},prepend:function(){return eO(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eN(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eO(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eO(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
S.cleanData(ej(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return G(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eL.test(e)&&!ew[(ex.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(S.cleanData(ej(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eO(this,arguments,function(t){var n=this.parentNode;0>S.inArray(this,e)&&(S.cleanData(ej(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){S.fn[e]=function(e){for(var n,r=[],o=S(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),S(o[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(r,n.get());return this.pushStack(r)}});var eU=RegExp("^("+el+")(?!px)[a-z%]+$","i"),e$=/^--/,eI=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eW=function(e,t,n){var r,o,i={};// Remember the old values, and insert the new ones
for(o in t)i[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in r=n.call(e),t)e.style[o]=i[o];return r},eB=RegExp(ec.join("|"),"i");function ez(e,t,n){var r,o,i,a,s=e$.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||eI(e))&&(// Support: IE <=9 - 11+
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
(a=a.replace(P,"$1")||void 0),""!==a||ed(e)||(a=S.style(e,t)),!h.pixelBoxStyles()&&eU.test(a)&&eB.test(t)&&(// Remember the original values
r=l.width,o=l.minWidth,i=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=a,a=n.width,// Revert the changed values
l.width=r,l.minWidth=o,l.maxWidth=i)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function eX(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ep.appendChild(u).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
c.style.right="60%",a=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
o=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",i=12===n(c.offsetWidth/3),ep.removeChild(u),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function n(e){return Math.round(parseFloat(e))}var r,o,i,a,s,l,u=y.createElement("div"),c=y.createElement("div");// Finish early in limited (non-browser) environments
c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,S.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),i},// Support: IE 9 - 11+, Edge 15 - 18+
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
r.style.display="block",ep.appendChild(t).appendChild(n).appendChild(r),s=parseInt((o=e.getComputedStyle(n)).height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===n.offsetHeight,ep.removeChild(t)),s}}))}();var eQ=["Webkit","Moz","ms"],eV=y.createElement("div").style,eJ={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eG(e){return S.cssProps[e]||eJ[e]||(e in eV?e:eJ[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eQ.length;n--;)if((e=eQ[n]+t)in eV)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eY=/^(none|table(?!-c[ea]).+)/,eK={position:"absolute",visibility:"hidden",display:"block"},eZ={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=eu.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function e1(e,t,n,r,o,i){var a="width"===t?1:0,s=0,l=0,u=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ec[a],!0,o)),r?("content"===n&&(l-=S.css(e,"padding"+ec[a],!0,o)),"margin"!==n&&(l-=S.css(e,"border"+ec[a]+"Width",!0,o))):(// Add padding
l+=S.css(e,"padding"+ec[a],!0,o),"padding"!==n?l+=S.css(e,"border"+ec[a]+"Width",!0,o):s+=S.css(e,"border"+ec[a]+"Width",!0,o));return!r&&i>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-i-l-s-.5))||0),l+u}function e2(e,t,n){// Start with computed style
var r=eI(e),o=(!h.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),i=o,a=ez(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eU.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&o||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&T(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&// Make sure the element is visible & connected
e.getClientRects().length&&(o="border-box"===S.css(e,"boxSizing",!1,r),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(i=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e1(e,t,n||(o?"border":"content"),i,r,a)+"px"}function e3(e,t,n,r,o){return new e3.prototype.init(e,t,n,r,o)}S.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=ez(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,i,a,s=ee(t),l=e$.test(t),u=e.style;// Check if we're setting a value
if(l||(t=eG(s)),// Gets hook for the prefixed version, then unprefixed version
a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(o=a.get(e,!1,r))?o:u[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(i=typeof n)&&(o=eu.exec(n))&&o[1]&&(n=eg(e,t,o),// Fixes bug trac-9237
i="number"),null!=n&&n==n&&("number"!==i||l||(n+=o&&o[3]||(S.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var o,i,a,s=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(e$.test(t)||(t=eG(s)),// Try prefixed name followed by the unprefixed name
(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ez(e,t,r)),"normal"===o&&t in eZ&&(o=eZ[t]),""===n||n)?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o)}}),S.each(["height","width"],function(e,t){S.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eY.test(S.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e2(e,t,r):eW(e,eK,function(){return e2(e,t,r)})},set:function(e,n,r){var o,i=eI(e),// to avoid forcing a reflow.
a=!h.scrollboxSize()&&"absolute"===i.position,s=(a||r)&&"border-box"===S.css(e,"boxSizing",!1,i),l=r?e1(e,t,r,s,i):0;return s&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-e1(e,t,"border",!1,i)-.5)),l&&(o=eu.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=S.css(e,t)),e0(e,n,l)}}}),S.cssHooks.marginLeft=eX(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ez(e,"marginLeft"))||e.getBoundingClientRect().left-eW(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
S.each({margin:"",padding:"",border:"Width"},function(e,t){S.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+ec[r]+t]=i[r]||i[r-2]||i[0];return o}},"margin"!==e&&(S.cssHooks[e+t].set=e0)}),S.fn.extend({css:function(e,t){return G(this,function(e,t,n){var r,o,i={},a=0;if(Array.isArray(t)){for(r=eI(e),o=t.length;a<o;a++)i[t[a]]=S.css(e,t[a],!1,r);return i}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,arguments.length>1)}}),S.Tween=e3,e3.prototype={constructor:e3,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(S.cssNumber[n]?"":"px")},cur:function(){var e=e3.propHooks[this.prop];return e&&e.get?e.get(this):e3.propHooks._default.get(this)},run:function(e){var t,n=e3.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e3.propHooks._default.set(this),this}},e3.prototype.init.prototype=e3.prototype,e3.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
S.fx.step[e.prop]?S.fx.step[e.prop](e):1===e.elem.nodeType&&(S.cssHooks[e.prop]||null!=e.elem.style[eG(e.prop)])?S.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e3.propHooks.scrollTop=e3.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=e3.prototype.init,// Back compat <1.8 extension point
S.fx.step={};var e4,e7,e9,e6,e5=/^(?:toggle|show|hide)$/,e8=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e9=void 0}),e9=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,r=0,o={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)o["margin"+(n=ec[r])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function tn(e,t,n){for(var r,o=(tr.tweeners[t]||[]).concat(tr.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function tr(e,t,n){var r,o,i=0,a=tr.prefilters.length,s=S.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(o)return!1;for(var t=e9||te(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),i=0,a=u.tweens.length;i<a;i++)u.tweens[i].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[u,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[u,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[u]),!1))},u=s.promise({elem:e,props:S.extend({},t),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},n),originalProperties:t,originalOptions:n,startTime:e9||te(),duration:n.duration,tweens:[],createTween:function(t,n){var r=S.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?u.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)u.tweens[n].run(1);return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),c=u.props;for(function(e,t){var n,r,o,i,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(o=t[r=ee(n)],Array.isArray(i=e[n])&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(a=S.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in i=a.expand(i),delete e[r],i)(n in e)||(e[n]=i[n],t[n]=o);else t[r]=o}(c,u.opts.specialEasing);i<a;i++)if(r=tr.prefilters[i].call(u,e,c,u.opts))return g(r.stop)&&(S._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return S.map(c,tn,u),g(u.opts.start)&&u.opts.start.call(e,u),// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),S.fx.timer(S.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}S.Animation=S.extend(tr,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return eg(n.elem,e,eu.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(W);for(var n,r=0,o=e.length;r<o;r++)n=e[r],tr.tweeners[n]=tr.tweeners[n]||[],tr.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,o,i,a,s,l,u,c,p="width"in t||"height"in t,d=this,f={},h=e.style,g=e.nodeType&&eh(e),m=er.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){// Ensure the complete handler is called before this completes
d.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(o=t[r],e5.test(o)){if(delete t[r],i=i||"toggle"===o,o===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!m||void 0===m[r])continue;g=!0}f[r]=m&&m[r]||S.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!S.isEmptyObject(t))&&S.isEmptyObject(f)))for(r in p&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(u=m&&m.display)&&(u=er.get(e,"display")),"none"===(c=S.css(e,"display"))&&(u?c=u:(// Get nonempty value(s) by temporarily forcing visibility
ey([e],!0),u=e.style.display||u,c=S.css(e,"display"),ey([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===S.css(e,"float")&&(l||(d.done(function(){h.display=u}),null!=u||(u="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=er.access(e,"fxshow",{display:u}),i&&(m.hidden=!g),g&&ey([e],!0),/* eslint-disable no-loop-func */d.done(function(){for(r in g||ey([e]),er.remove(e,"fxshow"),f)S.style(e,r,f[r])})),// Per-property setup
l=tn(g?m[r]:0,r,d),r in m||(m[r]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?tr.prefilters.unshift(e):tr.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=S.isEmptyObject(e),i=S.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=tr(this,S.extend({},e),i);// Empty animations, or finishing resolves immediately
(o||er.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=S.timers,a=er.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&e8.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem===this&&(null==e||i[o].queue===e)&&(i[o].anim.stop(n),t=!1,i.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&S.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=er.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=S.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
S.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),S.each(["toggle","show","hide"],function(e,t){var n=S.fn[t];S.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,r,o)}}),// Generate shortcuts for custom animations
S.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){S.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(e9=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),e9=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){e6||(e6=!0,function t(){e6&&(!1===y.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,S.fx.interval),S.fx.tick())}())},S.fx.stop=function(){e6=null},S.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
S.fn.delay=function(t,n){return t=S.fx&&S.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var o=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(o)}})},to=y.createElement("input"),ti=y.createElement("select").appendChild(y.createElement("option")),to.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==to.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=ti.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(to=y.createElement("input")).value="t",to.type="radio",h.radioValue="t"===to.value;var to,ti,ta,ts=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return G(this,S.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return S.prop(e,t,n);if(1===i&&S.isXMLDoc(e)||(o=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ta:void 0)),void 0!==n){if(null===n){S.removeAttr(e,t);return}return o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return o&&"get"in o&&null!==(r=o.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&T(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(W);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ta={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ts[t]||S.find.attr;ts[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
i=ts[a],ts[a]=o,o=null!=n(e,t,r)?a:null,ts[a]=i),o}});var tl=/^(?:input|select|textarea|button)$/i,tu=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tc(e){return(e.match(W)||[]).join(" ")}function tp(e){return e.getAttribute&&e.getAttribute("class")||""}function td(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(W)||[]}S.fn.extend({prop:function(e,t){return G(this,S.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)return(1===i&&S.isXMLDoc(e)||(// Fix name and attach hooks
t=S.propFix[t]||t,o=S.propHooks[t]),void 0!==n)?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):tl.test(e.nodeName)||tu.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(S.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(e){var t,n,r,o,i,a;return g(e)?this.each(function(t){S(this).addClass(e.call(this,t,tp(this)))}):(t=td(e)).length?this.each(function(){if(r=tp(this),n=1===this.nodeType&&" "+tc(r)+" "){for(i=0;i<t.length;i++)o=t[i],0>n.indexOf(" "+o+" ")&&(n+=o+" ");r!==// Only assign if different to avoid unneeded rendering.
(a=tc(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,o,i,a;return g(e)?this.each(function(t){S(this).removeClass(e.call(this,t,tp(this)))}):arguments.length?(t=td(e)).length?this.each(function(){if(r=tp(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tc(r)+" "){for(i=0;i<t.length;i++)// Remove *all* instances
for(o=t[i];n.indexOf(" "+o+" ")>-1;)n=n.replace(" "+o+" "," ");r!==// Only assign if different to avoid unneeded rendering.
(a=tc(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,o,i,a=typeof e,s="string"===a||Array.isArray(e);return g(e)?this.each(function(n){S(this).toggleClass(e.call(this,n,tp(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=td(e),this.each(function(){if(s)for(o=0,// Toggle individual class names
i=S(this);o<n.length;o++)r=n[o],i.hasClass(r)?i.removeClass(r):i.addClass(r);else(void 0===e||"boolean"===a)&&((r=tp(this))&&er.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":er.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+tc(tp(n))+" ").indexOf(t)>-1)return!0;return!1}});var tf=/\r/g;S.fn.extend({val:function(e){var t,n,r,o=this[0];return arguments.length?(r=g(e),this.each(function(n){var o;1!==this.nodeType||(null==(o=r?e.call(this,n,S(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=S.map(o,function(e){return null==e?"":e+""})),(t=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=S.valHooks[o.type]||S.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(tf,""):null==n?"":n:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tc(S.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?i+1:o.length;// Loop through all the selected options
for(r=i<0?l:a?i:0;r<l;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=o[r]).selected||r===i)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!T(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=S(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=S.makeArray(t),a=o.length;a--;)/* eslint-disable no-cond-assign */((r=o[a]).selected=S.inArray(S.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),// Radios and checkboxes getter/setter
S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=S.inArray(S(e).val(),t)>-1}},h.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var th=e.location,tg={guid:Date.now()},tm=/\?/;// Cross-browser xml parsing
S.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&S.error("Invalid XML: "+(r?S.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var ty=/^(?:focusinfocus|focusoutblur)$/,tv=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(t,n,r,o){var i,a,s,l,u,c,d,f,h=[r||y],v=p.call(t,"type")?t.type:t,x=p.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=f=s=r=r||y,!(3===r.nodeType||8===r.nodeType||ty.test(v+S.event.triggered))&&(v.indexOf(".")>-1&&(v=// Namespaced trigger; create a regexp to match event type in handle()
(x=v.split(".")).shift(),x.sort()),u=0>v.indexOf(":")&&"on"+v,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[S.expando]?t:new S.Event(v,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:S.makeArray(n,[t]),// Allow special events to draw outside the lines
d=S.event.special[v]||{},o||!d.trigger||!1!==d.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!o&&!d.noBubble&&!m(r)){for(l=d.delegateType||v,ty.test(l+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||y)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
i=0;(a=h[i++])&&!t.isPropagationStopped();)f=a,t.type=i>1?l:d.bindType||v,// jQuery handler
(c=(er.get(a,"events")||Object.create(null))[t.type]&&er.get(a,"handle"))&&c.apply(a,n),// Native handler
(c=u&&a[u])&&c.apply&&et(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=v,!o&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(h.pop(),n))&&et(r)&&u&&g(r[v])&&!m(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=r[u])&&(r[u]=null),// Prevent re-triggering of the same event, since we already bubbled it above
S.event.triggered=v,t.isPropagationStopped()&&f.addEventListener(v,tv),r[v](),t.isPropagationStopped()&&f.removeEventListener(v,tv),S.event.triggered=void 0,s&&(r[u]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}});var tx=/\[\]$/,tb=/\r?\n/g,tw=/^(?:submit|button|image|reset|file)$/i,tj=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
S.param=function(e,t){var n,r=[],o=function(e,t){// If value is a function, invoke it and use its return value
var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){o(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,o){var i;if(Array.isArray(n))S.each(n,function(n,i){r||tx.test(t)?o(t,i):e(t+"["+("object"==typeof i&&null!=i?n:"")+"]",i,r,o)});else if(r||"object"!==b(n))o(t,n);else for(i in n)e(t+"["+i+"]",n[i],r,o)}(n,e[n],t,o);// Return the resulting serialization
return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!S(this).is(":disabled")&&tj.test(this.nodeName)&&!tw.test(e)&&(this.checked||!ev.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(tb,"\r\n")}}):{name:t.name,value:n.replace(tb,"\r\n")}}).get()}});var tS=/%20/g,tk=/#.*$/,tT=/([?&])_=[^&]*/,tE=/^(.*?):[ \t]*([^\r\n]*)$/mg,tC=/^(?:GET|HEAD)$/,tA=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tH={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tP={},tL="*/".concat("*"),tR=y.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tD(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(W)||[];if(g(n))// For each dataType in the dataTypeExpression
for(;r=i[o++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tN(e,t,n,r){var o={},i=e===tP;function a(s){var l;return o[s]=!0,S.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||i||o[u]?i?!(l=u):void 0:(t.dataTypes.unshift(u),a(u),!1)}),l}return a(t.dataTypes[0])||!o["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tq(e,t){var n,r,o=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}tR.href=th.href,S.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:th.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(th.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tL,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":S.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tq(tq(e,S.ajaxSettings),t):tq(S.ajaxSettings,e)},ajaxPrefilter:tD(tH),ajaxTransport:tD(tP),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,o,i,a,s,l,u,c,p,d,f=S.ajaxSetup({},n),h=f.context||f,g=f.context&&(h.nodeType||h.jquery)?S(h):S.event,m=S.Deferred(),v=S.Callbacks("once memory"),x=f.statusCode||{},b={},w={},j="canceled",k={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(u){if(!a)for(a={};t=tE.exec(i);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return u?i:null},// Caches the header
setRequestHeader:function(e,t){return null==u&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==u&&(f.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(u)k.always(e[k.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||j;return r&&r.abort(t),T(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(k),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
f.url=((t||f.url||th.href)+"").replace(tA,th.protocol+"//"),// Alias method option to type as per ticket trac-12004
f.type=n.method||n.type||f.method||f.type,// Extract dataTypes list
f.dataTypes=(f.dataType||"*").toLowerCase().match(W)||[""],null==f.crossDomain){l=y.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=f.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,f.crossDomain=tR.protocol+"//"+tR.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
f.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=S.param(f.data,f.traditional)),// Apply prefilters
tN(tH,f,n,k),u)return k;// Check for headers option
for(p in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=S.event&&f.global)&&0==S.active++&&S.event.trigger("ajaxStart"),// Uppercase the type
f.type=f.type.toUpperCase(),// Determine if request has content
f.hasContent=!tC.test(f.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=f.url.replace(tk,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(tS,"+")):(// Remember the hash so we can put it back
d=f.url.slice(o.length),f.data&&(f.processData||"string"==typeof f.data)&&(o+=(tm.test(o)?"&":"?")+f.data,// trac-9682: remove data so that it's not used in an eventual retry
delete f.data),!1===f.cache&&(o=o.replace(tT,"$1"),d=(tm.test(o)?"&":"?")+"_="+tg.guid+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
f.url=o+d),f.ifModified&&(S.lastModified[o]&&k.setRequestHeader("If-Modified-Since",S.lastModified[o]),S.etag[o]&&k.setRequestHeader("If-None-Match",S.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&k.setRequestHeader("Content-Type",f.contentType),// Set the Accepts header for the server, depending on the dataType
k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+tL+"; q=0.01":""):f.accepts["*"]),f.headers)k.setRequestHeader(p,f.headers[p]);// Allow custom headers/mimetypes and early abort
if(f.beforeSend&&(!1===f.beforeSend.call(h,k,f)||u))return k.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
j="abort",// Install callbacks on deferreds
v.add(f.complete),k.done(f.success),k.fail(f.error),// Get transport
r=tN(tP,f,n,k)){// If request was aborted inside ajaxSend, stop there
if(k.readyState=1,c&&g.trigger("ajaxSend",[k,f]),u)return k;f.async&&f.timeout>0&&(s=e.setTimeout(function(){k.abort("timeout")},f.timeout));try{u=!1,r.send(b,T)}catch(e){// Rethrow post-completion exceptions
if(u)throw e;// Propagate others as results
T(-1,e)}}else T(-1,"No Transport");// Callback for when everything is done
function T(t,n,a,l){var p,d,y,b,w,j=n;// Ignore repeat invocations
u||(u=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
i=l||"",// Set readyState
k.readyState=t>0?4:0,// Determine if successful
p=t>=200&&t<300||304===t,a&&(b=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,o,i,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r){for(o in s)if(s[o]&&s[o].test(r)){l.unshift(o);break}}// Check to see if we have a response for the expected dataType
if(l[0]in n)i=l[0];else{// Try convertible dataTypes
for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){i=o;break}a||(a=o)}// Or just use first one
i=i||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(i)return i!==l[0]&&l.unshift(i),n[i]}(f,k,a)),!p&&S.inArray("script",f.dataTypes)>-1&&0>S.inArray("json",f.dataTypes)&&(f.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,r){var o,i,a,s,l,u={},c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=i,i=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===i)i=l;else if("*"!==l&&l!==i){// If none found, seek a pair
if(!// Seek a direct converter
(a=u[l+" "+i]||u["* "+i])){for(o in u)if(// If conv2 outputs current
(s=o.split(" "))[1]===i&&// If prev can be converted to accepted input
(a=u[l+" "+s[0]]||u["* "+s[0]])){// Condense equivalence converters
!0===a?a=u[o]:!0!==u[o]&&(i=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+i}}}}}return{state:"success",data:t}}(f,b,k,p),p?(f.ifModified&&((w=k.getResponseHeader("Last-Modified"))&&(S.lastModified[o]=w),(w=k.getResponseHeader("etag"))&&(S.etag[o]=w)),204===t||"HEAD"===f.type?j="nocontent":304===t?j="notmodified":(j=b.state,d=b.data,p=!(y=b.error))):(// Extract error from statusText and normalize for non-aborts
y=j,(t||!j)&&(j="error",t<0&&(t=0))),// Set data for the fake xhr object
k.status=t,k.statusText=(n||j)+"",p?m.resolveWith(h,[d,j,k]):m.rejectWith(h,[k,j,y]),// Status-dependent callbacks
k.statusCode(x),x=void 0,c&&g.trigger(p?"ajaxSuccess":"ajaxError",[k,f,p?d:y]),// Complete
v.fireWith(h,[k,j]),!c||(g.trigger("ajaxComplete",[k,f]),--S.active||S.event.trigger("ajaxStop")))}return k},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,t){S[t]=function(e,n,r,o){// The url can be an options object (which then must have .url)
return g(n)&&(o=o||r,r=n,n=void 0),S.ajax(S.extend({url:e,type:t,dataType:o,data:n,success:r},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){S(this).wrapInner(e.call(this,t))}):this.each(function(){var t=S(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){S(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var t_={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tF=S.ajaxSettings.xhr();h.cors=!!tF&&"withCredentials"in tF,h.ajax=tF=!!tF,S.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tF&&!t.crossDomain)return{send:function(o,i){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)s.setRequestHeader(a,o[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(t_[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
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
S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),// Handle cache's special case and crossDomain
S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
S.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,o){t=S("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tO=[],tM=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tO.pop()||S.expando+"_"+tg.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
S.ajaxPrefilter("json jsonp",function(t,n,r){var o,i,a,s=!1!==t.jsonp&&(tM.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tM.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
o=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tM,"$1"+o):!1!==t.jsonp&&(t.url+=(tm.test(t.url)?"&":"?")+t.jsonp+"="+o),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||S.error(o+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
i=e[o],e[o]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===i?S(e).removeProp(o):e[o]=i,t[o]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tO.push(o)),a&&g(i)&&i(a[0]),a=i=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
S.parseHTML=function(e,t,n){var r,o,i;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)):t=y),o=_.exec(e),i=!n&&[],o)?[t.createElement(o[1])]:(o=eT([e],t,i),i&&i.length&&S(i).remove(),S.merge([],o.childNodes))},/**
 * Load a url into a page
 */S.fn.load=function(e,t,n){var r,o,i,a=this,s=e.indexOf(" ");return s>-1&&(r=tc(e.slice(s)),e=e.slice(0,s)),g(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&S.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
i=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
S("<div>").append(S.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(e){return S.grep(S.timers,function(t){return e===t.elem}).length},S.offset={setOffset:function(e,t,n){var r,o,i,a,s,l,u=S.css(e,"position"),c=S(e),p={};"static"===u&&(e.style.position="relative"),s=c.offset(),i=S.css(e,"top"),l=S.css(e,"left"),("absolute"===u||"fixed"===u)&&(i+l).indexOf("auto")>-1?(a=(r=c.position()).top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(l)||0),g(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+o),"using"in t?t.using.call(e,p):c.css(p)}},S.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){S.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
o=S(e).offset(),o.top+=S.css(e,"borderTopWidth",!0),o.left+=S.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-o.top-S.css(r,"marginTop",!0),left:t.left-o.left-S.css(r,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||ep})}}),// Create scrollLeft and scrollTop methods
S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;S.fn[e]=function(r){return G(this,function(e,r,o){// Coalesce documents and windows
var i;if(m(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o)return i?i[t]:e[r];i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
S.each(["top","left"],function(e,t){S.cssHooks[t]=eX(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=ez(e,t),eU.test(n)?S(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
S.each({Height:"height",Width:"width"},function(e,t){S.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
S.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===i?"margin":"border");return G(this,function(t,n,o){var i;return m(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?S.css(t,n,s):S.style(t,n,o,s)},t,a?o:void 0,a)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
S.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tU=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
S.proxy=function(e,t){var n,r,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return(// Simulated bind
r=i.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||S.guid++,o)},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=T,S.isFunction=g,S.isWindow=m,S.camelCase=ee,S.type=b,S.now=Date.now,S.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=S.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(tU,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var t$=e.jQuery,tI=e.$;return S.noConflict=function(t){return e.$===S&&(e.$=tI),t&&e.jQuery===S&&(e.jQuery=t$),S},void 0===t&&(e.jQuery=e.$=S),S},"object"==typeof o?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
o=n.document?r(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return r(e)}:r(n),/*@__PURE__*/t(o)(document).ready(function(){function e(e,t){var n=e.find(".top").clone(),r=e.find(".bottom").clone();n.addClass("new"),r.addClass("new"),r.find(".text").text(t),e.find(".top").after(n),e.find(".top.new").append(r),e.addClass("flipping"),e.find(".top:not(.new)").find(".text").text(t),setTimeout(function(){e.find(".bottom:not(.new)").find(".text").text(t)},500)}let n=/*@__PURE__*/t(o)(".clock .flipper:nth-child(1) div:not(.new) .text"),r=/*@__PURE__*/t(o)(".clock .flipper:nth-child(2) div:not(.new) .text"),i=/*@__PURE__*/t(o)(".clock .flipper:nth-child(3) div:not(.new) .text"),a=/*@__PURE__*/t(o)(".clock .flipper:nth-child(4) div:not(.new) .text");// Додай це для днів
!function s(){/*@__PURE__*/t(o)(".flipper").removeClass("flipping"),/*@__PURE__*/t(o)(".flipper .new").remove();var l=new Date,u=l.getSeconds().toString().padStart(2,"0"),c=l.getMinutes().toString().padStart(2,"0"),p=l.getHours();p>12&&(p-=12),0==p&&(p=12),p=p.toString().padStart(2,"0");var d=l.getDate().toString().padStart(2,"0");/*@__PURE__*/t(o)(r[0]).text()!==p&&e(/*@__PURE__*/t(o)(r[0]).closest(".flipper"),p),/*@__PURE__*/t(o)(i[0]).text()!==c&&e(/*@__PURE__*/t(o)(i[0]).closest(".flipper"),c),/*@__PURE__*/t(o)(a[0]).text()!==u&&e(/*@__PURE__*/t(o)(a[0]).closest(".flipper"),u),/*@__PURE__*/t(o)(n[0]).text()!==d&&e(/*@__PURE__*/t(o)(n[0]).closest(".flipper"),d),setTimeout(function(){s()},500)}()});const i=document.querySelectorAll(".slider-box .slider-line img"),a=document.querySelector(".slider-line");let s=0;function l(){console.log("resize"),e=document.querySelector(".slider-box").offsetWidth,a.style.width=e*i.length+"px",i.forEach(t=>{t.style.width=e+"px";// item.style.height = 'auto';
}),u()}function u(){a.style.transform="translate(-"+s*e+"px)"}window.addEventListener("resize",l),l(),document.querySelector(".slider-next").addEventListener("click",function(){++s>=i.length&&(s=0),u()}),document.querySelector(".slider-prev").addEventListener("click",function(){--s<0&&(s=i.length-1),u()}),new URL("1desk@2x.5703d9b4.jpg",import.meta.url).toString(),new URL("1tab@2x.673653b2.jpg",import.meta.url).toString(),new URL("1mob@2x.69785b6f.jpg",import.meta.url).toString(),new URL("2desk@2x.8c19d163.jpg",import.meta.url).toString(),new URL("2tab@2x.18bde6d7.jpg",import.meta.url).toString(),new URL("2mob@2x.6f894f8f.jpg",import.meta.url).toString(),new URL("3desk@2x.c58e2d86.jpg",import.meta.url).toString(),new URL("3tab@2x.5b680e31.jpg",import.meta.url).toString(),new URL("3mob@2x.f34a86fa.jpg",import.meta.url).toString(),new URL("4desk@2x.967ef7e1.jpg",import.meta.url).toString(),new URL("4tab@2x.a2fd7cc6.jpg",import.meta.url).toString(),new URL("4mob@2x.eaaaa84d.jpg",import.meta.url).toString(),new URL("5desk@2x.d42ed89e.jpg",import.meta.url).toString(),new URL("5tab@2x.efacb099.jpg",import.meta.url).toString(),new URL("5mob@2x.e176f762.jpg",import.meta.url).toString(),new URL("6desk@2x.fefc695a.jpg",import.meta.url).toString(),new URL("6tab@2x.51635a43.jpg",import.meta.url).toString(),new URL("6mob@2x.5df99d17.jpg",import.meta.url).toString(),new URL("7desk@2x.e64cb8f6.jpg",import.meta.url).toString(),new URL("7tab@2x.84e640e3.jpg",import.meta.url).toString(),new URL("7mob@2x.90eaadbf.jpg",import.meta.url).toString(),new URL("8desk@2x.af305e8d.jpg",import.meta.url).toString(),new URL("8tab@2x.7a0607cf.jpg",import.meta.url).toString(),new URL("8mob@2x.ac4ff740.jpg",import.meta.url).toString(),new URL("9desk@2x.600598e0.jpg",import.meta.url).toString(),new URL("9tab@2x.d69c0800.jpg",import.meta.url).toString(),new URL("9mob@2x.5198122d.jpg",import.meta.url).toString(),new URL("10desk@2x.6e9ab827.jpg",import.meta.url).toString(),new URL("10tab@2x.00d99014.jpg",import.meta.url).toString(),new URL("10mob@2x.e4aef60c.jpg",import.meta.url).toString(),new URL("11desk@2x.be416a78.jpg",import.meta.url).toString(),new URL("11tab@2x.ac7bf444.jpg",import.meta.url).toString(),new URL("11mob@2x.89239162.jpg",import.meta.url).toString(),new URL("12desk@2x.c75ee5fa.jpg",import.meta.url).toString(),new URL("12tab@2x.b1dde642.jpg",import.meta.url).toString(),new URL("12mob@2x.c4f0f812.jpg",import.meta.url).toString(),new URL("13desk@2x.60df23ce.jpg",import.meta.url).toString(),new URL("13tab@2x.fe1c9190.jpg",import.meta.url).toString(),new URL("13mob@2x.e9966fb3.jpg",import.meta.url).toString();const c=[{id:1,deskPhoto:"../images/gallery/1x/1desk@1x.jpg",tabPhoto:"../images/gallery/1x/1tab@1x.jpg",mobPhoto:"../images/gallery/1x/1mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/1desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/1tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/1tab@2x.jpg",// photo: desk1x1,
// photo2x: g1x2,
title:"Misha",alt:"tort dlya Mishy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:2,deskPhoto:"../images/gallery/1x/2desk@1x.jpg",tabPhoto:"../images/gallery/1x/2tab@1x.jpg",mobPhoto:"../images/gallery/1x/2mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/2desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/2tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/2tab@2x.jpg",// photo: g2,
title:"",alt:"",description:"July 2023"},{id:3,deskPhoto:"../images/gallery/1x/3desk@1x.jpg",tabPhoto:"../images/gallery/1x/3tab@1x.jpg",mobPhoto:"../images/gallery/1x/3mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/3desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/3tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/3tab@2x.jpg",// photo: g3,
title:"",alt:"",description:"July 2023"},{id:4,deskPhoto:"../images/gallery/1x/4desk@1x.jpg",tabPhoto:"../images/gallery/1x/4tab@1x.jpg",mobPhoto:"../images/gallery/1x/4mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/4desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/4tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/4tab@2x.jpg",// photo: g4,
title:"",alt:"",description:"July 2023"},{id:5,deskPhoto:"../images/gallery/1x/5desk@1x.jpg",tabPhoto:"../images/gallery/1x/5tab@1x.jpg",mobPhoto:"../images/gallery/1x/5mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/5desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/5tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/5tab@2x.jpg",// photo: g5,
title:"",alt:"",description:"July 2023"},{id:6,deskPhoto:"../images/gallery/1x/6desk@1x.jpg",tabPhoto:"../images/gallery/1x/6tab@1x.jpg",mobPhoto:"../images/gallery/1x/6mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/6desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/6tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/6tab@2x.jpg",// photo: g6,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:7,deskPhoto:"../images/gallery/1x/7desk@1x.jpg",tabPhoto:"../images/gallery/1x/7tab@1x.jpg",mobPhoto:"../images/gallery/1x/7mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/7desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/7tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/7tab@2x.jpg",// photo: g7,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:8,deskPhoto:"../images/gallery/1x/8desk@1x.jpg",tabPhoto:"../images/gallery/1x/8tab@1x.jpg",mobPhoto:"../images/gallery/1x/8mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/8desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/8tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/8tab@2x.jpg",// photo: g8,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:9,deskPhoto:"../images/gallery/1x/9desk@1x.jpg",tabPhoto:"../images/gallery/1x/9tab@1x.jpg",mobPhoto:"../images/gallery/1x/9mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/9desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/9tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/9tab@2x.jpg",// photo: g9,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:10,deskPhoto:"../images/gallery/1x/10desk@1x.jpg",tabPhoto:"../images/gallery/1x/10tab@1x.jpg",mobPhoto:"../images/gallery/1x/10mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/10desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/10tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/10tab@2x.jpg",// photo: g10,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:11,deskPhoto:"../images/gallery/1x/11desk@1x.jpg",tabPhoto:"../images/gallery/1x/11tab@1x.jpg",mobPhoto:"../images/gallery/1x/11mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/11desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/11tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/11tab@2x.jpg",// photo: g11,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:12,deskPhoto:"../images/gallery/1x/12desk@1x.jpg",tabPhoto:"../images/gallery/1x/12tab@1x.jpg",mobPhoto:"../images/gallery/1x/12mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/12desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/12tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/12tab@2x.jpg",// photo: g12,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:13,deskPhoto:"../images/gallery/1x/13desk@1x.jpg",tabPhoto:"../images/gallery/1x/13tab@1x.jpg",mobPhoto:"../images/gallery/1x/13mob@1x.jpg",deskPhoto2x:"../images/gallery/2x/13desk@2x.jpg",tabPhoto2x:"../images/gallery/2x/13tab@2x.jpg",mobPhoto2x:"../images/gallery/2x/13tab@2x.jpg",// photo: g13,
title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"}],p={gallery:document.querySelector(".container__gallery")};console.log(c),function(){let e=c.map(({id:e,deskPhoto:t,deskPhoto2x:n,tabPhoto:r,tabPhoto2x:o,mobPhoto:i,mobPhoto2x:a,alt:s,title:l,description:u})=>(console.log(t),`        
            <li class="card" key=${e}>                
                
                    <div class="face face1">
                        <div class="content">
                            <picture>
                                <source srcset="
                                    ${t} 1x, 
                                    ${n} 2x"
                                    media="(min-width:1200px)"/>
                                <source srcset="
                                    ${r} 1x, 
                                    ${o} 2x" 
                                    media="(min-width:768px)"/>
                                <source srcset="
                                    ${i} 1x, 
                                    ${a} 2x" 
                                    media="(max-width:767px)"/>
                                <img
                                    src=${t} 
                                    alt=${s} 
                                    width="250" 
                                    height="200" 
                                    loading="lazy"
                                    sizes="226.8046875px"
                                />
                            </picture>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>${l}</h3>
                            <p>${u}</p>
                        </div>
                    </div>
                 
            </li>        
        `)).join("");p.gallery.insertAdjacentHTML("beforeend",e)}(c),document.getElementById("contactForm").addEventListener("submit",async function(e){e.preventDefault();let t=e.target,n=new FormData(t),r={};console.log(r),n.forEach((e,t)=>{r[t]=e});try{let e=await fetch("https://cakes-backend.onrender.com/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});e.ok?alert("Заказ успішно надіслано!"):alert("Сталася помилка при надсиланні заказу.")}catch(e){console.error("Помилка:",e),alert("Сталася помилка при надсиланні заказу.")}}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".about-item");console.log(e);let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.add("visible"):e.target.classList.remove("visible")})},{threshold:.1});e.forEach(e=>{t.observe(e)})});//# sourceMappingURL=index.da15d2ed.js.map

//# sourceMappingURL=index.da15d2ed.js.map
