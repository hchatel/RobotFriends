(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(16),c=n.n(a),i=(n(25),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(26),function(e){var t=e.robot,n=t.id,r=t.name,a=t.email;return o.a.createElement("div",{className:"tc ba bw1 br4 b--gray bg-light-gray ma2 grow dib"},o.a.createElement("img",{src:"https://robohash.org/"+n+"?size=250x250",alt:""}),o.a.createElement("h3",{className:"dark-blue overflow-y-auto"},r),o.a.createElement("p",null,a))}),b=function(e){var t=e.robots;return o.a.createElement("div",{className:"tc"},t.map(function(e){return o.a.createElement(d,{key:e.id,robot:e})}))},p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("input",{className:"pa2 ma3",type:"text",name:"searchbox",placeholder:"search",onChange:function(t){return e.props.onSearchChange(t.target.value)}}))}}]),t}(o.a.Component),f=function(e){return o.a.createElement("div",{className:"overflow-y-scroll h-100"},e.children)},g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={hasError:!1,error:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops, an error has occured : ",this.state.error):this.props.children}}]),t}(o.a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",{className:"ma3 pa2 robotFont white f2"},"RoboFriends")}}]),t}(o.a.PureComponent),v=n(10),E=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,r=e.onSearchChange,a=e.pending;console.log(n);var c=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o.a.createElement("div",{className:"App tc"},o.a.createElement("div",{className:"dt w-100 bb bw1 b--white pa3 head",style:{height:"15vh"}},o.a.createElement("div",{className:"dtc"},o.a.createElement(m,null)),o.a.createElement("div",{className:"dtc tr"},o.a.createElement(p,{onSearchChange:r}))),o.a.createElement("div",{style:{height:"85vh"}},c.length?o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement(b,{robots:c}))):o.a.createElement("h2",{className:"tc br2 bg-white gray pa2 dib"},a?"Robots are loading...":"No robot found")))}}]),t}(r.Component),O=Object(v.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.getRobots.robots,pending:e.getRobots.pending,error:e.getRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t})},onRequestRobots:function(){return e(function(e){e({type:"FETCH_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"FETCH_ROBOTS_FAILURE",payload:t})})})}}})(E),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(31);var j=n(7),C={searchField:""},R={pending:!1,robots:[],error:null},S=n(18),N=n(19),F=Object(j.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ROBOTS_PENDING":return Object.assign({},e,{pending:!0,error:null});case"FETCH_ROBOTS_SUCCESS":return Object.assign({},e,{pending:!1,robots:t.payload,error:null});case"FETCH_ROBOTS_FAILURE":return Object.assign({},e,{pending:!1,robots:[],error:t.payload});default:return e}}}),k=Object(j.d)(F,Object(j.a)(N.a,S.logger));c.a.render(o.a.createElement(v.a,{store:k},o.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RobotFriends","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.116d95ec.chunk.js.map