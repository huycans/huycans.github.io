(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{167:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),i=n(21),o=n(0),s=function(e){var t=e.data,n=e.last;return Object(o.jsxs)("li",{className:"course-container",children:[Object(o.jsx)("a",{children:Object(o.jsx)("p",{className:"course-name",children:t.title})}),!n&&Object(o.jsx)("div",{className:"course-dot",children:Object(o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};s.defaultProps={last:!1};var c=s,l=function(e){var t,n=e.data;return Object(o.jsxs)("div",{className:"courses",children:[Object(o.jsx)("div",{className:"link-to",id:"courses"}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:"Selected Courses"})}),Object(o.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(o.jsx)(c,{data:e,last:n===t.length-1},e.title)})))})]})};l.defaultProps={data:[]};var u=l,d=[{title:"Object-Oriented Software Specification & Construction",number:"",link:"",university:"GMU"},{title:"Database System",number:"",link:"",university:"GMU"},{title:"Software Testing",number:"",link:"",university:"GMU"},{title:"Secure Software Design and Programming",number:"",link:"",university:"GMU"},{title:"Software Engineering for the Web",number:"",link:"",university:"GMU"},{title:"Data Mining",number:"",link:"",university:"GMU"},{title:"UI Design and Development",number:"",link:"",university:"GMU"},{title:"Design Patterns",number:"",link:"",university:"VGU"},{title:"Algorithm and Data Structures",number:"",link:"",university:"VGU"},{title:"Object Oriented Programing with Java",number:"",link:"",university:"VGU"},{title:"Computer Network",number:"",link:"",university:"VGU"}],p=function(e){var t=e.data;return Object(o.jsx)("article",{className:"degree-container",children:Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{className:"degree",children:t.degree}),Object(o.jsx)("p",{className:"school",children:Object(o.jsx)("a",{href:t.link,children:t.school})})]})})},b=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("div",{className:"link-to",id:"education"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(o.jsx)(p,{data:e},e.school)})),Object(o.jsx)(u,{data:d})]})};b.defaultProps={data:[]};var m=b,y=function(e){var t=e.data;return Object(o.jsxs)("article",{className:"jobs-container",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h4",{children:[Object(o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(o.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})},h=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"experience",children:[Object(o.jsx)("div",{className:"link-to",id:"experience"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(o.jsx)(y,{data:e},e.company)}))]})};h.defaultProps={data:[]};var f=h;function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return S(this,n)}}var k=n(56),D=n(54),w=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(o.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},P=function(e){var t=e.data,n=e.categories,a=t.category,r=t.competency,i=t.title,s={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},c=Object(D.a)(Object(D.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(o.jsxs)("div",{className:"skillbar clearfix",children:[Object(o.jsx)("div",{className:"skillbar-title",style:s,children:Object(o.jsx)("span",{children:i})}),Object(o.jsx)("div",{className:"skillbar-bar",style:c}),Object(o.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};P.defaultProps={categories:[]};var N=P,R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,a,r=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(D.a)(Object(D.a)({},n),{},Object(k.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(D.a)(Object(D.a)({},e),{},Object(k.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(o.jsx)(N,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(o.jsx)(w,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("div",{className:"link-to",id:"skills"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Skills"})}),Object(o.jsx)("div",{className:"skills-container",children:Object(o.jsxs)("ul",{className:"points",children:[Object(o.jsx)("li",{children:"Web Tech: JavaScript, HTML/HTML5, CSS, JQuery, React, NodeJS, Bootstrap, JSON."}),Object(o.jsx)("li",{children:"Node Modules: Async, Express, Passport, Lodash, NPM, Gulp, Request, Browserify"}),Object(o.jsx)("li",{children:"Programming Languages: JavaScript, TypeScript"}),Object(o.jsx)("li",{children:"Database: Oracle SQL, MySQL, SQL Server, MongoDB"}),Object(o.jsx)("li",{children:"Testing: Jest, Enzyme, Mocha, Chai, Cypress"}),Object(o.jsx)("li",{children:"Version Control: Git"}),Object(o.jsx)("li",{children:"Methodologies: Agile/Scrum, TDD, BDD, Waterfall"})]})})]})}}])&&g(t.prototype,n),a&&g(t,a),i}(a.Component);R.defaultProps={skills:[],categories:[]};var M=R,C=[{school:"George Mason University",degree:"M.S. Software Engineering",link:"https://www2.gmu.edu/",year:2021},{school:"Vietnamese German University",degree:"B.S. Computer Science",link:"https://vgu.edu.vn/",year:2018}],U=[{company:"Deltek",position:"React Developer",daterange:"May 2020 - Present",points:["Participated in the design and creation of a Single Page Application(SPA) using React and enhanced user experience by implemented responsive design through HTML5, CSS3, and JavaScript.","Created Axios HTTP requests and interceptors in Redux - Thunk middleware to consume RESTful APIs and store data by dispatching Redux actions, subscribing data, and connecting it to components from the store to render various UI gadgets.","Implemented customized tables components that supported essential tabular features such as advanced filtering, pagination, multi - column ordering, instant searching, etc.","Worked on project features like routing, authentication and authorization with React Router and OAuth 2.0.","Dynamically add validators to controls using Formik to accomplish both client and server - side validation.","Built sophisticated and user - friendly UI for the SPA using CSS3 layouts and developed reusable CSS styles using SCSS.","Incorporated Bootstrap as well as other third - party User Interface library modules to ensure consistent styling and responsiveness for web and mobile platforms.","Wrote unit test cases using Jest and Enzyme.","Used Git for version control and management in the project.","Involved in various phases of the software development life cycle, such as requirements analysis, design, implementation, and maintenance in an Agile environment."]},{company:"Data Impact Solutions LLC",position:"Web Developer",daterange:"October 2019 - April 2020",points:["Developed and maintained large - scale and high - availability web applications with an active and expanding client base using React, Redux, React Router, HTML5, CSS3, JavaScript, etc.","Implemented MVC architecture through binding data queried from the database by the Controller component to the View component using React and Redux while tracking state changes.","Developed single - page applications(SPAs) using React Redux architecture.","Used CSS preprocessors such as SCSS for re - usable and maintainable style components.","Created responsive chart components and drag - and - drop components using Hooks, React - Motion, Chart.js, and Redux.","Used Middleware like Redux - Thunk to retrieve data from the backend and consume RESTFUL services.","Managed states within the app using Redux and persisted certain parts of the state to the device via Redux Persist.","Wrote unit tests using testing frameworks such as Jest and Enzyme.","Built RESTful APIs using Express and Node.js.","Developed the flux pattern by using the Redux library as a core dependency.","Involved in daily SCRUM meetings, seasonal sprints, and other Agile / Scrum events to keep track of the ongoing project status and issues.","Managed a variety of versions of code and code dependencies using NPM that allows easy application updating in case of underlying code changed."]},{company:"VietinBank",position:"Front-End Developer",daterange:"March 2018 - June 2019",points:["Carried out UI mock - ups provided by UI / UX designers into reusable components using React and third - party React libraries.","Used CSS and Bootstrap to create cross - browser compatible front - end webpages with attractive and easy - to - use functionalities.","Used Redux to fulfill state management and Redux selector library Reselect to prevent unnecessary updates.","Developed scalable and maintainable web components such as Button, Checkbox, Input Area, Icons, Toggle Button, Drop - down Menu for re - usable UI collections based on UI standards and requirements using CSS preprocessor like SCSS.","Used NPM to manage a variety of modules and install useful development tools such as Grunt and Express for the SPA.","Implemented Middleware and Redux - Promise in the application to fetch data from the backend and handle RESTful APIs.","Implemented dynamic page elements and form error validations using JavaScript.","Used GIT version control to track and maintain the different versions of the application under development.","Migrated Waterfall to Agile methodology and effectively took part in Daily Scrum meetings to deliver the tasks and project within time."]},{company:"Bao Viet Insurance",position:"UI Developer",daterange:"August 2016 - February 2018",points:["Developed and tested the interactive UI application using HTML5, CSS3, NodeJS, jQuery, Ajax, and JSON.","Wrote jQuery, JSON, AJAX, and DOM scripts to create interactive web applications like message posting and autocomplete form validations.","Implemented UI mock - ups provided by UI / UX designer into reusable components using React and third - party React libraries.","Enhanced page functionality and pop - up screens using JavaScript and used HTML5 to build drop - down menus on the web page and display appropriate web contents based on users\u2019 requests.","Wrote cross - browser compatible and standards - compliant CSS - based page layouts and resolve various compatibility issues.","Used JavaScript for client - side validation.","Performed Mocha for unit testing of the system.","Fetched data from web APIs using Ajax and JSON calls to update the DOM of the website.","Built, configured, and deployed applications using ANT."]}],J=n(17);var A=n(23);var I,T=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Java",competency:4,category:["Languages"]},{title:"Junit",competency:4,category:["Tool"]},{title:"Java",competency:4,category:["Web Development","Languages"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bootstrap",competency:3,category:["Web Development","Javascript"]},{title:"UI/UX Design",competency:3,category:["Web Development"]},{title:"Angular",competency:3,category:["Web Development","Javascript"]},{title:"Redux",competency:3,category:["Web Development","Javascript"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"Netlify",competency:2,category:["Web Development","Tools"]},{title:"Slack",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(D.a)(Object(D.a)({},e),{},{category:e.category.sort()})})),E=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],W=(I=new Set(T.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(J.a)(e)}(I)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(I)||Object(A.a)(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:E[t]}})),L=["Experience","Skills","Education"];t.default=function(){return Object(o.jsx)(i.a,{title:"Resume",description:"Huey Vuong's Resume",children:Object(o.jsxs)("article",{className:"post",id:"resume",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(o.jsx)("div",{className:"link-container",children:L.map((function(e){return Object(o.jsx)("h4",{children:Object(o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(o.jsx)(f,{data:U}),Object(o.jsx)(M,{skills:T,categories:W}),Object(o.jsx)(m,{data:C})]})})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(56);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},56:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.2d1859d0.chunk.js.map