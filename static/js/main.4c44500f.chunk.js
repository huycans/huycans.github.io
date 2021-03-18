(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(1),i=t(16),l=t(3),s=t(12),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),r=a.NODE_ENV,j=a.REACT_APP_GA_TRACKING_ID;"production"===r&&s.a.initialize(j);var o=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),b=t(32),d=[{index:!0,label:"Huy Vuong",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],h=t(0),O=Object(c.lazy)((function(){return t.e(4).then(t.t.bind(null,166,7))})),x=function(){var e=Object(c.useState)(!1),n=Object(b.a)(e,2),t=n[0],i=n[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:t?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:t,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:e.path,onClick:function(){return i(!t)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},p=t(24),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(u.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:"My logo"})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Huy Vuong"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:huyvuong0096@gmail.com",children:"huyvuong0096@gmail.com"})})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsxs)("p",{children:["Huy Vuong. Software Engineer. Javascript Developer. Graduate student at George Mason University in Software Engineering since 2019. Formerly worked at ",Object(h.jsx)("a",{href:"https://rnd4u.com/",children:"RND4U, Inc"})]}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(h.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsx)("p",{className:"copyright",children:"\xa9 Huy Vuong"}),Object(h.jsx)("p",{className:"copyright",children:"Adapted from Michael D'Angelo"})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(h.jsxs)(i.b,{children:[Object(h.jsx)(o,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(i.a,{titleTemplate:"%s | Huy Vuong",defaultTitle:"Huy Vuong",children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Huy Vuong's personal website."};n.a=v},24:function(e,n,t){"use strict";t(1);var c=t(28),i=t(29),l=t(30),s=t(31),a=[{link:"https://github.com/huycans",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/huytvuong",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:huyvuong0096@gmail.com",label:"Email",icon:s.faEnvelope}],r=t(0);n.a=function(){return Object(r.jsx)("ul",{className:"icons",children:a.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),l=t(15),s=t(5),a=t(3),r=t(21),j=(t(45),t(0)),o=Object(c.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,162))})),u=Object(c.lazy)((function(){return t.e(8).then(t.bind(null,163))})),b=Object(c.lazy)((function(){return t.e(9).then(t.bind(null,164))})),d=Object(c.lazy)((function(){return t.e(10).then(t.bind(null,165))})),h=Object(c.lazy)((function(){return t.e(6).then(t.bind(null,168))})),O=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,167))})),x=function(){return Object(j.jsx)(s.a,{basename:"",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(a.a,{path:"/about",component:o}),Object(j.jsx)(a.a,{path:"/projects",component:h}),Object(j.jsx)(a.a,{path:"/contact",component:u}),Object(j.jsx)(a.a,{path:"/resume",component:O}),Object(j.jsx)(a.a,{component:d,status:404})]})})})},m=function(){return Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(l.hydrate)(Object(j.jsx)(m,{}),p):Object(l.render)(Object(j.jsx)(m,{}),p)}},[[46,1,3]]]);
//# sourceMappingURL=main.4c44500f.chunk.js.map