(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{502:function(e,t,n){"use strict";n.r(t);n(25),n(4),n(47);var a=n(0),r=n(590),o=n(520),i=n(149),c=n(541),l=n(33),s=n(82),u=n(12),m=n(503),d=n.n(m);var p=function(e){var t,n;n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l;l=s;function s(){return e.apply(this,arguments)||this}var u=s.prototype;return u.componentDidMount=function(){this.props.logout()},u.render=function(){return a.createElement(r.a,{title:"Ha det!"},a.createElement("div",{className:d.a.container},a.createElement(c.a,{className:d.a.text},"Du har nå logget ut. Vi sees!"),a.createElement(o.a,{to:i.b.Main(),styleType:"primary"},"Hjem")))},s}(a.Component);t.default=Object(s.b)(null,(function(e){return Object(l.bindActionCreators)({logout:u.o},e)}))(p)},532:function(e,t,n){"use strict";var a=n(0),r=n(147),o=n.n(r),i=n(148),c=n(413),l=n.n(c);t.a=function(e){var t=e.className,n=e.children;return a.createElement(i.c,{className:o()(l.a.text,t)},n)}},541:function(e,t,n){"use strict";n(42),n(45),n(4),n(100),n(7);var a=n(0),r=n(147),o=n.n(r),i=n(148),c=n(414),l=n.n(c);t.a=function(e){var t=e.className,n=e.children,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children"]);return a.createElement(i.d,Object.assign({className:o()(l.a.text,t)},r),n)}},562:function(e,t,n){"use strict";var a=n(563),r=n(0),o=n.n(r),i=n(558),c=n.n(i),l=n(58);t.a=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,i=e.meta,s=void 0===i?[]:i,u=e.keywords,m=void 0===u?[]:u,d=e.title;return o.a.createElement(l.b,{query:"1360197346",render:function(e){if(e.site){var n=t||e.site.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:d,titleTemplate:d===e.site.title?"%s":"%s | "+e.site.title,meta:[{name:"description",content:n},{property:"og:title",content:d},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.author},{name:"twitter:title",content:d},{name:"twitter:description",content:n}].concat(m&&m.length>0?{name:"keywords",content:m.join(", ")}:[]).concat(s)})}},data:a})}},563:function(e){e.exports={data:{site:{title:"olio",description:"Olio Staging",keywords:null,author:null}}}},590:function(e,t,n){"use strict";n(237);var a=n(0),r=n.n(a),o=n(562),i=n(147),c=n.n(i),l=n(547),s=n(544),u=n.n(s),m=n(532),d=n(541),p=n(515),v=n(149),E=n(154),f=n(59),y=n(520),b=n(543),h=n(427),g=n.n(h),N=n(546),w=n(545),k=n(24);t.a=function(e){var t=e.title,n=e.showBookButton,a=void 0!==n&&n,i=e.showLogoutButton,s=void 0!==i&&i,h=e.children,j=e.className,x=e.tabs,O=void 0===x?[]:x;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{title:"olio",link:[{rel:"shortcut icon",type:"image/x-icon",href:""+u.a}]}),r.a.createElement("div",{className:g.a.menuContainer},r.a.createElement(b.a,null)),r.a.createElement("div",{className:c()(g.a.container,j)},r.a.createElement(p.a,{to:v.b.Main(),className:g.a.backButton},r.a.createElement(E.a,null,"Hjem")),r.a.createElement("div",{className:c()(g.a.innercontainer,j)},r.a.createElement("div",{className:g.a.sectionTitle},r.a.createElement(m.a,null,t),function(e){if(0!==e.length)return r.a.createElement("div",{className:g.a.navbar},e.map((function(e,t){return r.a.createElement(f.Match,{key:t,path:e.route+"/*"},(function(t){var n,a=null!=t.match;return r.a.createElement(p.a,{to:e.route},r.a.createElement(d.a,{className:c()(g.a.text,(n={},n[g.a.textSelected]=a,n)),"data-title":e.title},e.title))}))})))}(O)),h,function(e,t){return r.a.createElement("div",{className:g.a.footerMenuContainer},e&&r.a.createElement(y.a,{to:v.b.Booking()},"Book time"),t&&r.a.createElement(p.a,{underlined:!0,type:"secondary",to:v.b.Goodbye()},"Logg ut"))}(a,s))),r.a.createElement(l.a,null),r.a.createElement("div",{className:g.a.infoContainer},k.a.bookingDisabled&&r.a.createElement(w.a,null),r.a.createElement(N.a,null)),r.a.createElement(N.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-goodbye-tsx-1acfbd9cf3d3fff086a1.js.map