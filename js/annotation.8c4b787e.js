!function(e){function t(t){for(var a,s,d=t[0],i=t[1],r=t[2],p=0,u=[];p<d.length;p++)s=d[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);u.length;)u.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,d=1;d<n.length;d++){var i=n[d];0!==o[i]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={1:0},l=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var d=window.webpackJsonp=window.webpackJsonp||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var c=i;l.push([615,0,3]),n()}({118:function(e,t,n){},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(9);n(1);const o={apiKey:"AIzaSyC7cqpyFRK5Pzh6tReSEhU0zdfhXAaRbeU",authDomain:"covid-annotation.firebaseapp.com",databaseURL:"https://covid-annotation.firebaseio.com",storageBucket:"gs://covid-annotation.appspot.com/",projectId:"covid-annotation",storageBucket:"covid-annotation.appspot.com",messagingSenderId:"297369575962",appId:"1:297369575962:web:be320c5d86a0b719a467a3",measurementId:"G-H9JT7JZCZ8"};function l(e,t){e.on("value",(function(e){t(e.val())}),(function(e){console.log("Error: "+e.code)}))}a.apps.length||a.initializeApp(o);const s={callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){document.getElementById("loader").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"/coronavirus_annotation/annotation.html",signInOptions:[a.auth.GoogleAuthProvider.PROVIDER_ID,a.auth.EmailAuthProvider.PROVIDER_ID]}},615:function(e,t,n){"use strict";n.r(t),n.d(t,"currentUserKeeper",(function(){return j}));n(118);var a=n(1),o=n(9),l=n(207),s=n(114),d=n(208),i=n(209),r=n(210),c=n(211),p=n(30);function u(e,t,n,l){let s=a.e(n[t].parentNode).append("div").classed("text-input-sidebar",!0);s.append("text").text(`${l.displayName}:`),s.append("textarea").attr("id","text-area-id").attr("placeholder","Comment Here");let d=x(s,v,"Tag","tag-drop");s.append("button").text("Add").classed("btn btn-secondary",!0).on("click",()=>{a.b.stopPropagation();let t=b(l,null,d.text(),null,!0,e.key);o.database().ref("comments").push(t)})}function m(e){let t=a.a(e.comments).map(e=>{let t=e.value;return t.key=e.key,t}).filter(e=>!1===e.resolved),n=t.filter(e=>!1===e.reply).sort((e,t)=>e.videoTime-t.videoTime),s=t.filter(e=>!0===e.reply),d=n.map((e,t,n)=>(function e(t,n,a){t.level=a,t.replyBool=!1;let o=n.filter(e=>e.replies===t.key);if(o.length>0){t.replyKeeper=o;let l=++a;return t.replyKeeper.map(t=>e(t,n,l)),t}return t.replyKeeper=[],t})(e,s,0)),i=a.e("#sidebar").select("#annotation-wrap");i.selectAll("*").remove();a.f();let r=i.selectAll(".memo").data(d).join("div").classed("memo",!0);r.selectAll(".name").data(e=>[e]).join("span").classed("name",!0).selectAll("text").data(e=>[e]).join("text").text(e=>`${e.displayName}:`),r.selectAll(".time").data(e=>[e]).join("span").classed("time",!0).selectAll("text").data(e=>[e]).join("text").text(e=>(function(e){let t=parseInt(e);var n=l.Math.floor(t/60);return`${n}:${("0"+(t-60*n)).slice(-2)}`})(e.videoTime)),r.selectAll(".tag-span").data(e=>[e]).join("span").classed("tag-span",!0).selectAll(".badge").data(e=>e.tags.split(",")).join("span").classed("badge badge-secondary",!0).text(e=>e),r.selectAll(".comment").data(e=>[e]).join("span").classed("comment",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.comment),r.selectAll(".post-time").data(e=>[e]).join("span").classed("post-time",!0).selectAll("text").data(e=>[e]).join("text").text(e=>{return`on ${new Date(e.postTime).toUTCString()}`}),r.style("border",e=>`1px solid ${v.filter(t=>t.key===e.initTag)[0].color}`);let c=r.selectAll(".upvote-span").data(e=>[e]).join("span").classed("upvote-span",!0);c.selectAll(".upvote").data(e=>[e]).join("i").classed("upvote fas fa-thumbs-up fa-lg",!0),c.selectAll(".up-text").data(e=>[e]).join("text").classed("up-text",!0).text(e=>`: ${e.upvote} `);let p=r.selectAll(".downvote-span").data(e=>[e]).join("span").classed("downvote-span",!0);p.selectAll(".downvote").data(e=>[e]).join("i").classed("downvote fas fa-thumbs-down fa-lg",!0),p.selectAll(".down-text").data(e=>[e]).join("text").classed("down-text",!0).text(e=>`: ${e.downvote}`);let m=r.selectAll(".reply-span").data(e=>[e]).join("span").classed("reply-span",!0).text("Reply ");m.selectAll(".reply").data(e=>[e]).join("i").classed("far fa-comment-dots fa-lg reply",!0);let g=r.filter(e=>e.uid===j[j.length-1].uid).selectAll(".resolve-span").data(e=>[e]).join("span").classed("resolve-span",!0).text("Resolve ");g.selectAll(".resolve").data(e=>[e]).join("i").classed("resolve",!0).classed("resolve fas fa-check",!0),g.on("click",e=>{h.ref(`comments/${e.key}/resolved`).set("true")}),m.on("click",(function(e,t,n){a.b.stopPropagation(),!1===e.replyBool?(e.replyBool=!0,o.auth().onAuthStateChanged((function(a){a?u(e,t,n,a):console.log("NO USER",a)}))):(e.replyBool=!1,a.e(n[t].parentNode).select(".text-input-sidebar").remove())}));var h=o.database();c.on("click",e=>{let t=++e.upvote;h.ref(`comments/${e.key}/upvote`).set(`${t}`)}),p.on("click",e=>{let t=++e.downvote;h.ref(`comments/${e.key}/downvote`).set(`${t}`)}),r.on("click",e=>{"textarea"===a.b.target.tagName.toLowerCase()||"button"===a.b.target.tagName.toLowerCase()||"a"===a.b.target.tagName.toLowerCase()||"svg"===a.b.target.tagName.toLowerCase()||E(e)}),r.each((e,t,n)=>{e.replyKeeper.length>0&&function e(t){let n=t.selectAll(".reply-memo").data(e=>e.replyKeeper).join("div").classed("reply-memo",!0);n.style("margin-left",e=>`${10*e.level}px`);n.each((t,n,l)=>{!function(e){e.selectAll(".name").data(e=>[e]).join("span").classed("name",!0).selectAll("text").data(e=>[e]).join("text").text(e=>`${e.displayName}:`),e.selectAll(".tag-span").data(e=>[e]).join("span").classed("tag-span",!0).selectAll(".badge").data(e=>[e]).join("span").classed("badge badge-secondary",!0).style("background-color",e=>v.filter(t=>t.key===e.tags)[0].color).text(e=>e.tags),e.selectAll(".comment").data(e=>[e]).join("span").classed("comment",!0).selectAll("text").data(e=>[e]).join("text").text(e=>e.comment),e.selectAll(".post-time").data(e=>[e]).join("span").classed("post-time",!0).selectAll("text").data(e=>[e]).join("text").text(e=>{return`on ${new Date(e.postTime).toUTCString()}`});let t=e.selectAll(".upvote-span").data(e=>[e]).join("span").classed("upvote-span",!0);t.selectAll(".upvote").data(e=>[e]).join("i").classed("upvote fas fa-thumbs-up fa-sm",!0),t.selectAll(".up-text").data(e=>[e]).join("text").classed("up-text",!0).text(e=>`: ${e.upvote} `);let n=e.selectAll(".downvote-span").data(e=>[e]).join("span").classed("downvote-span",!0);n.selectAll(".downvote").data(e=>[e]).join("i").classed("downvote fas fa-thumbs-down",!0),n.selectAll(".down-text").data(e=>[e]).join("text").classed("down-text",!0).text(e=>`: ${e.downvote}`);let l=e.selectAll(".reply-span").data(e=>[e]).join("span").classed("reply-span",!0).text("Reply ");l.selectAll(".reply").data(e=>[e]).join("i").classed("far fa-comment-dots reply",!0).style("float","right");let s=e.selectAll(".resolve-span").data(e=>[e]).join("span").classed("resolve-span",!0).text("Resolve ");s.selectAll(".resolve").data(e=>[e]).join("i").classed("resolve",!0).classed("resolve fas fa-check",!0),s.on("click",e=>{h.ref(`comments/${e.key}/resolved`).set("true")}),l.on("click",(function(e,t,n){a.b.stopPropagation(),!1===e.replyBool?(e.replyBool=!0,o.auth().onAuthStateChanged((function(a){a?u(e,t,n,a):console.log("NO USER",a)}))):(e.replyBool=!1,a.e(n[t].parentNode).select(".text-input-sidebar").remove())}))}(a.e(l[n])),t.replyKeeper.length>0&&e(a.e(l[n]))})}(a.e(n[t]))})}s.b.add(d.faCheck,i.a,r.a,c.a),s.a.i2svg(),s.a.watch();const g=[{key:"question",tag:"question",tempCall:function(e,t,n){a.e(".dropdown.ann-type-drop").select("button").style("color",v.filter(e=>"none"===e.key)[0].color);document.getElementById("video").currentTime;let o=e.select(".template-wrap").append("div");o.append("div").classed("temp-text",!0).html("\n    <br>\n    <p>Choose the type of question in the drop down. </p>\n    <p>This can be biology or animation related. </p>\n    <p>Please be descriptive as possible.</p> \n    "),o.append("textarea").attr("id","text-area-id").attr("placeholder","Ask a biology or tool related question here.");x(o,[{key:"biology",color:"#0FF176"},{key:"animation",color:"#FFC300"}],"Type","q-tag-drop",null,null,!1,!0)}},{key:"critique or issue",tag:"issue",tempCall:function(e,t,n){a.e(".dropdown.ann-type-drop").select("button").style("color",v.filter(e=>"issue"===e.key)[0].color);document.getElementById("video").currentTime;let o=e.select(".template-wrap").append("div");o.append("div").classed("temp-text",!0).html(" <br>\n    <p>Have a critique or issue? \n     Is it missing something in the animation that should be there?\n     Is there something wrong in the structure or function?<p>\n    "),o.append("textarea").attr("id","text-area-id").attr("placeholder","Suggest something"),h(o,["critique","issue","animation","missing"])}},{key:"suggestion for animation/tool",tag:"suggestion",tempCall:function(e,t,n){a.e(".dropdown.ann-type-drop").select("button").style("color",v.filter(e=>"suggestion"===e.key)[0].color);document.getElementById("video").currentTime;let o=e.select(".template-wrap").append("div");o.append("div").classed("temp-text",!0).html("\n    <br>\n    <p>Have a critique of the animation or tool? <br> Make a suggestion to improve it.</p>\n     <p>Is it missing something in the animation that should be there?</p> \n     <p>Is there something wrong in the structure or function?</p>\n    "),o.append("textarea").attr("id","text-area-id").attr("placeholder","Suggest something..."),h(o,["suggestion","improvement","animation"])}},{key:"other",tag:"none",tempCall:function(e,t,n){a.e(".dropdown.ann-type-drop").select("button").style("color","black");document.getElementById("video").currentTime;let o=e.select(".template-wrap").append("div");o.append("div").classed("temp-text",!0).html("\n    <br>\n    <p>Couldn't find a type of comment that fits?</p>\n    <p>Add your comment and please include as many tags that describe the comment</p> \n    "),o.append("textarea").attr("id","text-area-id").attr("placeholder","Comment Here");x(o,v,"Tag","tag-drop");h(o,[])}}],v=[{key:"question",color:"#2E86C1"},{key:"suggestion",color:"#2ECC71"},{key:"issue",color:"#F1C40F"},{key:"context",color:"#F10F42"},{key:"none",color:"black"}];function h(e,t){let n=e.append("div").classed("tag-wrap",!0),o=n.selectAll("span.badge").data(t).join("span").classed("badge badge-secondary",!0);o.text(e=>`${e}  `);let l=o.append("text").text("X");l.style("padding","5px"),l.style("cursor","pointer"),l.on("click",(e,n,o)=>{a.e(o[n].parentNode).remove(),t=t.filter(t=>t!=e)});let s=e.append("div").classed("input-group mb-3",!0),d=s.append("input");d.classed("form-control",!0),d.node().type="text",d.node()["aria-label"]="tag add",d.node()["aria-describedby"]="basic-addon2";let i=s.append("div").classed("input-group-append",!0).append("button");i.text("Add Tag").classed("btn btn-outline-secondary",!0),i.on("click",()=>{t.push(d.node().value);let e=n.selectAll("span.badge").data(t).join("span").classed("badge badge-secondary",!0);e.text(e=>`${e}  `);let o=e.append("text").text("X");o.style("padding","5px"),o.style("cursor","pointer"),o.on("click",(e,n,o)=>{a.e(o[n].parentNode).remove(),t=t.filter(t=>t!=e)})})}const f=[];function y(){a.e("#push-div").remove(),a.e(".template-wrap").selectAll("*").remove(),a.e("form").remove(),a.e("#comment-submit-button").remove(),a.e(".dropdown.ann-type-drop").select("button").text("Type of Comment").style("color","gray");let e=a.e("canvas").node();e.getContext("2d").clearRect(0,0,e.width,e.height),e.height=0,e.width=0}function b(e,t,n,o,l,s,d,i){return{videoTime:t,postTime:(new Date).toString(),comment:a.e("#text-area-id").node().value,commentMark:d,posTop:null!=o?o[1]:null,posLeft:null!=o?o[0]:null,upvote:0,downvote:0,tags:"Tag"===n?"none":n,replies:s,reply:l,uid:e.uid,displayName:e.displayName,resolved:!1,initTag:i}}function x(e,t,n,l,s,d,i,r){let c=e.append("div").classed(`dropdown ${l}`,!0),u=c.append("button").classed("btn dropbtn dropdown-toggle",!0);u.text(n);u.node().value=n;let g=c.append("div").attr("id",l).classed("dropdown-content",!0);g.append("a").text("text").attr("font-size",11);let v=g.selectAll("a").data(t).join("a").text(e=>e.key);return i||v.append("svg").classed("color-box",!0).append("rect").attr("width",10).attr("height",10).attr("x",5).attr("y",8).attr("fill",e=>e.color),v.on("click",(t,n,l)=>{u.text(t.key);if(u.node().value=t.key,g.classed("show",!1),i){a.e(".template-wrap").selectAll("*").remove(),e.select(".tabber").remove(),e.select("#comment-submit-button").remove(),t.tempCall(e,s,d);let n=function(e){let t=e.append("form").classed("tabber",!0),n=t.append("label").classed("container",!0);n.text("Push"),n.node().for="t1";let a=n.append("input").attr("id","t1");a.node().name="radio",a.node().type="radio",a.node().checked=!0,n.append("span").classed("checkmark",!0),t.node().value="t1";let o=t.append("label").classed("container",!0).text("Draw");o.node().for="t2";let l=o.append("input").attr("id","t2");return l.node().name="radio",l.node().type="radio",l.node().checked=!1,o.append("span").classed("checkmark",!0),a.on("click",()=>{a.node().checked=!0,l.node().checked=!1,t.node().value="t1",k()}),l.on("click",()=>{a.node().checked=!1,l.node().checked=!0,t.node().value="t2",A()}),t}(e);"t1"===a.e(".tabber").node().value?k():A();let l=e.append("button").attr("id","comment-submit-button").text("Add").classed("btn btn-secondary",!0);console.log("data",t),l.on("click",async()=>{a.b.stopPropagation();let e=a.e(".tag-wrap").selectAll(".badge");if("question"===t.key)if("biology"!=a.e(".q-tag-drop").select("button").node().value&&"animation"!=a.e(".q-tag-drop").select("button").node().value)window.alert("select a type of question");else if("t1"===n.node().value){let n=document.getElementById("video").currentTime,l=a.e("#push-div").empty()?null:[a.e("#push-div").style("left"),a.e("#push-div").style("top")],d=b(s,n,e.data().toString(),l,!1,null,"push",t.tag);o.database().ref("comments").push(d),Object(p.a)(o.database().ref(),m),y()}else f(s,e,t);else if("t1"===n.node().value){let n=document.getElementById("video").currentTime,l=a.e("#push-div").empty()?null:[a.e("#push-div").style("left"),a.e("#push-div").style("top")],d=b(s,n,e.data().toString(),l,!1,null,"push",t.tag);o.database().ref("comments").push(d),Object(p.a)(o.database().ref(),m),y()}else!function(e,t,n){var l=o.storage().ref(),s=f[f.length-1].data;l.child(`images/im-${e.uid}-${f[f.length-1].index}.png`).putString(s,"data_url").then((function(l){let s=document.getElementById("video").currentTime,d=a.e("#push-div").empty()?null:[a.e("#push-div").style("left"),a.e("#push-div").style("top")],i=b(e,s,t.data().toString(),d,!1,null,"doodle",n.tag);i.doodle=!0,i.doodleName=l.metadata.name,o.database().ref("comments").push(i),Object(p.a)(o.database().ref(),m),y()}))}(s,e,t)})}r&&(a.e(".tag-wrap").remove(),a.e(".input-group.mb-3").remove(),h(e,[t.key,"question"]))}),u.on("click",(e,t,n)=>{g.classed("show")?g.classed("show",!1):g.classed("show",!0)}),v.raise(),u}function w(e){let t=a.a(e.comments).map(e=>{let t=e.value;return t.key=e.key,t}).filter(e=>!1===e.resolved).filter(e=>!1===e.reply).sort((e,t)=>e.videoTime-t.videoTime),n=a.e("#annotation-layer").select("svg"),l=a.d().domain([0,document.getElementById("video").duration]).range([3,n.node().getBoundingClientRect().width]),s=(a.d().domain([0,1]).range([10,15]),n.selectAll(".memo").data(t).join("rect").attr("width",3).attr("height",10).classed("memo",!0));s.style("fill",e=>`${v.filter(t=>t.key===e.initTag)[0].color}`),s.attr("x",e=>l(e.videoTime)),s.attr("y",10),s.on("mouseover",e=>{let t=a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").filter(t=>t.key===e.key);t.classed("selected",!0),t.nodes()[0].scrollIntoView()}).on("mouseout",e=>{a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").classed("selected",!1)}).on("click",e=>{E(e)}),async function(){var e=o.storage().ref();let t=await e.child("images/").listAll(),n=a.e("#interaction").select("svg");const l=document.querySelector("video");let s=a.e("video").node().getBoundingClientRect(),d=a.e("#interaction");d.style("width",s.width+"px").style("height",s.height+"px"),l.ontimeupdate=async e=>{let o=a.e("#annotation-layer").selectAll(".memo"),s=a.e("#sidebar").select("#annotation-wrap").selectAll(".memo");o.classed("selected",!1),s.classed("selected",!1);let i=[l.currentTime-1.5,l.currentTime+1.5],r=o.filter(e=>e.videoTime<i[1]&&e.videoTime>i[0]).classed("selected",!0),c=s.filter(e=>e.videoTime<i[1]&&e.videoTime>i[0]).classed("selected",!0);console.log("filtered",r);let p=r.filter(e=>"push"===e.commentMark),u=r.filter(e=>"doodle"===e.commentMark).data().map(async e=>{return await t.items.filter(t=>t.location.path===`images/${e.doodleName}`)[0].getDownloadURL()});d.selectAll(".doodles").data(await Promise.all(u)).join("img").classed("doodles",!0).attr("src",e=>e);let m=n.selectAll("g.pushed").data(p.data()).join("g").classed("pushed",!0).selectAll("circle").data(e=>[e]).join("circle");m.attr("r",10),m.attr("cx",e=>e.posLeft),m.attr("cy",e=>e.posTop),m.attr("fill","red"),m.on("mouseover",e=>{let t=a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").filter(t=>t.key===e.key);t.classed("selected",!0),t.nodes()[0].scrollIntoView()}).on("mouseout",e=>{a.e("#sidebar").select("#annotation-wrap").selectAll(".memo").classed("selected",!1)}),c.empty()||c.nodes()[0].scrollIntoView()}}()}function k(){let e=a.e("canvas").node();e.getContext("2d").clearRect(0,0,e.width,e.height),e.height=0,e.width=0;let t=a.e("#interaction");t.style("width",`${document.getElementById("video").getBoundingClientRect().width}px`),t.style("height",`${document.getElementById("video").getBoundingClientRect().height}px`),t.on("click",(function(){a.b.target;a.b.stopPropagation();let e=a.c(this);o.auth().onAuthStateChanged((function(n){if(n)if(a.e("#push-div").empty()&&"t2"!=a.e(".tabber").node().value){let n=t.append("div").attr("id","push-div");n.style("position","absolute"),n.style("top",t=>e[1]+"px"),n.style("left",t=>e[0]+"px");n.append("svg").classed("push",!0).append("circle").attr("r",7).attr("cx",6).attr("cy",e=>7).attr("fill","cornflowerblue");n.append("div").classed("comment-initiated",!0).append("h6").text("Comment for this spot")}else a.e("#push-div").remove();else console.log("NO USER",n)}))}))}function A(){let e=document.getElementById("main-wrap");a.e("#interaction").selectAll("*").remove();let t=a.e(e).select("canvas").node();t.setAttribute("id","vid-canvas");const n=t.getContext("2d");let l=document.getElementById("video").getBoundingClientRect();var s,d;t.width=l.width,t.height=l.height,n.strokeStyle="red",n.lineWidth=5;var i=!1;return e.onmousedown=function(e){let t=document.getElementById("sidebar").getBoundingClientRect();s=e.pageX-t.width,d=e.pageY,i=!0},e.onmousemove=function(e){let t=document.getElementById("sidebar").getBoundingClientRect();var a=e.pageX-t.width,o=e.pageY;i&&(n.beginPath(),n.moveTo(s,d),n.lineTo(a,o),n.stroke(),n.closePath(),s=a,d=o)},e.onmouseup=async function(e){i=!1;let n=t.toDataURL("image/png");var a=o.storage().ref(),l=n;let s=await Promise.resolve(a.child("images/").listAll());f.push({index:s.items.length,data:l})},e}function E(e){let t=e.videoTime;const n=document.getElementById("progress-bar");let o=a.e("#sidebar").select("#annotation-wrap");o.selectAll(".memo").classed("selected",!1);let l=o.selectAll(".memo").filter(t=>t.key===e.key);console.log("memooooo",l.node(),l.nodes(),l.nodes()[0]),l.classed("selected",!0),l.nodes()[0].scrollIntoView(),document.getElementById("video").currentTime=t,n.value=t,seek.value=t}n(156);const j=[];o.apps.length||o.initializeApp(p.b);let I=document.getElementById("main-wrap");if(I){!function(e,t){let n=a.e(e).select("video");n.attr("id","video");let l=n.append("source");l.attr("src",t),l.attr("type","video/mp4"),function(e){const t=document.getElementById("video-controls"),n=document.getElementById("play"),l=document.querySelectorAll(".playback-icons use"),s=document.getElementById("time-elapsed"),d=document.getElementById("duration"),i=document.getElementById("progress-bar"),r=document.getElementById("seek"),c=document.getElementById("seek-tooltip"),u=document.getElementById("volume-button"),m=document.querySelectorAll(".volume-button use"),g=document.querySelector('use[href="#volume-mute"]'),v=document.querySelector('use[href="#volume-low"]'),h=document.querySelector('use[href="#volume-high"]'),f=document.getElementById("volume"),y=document.getElementById("playback-animation"),b=document.getElementById("fullscreen-button"),x=document.getElementById("video-container"),k=document.getElementById("video").getBoundingClientRect();document.createElement("video").canPlayType&&(e.controls=!1,t.classList.remove("hidden"));function A(){e.paused||e.ended?e.play():e.pause()}function E(){l.forEach(e=>e.classList.toggle("hidden")),e.paused?(n.setAttribute("data-title","Play (k)"),a.e("#play-r").classed("hidden",!1),a.e("#pause-r").classed("hidden",!0)):(n.setAttribute("data-title","Pause (k)"),a.e("#play-r").classed("hidden",!0),a.e("#pause-r").classed("hidden",!1))}function j(e){const t=new Date(1e3*e).toISOString().substr(11,8);return{minutes:t.substr(3,2),seconds:t.substr(6,2)}}function I(){e.muted=!e.muted,e.muted?(f.setAttribute("data-volume",f.value),f.value=0):f.value=f.dataset.volume}function T(){y.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(1.3)"}],{duration:500})}function B(){e.paused||t.classList.add("hide")}function C(){t.classList.remove("hide")}a.e(t).style("width",`${k.width}px`),n.addEventListener("click",A),e.addEventListener("play",E),e.addEventListener("pause",E),e.addEventListener("loadedmetadata",(function(){const t=Math.round(e.duration);r.setAttribute("max",t),i.setAttribute("max",t);const n=j(t);d.innerText=`${n.minutes}:${n.seconds}`,d.setAttribute("datetime",`${n.minutes}m ${n.seconds}s`)})),e.addEventListener("timeupdate",(function(){const t=j(Math.round(e.currentTime));s.innerText=`${t.minutes}:${t.seconds}`,s.setAttribute("datetime",`${t.minutes}m ${t.seconds}s`),a.e("#time-update").select("text").text(`${t.minutes}m ${t.seconds}s`)})),e.addEventListener("timeupdate",(function(){r.value=Math.floor(e.currentTime),i.value=Math.floor(e.currentTime)})),e.addEventListener("volumechange",(function(){m.forEach(e=>{e.classList.add("hidden")}),u.setAttribute("data-title","Mute (m)"),e.muted||0===e.volume?(g.classList.remove("hidden"),u.setAttribute("data-title","Unmute (m)")):e.volume>0&&e.volume<=.5?v.classList.remove("hidden"):h.classList.remove("hidden")})),e.addEventListener("click",A),e.addEventListener("click",T),e.addEventListener("mouseenter",C),e.addEventListener("mouseleave",B),t.addEventListener("mouseenter",C),r.addEventListener("mousemove",(function(t){const n=Math.round(t.offsetX/t.target.clientWidth*parseInt(t.target.getAttribute("max"),10));r.setAttribute("data-seek",n);const a=j(n);c.textContent=`${a.minutes}:${a.seconds}`;const o=e.getBoundingClientRect();c.style.left=`${t.pageX-o.left}px`})),r.addEventListener("input",(function(t){const n=t.target.dataset.seek?t.target.dataset.seek:t.target.value;e.currentTime=n,i.value=n,r.value=n})),f.addEventListener("input",(function(){e.muted&&(e.muted=!1),e.volume=f.value})),u.addEventListener("click",I),x.addEventListener("fullscreenchange",(function(){fullscreenIcons.forEach(e=>e.classList.toggle("hidden")),document.fullscreenElement?b.setAttribute("data-title","Exit full screen (f)"):b.setAttribute("data-title","Full screen (f)")})),a.e("#play-r").on("click",A),a.e("#pause-r").on("click",A),document.addEventListener("DOMContentLoaded",()=>{"pictureInPictureEnabled"in document||pipButton.classList.add("hidden")});let $=o.database().ref();Object(p.a)($,w)}(n.node())}(I,"./public/spike_protein_fusion_movie.mp4");let e=a.e("video").node().getBoundingClientRect(),t=window.innerWidth-(e.x+e.width);a.e("#annotation-right").style("left",e.x+e.width+"px"),a.e("#annotation-right").style("height",e.height+"px"),a.e("#annotation-right").style("width",t+"px"),a.e("#annotation-right").select("#control").style("margin-left",t/2-10+"px"),o.auth().onAuthStateChanged((function(t){if(t){j.push(t);x(a.e("#annotation-wrap-r"),g,"Type of Comment","ann-type-drop",t,null,!0);a.e("#annotation-wrap-r").append("div").classed("template-wrap",!0);o.storage().ref();a.e("#interaction").attr("width",e.width).attr("height",e.height)}else console.log("NO USER",t)}))}function T(e){let t=a.a(e["special-users"]).map(e=>e.key),n=o.auth().currentUser;if(t.indexOf(n.uid)>-1){let e=a.e(".user-wrap");e.selectAll("*").remove(),e.append("text").text(`Signed in as Admin: ${n.displayName}`);let t=e.append("a");t.attr("href","https://github.com/visdesignlab/coronavirus_annotation/issues"),t.attr("target","_blank"),t.append("span").classed("fas fa-bug",!0)}else{let e=a.e(".user-wrap");e.selectAll("*").remove(),e.append("text").text(`Signed in as: ${n.displayName}`)}}o.auth().onAuthStateChanged((function(e){if(e){let e=o.database().ref();Object(p.a)(e,m),Object(p.a)(e,T)}else console.log("NO USER",e)}))}});
//# sourceMappingURL=annotation.8c4b787e.js.map