(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{482:function(t,r,e){var content=e(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(117).default)("1b7833da",content,!0,{sourceMap:!1})},515:function(t,r,e){"use strict";e(482)},516:function(t,r,e){var n=e(116)(!1);n.push([t.i,".avatar_block{padding:.5rem 1.5rem!important;border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important;background-color:#f8f9fa!important}.avatar{height:100px!important;width:100px!important;min-width:100px!important}.upload_avatar{display:none;position:absolute;top:2.3rem;left:3.1rem;padding:.1rem .4rem;border-radius:.25rem!important;color:#fff!important;background-color:#007bff;border-color:#007bff}.avatar:hover+.upload_avatar{display:block}.upload_avatar:hover{display:block;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}",""]),t.exports=n},524:function(t,r,e){"use strict";e.r(r);var n=e(46),o=e(3),c=e(28),l=(e(35),e(53),e(254),e(56),e(62),e(13),e(12),e(9),e(15),e(11),e(16),e(66),e(514));function d(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var f={components:{AvatarCropper:e.n(l).a},data:function(){return{user:{id_user:null,mail:null,f:null,i:null,o:null,dt_birth:null,id_avatar:null,friends:[]},status:!1,avatarSRC:null}},computed:{client:function(){return this.$auth.$state.user}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.getStatus(),r.next=3,t.getUserData();case 3:return r.next=5,t.getAvatar(t.user.id_avatar);case 5:return t.avatarSRC=r.sent,r.next=8,t.getUserFriends();case 8:case"end":return r.stop()}}),r)})))()},methods:{getStatus:function(){var t=this;this.$root.$socket.emit("client_status",this.client.id_user,(function(r){t.status=r}))},getAvatar:function(t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,r.$axios.get(r.$root.context.env.backendUrl+"/files/"+t,{responseType:"arraybuffer"});case 4:return n=e.sent,o=new Blob([n.data],{type:n.headers["content-type"]}),e.abrupt("return",URL.createObjectURL(o).toString());case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getUserData:function(){var t=this;return this.$axios.get(this.$root.context.env.backendUrl+"/users/"+this.$auth.user.id_user).then((function(r){if(!r.data.id_user)throw new Error("Не удалость получить данные поьзователя");t.user=v(v({},t.user),r.data)})).catch((function(t){console.log(t)}))},getUserFriends:function(){var t=this;return this.$axios.get(this.$root.context.env.backendUrl+"/users/"+this.$auth.user.id_user+"/friends").then(function(){var r=Object(c.a)(regeneratorRuntime.mark((function r(e){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=regeneratorRuntime.keys(e.data);case 1:if((r.t1=r.t0()).done){r.next=9;break}return o=r.t1.value,console.log(e.data[o].id_avatar),r.next=6,t.getAvatar(e.data[o].id_avatar);case 6:e.data[o].avatarSRC=r.sent,r.next=1;break;case 9:t.user.friends=Object(n.a)(e.data);case 10:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.$root.$socket.on("changedUser",function(){var r=Object(c.a)(regeneratorRuntime.mark((function r(e){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!=t.$auth.$state.user.id_user){r.next=6;break}return r.next=3,t.getUserData();case 3:return r.next=5,t.getAvatar(t.user.id_avatar);case 5:t.avatarSRC=r.sent;case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}},h=(e(515),e(77)),component=Object(h.a)(f,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6",lg:"5",xl:"4"}},[e("div",{staticClass:"avatar_block"},[e("b-row",[e("b-col",{attrs:{cols:"12",sm:"3",md:"4",lg:"5",xl:"5"}},[e("b-avatar",{staticClass:"avatar",attrs:{id:"avatar",variant:"light",src:t.avatarSRC}}),t._v(" "),e("a",{staticClass:"upload_avatar",attrs:{id:"upload_avatar"}},[e("b-icon-upload")],1),t._v(" "),e("avatar-cropper",{attrs:{trigger:"#upload_avatar","upload-url":t.$root.context.env.backendUrl+"/files/upload_avatar","upload-headers":{Authorization:t.$auth.$storage._state["_token.local"]},"upload-form-data":{id_user:t.user.id_user},labels:{submit:"Загрузить",cancel:"Закрыть"},"cropper-options":{movable:!0,zoomable:!0}}})],1),t._v(" "),e("b-col",{attrs:{cols:"12",sm:"9",md:"8",lg:"7",xl:"7"}},[e("div",[e("strong",[t._v(t._s(t.user.f)+" "),e("br"),t._v(" "+t._s(t.user.i)+" "+t._s(t.user.o))])]),t._v(" "),e("div",[e("strong",{class:t.status?"text-success":"text-danger"},[t._v(t._s(t.status?"online":"offline"))])])]),t._v(" "),e("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("b-button",{staticClass:"m-2",attrs:{to:"edit",variant:"outline-success"}},[t._v("Редактировать")])],1)],1)],1),t._v(" "),e("b-list-group",{staticClass:"w-100"},[e("b-list-group-item",{staticClass:"border-0",attrs:{to:"/friends"}},[e("div",{staticClass:"mb-1 font-weight-bold"},[t._v("Друзья:")]),t._v(" "),e("b-row",[t._l(t.user.friends.slice(0,6),(function(r){return e("b-col",{key:r.id_user,staticClass:"text-center"},[e("b-avatar",{attrs:{to:"/user/"+r.id_user,id:"a_"+r.id_user,variant:"light",src:r.avatarSRC}}),t._v(" "),e("b-tooltip",{attrs:{target:"a_"+r.id_user,triggers:"hover",placement:"bottom"}},[t._v("\n                "+t._s(r.f)+" "+t._s(r.i)+" "+t._s(r.o)+"\n              ")])],1)})),t._v(" "),e("b-col",{staticClass:"text-center"},[e("b-avatar",{attrs:{to:"/friends",variant:"light",icon:"three-dots"}})],1)],2)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"12",md:"6",lg:"7",xl:"8"}},[t._v("\n      Тут набор card с пагинацией\n    ")])],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);