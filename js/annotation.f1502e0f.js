!function(e){function t(t){for(var a,s,d=t[0],i=t[1],r=t[2],u=0,p=[];u<d.length;u++)s=d[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);p.length;)p.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,d=1;d<n.length;d++){var i=n[d];0!==o[i]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={1:0},l=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var d=window.webpackJsonp=window.webpackJsonp||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var c=i;l.push([615,0,3]),n()}({119:function(e,t,n){},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(15);n(88);const o={apiKey:"AIzaSyC7cqpyFRK5Pzh6tReSEhU0zdfhXAaRbeU",authDomain:"covid-annotation.firebaseapp.com",databaseURL:"https://covid-annotation.firebaseio.com",projectId:"covid-annotation",storageBucket:"covid-annotation.appspot.com",messagingSenderId:"297369575962",appId:"1:297369575962:web:be320c5d86a0b719a467a3",measurementId:"G-H9JT7JZCZ8"};function l(e,t){e.on("value",(function(e){t(e.val())}),(function(e){console.log("Error: "+e.code)}))}a.apps.length||a.initializeApp(o);const s={callbacks:{signInSuccessWithAuthResult:function(e,t){return console.log("testing",e),!0},uiShown:function(){document.getElementById("loader").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"/coronavirus_annotation/annotation.html",signInOptions:[a.auth.GoogleAuthProvider.PROVIDER_ID,a.auth.EmailAuthProvider.PROVIDER_ID]}},615:function(e,t,n){"use strict";n.r(t);n(119);var a=n(6),o=n(15),l=n(38),s=n(115),d=n(207),i=n(208),r=n(209),c=n(210);function u(e){let t=a.a(e).map(e=>{let t=e.value;return t.key=e.key,t}).filter(e=>!1===e.reply).sort((e,t)=>e.time-t.time),n=a.a(e).map(e=>{let t=e.value;return t.key=e.key,t}).filter(e=>!0===e.reply),s=t.map((e,t,a)=>(function e(t,n,a){t.level=a;t.replyBool=!1;let o=n.filter(e=>e.replies===t.key);if(o.length>0){t.replyKeeper=o;let l=++a;return t.replyKeeper.map(t=>e(t,n,l)),t}return t.replyKeeper=[],t})(e,n,0));let d=a.e("#sidebar").select("#annotation-wrap");d.selectAll("*").remove();a.f();let i=d.selectAll(".memo").data(s).join("div").classed("memo",!0);i.selectAll(".name").data(e=>[e]).join("span").classed("name",!0).selectAll("text").data(e=>[e]).join("text").text(e=>`${e.displayName}:`),i.selectAll(".time").data(e=>[e]).join("span").classed("time",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.time),i.selectAll(".tag-span").data(e=>[e]).join("span").classed("tag-span",!0).selectAll(".badge").data(e=>[e]).join("span").classed("badge badge-secondary",!0).text(e=>e.tags),i.selectAll(".comment").data(e=>[e]).join("span").classed("comment",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.comment);let r=i.selectAll(".upvote-span").data(e=>[e]).join("span").classed("upvote-span",!0);r.selectAll(".upvote").data(e=>[e]).join("i").classed("upvote fas fa-thumbs-up fa-lg",!0),r.selectAll(".up-text").data(e=>[e]).join("text").classed("up-text",!0).text(e=>`: ${e.upvote} `);let c=i.selectAll(".downvote-span").data(e=>[e]).join("span").classed("downvote-span",!0);c.selectAll(".downvote").data(e=>[e]).join("i").classed("downvote fas fa-thumbs-down fa-lg",!0),c.selectAll(".down-text").data(e=>[e]).join("text").classed("down-text",!0).text(e=>`: ${e.downvote}`);let p=i.selectAll(".reply-span").data(e=>[e]).join("span").classed("reply-span",!0);p.selectAll(".reply").data(e=>[e]).join("i").classed("far fa-comment-dots fa-lg reply",!0).style("float","right"),p.on("click",(function(e,t,n){a.b.stopPropagation(),!1===e.replyBool?(e.replyBool=!0,o.auth().onAuthStateChanged((function(l){if(l){let s=a.e(n[t].parentNode).append("div").classed("text-input-sidebar",!0);s.append("text").text(`${l.displayName}:`),s.append("textarea").attr("id","text-area-id").attr("placeholder","Comment Here"),s.append("textarea").attr("id","tags").attr("placeholder","Tag"),s.append("button").text("Add").classed("btn btn-secondary",!0).on("click",()=>{a.b.stopPropagation();let t={time:e.time,comment:a.e("#text-area-id").node().value,upvote:0,downvote:0,tags:a.e("#tags").node().value,replies:e.key,reply:!0,uid:l.uid,displayName:l.displayName};o.database().ref().push(t)})}else console.log("NO USER",l)}))):(e.replyBool=!1,a.e(n[t].parentNode).select(".text-input-sidebar").remove())}));var m=o.database();r.on("click",e=>{let t=++e.upvote;m.ref(`${e.key}/upvote`).set(`${t}`)}),c.on("click",e=>{let t=++e.downvote;m.ref(`${e.key}/downvote`).set(`${t}`)}),i.on("click",e=>{console.log("test click",typeof a.b.target),"textarea"===a.b.target.tagName.toLowerCase()||"button"===a.b.target.tagName.toLowerCase()?console.log("do nothing"):y(e)}),i.each((e,t,n)=>{e.replyKeeper.length>0&&function e(t){let n=t.selectAll(".reply-memo").data(e=>e.replyKeeper).join("div").classed("reply-memo",!0);n.style("margin-left",e=>`${10*e.level}px`);n.each((t,n,s)=>{!function(e){e.selectAll(".name").data(e=>[e]).join("span").classed("name",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.displayName),e.selectAll(".tag-span").data(e=>[e]).join("span").classed("tag-span",!0).selectAll(".badge").data(e=>[e]).join("span").classed("badge badge-secondary",!0).text(e=>e.tags),e.selectAll(".comment").data(e=>[e]).join("span").classed("comment",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.comment);let t=e.selectAll(".upvote-span").data(e=>[e]).join("span").classed("upvote-span",!0);t.selectAll(".upvote").data(e=>[e]).join("i").classed("upvote fas fa-thumbs-up fa-sm",!0),t.selectAll(".up-text").data(e=>[e]).join("text").classed("up-text",!0).text(e=>`: ${e.upvote} `);let n=e.selectAll(".downvote-span").data(e=>[e]).join("span").classed("downvote-span",!0);n.selectAll(".downvote").data(e=>[e]).join("i").classed("downvote fas fa-thumbs-down",!0),n.selectAll(".down-text").data(e=>[e]).join("text").classed("down-text",!0).text(e=>`: ${e.downvote}`);let s=e.selectAll(".reply-span").data(e=>[e]).join("span").classed("reply-span",!0);s.selectAll(".reply").data(e=>[e]).join("i").classed("far fa-comment-dots reply",!0).style("float","right"),s.on("click",(function(e,t,n){a.b.stopPropagation(),!1===e.replyBool?(e.replyBool=!0,o.auth().onAuthStateChanged((function(s){if(s){let d=a.e(n[t].parentNode).append("div").classed("text-input-sidebar",!0);d.append("text").text(`${s.displayName}:`),d.append("textarea").attr("id","text-area-id").attr("placeholder","Comment Here"),d.append("textarea").attr("id","tags").attr("placeholder","Comment Tag"),d.append("button").text("Add").classed("btn btn-secondary",!0).on("click",()=>{let t={time:e.time,comment:a.e("#text-area-id").node().value,upvote:0,downvote:0,tags:a.e("#tags").node().value,replies:e.key,reply:!0,uid:s.uid,displayName:s.displayName},n=o.database().ref();n.push(t),Object(l.a)(n,u),d.remove()})}else console.log("NO USER",s)}))):(e.replyBool=!1,a.e(n[t].parentNode).select(".text-input-sidebar").remove())}))}(a.e(s[n])),t.replyKeeper.length>0&&e(a.e(s[n]))})}(a.e(n[t]))})}s.b.add(d.faCheck,i.a,r.a,c.a),s.a.i2svg(),s.a.watch();var p=n(152);const m=[];function v(e){let t=a.e("#annotation-layer").select("svg"),n=a.d().domain([0,document.getElementById("video").duration]).range([3,t.node().getBoundingClientRect().width]),o=a.d().domain([0,1]).range([10,15]);let l=a.a(e).map(e=>{let t=e.value;return t.key=e.key,t}).filter(e=>!1===e.reply).map(e=>(e.y=p.Math.random(),e.x=.06*p.Math.random()-.03,e)),s=t.selectAll(".memo").data(l).join("circle").attr("r",3).classed("memo",!0);s.attr("cx",e=>n(e.time+e.x)),s.attr("cy",e=>o(e.y)),s.on("mouseover",e=>{let t=a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").filter(t=>t.key===e.key);t.classed("selected",!0),t.nodes()[0].scrollIntoView()}).on("mouseout",e=>{a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").classed("selected",!1).nodes()[0].scrollIntoView()}).on("click",e=>{y(e)}),function(){let e=a.e("#pushed-layer").select("svg");const t=document.querySelector("video");t.ontimeupdate=n=>{let o=a.e("#annotation-layer").selectAll(".memo"),l=a.e("#sidebar").select("#annotation-wrap").selectAll(".memo");o.classed("selected",!1),l.classed("selected",!1);let s=[t.currentTime-1.5,t.currentTime+1.5],d=o.filter(e=>e.time<s[1]&&e.time>s[0]).classed("selected",!0),i=l.filter(e=>e.time<s[1]&&e.time>s[0]).classed("selected",!0),r=e.selectAll("g.pushed").data(d.data()).join("g").classed("pushed",!0);r.attr("transform",e=>`translate(${e.posLeft}, ${e.posTop})`),r.selectAll("circle").data(e=>[e]).join("circle").attr("r",10),i&&i.nodes()[0].scrollIntoView()}}()}function g(){let e=a.e("#interaction");e.style("width",`${document.getElementById("video").getBoundingClientRect().width}px`),e.style("height",`${document.getElementById("video").getBoundingClientRect().height}px`);let t=!1;e.on("click",(function(){let n=a.b.target;a.b.stopPropagation();let s=a.c(this);o.auth().onAuthStateChanged((function(d){if(d){if(n==e.node())if(t)t=!1,a.e("#push-div").remove();else{t=!0;a.d().domain([0,document.getElementById("video").duration]);let n=e.append("div").attr("id","push-div");n.style("position","absolute"),n.style("top",e=>s[1]+"px"),n.style("left",e=>s[0]+"px");n.append("svg").append("circle").attr("r",5).attr("cx",5).attr("cy",e=>5).attr("fill","purple");let i=document.getElementById("video").currentTime,r=n.append("div").classed("text-input",!0);r.append("text").text(`${d.displayName}@ ${i} :`),r.append("textarea").attr("id","text-area-id").attr("placeholder","Comment Here"),r.append("textarea").attr("id","tags").attr("placeholder","Tag"),r.append("button").text("Add").classed("btn btn-secondary",!0).on("click",()=>{let e={time:i,comment:a.e("#text-area-id").node().value,posTop:s[1],posLeft:s[0],upvote:0,downvote:0,tags:a.e("#tags").node().value,replies:"",reply:!1,uid:d.uid,displayName:d.displayName};m.push(e),t=!1,a.e("#push-div").remove();let n=o.database().ref();n.push(e),Object(l.a)(n,u)})}}else console.log("NO USER",d)}))}))}function f(){let e=document.getElementById("main-wrap"),t=a.e(e).select("canvas").node();t.setAttribute("id","vid-canvas");const n=t.getContext("2d");let o=document.getElementById("video").getBoundingClientRect();var l,s;t.width=o.width,t.height=o.height,n.strokeStyle="red",n.lineWidth=5;var d=!1;return e.onmousedown=function(e){let t=document.getElementById("sidebar").getBoundingClientRect();l=e.pageX-t.width,s=e.pageY,d=!0},e.onmousemove=function(e){let t=document.getElementById("sidebar").getBoundingClientRect();var a=e.pageX-t.width,o=e.pageY;d&&(console.log(e,this.offsetLeft),n.beginPath(),n.moveTo(l,s),n.lineTo(a,o),n.stroke(),n.closePath(),l=a,s=o)},e.onmouseup=function(e){d=!1,shapeArray.push(n.save()),console.log(shapeArray,n.save())},e}function y(e){let t=e.time,n=a.e("#sidebar").select("#annotation-wrap");n.selectAll(".memo").classed("selected",!1);let o=n.selectAll(".memo").filter(t=>t.key===e.key);o.classed("selected",!0),o.nodes()[0].scrollIntoView(),document.getElementById("video").currentTime=t,progressBar.value=t,seek.value=t}n(88);o.apps.length||o.initializeApp(l.b);let h=document.getElementById("main-wrap");h&&(!function(e,t){let n=a.e(e).select("video");n.attr("id","video");let s=n.append("source");s.attr("src",t),s.attr("type","video/mp4"),function(e){const t=document.getElementById("video-controls"),n=document.getElementById("play"),s=document.querySelectorAll(".playback-icons use"),d=document.getElementById("time-elapsed"),i=document.getElementById("duration"),r=document.getElementById("progress-bar"),c=document.getElementById("seek"),u=document.getElementById("seek-tooltip"),p=document.getElementById("volume-button"),m=document.querySelectorAll(".volume-button use"),g=document.querySelector('use[href="#volume-mute"]'),f=document.querySelector('use[href="#volume-low"]'),y=document.querySelector('use[href="#volume-high"]'),h=document.getElementById("volume"),b=document.getElementById("playback-animation"),x=document.getElementById("fullscreen-button"),A=document.getElementById("video-container"),w=x.querySelectorAll("use"),E=document.getElementById("pip-button"),k=document.getElementById("video").getBoundingClientRect();document.createElement("video").canPlayType&&(e.controls=!1,t.classList.remove("hidden"));function j(){e.paused||e.ended?e.play():e.pause()}function I(){s.forEach(e=>e.classList.toggle("hidden")),e.paused?n.setAttribute("data-title","Play (k)"):n.setAttribute("data-title","Pause (k)")}function B(e){const t=new Date(1e3*e).toISOString().substr(11,8);return{minutes:t.substr(3,2),seconds:t.substr(6,2)}}function L(){e.muted=!e.muted,e.muted?(h.setAttribute("data-volume",h.value),h.value=0):h.value=h.dataset.volume}function $(){b.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.3)"}],{duration:500})}function S(){document.fullscreenElement?document.exitFullscreen():A.requestFullscreen()}async function P(){try{e!==document.pictureInPictureElement?(E.disabled=!0,await e.requestPictureInPicture()):await document.exitPictureInPicture()}catch(e){console.error(e)}finally{E.disabled=!1}}function C(){e.paused||t.classList.add("hide")}function O(){t.classList.remove("hide")}a.e(t).style("width",`${k.width}px`),n.addEventListener("click",j),e.addEventListener("play",I),e.addEventListener("pause",I),e.addEventListener("loadedmetadata",(function(){const t=Math.round(e.duration);c.setAttribute("max",t),r.setAttribute("max",t);const n=B(t);i.innerText=`${n.minutes}:${n.seconds}`,i.setAttribute("datetime",`${n.minutes}m ${n.seconds}s`)})),e.addEventListener("timeupdate",(function(){const t=B(Math.round(e.currentTime));d.innerText=`${t.minutes}:${t.seconds}`,d.setAttribute("datetime",`${t.minutes}m ${t.seconds}s`)})),e.addEventListener("timeupdate",(function(){c.value=Math.floor(e.currentTime),r.value=Math.floor(e.currentTime)})),e.addEventListener("volumechange",(function(){m.forEach(e=>{e.classList.add("hidden")}),p.setAttribute("data-title","Mute (m)"),e.muted||0===e.volume?(g.classList.remove("hidden"),p.setAttribute("data-title","Unmute (m)")):e.volume>0&&e.volume<=.5?f.classList.remove("hidden"):y.classList.remove("hidden")})),e.addEventListener("click",j),e.addEventListener("click",$),e.addEventListener("mouseenter",O),e.addEventListener("mouseleave",C),t.addEventListener("mouseenter",O),c.addEventListener("mousemove",(function(t){const n=Math.round(t.offsetX/t.target.clientWidth*parseInt(t.target.getAttribute("max"),10));c.setAttribute("data-seek",n);const a=B(n);u.textContent=`${a.minutes}:${a.seconds}`;const o=e.getBoundingClientRect();u.style.left=`${t.pageX-o.left}px`})),c.addEventListener("input",(function(t){const n=t.target.dataset.seek?t.target.dataset.seek:t.target.value;e.currentTime=n,r.value=n,c.value=n})),h.addEventListener("input",(function(){e.muted&&(e.muted=!1),e.volume=h.value})),p.addEventListener("click",L),x.addEventListener("click",S),A.addEventListener("fullscreenchange",(function(){w.forEach(e=>e.classList.toggle("hidden")),document.fullscreenElement?x.setAttribute("data-title","Exit full screen (f)"):x.setAttribute("data-title","Full screen (f)")})),E.addEventListener("click",P),document.addEventListener("DOMContentLoaded",()=>{"pictureInPictureEnabled"in document||E.classList.add("hidden")});let N=o.database().ref();Object(l.a)(N,v)}(n.node()),"draw"===a.e(".togg-wrap").selectAll("input").data().value?f():g()}(h,"./public/spike_protein_fusion_movie.mp4"),a.e(".togg-wrap").selectAll("input").on("click",(e,t,n)=>{"draw"===n[t].value?f():g()})),o.auth().onAuthStateChanged((function(e){if(e){a.e(".user-wrap").append("text").text(`Signed in as: ${e.displayName}`);let t=o.database().ref();Object(l.a)(t,u)}else console.log("NO USER",e)}))}});
//# sourceMappingURL=annotation.f1502e0f.js.map