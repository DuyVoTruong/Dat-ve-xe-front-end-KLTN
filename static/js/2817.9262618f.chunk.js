"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[2817],{2817:function(e,t,n){n.r(t);var r=n(2791),o=n(5316),a=n(3063),s=n(3360),c=(n(2677),n(9140),n(39)),l=n(9230),i=n(3204),u=n(184);t.default=function(e){var t=e.showForm,n=e.setShowForm,d=e.add,m=e.role,h=(0,l.$G)().t,p=function(){n(!1)},f=function(e){if(e.preventDefault(),"USER"===m){var t=document.getElementById("formUsername").value,n=document.getElementById("formPassword").value,r=document.getElementById("formHoTen").value,o=document.getElementById("formCMND").value,a=document.getElementById("formSDT").value,s=document.getElementById("formEmail").value,c=document.getElementById("formDiaChi").value;if(m&&t&&n&&r&&o&&a&&s&&c){var l={role:m,username:t,password:n,hoTen:r,cmnd:o,sdt:a,email:s,diaChi:c,picture:"https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fdefault_avatar.png989f063f-864d-497f-aaee-0ad210b3b5e2?alt=media&token=2d270ccf-7dec-4403-973d-6a2109557688"};try{d(l)}catch(D){}}else(0,i.Z)()}else if("NHAXE"===m){var u=document.getElementById("formDiaChi").value,p=document.getElementById("city")[document.getElementById("city").selectedIndex].innerHTML,f=document.getElementById("district")[document.getElementById("district").selectedIndex].innerHTML,x=document.getElementById("ward")[document.getElementById("ward").selectedIndex].innerHTML,Z=document.getElementById("formUsername").value,g=document.getElementById("formPassword").value,j=document.getElementById("formTenNhaXe").value,y=document.getElementById("formSDT").value,b=document.getElementById("formMoTaNgan").value,v=u+", "+x+", "+f+", "+p,N=document.getElementById("formEmail").value;if(m&&Z&&g&&j&&y&&b&&v&&u&&p!==h("Ch\u1ecdn t\u1ec9nh th\xe0nh")&&f!==h("Ch\u1ecdn qu\u1eadn huy\u1ec7n")&&x!==h("Ch\u1ecdn ph\u01b0\u1eddng x\xe3")&&N){var I={role:m,username:Z,password:g,tenNhaXe:j,sdt:y,moTaNgan:b,diaChi:v,picture:"https://firebasestorage.googleapis.com/v0/b/uploadimage-83b65.appspot.com/o/images%2Fxe.png6d58e73d-c4b6-4721-9609-1ab8cfe28540?alt=media&token=1b2a2ef3-d287-4d72-8a7e-d4245271b437",email:N};try{d(I)}catch(L){}}else(0,i.Z)()}else if("ADMIN"===m){var w=document.getElementById("formUsername").value,B=document.getElementById("formPassword").value,E=document.getElementById("formTenAdmin").value,C=document.getElementById("formCMND").value,k=document.getElementById("formSDT").value,G=document.getElementById("formEmail").value;if(m&&w&&B&&E&&C&&k&&G){var T={role:m,username:w,password:B,name:E,cmnd:C,sdt:k,email:G};try{d(T)}catch(X){}}else(0,i.Z)()}};return(0,r.useEffect)((function(){"NHAXE"===m&&(0,c.rt)()}),[m]),"USER"===m?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z,{show:t,onHide:p,children:[(0,u.jsx)(o.Z.Header,{closeButton:!0,children:(0,u.jsx)(o.Z.Title,{children:h("Th\xeam t\xe0i kho\u1ea3n ng\u01b0\u1eddi d\xf9ng")})}),(0,u.jsx)(o.Z.Body,{children:(0,u.jsxs)(a.Z,{onSubmit:f,children:[(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formUsername",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Username"}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp username")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formPassword",children:[(0,u.jsx)(a.Z.Label,{children:"Password"}),(0,u.jsx)(a.Z.Control,{type:"password",placeholder:h("Nh\u1eadp password")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formHoTen",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("H\u1ecd t\xean")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp h\u1ecd t\xean c\u1ee7a ng\u01b0\u1eddi d\xf9ng")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formCMND",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("CMND")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp CMND")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a ng\u01b0\u1eddi d\xf9ng")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Email"}),(0,u.jsx)(a.Z.Control,{type:"email",placeholder:h("Nh\u1eadp Email")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formDiaChi",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("\u0110\u1ecba ch\u1ec9")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp \u0111\u1ecba ch\u1ec9 c\u1ee7a ng\u01b0\u1eddi d\xf9ng")})]})]})}),(0,u.jsxs)(o.Z.Footer,{children:[(0,u.jsx)(s.Z,{variant:"secondary",onClick:p,children:h("\u0110\xf3ng")}),(0,u.jsx)(s.Z,{variant:"primary",type:"button",onClick:f,children:h("Th\xeam")})]})]})}):"NHAXE"===m?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z,{show:t,onHide:p,children:[(0,u.jsx)(o.Z.Header,{closeButton:!0,children:(0,u.jsx)(o.Z.Title,{children:h("Th\xeam t\xe0i kho\u1ea3n nh\xe0 xe")})}),(0,u.jsx)(o.Z.Body,{children:(0,u.jsxs)(a.Z,{onSubmit:f,children:[(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formUsername",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Username"}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp username")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formPassword",children:[(0,u.jsx)(a.Z.Label,{children:"Password"}),(0,u.jsx)(a.Z.Control,{type:"password",placeholder:h("Nh\u1eadp password")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formTenNhaXe",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("T\xean nh\xe0 xe")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp t\xean nh\xe0 xe")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Email"}),(0,u.jsx)(a.Z.Control,{type:"email",placeholder:h("Nh\u1eadp Email")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a nh\xe0 xe")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formMoTaNgan",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("M\xf4 t\u1ea3 ng\u1eafn")}),(0,u.jsx)(a.Z.Control,{as:"textarea",rows:3,placeholder:h("Nh\u1eadp m\xf4 t\u1ea3 ng\u1eafn")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formDiaChi",children:[(0,u.jsx)(a.Z.Label,{children:h("\u0110\u1ecba ch\u1ec9")}),(0,u.jsx)(a.Z.Select,{className:"mb-3",id:"city","aria-label":"Ch\u1ecdn t\u1ec9nh th\xe0nh",children:(0,u.jsx)("option",{children:h("Ch\u1ecdn t\u1ec9nh th\xe0nh")})}),(0,u.jsx)(a.Z.Select,{className:"mb-3",id:"district","aria-label":"Ch\u1ecdn qu\u1eadn huy\u1ec7n",children:(0,u.jsx)("option",{children:h("Ch\u1ecdn qu\u1eadn huy\u1ec7n")})}),(0,u.jsx)(a.Z.Select,{className:"mb-3",id:"ward","aria-label":"Ch\u1ecdn ph\u01b0\u1eddng x\xe3",children:(0,u.jsx)("option",{children:h("Ch\u1ecdn ph\u01b0\u1eddng x\xe3")})}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp s\u1ed1 nh\xe0")})]})]})}),(0,u.jsxs)(o.Z.Footer,{children:[(0,u.jsx)(s.Z,{variant:"secondary",onClick:p,children:h("\u0110\xf3ng")}),(0,u.jsx)(s.Z,{variant:"primary",type:"button",onClick:f,children:h("Th\xeam")})]})]})}):"ADMIN"===m?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o.Z,{show:t,onHide:p,children:[(0,u.jsx)(o.Z.Header,{closeButton:!0,children:(0,u.jsx)(o.Z.Title,{children:h("Th\xeam t\xe0i kho\u1ea3n qu\u1ea3n tr\u1ecb vi\xean")})}),(0,u.jsx)(o.Z.Body,{children:(0,u.jsxs)(a.Z,{onSubmit:f,children:[(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formUsername",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Username"}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp username")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formPassword",children:[(0,u.jsx)(a.Z.Label,{children:"Password"}),(0,u.jsx)(a.Z.Control,{type:"password",placeholder:h("Nh\u1eadp password")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formTenAdmin",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("H\u1ecd t\xean")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp h\u1ecd t\xean c\u1ee7a qu\u1ea3n tr\u1ecb vi\xean")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formCMND",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("CMND")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp CMND")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:h("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i")}),(0,u.jsx)(a.Z.Control,{type:"text",placeholder:h("Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a qu\u1ea3n tr\u1ecb vi\xean")})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:"Email"}),(0,u.jsx)(a.Z.Control,{type:"email",placeholder:h("Nh\u1eadp Email")})]})]})}),(0,u.jsxs)(o.Z.Footer,{children:[(0,u.jsx)(s.Z,{variant:"secondary",onClick:p,children:h("\u0110\xf3ng")}),(0,u.jsx)(s.Z,{variant:"primary",type:"button",onClick:f,children:h("Th\xeam")})]})]})}):void 0}},39:function(e,t,n){n.d(t,{J6:function(){return G},Jd:function(){return C},QY:function(){return b},RP:function(){return D},Sy:function(){return E},Tj:function(){return v},UU:function(){return k},X_:function(){return y},Xu:function(){return T},kV:function(){return I},mn:function(){return B},p5:function(){return N},rt:function(){return j},yl:function(){return w}});var r=n(4165),o=n(5861),a=n(7762),s=n(8429),c=s.httpGetBenXeById,l=(s.httpGetLoaiXeById,s.httpGetBenXeUser),i=(s.httpGetNhaXeById,s.httpGetAllDanhGiaByIdNhaXe),u=s.httpGetTuyenXeFindByAddress,d=s.httpGetAllVeXeByTuyenXeId,m=s.httpGetTuyenXeById,h=s.httpGetNhaXeUserById,p=s.httpGetNhaXeUserAll,f=s.httpGetVeXeUserById,x=s.httpGetTuyenXeFindByAddressDate,Z=(s.httpGetSaoTrungBinhNhaXe,s.httpGetHangHoaByUserId),g=s.httpGetHangHoaByTuyenXeId,j=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){var s=r.value;e.options[e.options.length]=new Option(s.Name,s.Id)}}catch(c){o.e(c)}finally{o.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),o=(0,a.Z)(r[0].Districts);try{for(o.s();!(t=o.n()).done;){var s=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(s.Name,s.Id)}}catch(c){o.e(c)}finally{o.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var o=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var s,l=o[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,i=(0,a.Z)(l);try{for(i.s();!(s=i.n()).done;){var u=s.value;t.options[t.options.length]=new Option(u.Name,u.Id)}}catch(c){i.e(c)}finally{i.f()}}}}}(n)}))},y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,n);case 2:if(200!=(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x(t,n);case 3:if(o=e.sent,console.log(o),200!=o.status){e.next=8;break}return console.log(o.object),e.abrupt("return",o.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function D(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}}}]);
//# sourceMappingURL=2817.9262618f.chunk.js.map