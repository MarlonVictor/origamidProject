(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new P(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function y(){}function m(){}function g(){}var E={};s(E,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&r.call(w,o)&&(E=w);var L=g.prototype=y.prototype=Object.create(E);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=g,s(L,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),s(L,c,"Generator"),s(L,o,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n){var r=document.documentElement,i="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((function(t){r.removeEventListener(t,o)})),n())}t.hasAttribute(i)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,o)}),500)})),t.setAttribute(i,""))}function e(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,i)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=t.apply(n,r);function c(t){e(a,i,o,c,s,"next",t)}function s(t){e(a,i,o,c,s,"throw",t)}c(void 0)}))}}var i=n(757),o=n.n(i);function a(){var t=document.querySelectorAll("[data-number]"),e=document.querySelector(".numbers"),n=new MutationObserver((function(e){e[0].target.classList.contains("active")&&(n.disconnect(),t.forEach((function(t){var e=0,n=+t.innerText,r=Math.floor(n/100),i=setInterval((function(){e+=r,t.innerText=e,e>n&&(t.innerText=n,clearInterval(i))}),20*Math.random())})))}));n.observe(e,{attributes:!0})}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function u(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var y,m,g,E,b,w,L,x,S,k,A=function(){function t(e,n){f(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(n),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return p(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=d(this.slide.children).map((function(e){return{position:t.slidePosition(e),element:e}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){var t,e;this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=(t=this.onResize.bind(this),200,function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e&&clearTimeout(e),e=setTimeout((function(){t.apply(void 0,r),e=null}),200)})}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0),this}}]),t}(),O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(e);if(n){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return u(this,t)});function i(t,e){var n;return f(this,i),(n=r.call(this,t,e)).bindControlEvents(),n}return p(i,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide'.concat(n+1,'">').concat(n+1,"</a></li>")})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){return e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=d(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),i}(A);!function(){var t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){var r=function(t){t.preventDefault(),n.classList.toggle("active")};t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target==this&&r(t)}))}}(),S=document.querySelectorAll('[data-tab="menu"] li'),k=document.querySelectorAll('[data-tab="desc"] section'),S.length&&k.length&&(k[0].classList.add("active"),S.forEach((function(t,e){return t.addEventListener("click",(function(){return function(t){var e=k[t].dataset.anime;k.forEach((function(t){return t.classList.remove("active")})),k[t].classList.add("active",e)}(e)}))}))),function(){var t=document.querySelectorAll("[data-tooltip]");function e(){var t=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerHTML=n,document.body.appendChild(e),e}(this);n.tooltipBox=t,this.addEventListener("mousemove",n),r.element=this,r.tooltipBox=t,this.addEventListener("mouseleave",r)}var n={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},r={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",r),this.element.removeEventListener("mousemove",n)}};t.forEach((function(t){return t.addEventListener("mouseover",e)}))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt');if(t.length){var e=function(){n(this)},n=function(t){t.classList.toggle("active"),t.nextElementSibling.classList.toggle("active")};n(t[0]),t.forEach((function(t){return t.addEventListener("click",e)}))}}(),function(){var t=document.querySelectorAll('[data-scroll="smooth"] a[href^="#"]');if(t.length){var e=function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({block:"start",behavior:"smooth"})};t.forEach((function(t){return t.addEventListener("click",e)}))}}(),function(){function e(e){var n=this;e.preventDefault(),this.classList.add("active"),t(this,["click","touchstart"],(function(){return n.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(t){["click","touchstart"].forEach((function(n){t.addEventListener(n,e)}))}))}(),function(){var t=document.querySelectorAll(".section"),e=.5*window.innerHeight;if(t.length){var n=function(){t.forEach((function(t){t.getBoundingClientRect().top-e<0&&t.classList.add("active")}))};window.addEventListener("scroll",n),n()}}(),function(){var e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),r=["click","touchstart"];if(e){var i=function(i){e.classList.add("active"),n.classList.add("active"),t(n,r,(function(){e.classList.remove("active"),n.classList.remove("active")}))};r.forEach((function(t){return e.addEventListener(t,i)}))}}(),m=(y=document.querySelector("[data-week]")).dataset.week.split(",").map(Number),g=y.dataset.schedule.split(",").map(Number),b=(E=new Date).getDay(),w=E.getHours(),L=-1!==m.indexOf(b),x=w>=g[0]&&w<g[1],L&&x?y.classList.add("open"):y.classList.remove("open"),function(){function t(){return(t=r(o().mark((function t(n){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=document.querySelector(".numbers--list"),t.next=4,fetch(n);case 4:return i=t.sent,t.next=7,i.json();case 7:t.sent.forEach((function(t){var n=e(t);r.appendChild(n)})),a(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(Error(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function e(t){var e=document.createElement("div");return e.classList.add("number--animal"),e.innerHTML="\n            <h3>".concat(t.species,"</h3>\n            <span data-number>").concat(t.total,"</span>\n        "),e}!function(e){t.apply(this,arguments)}("./animals.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector("[data-bitcoin]").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((function(t){return console.log(Error(t))}));var P=new O(".slide",".slide-wrapper");P.init(),P.addControl(".custom-controls")})()})();