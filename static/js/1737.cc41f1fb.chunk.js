(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[1737],{5341:function(e,a,t){"use strict";t.d(a,{FT:function(){return o}});var r=t(9439),i=t(2791),n=t(184),s=["as","disabled"];function o(e){var a=e.tagName,t=e.disabled,r=e.href,i=e.target,n=e.rel,s=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=r||null!=i||null!=n?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:t},f];var u=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return"a"===a&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:c,href:r,target:"a"===a?i:void 0,"aria-disabled":t||void 0,rel:"a"===a?n:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var l=i.forwardRef((function(e,a){var t=e.as,i=e.disabled,l=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s),c=o(Object.assign({tagName:t,disabled:i},l)),d=(0,r.Z)(c,2),f=d[0],u=d[1].tagName;return(0,n.jsx)(u,Object.assign({},l,f,{ref:a}))}));l.displayName="Button",a.ZP=l},888:function(e,a,t){"use strict";var r=t(9047);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,a,t,i,n,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(e,a,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3360:function(e,a,t){"use strict";var r=t(1413),i=t(9439),n=t(5987),s=t(1694),o=t.n(s),l=t(2791),c=t(5341),d=t(162),f=t(184),u=["as","bsPrefix","variant","size","active","className"],v=l.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,l=e.variant,v=e.size,m=e.active,p=e.className,b=(0,n.Z)(e,u),x=(0,d.vE)(s,"btn"),y=(0,c.FT)((0,r.Z)({tagName:t},b)),Z=(0,i.Z)(y,2),h=Z[0],N=Z[1].tagName;return(0,f.jsx)(N,(0,r.Z)((0,r.Z)((0,r.Z)({},h),b),{},{ref:a,className:o()(p,x,m&&"active",l&&"".concat(x,"-").concat(l),v&&"".concat(x,"-").concat(v),b.href&&b.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=v},1701:function(e,a,t){"use strict";t.d(a,{UI:function(){return i},XW:function(){return n}});var r=t(2791);function i(e,a){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?a(e,t++):e}))}function n(e,a){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===a}))}},3053:function(e,a,t){"use strict";var r=t(1413),i=t(5987),n=t(1694),s=t.n(n),o=t(2791),l=t(323),c=t(162),d=t(184),f=["bsPrefix","className","children","controlId","label"],u=o.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,u=e.controlId,v=e.label,m=(0,i.Z)(e,f);return t=(0,c.vE)(t,"form-floating"),(0,d.jsxs)(l.Z,(0,r.Z)((0,r.Z)({ref:a,className:s()(n,t),controlId:u},m),{},{children:[o,(0,d.jsx)("label",{htmlFor:u,children:v})]}))}));u.displayName="FloatingLabel",a.Z=u},3063:function(e,a,t){"use strict";t.d(a,{Z:function(){return Q}});var r=t(1413),i=t(5987),n=t(1694),s=t.n(n),o=t(2007),l=t.n(o),c=t(2791),d=t(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,i.Z)(e,f);return(0,d.jsx)(n,(0,r.Z)((0,r.Z)({},m),{},{ref:a,className:s()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var m=v,p=t(4934),b=t(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,m=e.isInvalid,y=void 0!==m&&m,Z=e.as,h=void 0===Z?"input":Z,N=(0,i.Z)(e,x),g=(0,c.useContext)(p.Z).controlId;return n=(0,b.vE)(n,"form-check-input"),(0,d.jsx)(h,(0,r.Z)((0,r.Z)({},N),{},{ref:a,type:f,id:t||g,className:s()(o,n,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var Z=y,h=["bsPrefix","className","htmlFor"],N=c.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.htmlFor,l=(0,i.Z)(e,h),f=(0,c.useContext)(p.Z).controlId;return t=(0,b.vE)(t,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:o||f,className:s()(n,t)}))}));N.displayName="FormCheckLabel";var g=N,I=t(1701),P=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,x=e.disabled,y=void 0!==x&&x,h=e.isValid,N=void 0!==h&&h,j=e.isInvalid,k=void 0!==j&&j,w=e.feedbackTooltip,F=void 0!==w&&w,C=e.feedback,R=e.feedbackType,T=e.className,O=e.style,E=e.title,S=void 0===E?"":E,_=e.type,z=void 0===_?"checkbox":_,V=e.label,L=e.children,D=e.as,W=void 0===D?"input":D,H=(0,i.Z)(e,P);n=(0,b.vE)(n,"form-check"),o=(0,b.vE)(o,"form-switch");var B=(0,c.useContext)(p.Z).controlId,U=(0,c.useMemo)((function(){return{controlId:t||B}}),[B,t]),A=!L&&null!=V&&!1!==V||(0,I.XW)(L,g),G=(0,d.jsx)(Z,(0,r.Z)((0,r.Z)({},H),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:k,disabled:y,as:W}));return(0,d.jsx)(p.Z.Provider,{value:U,children:(0,d.jsx)("div",{style:O,className:s()(T,A&&n,f&&"".concat(n,"-inline"),v&&"".concat(n,"-reverse"),"switch"===z&&o),children:L||(0,d.jsxs)(d.Fragment,{children:[G,A&&(0,d.jsx)(g,{title:S,children:V}),C&&(0,d.jsx)(m,{type:R,tooltip:F,children:C})]})})})}));j.displayName="FormCheck";var k=Object.assign(j,{Input:Z,Label:g}),w=t(4942),F=(t(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var t,n,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,Z=e.isInvalid,h=void 0!==Z&&Z,N=e.plaintext,g=e.readOnly,I=e.as,P=void 0===I?"input":I,j=(0,i.Z)(e,F),k=(0,c.useContext)(p.Z).controlId;(o=(0,b.vE)(o,"form-control"),N)?t=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(n={},(0,w.Z)(n,o,!0),(0,w.Z)(n,"".concat(o,"-").concat(f),f),t=n);return(0,d.jsx)(P,(0,r.Z)((0,r.Z)({},j),{},{type:l,size:u,ref:a,readOnly:g,id:v||k,className:s()(m,t,y&&"is-valid",h&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var R=Object.assign(C,{Feedback:m}),T=(0,t(6543).Z)("form-floating"),O=t(323),E=t(2677),S=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=c.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,m=(0,i.Z)(e,S),x=(0,c.useContext)(p.Z).controlId;o=(0,b.vE)(o,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var Z=s()(u,o,f&&"visually-hidden",l&&y);return v=v||x,l?(0,d.jsx)(E.Z,(0,r.Z)({ref:a,as:"label",className:Z,htmlFor:v},m)):(0,d.jsx)(n,(0,r.Z)({ref:a,className:Z,htmlFor:v},m))}));_.displayName="FormLabel",_.defaultProps={column:!1,visuallyHidden:!1};var z=_,V=["bsPrefix","className","id"],L=c.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.id,l=(0,i.Z)(e,V),f=(0,c.useContext)(p.Z).controlId;return t=(0,b.vE)(t,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:s()(n,t),id:o||f}))}));L.displayName="FormRange";var D=L,W=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],H=c.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,m=void 0!==v&&v,x=e.id,y=(0,i.Z)(e,W),Z=(0,c.useContext)(p.Z).controlId;return t=(0,b.vE)(t,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},y),{},{size:o,ref:a,className:s()(l,t,n&&"".concat(t,"-").concat(n),u&&"is-valid",m&&"is-invalid"),id:x||Z}))}));H.displayName="FormSelect";var B=H,U=["bsPrefix","className","as","muted"],A=c.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,i.Z)(e,U);return t=(0,b.vE)(t,"form-text"),(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:s()(n,t,c&&"text-muted")}))}));A.displayName="FormText";var G=A,M=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));M.displayName="Switch";var X=Object.assign(M,{Input:k.Input,Label:k.Label}),q=t(3053),K=["className","validated","as"],Y={_ref:l().any,validated:l().bool,as:l().elementType},J=c.forwardRef((function(e,a){var t=e.className,n=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,i.Z)(e,K);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:s()(t,n&&"was-validated")}))}));J.displayName="Form",J.propTypes=Y;var Q=Object.assign(J,{Group:O.Z,Control:R,Floating:T,Check:k,Switch:X,Label:z,Text:G,Range:D,Select:B,FloatingLabel:q.Z})},4934:function(e,a,t){"use strict";var r=t(2791).createContext({});a.Z=r},323:function(e,a,t){"use strict";var r=t(1413),i=t(5987),n=t(2791),s=t(4934),o=t(184),l=["controlId","as"],c=n.forwardRef((function(e,a){var t=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,i.Z)(e,l),u=(0,n.useMemo)((function(){return{controlId:t}}),[t]);return(0,o.jsx)(s.Z.Provider,{value:u,children:(0,o.jsx)(d,(0,r.Z)((0,r.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=1737.cc41f1fb.chunk.js.map