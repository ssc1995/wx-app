(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"27e1":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uTransition:a("8f84").default,uIcon:a("d74d").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-transition",{attrs:{mode:"fade",show:t.show}},[a("v-uni-view",{staticClass:"u-tag-wrapper"},[a("v-uni-view",{staticClass:"u-tag",class:["u-tag--"+t.shape,!t.plain&&"u-tag--"+t.type,t.plain&&"u-tag--"+t.type+"--plain","u-tag--"+t.size,t.plain&&t.plainFill&&"u-tag--"+t.type+"--plain--fill"],style:[{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},t.style],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("icon",[t.icon?a("v-uni-view",{staticClass:"u-tag__icon"},[t.$u.test.image(t.icon)?a("v-uni-image",{style:[t.imgStyle],attrs:{src:t.icon}}):a("u-icon",{attrs:{color:t.elIconColor,name:t.icon,size:t.iconSize}})],1):t._e()]),a("v-uni-text",{staticClass:"u-tag__text",class:["u-tag__text--"+t.type,t.plain&&"u-tag__text--"+t.type+"--plain","u-tag__text--"+t.size],style:[t.textColor]},[t._v(t._s(t.text))])],2),t.closable?a("v-uni-view",{staticClass:"u-tag__close",class:["u-tag__close--"+t.size],style:{backgroundColor:t.closeColor},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.closeHandler.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"close",size:t.closeSize,color:"#ffffff"}})],1):t._e()],1)],1)},n=[]},"295c":function(t,e,a){var i=a("cf2f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("cc939404",i,!0,{sourceMap:!1,shadowMode:!1})},3449:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uLine:a("9f4d").default,uLoadingIcon:a("ee67").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-loadmore",style:[t.$u.addStyle(t.customStyle),{backgroundColor:t.bgColor,marginBottom:t.$u.addUnit(t.marginBottom),marginTop:t.$u.addUnit(t.marginTop),height:t.$u.addUnit(t.height)}]},[t.line?a("u-line",{attrs:{length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed}}):t._e(),a("v-uni-view",{staticClass:"u-loadmore__content",class:"loadmore"==t.status||"nomore"==t.status?"u-more":""},["loading"===t.status&&t.icon?a("v-uni-view",{staticClass:"u-loadmore__content__icon-wrap"},[a("u-loading-icon",{attrs:{color:t.iconColor,size:t.iconSize,mode:t.loadingIcon}})],1):t._e(),a("v-uni-text",{staticClass:"u-line-1",class:["nomore"==t.status&&1==t.isDot?"u-loadmore__content__dot-text":"u-loadmore__content__text"],style:[t.loadTextStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1),t.line?a("u-line",{attrs:{length:"140rpx",color:t.lineColor,hairline:!1,dashed:t.dashed}}):t._e()],1)},n=[]},"41e6":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.activityList=void 0;var i=uni.$u.http;e.activityList=function(t){return i.get("/app/activityInfo/list",{params:t})}},"43df":function(t,e,a){"use strict";var i=a("cfa3"),o=a.n(i);o.a},"4fcf":function(t,e,a){"use strict";a.r(e);var i=a("d9e2c"),o=a("9f3c");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("43df");var r=a("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"50f41d14",null,!1,i["a"],void 0);e["default"]=l.exports},"55d2":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* uni.scss */uni-view[data-v-2cf78b47], uni-scroll-view[data-v-2cf78b47], uni-swiper-item[data-v-2cf78b47]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-tag-wrapper[data-v-2cf78b47]{position:relative}.u-tag[data-v-2cf78b47]{display:flex;flex-direction:row;align-items:center;border-style:solid}.u-tag--circle[data-v-2cf78b47]{border-radius:100px}.u-tag--square[data-v-2cf78b47]{border-radius:3px}.u-tag__icon[data-v-2cf78b47]{margin-right:4px}.u-tag__text--mini[data-v-2cf78b47]{font-size:12px;line-height:12px}.u-tag__text--medium[data-v-2cf78b47]{font-size:13px;line-height:13px}.u-tag__text--large[data-v-2cf78b47]{font-size:15px;line-height:15px}.u-tag--mini[data-v-2cf78b47]{height:22px;line-height:22px;padding:0 5px}.u-tag--medium[data-v-2cf78b47]{height:26px;line-height:22px;padding:0 10px}.u-tag--large[data-v-2cf78b47]{height:32px;line-height:32px;padding:0 15px}.u-tag--primary[data-v-2cf78b47]{background-color:#3c9cff;border-width:1px;border-color:#3c9cff}.u-tag--primary--plain[data-v-2cf78b47]{border-width:1px;border-color:#3c9cff}.u-tag--primary--plain--fill[data-v-2cf78b47]{background-color:#ecf5ff}.u-tag__text--primary[data-v-2cf78b47]{color:#fff}.u-tag__text--primary--plain[data-v-2cf78b47]{color:#3c9cff}.u-tag--error[data-v-2cf78b47]{background-color:#f56c6c;border-width:1px;border-color:#f56c6c}.u-tag--error--plain[data-v-2cf78b47]{border-width:1px;border-color:#f56c6c}.u-tag--error--plain--fill[data-v-2cf78b47]{background-color:#fef0f0}.u-tag__text--error[data-v-2cf78b47]{color:#fff}.u-tag__text--error--plain[data-v-2cf78b47]{color:#f56c6c}.u-tag--warning[data-v-2cf78b47]{background-color:#f9ae3d;border-width:1px;border-color:#f9ae3d}.u-tag--warning--plain[data-v-2cf78b47]{border-width:1px;border-color:#f9ae3d}.u-tag--warning--plain--fill[data-v-2cf78b47]{background-color:#fdf6ec}.u-tag__text--warning[data-v-2cf78b47]{color:#fff}.u-tag__text--warning--plain[data-v-2cf78b47]{color:#f9ae3d}.u-tag--success[data-v-2cf78b47]{background-color:#5ac725;border-width:1px;border-color:#5ac725}.u-tag--success--plain[data-v-2cf78b47]{border-width:1px;border-color:#5ac725}.u-tag--success--plain--fill[data-v-2cf78b47]{background-color:#f5fff0}.u-tag__text--success[data-v-2cf78b47]{color:#fff}.u-tag__text--success--plain[data-v-2cf78b47]{color:#5ac725}.u-tag--info[data-v-2cf78b47]{background-color:#909399;border-width:1px;border-color:#909399}.u-tag--info--plain[data-v-2cf78b47]{border-width:1px;border-color:#909399}.u-tag--info--plain--fill[data-v-2cf78b47]{background-color:#f4f4f5}.u-tag__text--info[data-v-2cf78b47]{color:#fff}.u-tag__text--info--plain[data-v-2cf78b47]{color:#909399}.u-tag__close[data-v-2cf78b47]{position:absolute;z-index:999;top:10px;right:10px;border-radius:100px;background-color:#c6c7cb;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-transform:scale(.6) translate(80%,-80%);transform:scale(.6) translate(80%,-80%)}.u-tag__close--mini[data-v-2cf78b47]{width:18px;height:18px}.u-tag__close--medium[data-v-2cf78b47]{width:22px;height:22px}.u-tag__close--large[data-v-2cf78b47]{width:25px;height:25px}",""]),t.exports=e},"5c4d":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("926b")),n={name:"u-loadmore",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=n},"635c":function(t,e,a){"use strict";a.r(e);var i=a("5c4d"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"6ab8":function(t,e,a){"use strict";var i=a("295c"),o=a.n(i);o.a},"6ca9":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{type:{type:String,default:uni.$u.props.tag.type},disabled:{type:[Boolean,String],default:uni.$u.props.tag.disabled},size:{type:String,default:uni.$u.props.tag.size},shape:{type:String,default:uni.$u.props.tag.shape},text:{type:[String,Number],default:uni.$u.props.tag.text},bgColor:{type:String,default:uni.$u.props.tag.bgColor},color:{type:String,default:uni.$u.props.tag.color},borderColor:{type:String,default:uni.$u.props.tag.borderColor},closeColor:{type:String,default:uni.$u.props.tag.closeColor},name:{type:[String,Number],default:uni.$u.props.tag.name},plainFill:{type:Boolean,default:uni.$u.props.tag.plainFill},plain:{type:Boolean,default:uni.$u.props.tag.plain},closable:{type:Boolean,default:uni.$u.props.tag.closable},show:{type:Boolean,default:uni.$u.props.tag.show},icon:{type:String,default:uni.$u.props.tag.icon}}};e.default=i},7428:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* uni.scss */.container[data-v-50f41d14]{font-size:14px;color:#333;height:100vh}.container .content[data-v-50f41d14]{padding:10px 15px}.header[data-v-50f41d14]{display:flex;align-items:center;margin-bottom:10px}.header .search[data-v-50f41d14]{margin-left:10px}.item[data-v-50f41d14]{margin-top:15px;display:flex;justify-content:flex-start;background-color:#fff;padding:10px;border-radius:4px;box-shadow:0 3px 3px 3px rgba(0,0,0,.1)}.item .mean[data-v-50f41d14]{padding-left:15px;display:flex;flex-direction:column;justify-content:space-between;width:100%}.item .mean .title[data-v-50f41d14]{font-weight:700}.item .mean .time[data-v-50f41d14],\n.item .mean .address[data-v-50f41d14]{font-size:10px;color:#999;line-height:18px}.item .mean .subtitle[data-v-50f41d14]{width:200px;font-size:12px;line-height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item .mean .applic[data-v-50f41d14]{display:flex;justify-content:space-between;align-items:center}",""]),t.exports=e},"906d":function(t,e,a){"use strict";a.r(e);var i=a("ac50"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"926b":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{status:{type:String,default:uni.$u.props.loadmore.status},bgColor:{type:String,default:uni.$u.props.loadmore.bgColor},icon:{type:Boolean,default:uni.$u.props.loadmore.icon},fontSize:{type:[String,Number],default:uni.$u.props.loadmore.fontSize},iconSize:{type:[String,Number],default:uni.$u.props.loadmore.iconSize},color:{type:String,default:uni.$u.props.loadmore.color},loadingIcon:{type:String,default:uni.$u.props.loadmore.loadingIcon},loadmoreText:{type:String,default:uni.$u.props.loadmore.loadmoreText},loadingText:{type:String,default:uni.$u.props.loadmore.loadingText},nomoreText:{type:String,default:uni.$u.props.loadmore.nomoreText},isDot:{type:Boolean,default:uni.$u.props.loadmore.isDot},iconColor:{type:String,default:uni.$u.props.loadmore.iconColor},marginTop:{type:[String,Number],default:uni.$u.props.loadmore.marginTop},marginBottom:{type:[String,Number],default:uni.$u.props.loadmore.marginBottom},height:{type:[String,Number],default:uni.$u.props.loadmore.height},line:{type:Boolean,default:uni.$u.props.loadmore.line},lineColor:{type:String,default:uni.$u.props.loadmore.lineColor},dashed:{type:Boolean,default:uni.$u.props.loadmore.dashed}}};e.default=i},"9f3c":function(t,e,a){"use strict";a.r(e);var i=a("c063"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},ac50:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("6ca9")),n={name:"u-tag",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{}},computed:{style:function(){var t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor:function(){var t={};return this.color&&(t.color=this.color),t},imgStyle:function(){var t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize:function(){var t="large"===this.size?15:"medium"===this.size?13:12;return t},iconSize:function(){var t="large"===this.size?21:"medium"===this.size?19:16;return t},elIconColor:function(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler:function(){this.$emit("close",this.name)},clickHandler:function(){this.$emit("click",this.name)}}};e.default=n},bc55:function(t,e,a){"use strict";a.r(e);var i=a("3449"),o=a("635c");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("6ab8");var r=a("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6e5fb1c2",null,!1,i["a"],void 0);e["default"]=l.exports},c063:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var i=a("41e6"),o={data:function(){return{keyword:"",queryParams:{current:1,pageSize:10,total:0},status:"loadmore",pages:0,swiperList:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],list:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;(0,i.activityList)(this.queryParams).then((function(e){e.success&&(t.list=e.result.records,t.pages=e.result.pages,t.list.length<t.queryParams.pageSize?t.status="nomore":t.status="loadmore")}))},isTime:function(t){var e=(new Date).getTime();return e>t.activityEndTime?"已结束":"".concat(uni.$u.timeFormat(t.activityBeginTime,"yyyy-mm-dd")," ~ ").concat(uni.$u.timeFormat(t.activityEndTime,"yyyy-mm-dd"))},gotoActivity:function(){uni.navigateTo({url:"/pages/activityDetail/activityDetail"})},lower:function(t){this.queryParams.current<this.pages?(this.queryParams.current++,this.status="loading",this.getList()):this.status="noMore"}}};e.default=o},cce3:function(t,e,a){var i=a("55d2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("5ea856e4",i,!0,{sourceMap:!1,shadowMode:!1})},cf2f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* uni.scss */uni-view[data-v-6e5fb1c2], uni-scroll-view[data-v-6e5fb1c2], uni-swiper-item[data-v-6e5fb1c2]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-loadmore[data-v-6e5fb1c2]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1}.u-loadmore__content[data-v-6e5fb1c2]{margin:0 15px;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-loadmore__content__icon-wrap[data-v-6e5fb1c2]{margin-right:8px}.u-loadmore__content__text[data-v-6e5fb1c2]{font-size:14px;color:#606266}.u-loadmore__content__dot-text[data-v-6e5fb1c2]{font-size:15px;color:#909193}",""]),t.exports=e},cfa3:function(t,e,a){var i=a("7428");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("22ec266b",i,!0,{sourceMap:!1,shadowMode:!1})},d9e2c:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uSwiper:a("b919").default,"u-Image":a("9628").default,uTag:a("e850").default,uLoadmore:a("bc55").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-scroll-view",{staticClass:"container",attrs:{"scroll-y":"true","show-scrollbar":!1},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"content"},[a("u-swiper",{attrs:{list:t.swiperList,height:"220",autoplay:!0,circular:!0,indicator:!0,indicatorMode:"dot"}}),a("v-uni-view",[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoActivity.apply(void 0,arguments)}}},[a("v-uni-view",{},[a("u--image",{attrs:{showLoading:!0,src:e.thumImageUrl,width:"100px",height:"100px",radius:"4"}})],1),a("v-uni-view",{staticClass:"mean"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"time"},[t._v("活动时间："+t._s(t.isTime(e)))]),a("v-uni-view",{staticClass:"subtitle"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"address"},[t._v("地址：华容区")]),a("v-uni-view",{staticClass:"applic"},[a("v-uni-view",{},[e.price?a("u-tag",{attrs:{text:e.price,icon:"rmb",type:"error"}}):a("u-tag",{attrs:{text:"免费",plain:!0,size:"mini",type:"warning"}})],1),a("v-uni-view",{staticClass:"applic-btn"},[a("u-tag",{attrs:{text:2==e.property?"线上活动":"线下活动",plain:!0,size:"mini",type:"error"}})],1)],1)],1)],1)})),a("u-loadmore",{attrs:{status:t.status}})],2)],1)],1)},n=[]},deac:function(t,e,a){"use strict";var i=a("cce3"),o=a.n(i);o.a},e850:function(t,e,a){"use strict";a.r(e);var i=a("27e1"),o=a("906d");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("deac");var r=a("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2cf78b47",null,!1,i["a"],void 0);e["default"]=l.exports}}]);