(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{355:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(494))&&n.__esModule?n:{default:n};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===d(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===d(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},491:function(e,t,r){var map={"./af":356,"./af.js":356,"./ar":357,"./ar-dz":358,"./ar-dz.js":358,"./ar-kw":359,"./ar-kw.js":359,"./ar-ly":360,"./ar-ly.js":360,"./ar-ma":361,"./ar-ma.js":361,"./ar-sa":362,"./ar-sa.js":362,"./ar-tn":363,"./ar-tn.js":363,"./ar.js":357,"./az":364,"./az.js":364,"./be":365,"./be.js":365,"./bg":366,"./bg.js":366,"./bm":367,"./bm.js":367,"./bn":368,"./bn-bd":369,"./bn-bd.js":369,"./bn.js":368,"./bo":370,"./bo.js":370,"./br":371,"./br.js":371,"./bs":372,"./bs.js":372,"./ca":373,"./ca.js":373,"./cs":374,"./cs.js":374,"./cv":375,"./cv.js":375,"./cy":376,"./cy.js":376,"./da":377,"./da.js":377,"./de":378,"./de-at":379,"./de-at.js":379,"./de-ch":380,"./de-ch.js":380,"./de.js":378,"./dv":381,"./dv.js":381,"./el":382,"./el.js":382,"./en-au":383,"./en-au.js":383,"./en-ca":384,"./en-ca.js":384,"./en-gb":385,"./en-gb.js":385,"./en-ie":386,"./en-ie.js":386,"./en-il":387,"./en-il.js":387,"./en-in":388,"./en-in.js":388,"./en-nz":389,"./en-nz.js":389,"./en-sg":390,"./en-sg.js":390,"./eo":391,"./eo.js":391,"./es":392,"./es-do":393,"./es-do.js":393,"./es-mx":394,"./es-mx.js":394,"./es-us":395,"./es-us.js":395,"./es.js":392,"./et":396,"./et.js":396,"./eu":397,"./eu.js":397,"./fa":398,"./fa.js":398,"./fi":399,"./fi.js":399,"./fil":400,"./fil.js":400,"./fo":401,"./fo.js":401,"./fr":402,"./fr-ca":403,"./fr-ca.js":403,"./fr-ch":404,"./fr-ch.js":404,"./fr.js":402,"./fy":405,"./fy.js":405,"./ga":406,"./ga.js":406,"./gd":407,"./gd.js":407,"./gl":408,"./gl.js":408,"./gom-deva":409,"./gom-deva.js":409,"./gom-latn":410,"./gom-latn.js":410,"./gu":411,"./gu.js":411,"./he":412,"./he.js":412,"./hi":413,"./hi.js":413,"./hr":414,"./hr.js":414,"./hu":415,"./hu.js":415,"./hy-am":416,"./hy-am.js":416,"./id":417,"./id.js":417,"./is":418,"./is.js":418,"./it":419,"./it-ch":420,"./it-ch.js":420,"./it.js":419,"./ja":421,"./ja.js":421,"./jv":422,"./jv.js":422,"./ka":423,"./ka.js":423,"./kk":424,"./kk.js":424,"./km":425,"./km.js":425,"./kn":426,"./kn.js":426,"./ko":427,"./ko.js":427,"./ku":428,"./ku.js":428,"./ky":429,"./ky.js":429,"./lb":430,"./lb.js":430,"./lo":431,"./lo.js":431,"./lt":432,"./lt.js":432,"./lv":433,"./lv.js":433,"./me":434,"./me.js":434,"./mi":435,"./mi.js":435,"./mk":436,"./mk.js":436,"./ml":437,"./ml.js":437,"./mn":438,"./mn.js":438,"./mr":439,"./mr.js":439,"./ms":440,"./ms-my":441,"./ms-my.js":441,"./ms.js":440,"./mt":442,"./mt.js":442,"./my":443,"./my.js":443,"./nb":444,"./nb.js":444,"./ne":445,"./ne.js":445,"./nl":446,"./nl-be":447,"./nl-be.js":447,"./nl.js":446,"./nn":448,"./nn.js":448,"./oc-lnc":449,"./oc-lnc.js":449,"./pa-in":450,"./pa-in.js":450,"./pl":451,"./pl.js":451,"./pt":452,"./pt-br":453,"./pt-br.js":453,"./pt.js":452,"./ro":454,"./ro.js":454,"./ru":455,"./ru.js":455,"./sd":456,"./sd.js":456,"./se":457,"./se.js":457,"./si":458,"./si.js":458,"./sk":459,"./sk.js":459,"./sl":460,"./sl.js":460,"./sq":461,"./sq.js":461,"./sr":462,"./sr-cyrl":463,"./sr-cyrl.js":463,"./sr.js":462,"./ss":464,"./ss.js":464,"./sv":465,"./sv.js":465,"./sw":466,"./sw.js":466,"./ta":467,"./ta.js":467,"./te":468,"./te.js":468,"./tet":469,"./tet.js":469,"./tg":470,"./tg.js":470,"./th":471,"./th.js":471,"./tk":472,"./tk.js":472,"./tl-ph":473,"./tl-ph.js":473,"./tlh":474,"./tlh.js":474,"./tr":475,"./tr.js":475,"./tzl":476,"./tzl.js":476,"./tzm":477,"./tzm-latn":478,"./tzm-latn.js":478,"./tzm.js":477,"./ug-cn":479,"./ug-cn.js":479,"./uk":480,"./uk.js":480,"./ur":481,"./ur.js":481,"./uz":482,"./uz-latn":483,"./uz-latn.js":483,"./uz.js":482,"./vi":484,"./vi.js":484,"./x-pseudo":485,"./x-pseudo.js":485,"./yo":486,"./yo.js":486,"./zh-cn":487,"./zh-cn.js":487,"./zh-hk":488,"./zh-hk.js":488,"./zh-mo":489,"./zh-mo.js":489,"./zh-tw":490,"./zh-tw.js":490};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=491},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return F.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=D(r(493)),o=D(r(496)),d=D(r(497)),l=D(r(498)),f=D(r(499)),c=D(r(500)),m=D(r(501)),v=D(r(502)),j=D(r(503)),y=D(r(504)),h=D(r(505)),$=D(r(506)),_=D(r(507)),P=D(r(508)),w=D(r(509)),x=D(r(510)),O=D(r(511)),k=D(r(512)),F=D(r(513)),z=D(r(514)),A=D(r(515)),M=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(355));function D(e){return e&&e.__esModule?e:{default:e}}t.helpers=M},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},494:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(495).withParams:r(257).withParams;t.default=n}).call(this,r(118))},495:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(68))},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("numeric",/^[0-9]*$/);t.default=n},498:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(d)}));t.default=o;var d=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},503:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},513:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(355);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},514:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},515:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(355).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},522:function(e,t,r){"use strict";r.r(t);r(13),r(12),r(9),r(15),r(11),r(16);var n=r(3),o=r(28),d=(r(67),r(354)),l=r.n(d),f=r(492);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{groups:null,addForm:{mail:null,password:null,repeatPassword:null,f:null,i:null,o:null,dt_birth:null,groups:[]},loading:null,typeAlert:null,alert:!1,msgAlert:{head:null,body:null}}},validations:{addForm:{mail:{required:f.required,email:f.email},password:{required:f.required,minLength:Object(f.minLength)(6)},repeatPassword:{required:f.required,sameAs:Object(f.sameAs)("password")},f:{required:f.required,minLength:Object(f.minLength)(2)},i:{required:f.required,minLength:Object(f.minLength)(2)},o:{},dt_birth:{required:f.required},groups:{}}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get(e.$root.context.env.backendUrl+"/users_old/groups");case 3:r=t.sent,e.groups=r.data.groups,e.$v.$reset(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{showAlert:function(e,t,r){this.typeAlert=e,this.alert=!0,this.msgAlert={head:t,body:r}},hideAlert:function(){this.typeAlert=null,this.alert=!1,this.msgAlert={head:null,body:null}},resetForm:function(){this.addForm={mail:null,password:null,repeatPassword:null,f:null,i:null,o:null,dt_birth:null,groups:[]},this.$v.$reset()},addUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hideAlert(),e.$v.addForm.mail.$dirty&&e.$v.addForm.password.$dirty&&e.$v.addForm.repeatPassword.$dirty&&e.$v.addForm.f.$dirty&&e.$v.addForm.i.$dirty&&e.$v.addForm.dt_birth.$dirty){t.next=5;break}e.showAlert("danger","Внимание","Заполните все обязательные поля"),t.next=26;break;case 5:return r=e.$root.context.env.backendUrl+"/users_old/addUser",n=m(m({},e.addForm),{},{dt_birth:l()(e.addForm.dt_birth).format("DD.MM.YYYY")}),o={onUploadProgress:function(e){this.loading=parseInt(Math.round(e.loaded/e.total*100))}.bind(e),validateStatus:function(e){return e>=200&&e<500}},t.prev=8,t.next=11,e.$axios.post(r,n,o);case 11:if(!((d=t.sent).status>=400)){t.next=14;break}throw new Error(d.status+" - "+d.statusText);case 14:if(d.data.id){t.next=16;break}throw new Error("Не пришел идентификатор пользователя");case 16:e.loading=null,e.showAlert("success","Внимание","Пользоатель зарегистрирован"),e.resetForm(),t.next=26;break;case 21:t.prev=21,t.t0=t.catch(8),e.loading=null,e.showAlert("danger","Внимание","В результате регистрации пользователя произошла ошибка. Проверте введенные данные в форму и повторите попытку"),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[8,21]])})))()}},mounted:function(){var e=this;this.$root.$socket.on("changedGroup",(function(){e.$fetch()}))}},j=r(61),component=Object(j.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h1",[e._v("Регистрация нового пользователя")])]),e._v(" "),r("b-col",{attrs:{cols:"12",xl:"6"}},[r("div",{staticStyle:{height:"2rem"}},[e.loading?r("b-progress",{attrs:{value:e.loading,max:"100","show-progress":"",animated:""}},[r("b-progress-bar",{attrs:{value:e.loading,label:e.loading+"%"}})],1):e._e()],1),e._v(" "),e.alert?r("b-alert",{attrs:{show:"",variant:e.typeAlert?e.typeAlert:null}},[r("h4",[e._v(e._s(e.msgAlert.head))]),e._v(" "),r("p",[e._v(e._s(e.msgAlert.body))])]):e._e(),e._v(" "),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.addUser(t)},reset:function(t){return t.preventDefault(),e.resetForm(t)}}},[r("b-form-group",{attrs:{label:"Email","label-for":"Email"}},[r("b-form-input",{attrs:{id:"Email",disabled:Boolean(e.loading),type:"email",state:e.$v.addForm.mail.$dirty?!e.$v.addForm.mail.$invalid:null},model:{value:e.$v.addForm.mail.$model,callback:function(t){e.$set(e.$v.addForm.mail,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.mail.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"F"}},[e._v("\n                  Поле должно содержать корректный email адрес\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Пароль","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",disabled:Boolean(e.loading),type:"text",state:e.$v.addForm.password.$dirty?!e.$v.addForm.password.$invalid:null},model:{value:e.$v.addForm.password.$model,callback:function(t){e.$set(e.$v.addForm.password,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.password.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Password"}},[e._v("\n                  Пароль должен быть не менее 6 символов\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Повторите пароль","label-for":"RepeatPassword"}},[r("b-form-input",{attrs:{id:"RepeatPassword",disabled:Boolean(e.loading),type:"text",state:e.$v.addForm.repeatPassword.$dirty?!e.$v.addForm.repeatPassword.$invalid:null},model:{value:e.$v.addForm.repeatPassword.$model,callback:function(t){e.$set(e.$v.addForm.repeatPassword,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.repeatPassword.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"RepeatPassword"}},[e._v("\n                  Пароли не совпадают\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Фамилия","label-for":"F"}},[r("b-form-input",{attrs:{id:"F",disabled:Boolean(e.loading),type:"text",state:e.$v.addForm.f.$dirty?!e.$v.addForm.f.$invalid:null},model:{value:e.$v.addForm.f.$model,callback:function(t){e.$set(e.$v.addForm.f,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.f.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"F"}},[e._v("\n                  Поле должно содержать хотя бы два символа\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Имя","label-for":"I"}},[r("b-form-input",{attrs:{id:"I",disabled:Boolean(e.loading),type:"text",state:e.$v.addForm.i.$dirty?!e.$v.addForm.i.$invalid:null},model:{value:e.$v.addForm.i.$model,callback:function(t){e.$set(e.$v.addForm.i,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.i.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"I"}},[e._v("\n                  Поле должно содержать хотя бы два символа\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Отчество","label-for":"O"}},[r("b-form-input",{attrs:{id:"O",disabled:Boolean(e.loading),type:"text",state:e.$v.addForm.o.$dirty?!e.$v.addForm.o.$invalid:null},model:{value:e.$v.addForm.o.$model,callback:function(t){e.$set(e.$v.addForm.o,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.o.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"O"}})],1),e._v(" "),r("b-form-group",{attrs:{label:"Дата рожденья","label-for":"DB"}},[r("b-form-datepicker",{attrs:{id:"DB",disabled:Boolean(e.loading),state:e.$v.addForm.dt_birth.$dirty?!e.$v.addForm.dt_birth.$invalid:null,placeholder:"","date-format-options":{day:"numeric",month:"numeric",year:"numeric"},locale:"ru"},model:{value:e.$v.addForm.dt_birth.$model,callback:function(t){e.$set(e.$v.addForm.dt_birth,"$model","string"==typeof t?t.trim():t)},expression:"$v.addForm.dt_birth.$model"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"DB"}},[e._v("\n                  Поле обязательно для заполнения\n              ")])],1),e._v(" "),r("b-form-group",{attrs:{label:"Группы"}},[r("b-form-checkbox-group",{attrs:{stacked:"",disabled:Boolean(e.loading)},model:{value:e.$v.addForm.groups.$model,callback:function(t){e.$set(e.$v.addForm.groups,"$model",t)},expression:"$v.addForm.groups.$model"}},e._l(e.groups,(function(t){return r("b-form-checkbox",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),e._v(" "),r("div",[r("b-button",{staticClass:"float-left mx-2",attrs:{type:"button",variant:"secondary"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("Назад")]),e._v(" "),r("b-button",{staticClass:"float-right mx-2",attrs:{type:"submit",variant:"primary"}},[e._v("Редактировать")]),e._v(" "),r("b-button",{staticClass:"float-right mx-2",attrs:{type:"reset",variant:"secondary"}},[e._v("Сбросить")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);