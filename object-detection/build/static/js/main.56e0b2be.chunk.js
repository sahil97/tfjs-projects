(this["webpackJsonpobject-detection"]=this["webpackJsonpobject-detection"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(8),i=n.n(c),r=(n(20),n(9)),s=n(10),l=n(13),u=n(11),d=n(14),f=n(12),h=(n(34),n(32),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).video=o.a.createRef(),n.canvas=o.a.createRef(),n.detectFrame=function(e,t){t.detect(e).then((function(a){n.renderPredictions(a),requestAnimationFrame((function(){n.detectFrame(e,t)}))}))},n.renderPredictions=function(e){var t=n.canvas.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var a="16px sans-serif";t.font=a,t.textBaseline="top",e.forEach((function(e){var n=e.bbox[0],o=e.bbox[1],c=e.bbox[2],i=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(n,o,c,i),t.fillStyle="#00FFFF";var r=t.measureText(e.class).width,s=parseInt(a,10);t.fillRect(n,o,r+4,s+4)})),e.forEach((function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.class,n,a)}))},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then((function(t){return window.stream=t,e.video.current.srcObject=t,new Promise((function(t,n){e.video.current.onloadedmetadata=function(){t()}}))})),n=f.a();Promise.all([n,t]).then((function(t){e.detectFrame(e.video.current,t[0])})).catch((function(e){console.error(e)}))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Object Detection using Tensorflow-JS "),o.a.createElement("p",null," Model used - CocoSSD"),o.a.createElement("div",{class:"objectDeteciton"},o.a.createElement("video",{ref:this.video,autoPlay:!0,playsInline:!0,muted:!0,height:"500",width:"600"}),o.a.createElement("canvas",{height:"500",width:"600",ref:this.canvas}))),o.a.createElement("footer",{class:"footer"},o.a.createElement("p",null,"Built by"," ",o.a.createElement("a",{href:"https://github.com/sahil97"},"@Sahil Sharma"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.56e0b2be.chunk.js.map