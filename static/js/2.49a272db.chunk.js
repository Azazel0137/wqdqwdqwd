(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[2],{1019:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useSpotlightContainer=c,e.default=void 0;var n=u(r(130)),o=r(2),i=u(r(1020));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.disabled,r=t.id,u=t.muted,c=t.restrict,l=a(t,["disabled","id","muted","restrict"]),s=(0,n.default)(i.default,l);return s.setProps({disabled:e,id:r,muted:u,restrict:c}),(0,o.useLayoutEffect)((function(){return function(){s.unload()}}),[s]),{attributes:s.attributes,onBlurCapture:s.onBlurCapture,onFocusCapture:s.onFocusCapture,onPointerEnter:s.onPointerEnter,onPointerLeave:s.onPointerLeave}}var l=c;e.default=l},1020:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SpotlightContainer=e.default=void 0;var n,o=r(93),i=r(410),u=(n=r(257))&&n.__esModule?n:{default:n};function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(t){return(0,i.hasPointerMoved)(t.clientX,t.clientY)},p=function(){function t(e){var r=this,n=e.containerConfig,i=e.navigableFilter,a=e.preserveId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context={},this.props={},this.navigableFilter=function(t){return"function"!==typeof r.filter||!1!==r.filter(t)},this.onBlurCapture=function(t){return!r.shouldPreventBlur||((0,o.stop)(t),!1)},this.onFocusCapture=function(t){return!0!==r.props.disabled||((0,o.stop)(t),r.silentBlur(t),!1)},this.onPointerEnter=(0,o.handle)(f,(function(){return u.default.setActiveContainer(r.id)})).bindAs(this,"onPointerEnter"),this.onPointerLeave=(0,o.handle)((0,o.not)((0,o.forProp)("restrict","self-only")),f,(function(t){var e=t.currentTarget.parentNode.closest("[data-spotlight-container]"),n=u.default.getActiveContainer();e&&n===r.id&&(n=e.dataset.spotlightId,u.default.setActiveContainer(n))})).bindAs(this,"onPointerLeave"),this.id=null,this.canPreserveId=a,this.preserveId=!1,this.config=n,this.filter=i,this.attr={"data-spotlight-container":!0},this.shouldPreventBlur=!1}var e,r,n;return e=t,(r=[{key:"attributes",get:function(){return this.attr}},{key:"setProps",value:function(t){var e=t.disabled,r=t.id,n=t.muted,o=t.restrict;this.props=t,null==this.id||r&&this.id!==r?(this.id&&this.releaseContainer(this.id),this.id=u.default.add(c(c({},this.config),{},{id:r,restrict:o,navigableFilter:this.navigableFilter})),this.preserveId=this.canPreserveId&&this.id===r):u.default.set(this.id,{restrict:o}),this.attr["data-spotlight-id"]=this.id,this.attr["data-spotlight-container-disabled"]=e,this.attr["data-spotlight-container-muted"]=n}},{key:"unload",value:function(){this.releaseContainer()}},{key:"releaseContainer",value:function(){this.preserveId?u.default.unmount(this.id):u.default.remove(this.id)}},{key:"silentBlur",value:function(t){var e=t.target;this.shouldPreventBlur=!0,e.blur(),this.shouldPreventBlur=!1}}])&&s(e.prototype,r),n&&s(e,n),t}();e.SpotlightContainer=p;var d=p;e.default=d},1105:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(2);function o(t,e,r){var o=void 0===r?{}:r,i=o.leading,u=void 0===i||i,a=o.trailing;return function(t,e,r){var o=this,i=Object(n.useRef)(null),u=Object(n.useRef)(0),a=Object(n.useRef)(null),c=Object(n.useRef)([]),l=Object(n.useRef)(),s=Object(n.useRef)(),f=Object(n.useRef)(t),p=Object(n.useRef)(!0);f.current=t;var d=!e&&0!==e&&"undefined"!==typeof window;if("function"!==typeof t)throw new TypeError("Expected a function");e=+e||0;var b=!!(r=r||{}).leading,h=!("trailing"in r)||!!r.trailing,v="maxWait"in r,g=v?Math.max(+r.maxWait||0,e):null;return Object(n.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]),Object(n.useMemo)((function(){var t=function(t){var e=c.current,r=l.current;return c.current=l.current=null,u.current=t,s.current=f.current.apply(r,e)},r=function(t,e){d&&cancelAnimationFrame(a.current),a.current=d?requestAnimationFrame(t):setTimeout(t,e)},n=function(t){if(!p.current)return!1;var r=t-i.current,n=t-u.current;return!i.current||r>=e||r<0||v&&n>=g},y=function(e){return a.current=null,h&&c.current?t(e):(c.current=l.current=null,s.current)},O=function t(){var o=Date.now();if(n(o))return y(o);if(p.current){var a=o-i.current,c=o-u.current,l=e-a,s=v?Math.min(l,g-c):l;r(t,s)}},j=function(){for(var f=[],d=0;d<arguments.length;d++)f[d]=arguments[d];var h=Date.now(),g=n(h);if(c.current=f,l.current=o,i.current=h,g){if(!a.current&&p.current)return u.current=i.current,r(O,e),b?t(i.current):s.current;if(v)return r(O,e),t(i.current)}return a.current||r(O,e),s.current};return j.cancel=function(){a.current&&(d?cancelAnimationFrame(a.current):clearTimeout(a.current)),u.current=0,c.current=i.current=l.current=a.current=null},j.isPending=function(){return!!a.current},j.flush=function(){return a.current?y(Date.now()):s.current},j}),[b,v,e,g,h,d])}(t,e,{maxWait:e,leading:u,trailing:void 0===a||a})}},909:function(t,e,r){var n=r(389),o=r(926),i=r(380),u=r(61);t.exports=function(t,e){return(u(t)?n:o)(t,i(e,3))}},924:function(t,e){t.exports=function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}},926:function(t,e,r){var n=r(387);t.exports=function(t,e){var r=[];return n(t,(function(t,n,o){e(t,n,o)&&r.push(t)})),r}},930:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useSpotlightContainer",{enumerable:!0,get:function(){return c.default}}),e.spotlightDefaultClass=e.SpotlightContainerDecorator=e.default=void 0;var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=n?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r(93)),o=s(r(274)),i=s(r(49)),u=r(2),a=s(r(34)),c=s(r(1019)),l=r(3);function s(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g(t);if(e){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function P(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var w=function(t){return function(e,r,n){return n[t](e,r)}},m={onMouseEnter:(0,n.default)((0,n.forward)("onMouseEnter"),w("onPointerEnter")),onMouseLeave:(0,n.default)((0,n.forward)("onMouseLeave"),w("onPointerLeave")),onFocusCapture:(0,n.default)(w("onFocusCapture"),(0,n.forward)("onFocusCapture")),onBlurCapture:(0,n.default)(w("onBlurCapture"),(0,n.forward)("onBlurCapture"))},C="spottable-default";e.spotlightDefaultClass=C;var E={continue5WayHold:!1,defaultElement:".".concat(C),enterTo:null,navigableFilter:null,preserveId:!1},_=(0,i.default)(E,(function(t,e){var r=t.navigableFilter,n=t.preserveId,i=P(t,["navigableFilter","preserveId"]);function s(t){var u=t.spotlightDisabled,a=t.spotlightId,s=t.spotlightMuted,f=t.spotlightRestrict,p=P(t,["spotlightDisabled","spotlightId","spotlightMuted","spotlightRestrict"]),d=(0,c.default)({id:a,muted:s,disabled:u,restrict:f,containerConfig:i,navigableFilter:r,preserveId:n}),b=(0,o.default)(m,t,d);return(0,l.jsx)(e,O(O(O({},p),d.attributes),b))}return s.propTypes={spotlightDisabled:a.default.bool,spotlightId:a.default.string,spotlightMuted:a.default.bool,spotlightRestrict:a.default.oneOf(["none","self-first","self-only"])},s.defaultProps={spotlightDisabled:!1,spotlightMuted:!1,spotlightRestrict:"self-first"},function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(i,t);var e,r,n,o=h(i);function i(){return p(this,i),o.apply(this,arguments)}return e=i,(r=[{key:"render",value:function(){return(0,l.jsx)(s,O({},this.props))}}])&&d(e.prototype,r),n&&d(e,n),i}(u.Component)}));e.SpotlightContainerDecorator=_;var D=_;e.default=D}}]);
//# sourceMappingURL=2.49a272db.chunk.js.map