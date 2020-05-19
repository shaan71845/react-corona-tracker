(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(58),l=a.n(c),o=a(6),i=a(7),s=a(9),m=a(8),u=a(59),d=a.n(u),f=a(27),h=a.n(f),v=a(62),E=a.n(v),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNavMenu=function(){return n.setState({isNavOpen:!n.state.isNavOpen})},n.state={isNavOpen:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isNavOpen?"active-nav-menu":"";return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"brand"},r.a.createElement("a",{href:"#!"},"Covid-19 tracker")),r.a.createElement("ul",{className:e},r.a.createElement("li",{class:"close"},r.a.createElement(E.a,{onClick:this.toggleNavMenu,color:"rgb(115, 46, 193)",fontSize:"40px"})),r.a.createElement("li",null,r.a.createElement(h.a,{offset:function(){return 100},href:"#showcase"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/pomber/covid19"},"API")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/codeshaan"},"GitHub"))),r.a.createElement(d.a,{className:"nav-toggle",color:"rgb(115, 46, 193)",onClick:this.toggleNavMenu,fontSize:"40px"})))}}]),a}(r.a.Component),g=a(63),y=a.n(g),b=a(28),C=a.n(b);var N=function(e){return r.a.createElement("section",{id:"showcase",className:"showcase"},r.a.createElement(C.a,{left:!0},r.a.createElement("div",{className:"showcase-img"},r.a.createElement("img",{src:y.a,alt:"Showcaseimage"}))),r.a.createElement(C.a,{right:!0,delay:500},r.a.createElement("div",{className:"showcase-text"},r.a.createElement("h1",null,"Track any county's status with our ",r.a.createElement("br",null),r.a.createElement("span",{className:"showcase-title"},"CORONA-TRACKER.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country Name...."}),r.a.createElement(h.a,{offset:function(){return 100},href:"#graph-section",onClick:e.onFormSubmit,className:"primary-btn"},"Search")))))},k=a(16),O=a.n(k);var w=function(e){return r.a.createElement(O.a,{left:!0},r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-title"},e.title),r.a.createElement("h3",null,e.value)))};var S=function(e){return r.a.createElement("div",{className:"cards-info-grid"},e.cards.map((function(e){return r.a.createElement(w,{key:"#"+Math.floor(16777215*Math.random()).toString(16),title:e.title,value:e.value})})))},A=a(64),j=a(11),M=a.n(j),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={cards:[{title:"Confirmed",value:1e3},{title:"Deaths",value:1e3},{title:"Recovered",value:1e3}],currentCountryData:{}},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"graph-section",className:"graph-section"},r.a.createElement("div",{className:"container"},r.a.createElement(S,{cards:this.state.cards})),r.a.createElement(M.a,{up:!0,delay:400},r.a.createElement("div",{className:"chart-container"},r.a.createElement(A.a,{data:this.state.data,options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"".concat(this.props.name),fontSize:25}}}))))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=[],a=e.data[e.data.length-1];return a&&(t=[{title:"Confirmed",value:a.confirmed},{title:"Deaths",value:a.deaths},{title:"Recovered",value:a.recovered}]),{data:{labels:e.data.map((function(e){return e.month})),datasets:[{label:"Confirmed",data:e.data.map((function(e){return e.confirmed})),backgroundColor:"rgba(252, 133, 163, 0.5)"},{label:"Deaths",data:e.data.map((function(e){return e.deaths})),backgroundColor:"rgba(226, 36, 49, 0.7)"},{label:"Recovered",data:e.data.map((function(e){return e.recovered})),backgroundColor:"rgba(255, 76, 133, 0.7)"}]},cards:t}}}]),a}(r.a.Component);var F=function(e){return r.a.createElement(O.a,{left:!0,delay:400+100*e.id},r.a.createElement("div",{className:"country-data"},r.a.createElement("span",{className:"country-count"},"#",e.id),r.a.createElement("h3",null,e.affectedCountry.name),r.a.createElement("h5",null,"Confirmed: ",e.affectedCountry.confirmed)))},z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).generate=function(){return Math.floor(1677215*Math.random()).toString(16)},n.state={},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=1;return r.a.createElement("section",{className:"affected-countries-section"},r.a.createElement("div",{className:"container"},r.a.createElement(M.a,null,r.a.createElement("h1",null,"World's most affected countries")),r.a.createElement("div",{className:"grid"},this.props.topAffectedCountries.map((function(a){return r.a.createElement(F,{id:t++,key:e.generate(),affectedCountry:a})})))))}}],[{key:"getStateFromProps",value:function(e){return{topAffectedCountries:e.topAffectedCountries}}}]),a}(r.a.Component),I=a(66),D=a.n(I),R=a(67),P=a.n(R),W=a(68),J=a.n(W),T=a(17);var B=function(){return r.a.createElement("section",{className:"card-grid-section"},r.a.createElement("div",{className:"container"},r.a.createElement(T.Fade,null,r.a.createElement("h1",null,"#GOCORONA")),r.a.createElement("div",{className:"card-grid"},r.a.createElement(T.Flip,{left:!0,delay:300},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:D.a,alt:"card-img"}),r.a.createElement("h3",null,"Wash hands often!"),r.a.createElement("p",null,"Wash your hands properly with a good sanitizer!"))),r.a.createElement(T.Flip,{left:!0,delay:300},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:P.a,alt:"card-img"}),r.a.createElement("h3",null,"Cover your mouth while sneezing!"),r.a.createElement("p",null,"It's always good to cover your mouth while sneezing. You'll always thank yourself for that!"))),r.a.createElement(T.Flip,{left:!0,delay:300},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:J.a,alt:"card-img"}),r.a.createElement("h3",null,"Stay at home, Work at home!"),r.a.createElement("p",null,"This pandemic time, be at home, work at home, & learn at home!"))))))},G=a(69),H=a.n(G),Y=a(70),K=a.n(Y);var $=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Made by Shaan Alam with ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764")),r.a.createElement("h1",null,"You can follow me here..."),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"#!"},r.a.createElement(H.a,{fontSize:"40px",color:"#fff"})),r.a.createElement("a",{href:"#!"},r.a.createElement(K.a,{fontSize:"40px",color:"#fff"})))))},q=(a(186),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getTopAffectedCountries=function(){var e,t,a=Object.keys(n.state.API),r=[];a.forEach((function(a){e=n.getCountryAnalytics(a),t=e[e.length-1].confirmed,r.push({name:a,confirmed:t})}));var c=r.sort((function(e,t){return t.confirmed-e.confirmed})).slice(0,10);n.setState({topAffectedCountries:c})},n.onFormSubmit=function(e){if(""!==e.target.previousElementSibling.value){var t=n.state.currentCountry;t.name=e.target.previousElementSibling.value,t.data=n.getCountryAnalytics(t.name),n.setState({currentCountry:t})}else alert("empty box")},n.getCountryAnalytics=function(e){for(var t=["","Jan","Feb","Mar","Apr","May","June","July","August","September","October","November","December"],a=n.state.API[e],r=[],c=function(e){var n=a.filter((function(t){return+t.date.split("-")[1]===e})),c=n[n.length-1];c.month=t[e],r.push(c)},l=1;l<=(new Date).getMonth()+1;l++)c(l);return r},n.state={API:"",currentCountry:{name:"",data:[]},topAffectedCountries:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(t){e.setState({API:t});var a=e.getCountryAnalytics("India");e.setState({currentCountry:{name:"India",data:a}}),e.getTopAffectedCountries()}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(p,{navMenu:this.state.navMenu,toggleNavMenu:this.toggleNavMenu}),r.a.createElement(N,{onFormSubmit:this.onFormSubmit}),r.a.createElement(x,{data:this.state.currentCountry.data,name:this.state.currentCountry.name}),r.a.createElement(z,{topAffectedCountries:this.state.topAffectedCountries}),r.a.createElement(B,null),r.a.createElement($,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a.p+"static/media/Mask.a801879c.png"},66:function(e,t,a){e.exports=a.p+"static/media/sanitizer.d291ff8f.png"},67:function(e,t,a){e.exports=a.p+"static/media/sneezing.c6e42e36.png"},68:function(e,t,a){e.exports=a.p+"static/media/homework.392a1213.png"},73:function(e,t,a){e.exports=a(187)}},[[73,1,2]]]);
//# sourceMappingURL=main.5c811cc8.chunk.js.map