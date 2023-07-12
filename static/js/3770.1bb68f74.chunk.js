"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[3770],{9815:function(n,e,r){var t=r(2791),a="undefined"!==typeof r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product,o="undefined"!==typeof document;e.Z=o||a?t.useLayoutEffect:t.useEffect},8633:function(n,e,r){r.d(e,{h:function(){return a}});var t=r(2791).createContext(null),a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=n?String(n):e||null};e.Z=t},2176:function(n){n.exports=function(n,e,r,t,a,o,i,s){if(!n){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,t,a,o,i,s],u=0;(c=new Error(e.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},2592:function(n,e,r){var t=r(1413),a=r(5987),o=r(1694),i=r.n(o),s=r(2791),c=r(2007),l=r.n(c),u=r(162),f=r(184),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],p=(l().string,l().bool,l().bool,l().bool,l().bool,s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,s=n.fluid,c=n.rounded,l=n.roundedCircle,p=n.thumbnail,v=(0,a.Z)(n,d);return r=(0,u.vE)(r,"img"),(0,f.jsx)("img",(0,t.Z)((0,t.Z)({ref:e},v),{},{className:i()(o,s&&"".concat(r,"-fluid"),c&&"rounded",l&&"rounded-circle",p&&"".concat(r,"-thumbnail"))}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},e.Z=p},2932:function(n,e,r){r.d(e,{Z:function(){return xn}});var t=r(1413),a=r(5987),o=r(1694),i=r.n(o),s=r(2791),c=r(8633),l=r(8580),u=r(6543),f=r(162),d=r(184),p=["bsPrefix","className","as"],v=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,s=n.as,c=(0,a.Z)(n,p);r=(0,f.vE)(r,"navbar-brand");var l=s||(c.href?"a":"span");return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:e,className:i()(o,r)}))}));v.displayName="NavbarBrand";var m=v,g=r(4942),h=r(5427),x=r(5090),b=r(1380);var Z,y=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.filter((function(n){return null!=n})).reduce((function(n,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===n?e:function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];n.apply(this,t),e.apply(this,t)}}),null)},E=r(7202),N=r(4083),w=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function P(n,e){var r=e["offset".concat(n[0].toUpperCase()).concat(n.slice(1))],t=C[n];return r+parseInt((0,h.Z)(e,t[0]),10)+parseInt((0,h.Z)(e,t[1]),10)}var j=(Z={},(0,g.Z)(Z,x.Wj,"collapse"),(0,g.Z)(Z,x.Ix,"collapsing"),(0,g.Z)(Z,x.d0,"collapsing"),(0,g.Z)(Z,x.cn,"collapse show"),Z),k={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:P},O=s.forwardRef((function(n,e){var r=n.onEnter,o=n.onEntering,c=n.onEntered,l=n.onExit,u=n.onExiting,f=n.className,p=n.children,v=n.dimension,m=void 0===v?"height":v,g=n.getDimensionValue,h=void 0===g?P:g,x=(0,a.Z)(n,w),Z="function"===typeof m?m():m,C=(0,s.useMemo)((function(){return y((function(n){n.style[Z]="0"}),r)}),[Z,r]),k=(0,s.useMemo)((function(){return y((function(n){var e="scroll".concat(Z[0].toUpperCase()).concat(Z.slice(1));n.style[Z]="".concat(n[e],"px")}),o)}),[Z,o]),O=(0,s.useMemo)((function(){return y((function(n){n.style[Z]=null}),c)}),[Z,c]),S=(0,s.useMemo)((function(){return y((function(n){n.style[Z]="".concat(h(Z,n),"px"),(0,E.Z)(n)}),l)}),[l,h,Z]),F=(0,s.useMemo)((function(){return y((function(n){n.style[Z]=null}),u)}),[Z,u]);return(0,d.jsx)(N.Z,(0,t.Z)((0,t.Z)({ref:e,addEndListener:b.Z},x),{},{"aria-expanded":x.role?x.in:null,onEnter:C,onEntering:k,onEntered:O,onExit:S,onExiting:F,childRef:p.ref,children:function(n,e){return s.cloneElement(p,(0,t.Z)((0,t.Z)({},e),{},{className:i()(f,p.props.className,j[n],"width"===Z&&"collapse-horizontal")}))}}))}));O.defaultProps=k;var S=O,F=r(5715),T=["children","bsPrefix"],R=s.forwardRef((function(n,e){var r=n.children,o=n.bsPrefix,i=(0,a.Z)(n,T);o=(0,f.vE)(o,"navbar-collapse");var c=(0,s.useContext)(F.Z);return(0,d.jsx)(S,(0,t.Z)((0,t.Z)({in:!(!c||!c.expanded)},i),{},{children:(0,d.jsx)("div",{ref:e,className:o,children:r})}))}));R.displayName="NavbarCollapse";var _=R,M=r(9007),D=["bsPrefix","className","children","label","as","onClick"],I=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.children,l=n.label,u=n.as,p=void 0===u?"button":u,v=n.onClick,m=(0,a.Z)(n,D);r=(0,f.vE)(r,"navbar-toggler");var g=(0,s.useContext)(F.Z)||{},h=g.onToggle,x=g.expanded,b=(0,M.Z)((function(n){v&&v(n),h&&h()}));return"button"===p&&(m.type="button"),(0,d.jsx)(p,(0,t.Z)((0,t.Z)({},m),{},{ref:e,onClick:b,"aria-label":l,className:i()(o,r,!x&&"collapsed"),children:c||(0,d.jsx)("span",{className:"".concat(r,"-icon")})}))}));I.displayName="NavbarToggle",I.defaultProps={label:"Toggle navigation"};var A=I,B=r(9439),L=r(9815),H=new WeakMap,W=function(n,e){if(n&&e){var r=H.get(e)||new Map;H.set(e,r);var t=r.get(n);return t||((t=e.matchMedia(n)).refCount=0,r.set(t.media,t)),t}};function U(n,e){void 0===e&&(e="undefined"===typeof window?void 0:window);var r=W(n,e),t=(0,s.useState)((function(){return!!r&&r.matches})),a=t[0],o=t[1];return(0,L.Z)((function(){var r=W(n,e);if(!r)return o(!1);var t=H.get(e),a=function(){o(r.matches)};return r.refCount++,r.addListener(a),a(),function(){r.removeListener(a),r.refCount--,r.refCount<=0&&(null==t||t.delete(r.media)),r=void 0}}),[n]),a}var V,K=function(n){var e=Object.keys(n);function r(n,e){return n===e?e:n?n+" and "+e:e}function t(r){var t=function(n){return e[Math.min(e.indexOf(n)+1,e.length-1)]}(r),a=n[t];return"(max-width: "+(a="number"===typeof a?a-.2+"px":"calc("+a+" - 0.2px)")+")"}return function(e,a,o){var i,c;"object"===typeof e?(i=e,o=a,a=!0):((c={})[e]=a=a||!0,i=c);var l=(0,s.useMemo)((function(){return Object.entries(i).reduce((function(e,a){var o=a[0],i=a[1];return"up"!==i&&!0!==i||(e=r(e,function(e){var r=n[e];return"number"===typeof r&&(r+="px"),"(min-width: "+r+")"}(o))),"down"!==i&&!0!==i||(e=r(e,t(o))),e}),"")}),[JSON.stringify(i)]);return U(l,o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),z=r(6137),J=r(2709),q=(0,u.Z)("offcanvas-body"),G=["bsPrefix","className","children"],Q=(V={},(0,g.Z)(V,x.d0,"show"),(0,g.Z)(V,x.cn,"show"),V),X=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.children,l=(0,a.Z)(n,G);return r=(0,f.vE)(r,"offcanvas"),(0,d.jsx)(N.Z,(0,t.Z)((0,t.Z)({ref:e,addEndListener:b.Z},l),{},{childRef:c.ref,children:function(n,e){return s.cloneElement(c,(0,t.Z)((0,t.Z)({},e),{},{className:i()(o,c.props.className,(n===x.d0||n===x.Ix)&&"".concat(r,"-toggling"),Q[n])}))}}))}));X.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},X.displayName="OffcanvasToggling";var Y=X,$=r(9820),nn=r(8024),en=["bsPrefix","className"],rn=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,s=(0,a.Z)(n,en);return r=(0,f.vE)(r,"offcanvas-header"),(0,d.jsx)(nn.Z,(0,t.Z)((0,t.Z)({ref:e},s),{},{className:i()(o,r)}))}));rn.displayName="OffcanvasHeader",rn.defaultProps={closeLabel:"Close",closeButton:!1};var tn=rn,an=(0,r(7472).Z)("h5"),on=(0,u.Z)("offcanvas-title",{Component:an}),sn=r(5592),cn=["bsPrefix","className","children","aria-labelledby","placement","responsive","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager","renderStaticNode"];function ln(n){return(0,d.jsx)(Y,(0,t.Z)({},n))}function un(n){return(0,d.jsx)(J.Z,(0,t.Z)({},n))}var fn=s.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,c=n.children,l=n["aria-labelledby"],u=n.placement,p=n.responsive,v=n.show,m=n.backdrop,g=n.keyboard,h=n.scroll,x=n.onEscapeKeyDown,b=n.onShow,Z=n.onHide,y=n.container,E=n.autoFocus,N=n.enforceFocus,w=n.restoreFocus,C=n.restoreFocusOptions,P=n.onEntered,j=n.onExit,k=n.onExiting,O=n.onEnter,S=n.onEntering,T=n.onExited,R=n.backdropClassName,_=n.manager,D=n.renderStaticNode,I=(0,a.Z)(n,cn),A=(0,s.useRef)();r=(0,f.vE)(r,"offcanvas");var L=((0,s.useContext)(F.Z)||{}).onToggle,H=(0,s.useState)(!1),W=(0,B.Z)(H,2),U=W[0],V=W[1],J=K(p||"xs","up");(0,s.useEffect)((function(){V(p?v&&!J:v)}),[v,p,J]);var q=(0,M.Z)((function(){null==L||L(),null==Z||Z()})),G=(0,s.useMemo)((function(){return{onHide:q}}),[q]);var Q=(0,s.useCallback)((function(n){return(0,d.jsx)("div",(0,t.Z)((0,t.Z)({},n),{},{className:i()("".concat(r,"-backdrop"),R)}))}),[R,r]),X=function(n){return(0,d.jsx)("div",(0,t.Z)((0,t.Z)((0,t.Z)({},n),I),{},{className:i()(o,p?"".concat(r,"-").concat(p):r,"".concat(r,"-").concat(u)),"aria-labelledby":l,children:c}))};return(0,d.jsxs)(d.Fragment,{children:[!U&&(p||D)&&X({}),(0,d.jsx)($.Z.Provider,{value:G,children:(0,d.jsx)(z.Z,{show:U,ref:e,backdrop:m,container:y,keyboard:g,autoFocus:E,enforceFocus:N&&!h,restoreFocus:w,restoreFocusOptions:C,onEscapeKeyDown:x,onShow:b,onHide:q,onEnter:function(n){n&&(n.style.visibility="visible");for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];null==O||O.apply(void 0,[n].concat(r))},onEntering:S,onEntered:P,onExit:j,onExiting:k,onExited:function(n){n&&(n.style.visibility="");for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];null==T||T.apply(void 0,r)},manager:_||(h?(A.current||(A.current=new sn.Z({handleContainerOverflow:!1})),A.current):(0,sn.t)()),transition:ln,backdropTransition:un,renderBackdrop:Q,renderDialog:X})})]})}));fn.displayName="Offcanvas",fn.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var dn=Object.assign(fn,{Body:q,Header:tn,Title:on}),pn=s.forwardRef((function(n,e){var r=(0,s.useContext)(F.Z);return(0,d.jsx)(dn,(0,t.Z)((0,t.Z)({ref:e,show:!(null==r||!r.expanded)},n),{},{renderStaticNode:!0}))}));pn.displayName="NavbarOffcanvas";var vn=pn,mn=["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"],gn=(0,u.Z)("navbar-text",{Component:"span"}),hn=s.forwardRef((function(n,e){var r=(0,l.Ch)(n,{expanded:"onToggle"}),o=r.bsPrefix,u=r.expand,p=r.variant,v=r.bg,m=r.fixed,g=r.sticky,h=r.className,x=r.as,b=void 0===x?"nav":x,Z=r.expanded,y=r.onToggle,E=r.onSelect,N=r.collapseOnSelect,w=(0,a.Z)(r,mn),C=(0,f.vE)(o,"navbar"),P=(0,s.useCallback)((function(){null==E||E.apply(void 0,arguments),N&&Z&&(null==y||y(!1))}),[E,N,Z,y]);void 0===w.role&&"nav"!==b&&(w.role="navigation");var j="".concat(C,"-expand");"string"===typeof u&&(j="".concat(j,"-").concat(u));var k=(0,s.useMemo)((function(){return{onToggle:function(){return null==y?void 0:y(!Z)},bsPrefix:C,expanded:!!Z,expand:u}}),[C,Z,u,y]);return(0,d.jsx)(F.Z.Provider,{value:k,children:(0,d.jsx)(c.Z.Provider,{value:P,children:(0,d.jsx)(b,(0,t.Z)((0,t.Z)({ref:e},w),{},{className:i()(h,C,u&&j,p&&"".concat(C,"-").concat(p),v&&"bg-".concat(v),g&&"sticky-".concat(g),m&&"fixed-".concat(m))}))})})}));hn.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},hn.displayName="Navbar";var xn=Object.assign(hn,{Brand:m,Collapse:_,Offcanvas:vn,Text:gn,Toggle:A})},5715:function(n,e,r){var t=r(2791).createContext(null);t.displayName="NavbarContext",e.Z=t},8580:function(n,e,r){function t(){return t=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},t.apply(this,arguments)}r.d(e,{Ch:function(){return c}});var a=r(3366),o=r(2791);r(2176);function i(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function s(n){var e=function(n,e){if("object"!==typeof n||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,e||"default");if("object"!==typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===typeof e?e:String(e)}function c(n,e){return Object.keys(e).reduce((function(r,c){var l,u=r,f=u[i(c)],d=u[c],p=(0,a.Z)(u,[i(c),c].map(s)),v=e[c],m=function(n,e,r){var t=(0,o.useRef)(void 0!==n),a=(0,o.useState)(e),i=a[0],s=a[1],c=void 0!==n,l=t.current;return t.current=c,!c&&l&&i!==e&&s(e),[c?n:i,(0,o.useCallback)((function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];r&&r.apply(void 0,[n].concat(t)),s(n)}),[r])]}(d,f,n[v]),g=m[0],h=m[1];return t({},p,((l={})[c]=g,l[v]=h,l))}),n)}function l(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==n&&void 0!==n&&this.setState(n)}function u(n){this.setState(function(e){var r=this.constructor.getDerivedStateFromProps(n,e);return null!==r&&void 0!==r?r:null}.bind(this))}function f(n,e){try{var r=this.props,t=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,t)}finally{this.props=r,this.state=t}}l.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=3770.1bb68f74.chunk.js.map