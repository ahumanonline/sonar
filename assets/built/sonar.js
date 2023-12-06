function buildChecks(){var e,t=document.querySelectorAll("[data-slug]"),n=document.getElementById("toc-list"),r=[location.pathname];let o;null!=(e=JSON.parse(localStorage.getItem("ugPrefs")))?r in e&&(o=e[r]):o={};for(i=0;i<t.length;i++){var l=document.createElement("li"),a=(l.className="toc-list-item",document.createElement("input")),s=(a.type="checkbox",a.value=t[i].id,a.name=t[i].textContent.trim(),a.addEventListener("click",checkBoxHandler.bind(null,a.value)),document.createElement("label"));s.htmlFor=a.value,s.textContent=t[i].textContent.trim(),a.classList="mr-4 form-check text-primary-900 dark:text-accent-400 rounded",s.classList="text-primary-900 dark:text-accent-400 font-medium",n.appendChild(l),l.appendChild(a),l.appendChild(s),null!=o&&a.value in o&&(a.checked=!0)}firstRender()}function checkBoxHandler(e,t){var n=getBoxes("CHECKED"),r=getBoxes("UNCHECKED"),o=getBoxes("CATEGORIES");if(0==n.length)o.forEach(e=>e.classList.remove("hidden"));else if(1==n.length)for(i=0;i<o.length;i++)for(j=0;j<r.length;j++)o[i].dataset.visibility==r[j].value&&o[i].classList.add("hidden");else document.querySelector(`[data-visibility=${CSS.escape(e)}]`).classList.toggle("hidden");setPreferences()}function firstRender(){if(0<getBoxes("CHECKED").length){var e=getBoxes("UNCHECKED");for(i=0;i<e.length;i++)document.querySelector(`[data-visibility=${CSS.escape(e[i].value)}]`).classList.toggle("hidden")}}function setPreferences(){let e=JSON.parse(localStorage.getItem("ugPrefs"));null===e&&((e={})[location.pathname]={});var t={},i=getBoxes("CHECKED");if(0<i.length)for(let e=0;e<i.length;e++)t[""+i[e].value]=!0;e[location.pathname]=t,localStorage.setItem("ugPrefs",JSON.stringify(e))}function getBoxes(e){switch(e){case"CHECKED":return document.querySelectorAll("input:checked");case"UNCHECKED":return document.querySelectorAll("input:not(:checked)");case"CATEGORIES":return document.querySelectorAll("[data-visibility]");case"BOXES":return document.querySelectorAll('input[type="checkbox"]')}}function getPreferences(){return sanitizePreferences([location.pathname],2e3)}function sanitizePreferences(e,t){if(null===(o=localStorage.getItem("ugPrefs")))return{};if(o.length>t)return{};var n=getBoxes("BOXES"),r=[];for(i=0;i<n.length;i++)r.push(n[i].value);var o,l={};for(initialPref in JSON.parse(localStorage.getItem("ugPrefs"))[e])r.includes(initialPref)&&(l[""+initialPref]=!0);return l}!function(o){"use strict";o.fn.fitVids=function(e){var t,i,r={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(i.childNodes[1])),e&&o.extend(r,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"],n=(r.customSelector&&e.push(r.customSelector),".fitvidsignore"),e=(r.ignore&&(n=n+", "+r.ignore),o(this).find(e.join(",")));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,i=o(this);0<i.parents(n).length||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),e=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(t="fitvid"+o.fn.fitVids._count,i.attr("name",t),o.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),i.removeAttr("height").removeAttr("width"))})})},o.fn.fitVids._count=0}(window.jQuery||window.Zepto),$(".postItem:empty").parent().remove(),buildChecks(),function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),i=e.attributes.width.value,e=e.attributes.height.value;t.style.flex=i/e+" 1 0%"})})}((window,document)),function(t,i){var n,r,o,l,a,s,c,d=i.querySelector("link[rel=next]");function u(){var e;404===this.status?(t.removeEventListener("scroll",m),t.removeEventListener("resize",f)):(this.response.querySelectorAll("article.post-card").forEach(function(e){n.appendChild(i.importNode(e,!0))}),(e=this.response.querySelector("link[rel=next]"))?d.href=e.href:(t.removeEventListener("scroll",m),t.removeEventListener("resize",f)),c=i.documentElement.scrollHeight,l=o=!1)}function e(){var e;l||(a+s<=c-r?o=!1:(l=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",u),e.open("GET",d.href),e.send(null)))}function h(){o||t.requestAnimationFrame(e),o=!0}function m(){a=t.scrollY,h()}function f(){s=t.innerHeight,c=i.documentElement.scrollHeight,h()}d&&(n=i.querySelector(".post-feed"))&&(l=o=!(r=300),a=t.scrollY,s=t.innerHeight,c=i.documentElement.scrollHeight,t.addEventListener("scroll",m,{passive:!0}),t.addEventListener("resize",f),h())}(window,document);
//# sourceMappingURL=sonar.js.map