(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),s=n(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),r=a.NODE_ENV,j=a.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(j);var o=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),b=n(31),d=[{index:!0,label:"Huey Vuong",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],h=n(0),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,165,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],l=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},p=n(24),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(u.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:"My logo"})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Huey Vuong"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:th.vuong02@gmail.com",children:"th.vuong02@gmail.com"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsx)("p",{children:"Huey Vuong. Software Engineer. React Developer. "}),Object(h.jsx)("p",{children:"Experienced Software Developer mainly on frontend development. Familiar with all aspects of Software Development Life Cycle phases and agile project management."}),Object(h.jsx)("p",{children:"Technology stack: HTML5, CSS, JS ES6, React, Redux, React Hooks, React Router, SCSS, Typescript, Babel, Webpack, Jquery, Jest, Enzyme, NodeJS, Express, MongoDB, SQL, Git, Restful services, JSON, Agile Scrum"}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(h.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsx)("p",{className:"copyright",children:"\xa9 Huey Vuong"})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(h.jsxs)(l.b,{children:[Object(h.jsx)(o,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(l.a,{titleTemplate:"%s | Huey Vuong",defaultTitle:"Huey Vuong",children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Huey Vuong's personal website."};t.a=v},24:function(e,t,n){"use strict";n(1);var c=n(28),l=n(29),i=n(30),s=[{link:"https://github.com/huycans",label:"Github",icon:l.faGithub},{link:"mailto:th.vuong02@gmail.com",label:"Email",icon:i.faEnvelope}],a=n(0);t.a=function(){return Object(a.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),s=n(5),a=n(3),r=n(21),j=(n(44),n(0)),o=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,161))})),u=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,162))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,163))})),d=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,164))})),h=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,167))})),O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,166))})),x=function(){return Object(j.jsx)(s.a,{basename:"",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(a.a,{path:"/about",component:o}),Object(j.jsx)(a.a,{path:"/projects",component:h}),Object(j.jsx)(a.a,{path:"/contact",component:u}),Object(j.jsx)(a.a,{path:"/resume",component:O}),Object(j.jsx)(a.a,{component:d,status:404})]})})})},m=function(){return Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(x,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(i.hydrate)(Object(j.jsx)(m,{}),p):Object(i.render)(Object(j.jsx)(m,{}),p)}},[[45,1,3]]]);
//# sourceMappingURL=main.a3a50c10.chunk.js.map