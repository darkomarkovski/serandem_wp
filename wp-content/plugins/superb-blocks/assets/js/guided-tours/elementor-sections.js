(()=>{"use strict";let e={};function t(t={}){e={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...t}}function o(t){return t?e[t]:e}function n(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}function i(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap((e=>{const o=e.matches(t),n=Array.from(e.querySelectorAll(t));return[...o?[e]:[],...n]})).filter((e=>"none"!==getComputedStyle(e).pointerEvents&&function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}(e)))}function r(e){if(!e||function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e))return;const t=o("smoothScroll");e.scrollIntoView({behavior:!t||s(e)?"auto":"smooth",inline:"center",block:"center"})}function s(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}let d={};function l(e,t){d[e]=t}function a(e){return e?d[e]:d}function p(){d={}}let c={};function u(e,t){c[e]=t}function v(e){var t;null==(t=c[e])||t.call(c)}function m(e){if(!e)return;const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:t.width,height:t.height};l("__activeStagePosition",o),h(o)}function h(e){const t=a("__overlaySvg");if(!t)return void function(e){const t=function(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",w(e)),r.style.fill=o("overlayColor")||"rgb(0,0,0)",r.style.opacity=`${o("overlayOpacity")}`,r.style.pointerEvents="auto",r.style.cursor="auto",i.appendChild(r),i}(e);document.body.appendChild(t),C(t,(e=>{"path"===e.target.tagName&&v("overlayClick")})),l("__overlaySvg",t)}(e);const n=t.firstElementChild;if("path"!==(null==n?void 0:n.tagName))throw new Error("no path element found in stage svg");n.setAttribute("d",w(e))}function w(e){const t=window.innerWidth,n=window.innerHeight,i=o("stagePadding")||0,r=o("stageRadius")||0,s=e.width+2*i,d=e.height+2*i,l=Math.min(r,s/2,d/2),a=Math.floor(Math.max(l,0)),p=s-2*a,c=d-2*a;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z\n    M${e.x-i+a},${e.y-i} h${p} a${a},${a} 0 0 1 ${a},${a} v${c} a${a},${a} 0 0 1 -${a},${a} h-${p} a${a},${a} 0 0 1 -${a},-${a} v-${c} a${a},${a} 0 0 1 ${a},-${a} z`}function b(e){const{element:t}=e;let i="string"==typeof t?document.querySelector(t):t;i||(i=function(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}()),function(e,t){const i=Date.now(),s=a("__activeStep"),d=a("__activeElement")||e,p=!d||d===e,c="driver-dummy-element"===e.id,u="driver-dummy-element"===d.id,v=o("animate"),w=t.onHighlightStarted||o("onHighlightStarted"),b=(null==t?void 0:t.onHighlighted)||o("onHighlighted"),g=(null==s?void 0:s.onDeselected)||o("onDeselected"),f=o(),y=a();!p&&g&&g(u?void 0:d,s,{config:f,state:y}),w&&w(c?void 0:e,t,{config:f,state:y});const x=!p&&v;let C=!1;(function(){const e=a("popover");e&&(e.wrapper.style.display="none")})(),l("previousStep",s),l("previousElement",d),l("activeStep",t),l("activeElement",e);const _=()=>{if(a("__transitionCallback")!==_)return;const r=Date.now()-i,p=400-r<=200;t.popover&&p&&!C&&x&&(k(e,t),C=!0),o("animate")&&r<400?function(e,t,o,i){let r=a("__activeStagePosition");const s=r||o.getBoundingClientRect(),d=i.getBoundingClientRect();r={x:n(e,s.x,d.x-s.x,t),y:n(e,s.y,d.y-s.y,t),width:n(e,s.width,d.width-s.width,t),height:n(e,s.height,d.height-s.height,t)},h(r),l("__activeStagePosition",r)}(r,400,d,e):(m(e),b&&b(c?void 0:e,t,{config:o(),state:a()}),l("__transitionCallback",void 0),l("__previousStep",s),l("__previousElement",d),l("__activeStep",t),l("__activeElement",e)),window.requestAnimationFrame(_)};l("__transitionCallback",_),window.requestAnimationFrame(_),r(e),!x&&t.popover&&k(e,t),d.classList.remove("driver-active-element","driver-no-interaction"),d.removeAttribute("aria-haspopup"),d.removeAttribute("aria-expanded"),d.removeAttribute("aria-controls"),o("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}(i,e)}function g(){const e=a("__activeElement"),t=a("__activeStep");e&&(m(e),function(){const e=a("__activeStagePosition"),t=a("__overlaySvg");if(!e)return;if(!t)return void console.warn("No stage svg found.");const o=window.innerWidth,n=window.innerHeight;t.setAttribute("viewBox",`0 0 ${o} ${n}`)}(),S(e,t))}function f(){const e=a("__resizeTimeout");e&&window.cancelAnimationFrame(e),l("__resizeTimeout",window.requestAnimationFrame(g))}function y(e){var t;if(!a("isInitialized")||"Tab"!==e.key&&9!==e.keyCode)return;const o=a("__activeElement"),n=null==(t=a("popover"))?void 0:t.wrapper,r=i([...n?[n]:[],...o?[o]:[]]),s=r[0],d=r[r.length-1];if(e.preventDefault(),e.shiftKey){const e=r[r.indexOf(document.activeElement)-1]||d;null==e||e.focus()}else{const e=r[r.indexOf(document.activeElement)+1]||s;null==e||e.focus()}}function x(e){(o("allowKeyboardControl")??1)&&("Escape"===e.key?v("escapePress"):"ArrowRight"===e.key?v("arrowRightPress"):"ArrowLeft"===e.key&&v("arrowLeftPress"))}function C(e,t,o){const n=(t,n)=>{const i=t.target;e.contains(i)&&((!o||o(i))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()),null==n||n(t))};document.addEventListener("pointerdown",n,!0),document.addEventListener("mousedown",n,!0),document.addEventListener("pointerup",n,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",(e=>{n(e,t)}),!0)}function k(e,t){var n,s;let d=a("popover");d&&document.body.removeChild(d.wrapper),d=function(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const o=document.createElement("header");o.id="driver-popover-title",o.classList.add("driver-popover-title"),o.style.display="none",o.innerText="Popover Title";const n=document.createElement("div");n.id="driver-popover-description",n.classList.add("driver-popover-description"),n.style.display="none",n.innerText="Popover description is here";const i=document.createElement("button");i.type="button",i.classList.add("driver-popover-close-btn"),i.setAttribute("aria-label","Close"),i.innerHTML="&times;";const r=document.createElement("footer");r.classList.add("driver-popover-footer");const s=document.createElement("span");s.classList.add("driver-popover-progress-text"),s.innerText="";const d=document.createElement("span");d.classList.add("driver-popover-navigation-btns");const l=document.createElement("button");l.type="button",l.classList.add("driver-popover-prev-btn"),l.innerHTML="&larr; Previous";const a=document.createElement("button");return a.type="button",a.classList.add("driver-popover-next-btn"),a.innerHTML="Next &rarr;",d.appendChild(l),d.appendChild(a),r.appendChild(s),r.appendChild(d),e.appendChild(i),e.appendChild(t),e.appendChild(o),e.appendChild(n),e.appendChild(r),{wrapper:e,arrow:t,title:o,description:n,footer:r,previousButton:l,nextButton:a,closeButton:i,footerButtons:d,progress:s}}(),document.body.appendChild(d.wrapper);const{title:p,description:c,showButtons:u,disableButtons:m,showProgress:h,nextBtnText:w=o("nextBtnText")||"Next &rarr;",prevBtnText:b=o("prevBtnText")||"&larr; Previous",progressText:g=o("progressText")||"{current} of {total}"}=t.popover||{};d.nextButton.innerHTML=w,d.previousButton.innerHTML=b,d.progress.innerHTML=g,p?(d.title.innerText=p,d.title.style.display="block"):d.title.style.display="none",c?(d.description.innerHTML=c,d.description.style.display="block"):d.description.style.display="none";const f=u||o("showButtons"),y=h||o("showProgress")||!1,x=(null==f?void 0:f.includes("next"))||(null==f?void 0:f.includes("previous"))||y;d.closeButton.style.display=f.includes("close")?"block":"none",x?(d.footer.style.display="flex",d.progress.style.display=y?"block":"none",d.nextButton.style.display=f.includes("next")?"block":"none",d.previousButton.style.display=f.includes("previous")?"block":"none"):d.footer.style.display="none";const k=m||o("disableButtons")||[];null!=k&&k.includes("next")&&(d.nextButton.disabled=!0,d.nextButton.classList.add("driver-popover-btn-disabled")),null!=k&&k.includes("previous")&&(d.previousButton.disabled=!0,d.previousButton.classList.add("driver-popover-btn-disabled")),null!=k&&k.includes("close")&&(d.closeButton.disabled=!0,d.closeButton.classList.add("driver-popover-btn-disabled"));const _=d.wrapper;_.style.display="block",_.style.left="",_.style.top="",_.style.bottom="",_.style.right="",_.id="driver-popover-content",_.setAttribute("role","dialog"),_.setAttribute("aria-labelledby","driver-popover-title"),_.setAttribute("aria-describedby","driver-popover-description"),d.arrow.className="driver-popover-arrow";const L=(null==(n=t.popover)?void 0:n.popoverClass)||o("popoverClass")||"";_.className=`driver-popover ${L}`.trim(),C(d.wrapper,(n=>{var i,r,s;const d=n.target,l=(null==(i=t.popover)?void 0:i.onNextClick)||o("onNextClick"),p=(null==(r=t.popover)?void 0:r.onPrevClick)||o("onPrevClick"),c=(null==(s=t.popover)?void 0:s.onCloseClick)||o("onCloseClick");return d.classList.contains("driver-popover-next-btn")?l?l(e,t,{config:o(),state:a()}):v("nextClick"):d.classList.contains("driver-popover-prev-btn")?p?p(e,t,{config:o(),state:a()}):v("prevClick"):d.classList.contains("driver-popover-close-btn")?c?c(e,t,{config:o(),state:a()}):v("closeClick"):void 0}),(e=>!(null!=d&&d.description.contains(e))&&!(null!=d&&d.title.contains(e))&&e.className.includes("driver-popover"))),l("popover",d);const E=(null==(s=t.popover)?void 0:s.onPopoverRender)||o("onPopoverRender");E&&E(d,{config:o(),state:a()}),S(e,t),r(_);const T=i([_,...e.classList.contains("driver-dummy-element")?[]:[e]]);T.length>0&&T[0].focus()}function _(){const e=a("popover");if(null==e||!e.wrapper)return;const t=e.wrapper.getBoundingClientRect(),n=o("stagePadding")||0,i=o("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function L(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.top-i,window.innerHeight-n.realHeight-r.width),r.width):"end"===e?Math.max(Math.min(o.top-(null==n?void 0:n.realHeight)+o.height+i,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):"center"===e?Math.max(Math.min(o.top+o.height/2-(null==n?void 0:n.realHeight)/2,window.innerHeight-(null==n?void 0:n.realHeight)-r.width),r.width):0}function E(e,t){const{elementDimensions:o,popoverDimensions:n,popoverPadding:i,popoverArrowDimensions:r}=t;return"start"===e?Math.max(Math.min(o.left-i,window.innerWidth-n.realWidth-r.width),r.width):"end"===e?Math.max(Math.min(o.left-(null==n?void 0:n.realWidth)+o.width+i,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):"center"===e?Math.max(Math.min(o.left+o.width/2-(null==n?void 0:n.realWidth)/2,window.innerWidth-(null==n?void 0:n.realWidth)-r.width),r.width):0}function S(e,t){const n=a("popover");if(!n)return;const{align:i="start",side:r="left"}=(null==t?void 0:t.popover)||{},s=i,d="driver-dummy-element"===e.id?"over":r,l=o("stagePadding")||0,p=_(),c=n.arrow.getBoundingClientRect(),u=e.getBoundingClientRect(),v=u.top-p.height;let m=v>=0;const h=window.innerHeight-(u.bottom+p.height);let w=h>=0;const b=u.left-p.width;let g=b>=0;const f=window.innerWidth-(u.right+p.width);let y=f>=0;const x=!(m||w||g||y);let C=d;if("top"===d&&m?y=g=w=!1:"bottom"===d&&w?y=g=m=!1:"left"===d&&g?y=m=w=!1:"right"===d&&y&&(g=m=w=!1),"over"===d){const e=window.innerWidth/2-p.realWidth/2,t=window.innerHeight/2-p.realHeight/2;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto"}else if(x){const e=window.innerWidth/2-(null==p?void 0:p.realWidth)/2,t=10;n.wrapper.style.left=`${e}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${t}px`,n.wrapper.style.top="auto"}else if(g){const e=Math.min(b,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:l,popoverArrowDimensions:c});n.wrapper.style.left=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="left"}else if(y){const e=Math.min(f,window.innerWidth-(null==p?void 0:p.realWidth)-c.width),t=L(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:l,popoverArrowDimensions:c});n.wrapper.style.right=`${e}px`,n.wrapper.style.top=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",C="right"}else if(m){const e=Math.min(v,window.innerHeight-p.realHeight-c.width);let t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:l,popoverArrowDimensions:c});n.wrapper.style.top=`${e}px`,n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",C="top"}else if(w){const e=Math.min(h,window.innerHeight-(null==p?void 0:p.realHeight)-c.width);let t=E(s,{elementDimensions:u,popoverDimensions:p,popoverPadding:l,popoverArrowDimensions:c});n.wrapper.style.left=`${t}px`,n.wrapper.style.bottom=`${e}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",C="bottom"}x?n.arrow.classList.add("driver-popover-arrow-none"):function(e,t,o){const n=a("popover");if(!n)return;const i=o.getBoundingClientRect(),r=_(),s=n.arrow,d=r.width,l=window.innerWidth,p=i.width,c=i.left,u=r.height,v=window.innerHeight,m=i.top,h=i.height;s.className="driver-popover-arrow";let w=t,b=e;"top"===t?(c+p<=0?(w="right",b="end"):c+p-d<=0&&(w="top",b="start"),c>=l?(w="left",b="end"):c+d>=l&&(w="top",b="end")):"bottom"===t?(c+p<=0?(w="right",b="start"):c+p-d<=0&&(w="bottom",b="start"),c>=l?(w="left",b="start"):c+d>=l&&(w="bottom",b="end")):"left"===t?(m+h<=0?(w="bottom",b="end"):m+h-u<=0&&(w="left",b="start"),m>=v?(w="top",b="end"):m+u>=v&&(w="left",b="end")):"right"===t&&(m+h<=0?(w="bottom",b="start"):m+h-u<=0&&(w="right",b="start"),m>=v?(w="top",b="start"):m+u>=v&&(w="right",b="end")),w?(s.classList.add(`driver-popover-arrow-side-${w}`),s.classList.add(`driver-popover-arrow-align-${b}`)):s.classList.add("driver-popover-arrow-none")}(s,C,e)}const T=e=>{const t=jQuery(".superbaddons-admindashboard-modal-wrapper"),o=t.find(".superbaddons-admindashboard-modal-overlay"),n=t.find(".superbaddons-admindashboard-modal-close-button"),i=t.find(".superbaddons-admindashboard-modal-confirm-btn"),r=t.find(".superbaddons-admindashboard-modal-cancel-btn"),s=t.find(".superbaddons-admindashboard-modal-ok-btn"),d=t.find(".superbaddons-admindashboard-modal-title"),l=t.find(".superbaddons-admindashboard-modal-content"),a=t.find(".superbaddons-admindashboard-modal-header-spinner"),p=t.find(".superbaddons-admindashboard-modal-footer"),c=t.find(".superbaddons-element-separator"),u=e.title||!1,v=e.content||!1,m=e.confirmCallback||!1,h=e.cancelCallback||!1,w=e.awaitConfirmCallback||!1,b=e.stopCloseOnConfirm||!1,g=e.preventClosing||!1,f=e.isLoader||!1,y=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i.off(),r.off(),n.off(),o.off(),s.off(),jQuery(window).off("keydown.superbaddons-admin-modal"),e?t.hide():t.fadeOut("fast")};return((e,u,v,m,h,w,g)=>{if(w||(jQuery(window).on("keydown.superbaddons-admin-modal",(e=>{27==(e.keyCode||e.which)&&y()})),n.click((()=>{y()})),o.click((()=>{y()}))),g)return a.show(),d.hide(),p.hide(),n.hide(),c.hide(),l.text(u),void t.fadeIn("fast");a.hide(),p.show(),d.show(),n.show(),c.show(),e&&d.text(e),u&&(Array.isArray(u)?(l.text(""),u.map((e=>{const t=jQuery("<div class='superbaddons-admindashboard-modal-content-item'></div>"),o=jQuery("<div class='superbaddons-admindashboard-modal-content-item-title'></div>"),n=jQuery("<div class='superbaddons-admindashboard-modal-content-item-content'></div>"),i=jQuery("<img class='superbaddons-admindashboard-modal-content-item-icon' />");superbaddonssettings_g&&(i.attr("src",e.shared?superbaddonssettings_g.modal.view_logs.icon_shared:superbaddonssettings_g.modal.view_logs.icon_unshared),i.attr("title",e.shared?superbaddonssettings_g.modal.view_logs.shared_title:superbaddonssettings_g.modal.view_logs.unshared_title));const r=new Date(1e3*e.time),s=r.toLocaleDateString()+" "+r.toLocaleTimeString();o.text(s+" (v."+e.version+"): "+e.title),o.prepend(i),n.text(e.stack),t.append(o),t.append(n),l.append(t)}))):l.text(u)),v?(i.show(),r.show(),s.hide(),i.click((async()=>{h?await v():v(),b||y()}))):(i.hide(),r.hide(),s.show(),s.click((()=>{b||y()}))),m?r.click((()=>{m(),y()})):r.click((()=>{y()})),t.fadeIn("fast")})(u,v,m,h,w,g,f),y},{__:P}=wp.i18n,A="superbaddons-guided-tour-popover-next-hidden",$="superbaddons-guided-tour-dummy-element";class B{#e;#t;#o;constructor(){const e=this;e.#t=[],e.#e=function(e={}){function n(){o("allowClose")&&h()}function i(){const e=a("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e+1;t[n]?m(n):h()}function r(){const e=a("activeIndex"),t=o("steps")||[];if(typeof e>"u")return;const n=e-1;t[n]?m(n):h()}function s(){var e;if(a("__transitionCallback"))return;const t=a("activeIndex"),n=a("__activeStep"),i=a("__activeElement");if(typeof t>"u"||typeof n>"u"||typeof a("activeIndex")>"u")return;const s=(null==(e=n.popover)?void 0:e.onPrevClick)||o("onPrevClick");if(s)return s(i,n,{config:o(),state:a()});r()}function d(){var e;if(a("__transitionCallback"))return;const t=a("activeIndex"),n=a("__activeStep"),r=a("__activeElement");if(typeof t>"u"||typeof n>"u")return;const s=(null==(e=n.popover)?void 0:e.onNextClick)||o("onNextClick");if(s)return s(r,n,{config:o(),state:a()});i()}function v(){a("isInitialized")||(l("isInitialized",!0),document.body.classList.add("driver-active",o("animate")?"driver-fade":"driver-simple"),window.addEventListener("keyup",x,!1),window.addEventListener("keydown",y,!1),window.addEventListener("resize",f),window.addEventListener("scroll",f),u("overlayClick",n),u("escapePress",n),u("arrowLeftPress",s),u("arrowRightPress",d))}function m(e=0){var t,n,i,r,s,d,a,p;const c=o("steps");if(!c)return console.error("No steps to drive through"),void h();if(!c[e])return void h();l("__activeOnDestroyed",document.activeElement),l("activeIndex",e);const u=c[e],v=c[e+1],w=c[e-1],g=(null==(t=u.popover)?void 0:t.doneBtnText)||o("doneBtnText")||"Done",f=o("allowClose"),y=typeof(null==(n=u.popover)?void 0:n.showProgress)<"u"?null==(i=u.popover)?void 0:i.showProgress:o("showProgress"),x=((null==(r=u.popover)?void 0:r.progressText)||o("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${e+1}`).replace("{{total}}",`${c.length}`),C=(null==(s=u.popover)?void 0:s.showButtons)||o("showButtons"),k=["next","previous",...f?["close"]:[]].filter((e=>!(null!=C&&C.length)||C.includes(e))),_=(null==(d=u.popover)?void 0:d.onNextClick)||o("onNextClick"),L=(null==(a=u.popover)?void 0:a.onPrevClick)||o("onPrevClick"),E=(null==(p=u.popover)?void 0:p.onCloseClick)||o("onCloseClick");b({...u,popover:{showButtons:k,nextBtnText:v?void 0:g,disableButtons:[...w?[]:["previous"]],showProgress:y,progressText:x,onNextClick:_||(()=>{v?m(e+1):h()}),onPrevClick:L||(()=>{m(e-1)}),onCloseClick:E||(()=>{h()}),...(null==u?void 0:u.popover)||{}}})}function h(e=!0){const t=a("__activeElement"),n=a("__activeStep"),i=a("__activeOnDestroyed"),r=o("onDestroyStarted");if(e&&r)return void r(t&&"driver-dummy-element"!==(null==t?void 0:t.id)?t:void 0,n,{config:o(),state:a()});const s=(null==n?void 0:n.onDeselected)||o("onDeselected"),d=o("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),window.removeEventListener("keyup",x),window.removeEventListener("resize",f),window.removeEventListener("scroll",f),function(){var e;const t=a("popover");t&&(null==(e=t.wrapper.parentElement)||e.removeChild(t.wrapper))}(),function(){var e;null==(e=document.getElementById("driver-dummy-element"))||e.remove(),document.querySelectorAll(".driver-active-element").forEach((e=>{e.classList.remove("driver-active-element","driver-no-interaction"),e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls")}))}(),function(){const e=a("__overlaySvg");e&&e.remove()}(),c={},p(),t&&n){const e="driver-dummy-element"===t.id;s&&s(e?void 0:t,n,{config:o(),state:a()}),d&&d(e?void 0:t,n,{config:o(),state:a()})}i&&i.focus()}return t(e),{isActive:()=>a("isInitialized")||!1,refresh:f,drive:(e=0)=>{v(),m(e)},setConfig:t,setSteps:e=>{p(),t({...o(),steps:e})},getConfig:o,getState:a,getActiveIndex:()=>a("activeIndex"),isFirstStep:()=>0===a("activeIndex"),isLastStep:()=>{const e=o("steps")||[],t=a("activeIndex");return void 0!==t&&t===e.length-1},getActiveStep:()=>a("activeStep"),getActiveElement:()=>a("activeElement"),getPreviousElement:()=>a("previousElement"),getPreviousStep:()=>a("previousStep"),moveNext:i,movePrevious:r,moveTo:function(e){(o("steps")||[])[e]?m(e):h()},hasNextStep:()=>{const e=o("steps")||[],t=a("activeIndex");return void 0!==t&&e[t+1]},hasPreviousStep:()=>{const e=o("steps")||[],t=a("activeIndex");return void 0!==t&&e[t-1]},highlight:e=>{v(),b({...e,popover:e.popover?{showButtons:[],showProgress:!1,progressText:"",...e.popover}:void 0})},destroy:()=>{h(!1)}}}({popoverClass:"superbaddons-guided-tour-popover",showProgress:!0,allowKeyboardControl:!1,onDestroyStarted:()=>{e.#e.hasNextStep()?T({stopCloseOnConfirm:!0,title:P("Close Tutorial?","superb-blocks"),content:P("Closing the tutorial will close this window and end the tutorial.","superb-blocks"),confirmCallback:function(){e.EndTour()}}):e.EndTour()}})}onEndTour(e){this.#o=e}EndTour(){if(this.#o)return T({preventClosing:!0,isLoader:!0,content:P("Closing Tutorial...","superb-blocks")}),void this.#o();this.#e.destroy()}StartTour(){this.#e.setSteps(this.#t),this.#e.drive()}AddStep(e){const t=this.#t.push(e),o=t-1;return this.#t[t-1].stepIndex=o,o}AddSteps(e){for(const t in e)e[t].stepIndex=this.AddStep(e[t]);return e}NextStep(){this.#e.moveNext()}PreviousStep(){this.#e.movePrevious()}GoToStep(e){this.#e.drive(e.stepIndex)}Highlight(e){this.#e.highlight(e)}}const H={IgnoreCloseEvent:!1,LibraryLoaded:!1},I={element:!1},D="click.superbaddonsguidedtour",W={},M=(e,t,o)=>{document.addEventListener(t,o),W[t]||(W[t]=[]),j(e),W[t].push({id:e,callback:o})},j=e=>{Object.keys(W).forEach((t=>{W[t].forEach((o=>{o.id===e&&document.removeEventListener(t,o.callback)}))}))},{__:N}=wp.i18n;jQuery(document).ready((function(e){window.elementor.saver.isEditorChanged=function(){return!1};const t=new B,o=".superb-addons-template-library-page-frame .superb-addons-template-library-template-item .superb-addons-template-library-template-item-insert-btn";t.onEndTour((async()=>{T({preventClosing:!0,isLoader:!0,content:N("Closing Tutorial...","superb-blocks")}),await async function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const i=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","X-WP-Nonce":t},body:"action="+o+n});return 200!==i.status?{success:!1,text:"Unknown error occured. Please contact support if the issue persists."}:i.json()}(superbaddonstroubleshooting_g.rest.base+superbaddonstroubleshooting_g.rest.namespace+superbaddonstroubleshooting_g.rest.routes.tutorial,superbaddonstroubleshooting_g.rest.nonce,"cleanup-elementor-tour-page","&tour-nonce="+superbaddonstroubleshooting_g.rest.tour_nonce),window.close()})),window.addEventListener("beforeunload",(function(e){t.EndTour()}));const n={Welcome:{popover:{title:N("Welcome to Superb Addons","superb-blocks"),description:N("Let's get you started with a Superb Addons for Elementor.","superb-blocks"),side:"left",align:"start",onPrevClick:()=>{s()},onNextClick:()=>{const e=jQuery("#elementor-preview-iframe").contents().find("#superb-elementor-library-btn");e[0].scrollIntoView(),r(jQuery("#elementor-preview-iframe"),e),t.NextStep()}}},LibraryButton:{element:`.${$}`,popover:{title:N("Sections","superb-blocks"),description:N("To start inserting sections, use the Superb Addons button. Let's go ahead and click it now.","superb-blocks"),side:"bottom",align:"start",popoverClass:A}},LibraryOpened:{popover:{title:N("Section Library","superb-blocks"),description:N("You've done it! You're now all set to browse and insert sections.","superb-blocks"),side:"top",align:"start",popoverClass:A,onPrevClick:()=>{e(".superb-addons-template-library-close-btn").click()}},onHighlightStarted:()=>{if(H.LibraryLoaded)return;const e="guided-tour-library-loaded";M(e,"superbaddons-library-loaded",(()=>{setTimeout((()=>{i()}),100),H.LibraryLoaded=!0,j(e)}))},onHighlighted:()=>{H.LibraryLoaded&&i()}},PatternExample:{element:".superb-addons-template-library-page-frame .superb-addons-template-library-template-item",popover:{title:N("Pattern Library","superb-blocks"),description:N("You'll find a variety of patterns to choose from, just like the one shown here.","superb-blocks"),side:"bottom",align:"start"},onHighlightStarted:()=>{e(o).off(D),e(o).on(D,(function(){setTimeout((()=>{t.Highlight({element:".superb-addons-template-library-page-frame .superb-addons-loading .superb-addons-loader-wrapper"})}),10),e(this).off(D)}));const i="guided-tour-section-inserted";M(i,"superbaddons-library-inserted",(()=>{H.IgnoreCloseEvent=!0,setTimeout((()=>{const e=window.elementor.elements.models[window.elementor.elements.models.length-1].id,o=jQuery("#elementor-preview-iframe").contents().find(".elementor-element-"+e);r(jQuery("#elementor-preview-iframe"),o),t.GoToStep(n.SectionAdded),j(i)}),100)}))}},InsertSection:{element:o,popover:{title:N("Section Library","superb-blocks"),description:N('Let\'s try inserting this section. Click the "Insert" button to add it.',"superb-blocks"),side:"bottom",align:"start",popoverClass:A}},SectionAdded:{element:`.${$}`,popover:{title:N("Sections","superb-blocks"),description:N("You've just inserted a section. Good job! Sections can be edited to match your preferences.","superb-blocks"),side:"top",align:"start",onPrevClick:()=>{s(),t.GoToStep(n.Welcome)}},onHighlightStarted:()=>{H.IgnoreCloseEvent=!1}},Complete:{popover:{title:N("Superb Addons","superb-blocks"),description:N("That concludes our tour. You can now explore the rest of the plugin. Enjoy!","superb-blocks"),side:"top",align:"start"}}},i=()=>{e(`.${A}`).removeClass(A),e(".superb-addons-template-library-template-item-preview-btn").off(),e(".superb-addons-template-library-template-item-preview-btn").css({opacity:"0.3",cursor:"not-allowed"})};M("guided-tour-library-opened","superbaddons-library-opened",(()=>{t.GoToStep(n.LibraryOpened)})),M("guided-tour-library-closed","superbaddons-library-closed",(()=>{H.IgnoreCloseEvent||(H.IgnoreCloseEvent=!1,t.GoToStep(n.Welcome))}));const r=(t,o)=>{s(),I.element=o;const n=jQuery("<div></div>").appendTo("#elementor-preview-responsive-wrapper").addClass($).css({pointerEvents:"none",position:"absolute",top:I.element.offset().top-t[0].contentWindow.document.documentElement.scrollTop,left:I.element.offset().left,width:I.element.outerWidth(),height:I.element.outerHeight(),"z-index":999999});e(window).on("resize.superbaddonstour",(function(){n.css({top:I.element.position().top-t[0].contentWindow.document.documentElement.scrollTop,left:I.element.offset().left})})),I.element.on(D,(function(){s()})),e("#elementor-preview-iframe").css("pointer-events","auto")},s=()=>{I.element&&(I.element.off(D),I.element=!1),e(`.${$}`).remove(),e("#elementor-preview-iframe").css("pointer-events",""),e(window).off("resize.superbaddonstour")};window.elementor.on("document:loaded",(function(){t.AddSteps(n),t.StartTour()}))}))})();