webpackJsonp([35783957827783],{106:function(e,t){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(t,u,p){if("string"!=typeof u){if(s){var f=c(u);f&&f!==s&&e(t,f,p)}var d=a(u);i&&(d=d.concat(i(u)));for(var h=0;h<d.length;++h){var m=d[h];if(!(o[m]||r[m]||p&&p[m])){var y=l(u,m);try{n(t,m,y)}catch(e){}}}return t}return t}},65:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Left=void 0;var l=o(2),c=r(l),s=o(5);r(s),t.Left=function(e){function t(){return n(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{style:{width:"40%",minWidth:"200px"}},this.props.children)},t}(c.default.Component)},181:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Project=void 0;var l=o(2),c=r(l),s=o(5);r(s),o(407),t.Project=function(e){function t(o){n(this,t);var r=a(this,e.call(this,o));return r.state={imageDiv:void 0},r}return i(t,e),t.prototype.activate=function(){},t.prototype.deactivate=function(){},t.prototype.render=function(){var e=this.props.project;return c.default.createElement("div",{style:{color:"rgba(0,0,0,.8)"},onMouseEnter:this.activate,onMouseLeave:this.deactivate},e.role&&c.default.createElement("h4",null,e.role),c.default.createElement("h5",null,e.company),c.default.createElement("div",{style:{fontSize:"90%"}},e.description))},t}(c.default.Component)},66:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Right=void 0;var n=o(2),a=r(n),i=o(5);r(i),t.Right=function(e){var t=e.children;return a.default.createElement("div",{style:{width:"60%",minWidth:"260px"}},t)}},407:function(e,t,o){e.exports=o.p+"static/aotb.0c60d42f.jpg"},184:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(2),a=r(n),i=o(87),l=(r(i),o(65)),c=o(66),s=o(181),u=o(375),p=function(){return a.default.createElement("div",{style:{background:"#FEFEFF"}},a.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",flexWrap:"wrap",width:"100%"}},a.default.createElement(l.Left,null,a.default.createElement("h1",null,"Projects and Work"),a.default.createElement("div",{id:"left-small"},"Websites, Games, Data Visualizations, APIs, Prototypes")),a.default.createElement(c.Right,null,a.default.createElement("ul",null,u.map(function(e){return a.default.createElement("li",{key:e.description,style:{marginBottom:"25px"}},a.default.createElement(s.Project,{project:e}))})))))};t.default=p,e.exports=t.default},375:function(e,t){e.exports=[{company:"Stellaralgo",role:"Lead JavaScript Engineer",description:"Data Visualizations for the LA Kings, Calgary Flames and others",term:"July 2017 - November 2017",url:"http://www.stellaralgo.com"},{company:"MIT Media Lab",role:"Lead JavaScript Engineer",description:"Platform for collaborative science",term:"2016 - 2017",url:"https://www.pubpub.org/"},{company:"ISHQR",role:"Technical Co-founder",description:"Dating startup focused on Muslim Americans",term:"2013 - 2015",url:"http://ishqr.com"},{company:"Arena of the Bits",role:"Game Developer",description:"Multiplayer Browser Game",term:"2015 - 2016",url:"http://aotb.io/"},{company:"Cool Ways to Recycle",role:"Game Developer",description:"Game intended to teach children about recycling",url:"http://cse125.ucsd.edu/recycool/about"},{company:"Who's That Pokemon!",role:"Game Developer",description:"Multiplayer Game for a custom Rasberry PI powered television",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon"},{company:"TeachTCI",role:"Software Engineering Contract",description:"Educational technology directed towards K-12",term:"July 2015 - September 2015",url:"https://github.com/hassanshaikley/flaschen-taschen-whos-that-pokemon"},{company:"Scary Spoders",role:"Game Developer",description:"I turned a nightmare I had as a child into a game...",url:"https://github.com/hassanshaikley/scary-spoders"},{company:"AutoFusion",role:"Software Engineering Intern",description:"Developed features for a photoshop like browser application",url:"https://www.autofusion.com"}]}});
//# sourceMappingURL=component---src-pages-index-js-9827bd2ac72207e2aa05.js.map