webpackJsonp([35783957827783],{106:function(e,t){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,c=l&&l(Object);e.exports=function e(t,p,u){if("string"!=typeof p){if(c){var d=l(p);d&&d!==c&&e(t,d,u)}var f=a(p);i&&(f=f.concat(i(p)));for(var h=0;h<f.length;++h){var m=f[h];if(!(o[m]||r[m]||u&&u[m])){var g=s(p,m);try{n(t,m,g)}catch(e){}}}return t}return t}},65:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Left=void 0;var s=o(2),l=r(s),c=o(5);r(c),t.Left=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.default.createElement("div",{style:{width:"40%",minWidth:"255px"}},this.props.children)},t}(l.default.Component)},181:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Project=void 0;var s=o(2),l=r(s),c=o(5);r(c),o(407),t.Project=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.project;return l.default.createElement("div",{style:{color:"rgba(0,0,0,.8)"},className:"btn"},e.role&&l.default.createElement("h4",null,e.role," // ",l.default.createElement("bold",null,e.company)),l.default.createElement("div",{style:{fontSize:"90%",lineHeight:"normal",marginTop:"7px"}},e.description),l.default.createElement("div",{style:{}},e.technologies.map(function(e){return l.default.createElement("small",null,l.default.createElement("span",{style:{backgroundColor:"lavender",borderRadius:"3px",padding:"2px",marginRight:"10px"}},e))}),l.default.createElement("br",null),e.url&&l.default.createElement("a",{href:e.url},e.url),e.extendedDescription&&l.default.createElement("div",{style:{marginTop:"10px",marginBottom:"10px"}},l.default.createElement("small",null,e.extendedDescription))))},t}(l.default.Component)},66:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Right=void 0;var n=o(2),a=r(n),i=o(5);r(i),t.Right=function(e){var t=e.children;return a.default.createElement("div",{id:"right-div",style:{}},t)}},407:function(e,t,o){e.exports=o.p+"static/aotb.0c60d42f.jpg"},184:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(2),a=r(n),i=o(87),s=(r(i),o(65)),l=o(66),c=o(181),p=o(375),u=function(){return a.default.createElement("div",{style:{background:"#FEFEFF"}},a.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",flexWrap:"wrap",width:"100%"}},a.default.createElement(s.Left,null,a.default.createElement("h1",null,"Projects and Work"),a.default.createElement("div",{id:"left-small"},"Websites, Games, Data Visualizations, APIs, Prototypes")),a.default.createElement(l.Right,null,a.default.createElement("ul",null,a.default.createElement("div",{id:"project-container"},p.map(function(e){return a.default.createElement("li",{key:e.description,style:{marginBottom:"25px"}},a.default.createElement(c.Project,{project:e}))}))))))};t.default=u,e.exports=t.default},375:function(e,t){e.exports=[{company:"Stabby Flies",role:"Developer",description:"Multiplayer browser game built in Elixir/Phoenix",term:"November 2018 - Present",url:"https://meaty-spiffy-hermitcrab.gigalixirapp.com",technologies:["Elixir","Phoenix","Node.js","Pixi.js"],extendedDescription:"A mulitplayer browser game as well as an exploration of Phoenix, Elixir & OTP.",imgSource:"stabby_flies.png"},{company:"youRhere",role:"Director of Development",description:"Plan, architect, direct & deliver various projects",term:"February 2018 - Present",url:"http://yourhere.ca/",technologies:["React","Hapi","Node.js","Express","MongoDB","Redis","WebGL","Blender","Babylon.js"],extendedDescription:"I oversee all of the development work and contribute primarily to the main engine. The main engine is a React engine that outputs interactive directories for various types of properties (Malls, Universities, Office, etc). It plugs straight into our CMS which I also oversee the development of.",imgSource:"st_Laurent.jpg"},{company:"Stellaralgo Corp.",role:"JavaScript Developer",description:"Created Data Visualizations for the LA Kings, Calgary Flames and others",term:"July 2017 - November 2017",url:"http://www.stellaralgo.com",technologies:["Node.js","Meteor","HighCharts","Microsoft SQL Server","MongoDB"],imgSource:"stellaralgo.png",extendedDescription:"Mentored junior developers and produced all sorts of data visualizations for sports teams such as the LA Kings and organizations like MoMA."},{company:"PubPub",role:"JavaScript Developer",description:"Contributed to PubPub; a Platform for collaborative science",term:"2016 - 2017",url:"https://www.pubpub.org/",technologies:["Node.js","Express","MongoDB","PostgreSQL","React"],imgSource:"pubpub.png",extendedDescription:"Worked with an incredible team of graduate students at the MIT Media Lab in the creation of a collaborative editing and reviewing platform for scientific research. Its' list of users includes Snowden and Bunny."},{company:"Ishqr",role:"Technical Co-founder",description:"Dating startup focused on Muslim Americans",term:"2013 - 2015",url:"http://ishqr.com",technologies:["Ruby on Rails","PostgreSQL","Bootstrap"],imgSource:"ishqr.png",extendedDescription:"Cofounded a dating startup that went viral and was incubated in a startup accelerator"},{company:"Arena of the Bits",role:"Game Developer",description:"Multiplayer Browser Game",term:"2015 - 2016",url:"http://aotb.io/",technologies:["Express","Socket.io","Pixi.js","Node.js"],imgSource:"aotb.jpg",extendedDescription:"Created a multiplayer browser game along with the incredibly talented Jason Davies. This game never passed Alpha. There's a newer supercharged prototype of it in a private repository but it's not ready to be deployed quite yet."},{company:"Cool Ways to Recycle",role:"Game Developer",description:"Game intended to teach children about recycling",url:"http://cse125.ucsd.edu/recycool/about",technologies:["Unity","c#"],imgSource:"cool.jpg",extendedDescription:"Mentored a team of programmers and worked with artists in the production of an educational game. This game was featured in the UCSD newspaper and got some attention from nearby schools."},{company:"Who's That Pokemon!",role:"Game Developer",description:"Game built for a custom console built with a Raspberry PI, beer bottles and milk crates",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon",technologies:["Node.js","c++"],imgSource:"flaschen.jpg",extendedDescription:"Made this awesome game! However I have no image of it in action unfortunately. This is an image of the flaschen taschen which is a console made out of beer bottles, milk crates & a raspberry PI."},{company:"Scary Spoders",role:"Game Developer",description:"I turned a nightmare I had as a child into a game",url:"https://github.com/hassanshaikley/scary-spoders",technologies:["Unity","c#"],imgSource:"spoder.png",extendedDescription:"This open source game"},{company:"TeachTCI",role:"Software Developer Contract",description:"Educational technology directed towards K-12",term:"July 2015 - September 2015",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon",technologies:["Ruby on Rails","JavaScript"],imgSource:"tci.jpg",extendedDescription:"Conributed full stack and mentored a junior developer. I wrote a lot of Rails code and paired often with the senior engineers."},{company:"AutoFusion",role:"Software Developer Intern",description:"Developed features for a photoshop like browser application",url:"https://www.autofusion.com",technologies:["PHP","JavaScript","MySQL"],imgSource:"af.png",extendedDescription:"Worked on a photoshop like application optimized for creating car dealership advertisements. It was a lot of intensive frontend programming."}]}});
//# sourceMappingURL=component---src-pages-index-js-168959cb3a0a01502f61.js.map