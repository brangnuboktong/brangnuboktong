(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{514:function(e,t,n){"use strict";n.r(t);n(7);var a=n(0),r=n(60),o=n(594),i=n(150),c=(n(24),n(4),n(47),n(82)),l=n(33),s=n(6),u=n(13),m=n(541);var p=function(e){var t,n;n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r;r=o;function o(){return e.apply(this,arguments)||this}var i=o.prototype;return i.componentDidMount=function(){!this.props.isLoggedIn&&this.props.userId&&this.props.loginGuest(this.props.userId)},i.render=function(){return a.createElement(m.a,null)},o}(a.Component),d=Object(c.b)((function(e){return{isUserdataIsLoading:Object(s.k)(e),isLoggedIn:Object(s.h)(e)}}),(function(e){return Object(l.bindActionCreators)({loginGuest:u.k},e)}))(p),v=n(59);var f=function(e){var t,n;n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=r;function r(){return e.apply(this,arguments)||this}var o=r.prototype;return o.componentDidMount=function(){Object(v.c)(this.props.to)},o.render=function(){return null},r}(a.Component);t.default=function(e){return a.createElement(o.a,Object.assign({title:"Min olio",page:i.b.Dashboard(),showFooterMenu:!0,hasNavbar:!0,hasLogin:!0},e),a.createElement(r.Router,null,a.createElement(d,{path:i.a.GuestAuthentication},a.createElement(f,{to:i.b.Bookings(),default:!0}))))}},536:function(e,t,n){"use strict";var a=n(0),r=n(148),o=n.n(r),i=n(149),c=n(416),l=n.n(c);t.a=function(e){var t=e.className,n=e.children;return a.createElement(i.c,{className:o()(l.a.text,t)},n)}},541:function(e,t,n){"use strict";n(42),n(45),n(4),n(101),n(7);var a=n(0),r=n(148),o=n.n(r),i=n(427),c=n.n(i);t.a=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className"]);return a.createElement("div",Object.assign({className:o()(c.a.loader,t)},n))}},545:function(e,t,n){"use strict";n(42),n(45),n(4),n(101),n(7);var a=n(0),r=n(148),o=n.n(r),i=n(149),c=n(417),l=n.n(c);t.a=function(e){var t=e.className,n=e.children,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children"]);return a.createElement(i.d,Object.assign({className:o()(l.a.text,t)},r),n)}},566:function(e,t,n){"use strict";var a=n(567),r=n(0),o=n.n(r),i=n(562),c=n.n(i),l=n(59);t.a=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,i=e.meta,s=void 0===i?[]:i,u=e.keywords,m=void 0===u?[]:u,p=e.title;return o.a.createElement(l.b,{query:"1360197346",render:function(e){if(e.site){var n=t||e.site.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:p,titleTemplate:p===e.site.title?"%s":"%s | "+e.site.title,meta:[{name:"description",content:n},{property:"og:title",content:p},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.author},{name:"twitter:title",content:p},{name:"twitter:description",content:n}].concat(m&&m.length>0?{name:"keywords",content:m.join(", ")}:[]).concat(s)})}},data:a})}},567:function(e){e.exports={data:{site:{title:"olio",description:"Vi er olio! Vi er en velværesalong hvor alle skal kunne føle seg vel og velkommen. Derfor tilbyr vi manikyr, pedikyr, ansiktsbehandlinger, voksing og bryn&vippe behandlinger i en fresh salong med forståelig meny, enkel booking og laaange åpningstider hver dag. Easy peasy!",keywords:["manikyr","pedikyr","bryn","vipper","hårfjerning","ansiktsbehandling"],author:"olio"}}}},594:function(e,t,n){"use strict";n(240);var a=n(0),r=n.n(a),o=n(566),i=n(148),c=n.n(i),l=n(551),s=n(548),u=n.n(s),m=n(536),p=n(545),d=n(519),v=n(150),f=n(156),g=n(60),h=n(524),b=n(547),y=n(430),E=n.n(y),k=n(550),N=n(549),w=n(30);t.a=function(e){var t=e.title,n=e.showBookButton,a=void 0!==n&&n,i=e.showLogoutButton,s=void 0!==i&&i,y=e.children,j=e.className,O=e.tabs,x=void 0===O?[]:O;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{title:"olio",link:[{rel:"shortcut icon",type:"image/x-icon",href:""+u.a}]}),r.a.createElement("div",{className:E.a.menuContainer},r.a.createElement(b.a,null)),r.a.createElement("div",{className:c()(E.a.container,j)},r.a.createElement(d.a,{to:v.b.Main(),className:E.a.backButton},r.a.createElement(f.a,null,"Hjem")),r.a.createElement("div",{className:c()(E.a.innercontainer,j)},r.a.createElement("div",{className:E.a.sectionTitle},r.a.createElement(m.a,null,t),function(e){if(0!==e.length)return r.a.createElement("div",{className:E.a.navbar},e.map((function(e,t){return r.a.createElement(g.Match,{key:t,path:e.route+"/*"},(function(t){var n,a=null!=t.match;return r.a.createElement(d.a,{to:e.route},r.a.createElement(p.a,{className:c()(E.a.text,(n={},n[E.a.textSelected]=a,n)),"data-title":e.title},e.title))}))})))}(x)),y,function(e,t){return r.a.createElement("div",{className:E.a.footerMenuContainer},e&&r.a.createElement(h.a,{to:v.b.Booking()},"Book time"),t&&r.a.createElement(d.a,{underlined:!0,type:"secondary",to:v.b.Goodbye()},"Logg ut"))}(a,s))),r.a.createElement(l.a,null),r.a.createElement("div",{className:E.a.infoContainer},w.a.bookingDisabled&&r.a.createElement(N.a,null),r.a.createElement(k.a,null)),r.a.createElement(k.a,null)))}}}]);
//# sourceMappingURL=component---src-domain-user-components-guest-router-tsx-5de203de1a6a77529aeb.js.map