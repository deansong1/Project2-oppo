!function(e){function n(i){if(o[i])return o[i].exports;var t=o[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o={};n.m=e,n.c=o,n.p="",n(0)}({0:function(e,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var t=o(68),a=i(t);o(294),o(120);var r=o(295),s=i(r),c=o(300),u=i(c);(0,a.default)(function(){var e=(0,s.default)();OPPO_MODULE_FN.common=e,OPPO_MODULE_FN.common.readyInMiniprogram(function(){document.getElementsByTagName("html")[0].classList.add("miniprogram")});(0,u.default)();OPPO_MODULE_FN.app={}})},68:function(e,n,o){!function(n,o){e.exports=o()}(0,function(){var e,n=[],o=document,i=o.documentElement.doScroll,t=(i?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return t||o.addEventListener("DOMContentLoaded",e=function(){for(o.removeEventListener("DOMContentLoaded",e),t=1;e=n.shift();)e()}),function(e){t?setTimeout(e,0):n.push(e)}})},110:function(e,n){"use strict";e.exports=function(){return{platform:function(){return Modernizr.mobile||!1},screen:function(){return Modernizr.mq("(max-width: 768px)")},touch:function(){return Modernizr.touchevents||!1}}}},112:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n="string"==typeof e?$(e):e;return!!(n&&n.length>0)}},120:function(e,n){"use strict";"undefined"==typeof OPPO_MODULE_FN&&(window.OPPO_MODULE_FN={}),"undefined"==typeof OPPO_CONFIG_ATTR&&(window.OPPO_CONFIG_ATTR={})},263:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=$("#oh-navbag-cart"),n=$("#oh-navbag-order"),o=$("#oh-navbag-login"),i=$("#oh-bag-tip"),t=function(){s(a,r),l()},a=function(t){if(t.cart_number&&t.cart_number>0&&e.find("span").html("购物车 <em>("+t.cart_number+")</em>"),OPPO_MODULE_FN.common.isMiniprogram({success:function(){o.parent("li").remove()},fail:function(){o.on("click.logout",p).find("span").text("退出帐户")}}),t.unpaid&&t.unpaid>0&&(i.removeClass("hide"),n.find("span").html("个人中心 <em>("+t.unpaid+" 单未支付)</em>")),""!=t.append&&$("body").append(t.append),d(t),$(".repair").length>0&&u(t),"undefined"!=typeof sensors){if(sensors.login(t.oid),sensors.registerPage({is_login:!0}),/oppostore/i.test(navigator.userAgent)&&"function"==typeof getCookie&&null!=getCookie("sa_distinct_id"))return;document.cookie="sa_distinct_id="+t.oid+";domain="+document.domain.split(".").slice(-2).join(".")+";path=/"}},r=function(){o.on("click.login",f)},s=function(e,n){$.ajax({url:OPPO_CONFIG_ATTR.auth_check,type:"GET",dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0,cache:!1}).done(function(o){o.data&&o.data.oid?"function"==typeof e&&e(o.data):"function"==typeof n&&n()}).fail(function(){"function"==typeof n&&n()})},c=function(e){s(function(){window.location.href=e},function(){var n=OPPO_CONFIG_ATTR.sso_login_url+"?callback="+encodeURIComponent(e)+"&hideAuth=all";OPPO_MODULE_FN.common.isMiniprogram({success:function(){OPPO_MODULE_FN.common.miniprogramLogin(e)},fail:function(){window.location.href=n}})})},u=function(e){var n=OPPO_CONFIG_ATTR.base_url+"/service/repair"+window.location.search,o=OPPO_CONFIG_ATTR.sso_logout_url+"?callback="+encodeURIComponent(n);$(".repair-header-left span").html(e.name),$(".repair-header-left a").attr("href",o),($(".repair-dealer-search").length>0||$(".repair-list").length>0)&&$(".repair-header-right a").attr("href",n).html("返回首页")},d=function e(n){"undefined"!=typeof NTKF_PARAM&&setTimeout(function(){"undefined"==typeof NTKF?e(n):NTKF.im_updatePageInfo({uid:n.oid,uname:n.name})},300)},l=function(){"undefined"!=typeof NTKF_PARAM&&$('[data-btn="ntkf"]').each(function(e,n){$(n).on("click.openNTKF",function(){var e=$(this).data("login");s(function(){NTKF.im_openInPageChat("")},function(){"open"==e?/oppostore/i.test(navigator.userAgent)?RainbowBridge.callMethod("JSCommondMethod","login",{}):oppo.win.open(location.href,{hideAuth:"all"}):f()})})})},f=function(e,n){if(/oppostore/i.test(navigator.userAgent))RainbowBridge.callMethod("JSCommondMethod","login",{});else{var o=n||window.location.href,i=OPPO_CONFIG_ATTR.sso_login_url+"?callback="+encodeURIComponent(o)+"&hideAuth=all";OPPO_MODULE_FN.common.isMiniprogram({success:function(){OPPO_MODULE_FN.common.miniprogramLogin(o)},fail:function(){window.location.href=i}})}},p=function(){window.location.href=OPPO_CONFIG_ATTR.sso_logout_url+"?callback="+encodeURIComponent(window.location.href)};return{init:t,checkLogin:s,turnToUrl:c,login:f,logout:p,isLogin:function(e,n){return!(!e||!e.status)&&("-100"!==e.status||void f(null,n))},isLoginV3:function(e){return!(!e||!e.code)&&(403!==parseInt(e.code)||void f())}}}},294:function(e,n){"use strict";!function(e){e.fn.scrollUnique=function(){return e(this).each(function(){var n="mousewheel";void 0!==document.mozHidden&&(n="DOMMouseScroll"),e(this).on(n,function(e){var n=this.scrollTop,o=this.scrollHeight,i=this.clientHeight,t=e.originalEvent.wheelDelta?e.originalEvent.wheelDelta:-(e.originalEvent.detail||0);(t>0&&n<=t||t<0&&o-i-n<=-1*t)&&(this.scrollTop=t>0?0:o,e.preventDefault())})})},e.extend({trigger:function(n){var o=void 0;return o=n&&"*"!==n?'[data-trigger*="'+n+'"]':"[data-trigger]",e(o)}});var n=window.navigator.userAgent,o=999,i=void 0,t=void 0;n.indexOf("Edge")>-1&&(i="edge",o=n.match(/Edge\/([\d.]+)/)),n.indexOf("Safari")>-1&&(i="safari",o=n.match(/Version\/([\d.]+).*Safari/)?n.match(/Version\/([\d.]+).*Safari/):n.match(/Safari\/([\d.]+)/)),n.indexOf("Chrome")>-1&&(i="chrome",o=n.match(/Chrome\/([\d.]+)/)),n.indexOf("Firefox")>-1&&(i="firefox",o=n.match(/Firefox\/([\d.]+)/)),n.indexOf("Opera")>-1&&(i="opera",o=n.match(/Opera.([\d.]+)/)),n.indexOf("UBrowser")>-1&&(i="uc",o=n.match(/UBrowser\/([\d.]+)/)),n.indexOf("UCBrowser")>-1&&(i="uc",o=n.match(/UCBrowser\/([\d.]+)/)),n.indexOf("HUAWEI")>-1&&(i="huawei",o=n.match(/Version\/([\d.]+)/)),n.indexOf("Windows")>-1&&(t="win"),n.indexOf("Mac OS")>-1&&(t="mac"),n.indexOf("Linux")>-1&&(t="linux"),n.indexOf("Linux")>-1&&(t="linux"),n.indexOf("OppoBrowser")>-1&&(t="OppoBrowser"),n.indexOf("MSIE")>-1&&(!0,o=n.match(/MSIE (\d+)./),i="ie"),n.indexOf("Trident/7")>-1&&(!0,i="ie");try{n.match(/rv:([\d.]+)\) like Gecko/)&&(i="ie")&&(o=n.match(/rv:([\d.]+)\) like Gecko/)),Modernizr.addTest("ie"+parseInt(o[1]),function(){return!0})}catch(e){}var a={ios:!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:n.indexOf("Android")>-1||n.indexOf("Linux")>-1,mobile:!!n.match(/AppleWebKit.*Mobile.*/)||!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)||n.indexOf("Android")>-1||!!n.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),weixin:n.indexOf("MicroMessenger")>-1,qq:n.indexOf(" QQ")>-1,weibo:n.indexOf("WeiBo")>-1,hd:!!function(){return window.devicePixelRatio>1||!(!window.matchMedia||!window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches)}(),aliapp:n.indexOf("AliApp")>-1,aliappmini:n.indexOf("AlipayClient")>-1,swanmini:n.indexOf("swan")>-1||n.indexOf("baiduboxapp")>-1,oppostore:n.indexOf("oppostore")>-1||n.indexOf("oppocommunity")>-1||n.indexOf("usercenter")>-1,quickapp:n.indexOf("quickapp")>-1};for(var r in a)!function(e){a[e]&&Modernizr.addTest(e,function(){return a[e]})}(r);i&&Modernizr.addTest(i,function(){return!0}),t&&Modernizr.addTest(t,function(){return!0}),"ie"==i&&o[1]<=10&&Modernizr.addTest("lt-10",function(){return!0}),"ie"==i&&o[1]<10&&Modernizr.addTest("lt-9",function(){return!0}),o&&(Modernizr.browserVersion=o[1]),Modernizr.browserName=i}(jQuery)},295:function(e,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var t=o(296),a=i(t),r=o(110),s=i(r),c=o(112),u=i(c),d=o(263),l=i(d);n.default=function(){var e={},n=void 0,o=(0,l.default)(),i=["white","black"],t={},r=function(){var o=e,i=o.mobile,a=o.pc,r=o.$wrap,s=o.$navList,c=o.$menuBtn,u=(o.$productsLinkItem,o.$bagBtn);o.$header;t.utmsource(),t.hideHeaderFooter(),n.screen()?(void 0===i&&(t.navProductsWap(),e.mobile=!0),e.ismobile=!0,t.domReset(!0),u&&u[0].isopen&&f(!0),C(),s.css("display","none")):(void 0===a&&(t.navProducts(),e.pc=!0),e.ismobile=!1,t.domReset(!1),c&&c[0].isopen&&c.trigger("click.list"),u&&u[0].isopen&&f(!1),s.is(":hidden")&&s.css("display","")),void 0===i&&void 0===a&&(e.main=!!r.hasClass("main"),t.navBagWap(),t.notice())};t.navProducts=function(){var n=e,o=(n.$win,n.$header),i=n.$navList,t=n.$productsLink,a=n.$productsMenu,r=(n.$queue,n.$wrap),s=i.find("ul li");s.first().find("a").find("img").first();i.css("display","");var c=!1,u=!0,d=void 0;t.each(function(){var n=new TimelineMax({paused:!0});n.staggerFrom($(this).find("._queue"),.5,{autoAlpha:0,y:18,ease:Cubic.easeOut,delay:.3},.1,"-=.1"),n.eventCallback("onReverseComplete",function(){TweenMax.set($(this).find(".oh-navpopup-products"),{display:"",opacity:0}),$(this).isopen=!1});var i=function(i){c||(n.timeScale(2).reverse(),f(!1),void 0!==e.productsList&&e.productsList.out(),o.removeClass("oh-productslist-show"))},t=function(e){var n=$(window).width(),o=320;switch(!0){case n>1920:o=320;break;case n>1440:o=270;break;default:o=223}u?TweenMax.staggerFromTo(a,.3,{opacity:0,height:0},{opacity:1,height:o+"px",ease:Cubic.easeOut}):TweenMax.set(a,{opacity:0,height:o+"px"})};$(this).on({mouseenter:function(i){$(this).addClass("opened"),$(this).isopen||(c=!0,$(this).isopen=!0,t($(this)),clearTimeout(d),u=!1,f(!0),setTimeout(function(){n.timeScale(1).seek(0).play()},10),r.hasClass("main")&&o.addClass("oh-productslist-show"),void 0!==e.productsList&&e.productsList.in())},mouseleave:function(e){$(this).removeClass("opened"),TweenMax.set(a,{opacity:0,height:0}),c=!1,i(),d=setTimeout(function(){u=!0},50)},click:function(e){}})})},t.navProductsWap=function(){function n(n){n.preventDefault(),c.is(":hidden")&&c.css("display",""),setTimeout(function(e){return $(".oh-navlist-wrapper").scrollTop(0)},500),e.$bagBtn&&e.$bagBtn[0].isopen&&e.$bagBtn.trigger("click.open"),this.isopen?(s.removeClass("openHeaderMenu"),this.isopen=!1,f(!1),h(!1),d&&d.each(function(){$(this).parent().hasClass("active")&&$(this).trigger("click.menu")}),t.showNotice(!0)):(s.addClass("openHeaderMenu"),this.isopen=!0,f(!0),h(!0),t.showNotice(!1),r.off("click").on("click.navmenulayer",function(e){i.trigger("click")}),"undefined"!=typeof _optj&&_optj.push(["_trackEvent","www","nav","menu","open"]))}function o(e){e.preventDefault(),this.isopen?($(this).parent().removeClass("active"),this.isopen=!1):(d.each(function(){$(this).parent().siblings().removeClass("active"),this.isopen=!1}),$(this).parent().addClass("active"),this.isopen=!0,"undefined"!=typeof _optj&&_optj.push(["_trackEvent","www","nav","products","open"]))}var i=$.trigger("open:navList@mobile"),a=e,r=a.$mask,s=a.$header,c=(a.$nav,a.$navList),u=a.$productsLink,d=u.find(".oh-navitem-link");s.on("touchstart touchmove",function(e){e.stopPropagation()}),i.on("click.list",n),d.each(function(){$(this).on("click.menu",o)}),e.$menuBtn=i},t.navBag=function(){function n(n){if(n.preventDefault(),!e.ismobile){var o=this;o.isopen?(c=!1,u&&clearTimeout(u),u=setTimeout(function(){!c&&(a.removeClass("openNavBag"),o.isopen=!1)},100)):(u&&clearTimeout(u),a.addClass("openNavBag"),o.isopen=!0,s[0].isopen=!1,c=!0)}}function o(n){!e.ismobile&&n.preventDefault()}function i(n){var o=this;e.ismobile||(o.isopen?(c=!1,u&&clearTimeout(u),u=setTimeout(function(){!c&&(a.removeClass("openNavBag"),o.isopen=!1)},100)):(u&&clearTimeout(u),o.isopen=!0,e.$bagBtn[0].isopen=!1,c=!0))}var t=e,a=t.$header,r=t.$nav,s=(t.$bagBtn,r.find("#oh-navpopup-bag")),c=!1,u=null;void 0===e.$bagBtn&&(e.$bagBtn=r.find(".oh-nav-link")),e.$bagBtn.on("mouseenter.open mouseleave.open",n).on("click.show",o),s.on("mouseenter.show mouseleave.show",i)},t.navBagWap=function(){function i(o){o.preventDefault(),!n.platform()&&o.stopPropagation(),e.$menuBtn&&e.$menuBtn[0].isopen&&e.$menuBtn.trigger("click.list"),this.isopen?(s.removeClass("openNavBag"),this.isopen=!1,t.showNotice(!0),e.ismobile&&f(!1)):(s.addClass("openNavBag"),this.isopen=!0,t.showNotice(!1),e.ismobile&&f(!0),u.off("click").on("click.closeBag",a),"undefined"!=typeof _optj&&_optj.push(["_trackEvent","www","a","bag","icon"]))}function a(n){e.$bagBtn[0].isopen&&e.$bagBtn.trigger("click.open")}var r=e,s=r.$header,c=r.$nav,u=(r.$bagBtn,r.$mask);void 0===e.$bagBtn&&(e.$bagBtn=c.find(".oh-nav-link")),$("#oh-navpopup-bag a").on("click",a),e.$bagBtn.on("touchstart.open click.open",i),document.addEventListener("scroll",a),$("#oh-navbag-cart").on("click",function(){o.turnToUrl(OPPO_CONFIG_ATTR.store_url+"/cart")}),$("#oh-navbag-order").on("click",function(){o.turnToUrl(OPPO_CONFIG_ATTR.store_url+"/orders")})},t.notice=function(n){var o=!1,i=e,t=i.$notice,r=(new Date).getTime()/1e3,s=t.data("start-time"),c=t.data("end-time");if((0,u.default)(t)&&!v((0,a.default)("oc_notice_id"+t.data("id")))&&!v("is_simple")&&r>s&&r<c){var d=function(n){if(n.preventDefault(),o){var i={autoAlpha:0};e.main||(i={height:0}),TweenMax.to(t,.5,{css:i,onComplete:function(){t.hide(),t[0].isshow=!1}}),g((0,a.default)("oc_notice_id"+t.data("id")),!0),l.off(".close")}};t[0].isshow=!0;var l=t.find(".ont-close"),f=t.find(".ont-layer"),p=e.ismobile?44:55,h=e.main?Cubic.easeInOut:Ease.easeLinear,m=e.main?.8:.5;t.show(),TweenMax.from(f,m,{y:-p,delay:1,ease:h,onComplete:function(){setTimeout(function(e){t.addClass("show-notice")},100),o=!0}}),e.main||(t.css({height:0}),setTimeout(function(e){TweenMax.to(t,m,{height:p,delay:1,ease:h,onComplete:function(){}})})),l.off(".close").on("click.close",d)}},t.showNotice=function(n){var o=e,i=o.$notice;(0,u.default)(i)&&(n?i[0].isshow&&i.is(":hidden")&&e.main&&e.ismobile&&i.show():i[0].isshow&&i.is(":visible")&&e.main&&e.ismobile&&i.hide())},t.utmsource=function(){var e=T("utm_source"),n=T("utm_medium"),o=T("utm_time"),i=T("utm_referer"),t=T("openid"),a=T("utm_campaign");n||(n=""),o||(o=""),i||(i=""),t||(t=""),a||(a=""),""!=t||""!=a?(a=":"+a+"openid"+t,sessionStorage.setItem("utm_campaign",a)):a=sessionStorage.getItem("utm_campaign");var r=void 0;""!=a&&(r=location.hostname.split("."),r=2==r.length?"."+location.hostname:"."+r[r.length-2]+"."+r[r.length-1]),e&&(w("utm_source"),g("utm_source",encodeURIComponent(e+":"+n+":"+o+":"+i+a),15,r))},t.domReset=function(n){var o=e,i=o.$queue,t=o.$productsMenu,a=o.animate;n?[i,t].forEach(function(e){return e.removeAttr("style")}):a&&[i].forEach(function(e){return e.css("opacity",0)})},t.hideHeaderFooter=function(){var e=v("is_simple")||/usercenter|oppocommunity|oppostore|AlipayClient/i.test(navigator.userAgent),n=T("is_simple");(e||null!=n)&&$("html").addClass("is_simple"),!e&&n&&g("is_simple",1,15)};var c=function(n){var o=e,t=o.$header;if((0,u.default)(t))return t.hasClass("oh-theme-"+n)||t.addClass("oh-theme-"+n),i.forEach(function(e){e!==n&&t.removeClass("oh-theme-"+e)}),!0},d=function(n){var o=e,i=o.$header,t=o.$mask,a=o.$win;if(o.$html.hasClass("oc-noscroll"))return void t.css({top:""});i.hasClass("show-mask")&&a.scrollTop()<=i.height()?t.css({top:i.height()-a.scrollTop()}):t.css({top:""})},f=function(n){var o=e,i=o.$header;n?!i.hasClass("show-mask")&&i.addClass("show-mask"):i.hasClass("show-mask")&&i.removeClass("show-mask")},p=function(n){var o=e,i=o.$wrap;i.size()<1||($("#oc-top-mask").size()<1&&i.append('<i id="oc-top-mask" />'),n?!i.hasClass("show-mask")&&i.addClass("show-mask"):i.hasClass("show-mask")&&i.removeClass("show-mask"))},h=function(n,o){var i=e,t=i.$doc,a=i.$win,r=i.$html,s=i.$wrap,c=(i.$header,i._winTop,o||"oc-noscroll"),u=n?a.scrollTop():e._winTop,d=t.height();n?(r.addClass(c),s.size()>0&&TweenMax.set(s,{height:d,marginTop:-u}),a.scrollTop(0)):(r.removeClass(c),s.size()>0&&TweenMax.set(s,{height:"",marginTop:""}),a.scrollTop(u)),n&&(e._winTop=u)},m=function(e,n){function o(e){void 0!==n&&i.is(":visible")&&n()}var i="string"==typeof e?$(e):e;i.on("click.stop",function(e){e.stopPropagation()}),$(document).on("click.outside",o)},v=function(e){return Cookies(e)},g=function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:location.hostname.indexOf("oppo")>-1?"."+location.hostname:location.hostname,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/";Cookies.set(e,n,{expires:o,domain:i,path:t})},w=function(e){Cookies.remove(e)},_=function(e,n){var o;return function(){var i=this,t=arguments;clearTimeout(o),o=setTimeout(function(){e.apply(i,t)},n)}},O=function(e,n){var o=0;return function(){var i=new Date;i-o>n&&(e.apply(this,arguments),o=i)}},T=function(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(n);return null!=o?unescape(o[2]):null},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"navigateBack",o=e||window.location.href;wx.miniProgram.navigateTo({url:"/pages/login/login?option="+n+"&url="+encodeURIComponent(o)})},y=function(e){Modernizr.weixin?wx.miniProgram.getEnv(function(n){n.miniprogram?"function"==typeof e.success&&e.success():"function"==typeof e.fail&&e.fail()}):"function"==typeof e.fail&&e.fail()},C=function(e){function n(){if("miniprogram"===window.__wxjs_environment){var n=v("openid"),o=T("openid");!n&&!!o&&g("openid",T("openid"),3),"function"==typeof e&&e()}}window.WeixinJSBridge&&WeixinJSBridge.invoke?n():document.addEventListener("WeixinJSBridgeReady",n,!1)};return function(){n=(0,s.default)();var i=$("#oc-header"),t=i.find(".oh-nav"),a=t.find(".oh-nav-list"),c=a.find(".oh-item-products"),l=$(".oh-navpopup-products"),f=l.find("._queue");if(!(0,u.default)(i))return!1;i.after('<i id="oc-mask" />');var p=$("#oc-mask");e={$doc:$(document),$win:$(window),$html:$("html"),$notice:$("#oc-notice"),$wrap:$("#oc-wrapper"),$header:i,$nav:t,$navList:a,$productsLink:c,$productsMenu:l,$queue:f,$mask:p},r(),window.addEventListener("resize",r),window.addEventListener("scroll",d),o.init()}(),{changeNavTheme:c,openMask:f,openTopMask:p,noscroll:h,outsideScope:m,getCookies:v,setCookies:g,debounce:_,throttle:O,getQueryString:T,miniprogramLogin:b,isMiniprogram:y,readyInMiniprogram:C}}},296:function(e,n,o){!function(){var n=o(297),i=o(298).utf8,t=o(299),a=o(298).bin,r=function(e,o){e.constructor==String?e=o&&"binary"===o.encoding?a.stringToBytes(e):i.stringToBytes(e):t(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var s=n.bytesToWords(e),c=8*e.length,u=1732584193,d=-271733879,l=-1732584194,f=271733878,p=0;p<s.length;p++)s[p]=16711935&(s[p]<<8|s[p]>>>24)|4278255360&(s[p]<<24|s[p]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;for(var h=r._ff,m=r._gg,v=r._hh,g=r._ii,p=0;p<s.length;p+=16){var w=u,$=d,_=l,O=f;u=h(u,d,l,f,s[p+0],7,-680876936),f=h(f,u,d,l,s[p+1],12,-389564586),l=h(l,f,u,d,s[p+2],17,606105819),d=h(d,l,f,u,s[p+3],22,-1044525330),u=h(u,d,l,f,s[p+4],7,-176418897),f=h(f,u,d,l,s[p+5],12,1200080426),l=h(l,f,u,d,s[p+6],17,-1473231341),d=h(d,l,f,u,s[p+7],22,-45705983),u=h(u,d,l,f,s[p+8],7,1770035416),f=h(f,u,d,l,s[p+9],12,-1958414417),l=h(l,f,u,d,s[p+10],17,-42063),d=h(d,l,f,u,s[p+11],22,-1990404162),u=h(u,d,l,f,s[p+12],7,1804603682),f=h(f,u,d,l,s[p+13],12,-40341101),l=h(l,f,u,d,s[p+14],17,-1502002290),d=h(d,l,f,u,s[p+15],22,1236535329),u=m(u,d,l,f,s[p+1],5,-165796510),f=m(f,u,d,l,s[p+6],9,-1069501632),l=m(l,f,u,d,s[p+11],14,643717713),d=m(d,l,f,u,s[p+0],20,-373897302),u=m(u,d,l,f,s[p+5],5,-701558691),f=m(f,u,d,l,s[p+10],9,38016083),l=m(l,f,u,d,s[p+15],14,-660478335),d=m(d,l,f,u,s[p+4],20,-405537848),u=m(u,d,l,f,s[p+9],5,568446438),f=m(f,u,d,l,s[p+14],9,-1019803690),l=m(l,f,u,d,s[p+3],14,-187363961),d=m(d,l,f,u,s[p+8],20,1163531501),u=m(u,d,l,f,s[p+13],5,-1444681467),f=m(f,u,d,l,s[p+2],9,-51403784),l=m(l,f,u,d,s[p+7],14,1735328473),d=m(d,l,f,u,s[p+12],20,-1926607734),u=v(u,d,l,f,s[p+5],4,-378558),f=v(f,u,d,l,s[p+8],11,-2022574463),l=v(l,f,u,d,s[p+11],16,1839030562),d=v(d,l,f,u,s[p+14],23,-35309556),u=v(u,d,l,f,s[p+1],4,-1530992060),f=v(f,u,d,l,s[p+4],11,1272893353),l=v(l,f,u,d,s[p+7],16,-155497632),d=v(d,l,f,u,s[p+10],23,-1094730640),u=v(u,d,l,f,s[p+13],4,681279174),f=v(f,u,d,l,s[p+0],11,-358537222),l=v(l,f,u,d,s[p+3],16,-722521979),d=v(d,l,f,u,s[p+6],23,76029189),u=v(u,d,l,f,s[p+9],4,-640364487),f=v(f,u,d,l,s[p+12],11,-421815835),l=v(l,f,u,d,s[p+15],16,530742520),d=v(d,l,f,u,s[p+2],23,-995338651),u=g(u,d,l,f,s[p+0],6,-198630844),f=g(f,u,d,l,s[p+7],10,1126891415),l=g(l,f,u,d,s[p+14],15,-1416354905),d=g(d,l,f,u,s[p+5],21,-57434055),u=g(u,d,l,f,s[p+12],6,1700485571),f=g(f,u,d,l,s[p+3],10,-1894986606),l=g(l,f,u,d,s[p+10],15,-1051523),d=g(d,l,f,u,s[p+1],21,-2054922799),u=g(u,d,l,f,s[p+8],6,1873313359),f=g(f,u,d,l,s[p+15],10,-30611744),l=g(l,f,u,d,s[p+6],15,-1560198380),d=g(d,l,f,u,s[p+13],21,1309151649),u=g(u,d,l,f,s[p+4],6,-145523070),f=g(f,u,d,l,s[p+11],10,-1120210379),l=g(l,f,u,d,s[p+2],15,718787259),d=g(d,l,f,u,s[p+9],21,-343485551),u=u+w>>>0,d=d+$>>>0,l=l+_>>>0,f=f+O>>>0}return n.endian([u,d,l,f])};r._ff=function(e,n,o,i,t,a,r){var s=e+(n&o|~n&i)+(t>>>0)+r;return(s<<a|s>>>32-a)+n},r._gg=function(e,n,o,i,t,a,r){var s=e+(n&i|o&~i)+(t>>>0)+r;return(s<<a|s>>>32-a)+n},r._hh=function(e,n,o,i,t,a,r){var s=e+(n^o^i)+(t>>>0)+r;return(s<<a|s>>>32-a)+n},r._ii=function(e,n,o,i,t,a,r){var s=e+(o^(n|~i))+(t>>>0)+r;return(s<<a|s>>>32-a)+n},r._blocksize=16,r._digestsize=16,e.exports=function(e,o){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var i=n.wordsToBytes(r(e,o));return o&&o.asBytes?i:o&&o.asString?a.bytesToString(i):n.bytesToHex(i)}}()},297:function(e,n){!function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(e,n){return e<<n|e>>>32-n},rotr:function(e,n){return e<<32-n|e>>>n},endian:function(e){if(e.constructor==Number)return 16711935&o.rotl(e,8)|4278255360&o.rotl(e,24);for(var n=0;n<e.length;n++)e[n]=o.endian(e[n]);return e},randomBytes:function(e){for(var n=[];e>0;e--)n.push(Math.floor(256*Math.random()));return n},bytesToWords:function(e){for(var n=[],o=0,i=0;o<e.length;o++,i+=8)n[i>>>5]|=e[o]<<24-i%32;return n},wordsToBytes:function(e){for(var n=[],o=0;o<32*e.length;o+=8)n.push(e[o>>>5]>>>24-o%32&255);return n},bytesToHex:function(e){for(var n=[],o=0;o<e.length;o++)n.push((e[o]>>>4).toString(16)),n.push((15&e[o]).toString(16));return n.join("")},hexToBytes:function(e){for(var n=[],o=0;o<e.length;o+=2)n.push(parseInt(e.substr(o,2),16));return n},bytesToBase64:function(e){for(var o=[],i=0;i<e.length;i+=3)for(var t=e[i]<<16|e[i+1]<<8|e[i+2],a=0;a<4;a++)8*i+6*a<=8*e.length?o.push(n.charAt(t>>>6*(3-a)&63)):o.push("=");return o.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var o=[],i=0,t=0;i<e.length;t=++i%4)0!=t&&o.push((n.indexOf(e.charAt(i-1))&Math.pow(2,-2*t+8)-1)<<2*t|n.indexOf(e.charAt(i))>>>6-2*t);return o}};e.exports=o}()},298:function(e,n){var o={utf8:{stringToBytes:function(e){return o.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(o.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var n=[],o=0;o<e.length;o++)n.push(255&e.charCodeAt(o));return n},bytesToString:function(e){for(var n=[],o=0;o<e.length;o++)n.push(String.fromCharCode(e[o]));return n.join("")}}};e.exports=o},299:function(e,n){function o(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&o(e.slice(0,0))}e.exports=function(e){return null!=e&&(o(e)||i(e)||!!e._isBuffer)}},300:function(e,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var t=o(110),a=i(t),r=o(112),s=i(r);n.default=function(){var e={},n=void 0,o=function(){var o=e,a=o.pc,s=o.mobile;n.screen()?(void 0===s&&(e.mobile=!0),e.ismobile=!0,r(!0)):(void 0===a&&(e.pc=!0),e.ismobile=!1,r(!1)),void 0===s&&void 0===a&&(i(),t())},i=function(){function n(n){if(n.preventDefault(),!t)return void($(this).data("link")&&window.open($(this).data("link")));this.isopen?($(this).parent().removeClass("active"),this.isopen=!1):($(this).parent().addClass("active"),this.isopen=!0,e.$directory=$(this))}var o=e,i=o.$footer,t=o.ismobile;i.find(".of-nav").find(".of-directory dl").each(function(e,o){$(this).find("dt").on("click.open",n)})},t=function(){function o(e){e.preventDefault(),s.addClass("openModel"),s[0].isopen=!0,n.screen()&&s.addClass("mask-index-top")&&OPPO_MODULE_FN.common.noscroll(!0),setTimeout(function(e){return l.play()})}function i(){s[0].isopen=!1,n.screen()&&s.removeClass("mask-index-top")&&OPPO_MODULE_FN.common.noscroll(!1),setTimeout(function(e){return l.reverse()})}function t(e){e.preventDefault(),e.stopPropagation(),s[0].isopen&&s.hasClass("openWechat")?i():o(e),s.removeClass("openAlipay").addClass("openWechat")}function a(n){e.ismobile||(n.preventDefault(),n.stopPropagation(),s[0].isopen&&s.hasClass("openAlipay")?i():o(n),s.removeClass("openWechat").addClass("openAlipay"))}var r=e,s=(r.$footer,$(".of-qrcode-model")),c=s.find(".of-qrcode-view"),u=$.trigger("qrcode-wechat"),d=$.trigger("qrcode-alipay"),l=new TimelineMax({paused:!0});l.from(s,.3,{y:15,autoAlpha:0}),u.on("click.qrcode",t),d.on("click.qrcode",a),c.click(function(e){e.stopPropagation()}),s.click(function(e){s[0].isopen&&i()}),OPPO_MODULE_FN.common.outsideScope(c,function(){s[0].isopen&&i()})},r=function(n){var o=e,i=o.$directory;n||i&&i[0].isopen&&i.trigger("click.open"),i=null};return function(){n=(0,a.default)();var i=$("#oc-footer");if(!(0,s.default)(i))return!1;e={$footer:i},o(),window.addEventListener("resize",o,!0)}()}}});