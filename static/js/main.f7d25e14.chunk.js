(this["webpackJsonpfcc-random-quote-machine"]=this["webpackJsonpfcc-random-quote-machine"]||[]).push([[0],{30:function(t,n,e){t.exports=e(45)},35:function(t,n,e){},45:function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o),r=e(22),c=e.n(r),i=(e(35),e(18)),s=e.n(i),u=e(23),b=e(11),h=e(12),l=e(15),d=e(13),p=e(16),m=(e(6),e(5)),f=e(2),g=e(25),v=e(28);function j(t){return"\n  -webkit-border-radius: ".concat(t,";\n  -moz-border-radius: ").concat(t,";\n  -ms-border-radius: ").concat(t,";\n  -o-border-radius: ").concat(t,";\n  border-radius: ").concat(t,";")}function w(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];if(1===n.length){var o=n[0];return"\n    -webkit-transition: ".concat(o,";\n    -moz-transition: ").concat(o,";\n    -ms-transition: ").concat(o,";\n    -o-transition: ").concat(o,";\n    transition: ").concat(o,";")}if(2===n.length&&Object(v.isArray)(n[0])){var a=n[1],r=n[0].reduce((function(t,n){return t+", "+n}));return"\n    -webkit-transition: ".concat(a,";\n    -moz-transition: ").concat(a,";\n    -ms-transition: ").concat(a,";\n    -o-transition: ").concat(a,";\n    transition: ").concat(a,";\n    -webkit-transition-property: ").concat(r,";\n    -moz-transition-property: ").concat(r,";\n    -ms-transition-property: ").concat(r,";\n    -o-transition-property: ").concat(r,";\n    transition-property: ").concat(r,";\n    ")}return""}var O=e(14),x=e(29),y=e(19);e(7).b.add(x.a);var k=Object(m.a)("div",{target:"e144mayb0"})("text-align:center;background-color:",(function(t){return t.theme.color}),";",w(["background-color","color"],"1000ms ease-in")," min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:",(function(t){return t.theme.color}),";"),q=Object(m.a)("div",{target:"e144mayb1"})("background-color:white;padding:2vw;max-width:90vw;min-height:100px;@media (min-width:1000px){max-width:40vw;}",j("10px"),""),C=Object(m.a)("p",{target:"e144mayb2"})("float:",(function(t){return t.right?"right":"left"}),";margin:3vh 1vw 0 0;padding:10px;background-color:",(function(t){return t.theme.color}),';border:none;color:#fff;line-height:40px;height:40px;:hover,:focus{opacity:0.9;cursor:pointer;};position:relative;overflow:hidden;transform:translate3d(0,0,0);:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#000 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform 1s,opacity 1s;}:active:after{transform:scale(0,0);opacity:.2;transition:0s;}min-width:40px;',j("5px")," ",w("background-color 1000ms ease-in"),""),z=C.withComponent("a"),Q=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],R={name:"1l0t74o",styles:"text-align:right;padding-right:1vw;"},A=function(t){function n(){return Object(b.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){return Object(f.b)("div",{id:this.props.id,css:R},"- ",this.props.name)}}]),n}(a.a.Component),M=Object(m.a)("div",{target:"e144mayb3"})({name:"l6nc1a",styles:"font-size:calc(18px + (50 - 18) * ((100vw - 300px) / (1600 - 300)));margin-bottom:20px;"}),B=Object(m.a)("span",{target:"e144mayb4"})({name:"bc3q9x",styles:"padding:0 calc(5px + 1vw) 0 calc(5px + 1vw);"}),E=function(t){function n(){return Object(b.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){return Object(f.b)(M,null,Object(f.b)(O.a,{icon:y.a}),Object(f.b)(B,{id:this.props.id},this.props.text),Object(f.b)(O.a,{icon:y.b}))}}]),n}(a.a.Component),I="".concat("/fcc-random-quote-machine","/api/1.0/"),J=function(t){function n(t){var e;return Object(b.a)(this,n),(e=Object(l.a)(this,Object(d.a)(n).call(this,t))).onClick=function(){},e.getRandomColor=function(){return Q[Math.round(Math.random()*(Q.length-1))]},e.changeColor=function(){e.setState({theme:{color:e.getRandomColor()}})},e.getQuote=Object(u.a)(s.a.mark((function t(){var n,o,a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(I,"?method=getQuote&format=json&lang=en"));case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,console.log(o),a=o.quoteText,r=o.quoteAuthor,e.changeColor(),e.setState({quote:a,author:r}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),e.state={author:"Name Of the Guy",quote:"This is a really inspiring citation",theme:{color:e.getRandomColor()}},e}return Object(p.a)(n,t),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){var t=this.state,n=t.author,e=t.quote,o=encodeURI('"'.concat(e,'" - ').concat(n));return Object(f.b)(g.a,{theme:this.state.theme},Object(f.b)(k,null,Object(f.b)(q,{id:"quote-box"},Object(f.b)(E,{id:"text",text:e}),Object(f.b)(A,{id:"author",name:n}),Object(f.b)(C,{id:"new-quote",right:!0,onClick:this.getQuote}," Next Quote "),Object(f.b)(z,{id:"tweet-quote",onClick:this.tweet,target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(o,"&hashtags=quote")},Object(f.b)(O.a,{icon:["fab","twitter"]})))))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f7d25e14.chunk.js.map