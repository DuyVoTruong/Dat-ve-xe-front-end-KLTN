"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[9076],{9076:function(e,t,n){n.r(t);var a=n(9439),r=n(2791),o=n(3063),s=n(3360),i=n(7692),l=n(9126),c=n(828),d=n(2662),h=(n(974),n(2817)),u=n(793),m=n(6887),x=n(3513),p=n(39),f=n(6053),j=n(9230),g=n(184);t.default=function(){var e=(0,d.Z)(),t=e.nhaXe,n=e.updateNhaXe,Z=(e.addNhaXe,e.deleteNhaXe,e.signUp),v=e.updateTaiKhoan,y=(0,r.useState)(""),b=(0,a.Z)(y,2),w=b[0],C=b[1],N=(0,r.useState)(""),k=(0,a.Z)(N,2),T=k[0],I=k[1],E=(0,r.useState)(!1),S=(0,a.Z)(E,2),B=S[0],H=S[1],D=(0,r.useState)(!1),X=(0,a.Z)(D,2),L=X[0],F=X[1],G=(0,r.useState)(!1),V=(0,a.Z)(G,2),A=V[0],K=V[1],M=(0,j.$G)().t,P=function(e,t){if(!0===window.confirm("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i")){var a,r=t.taiKhoan.username,o=t.taiKhoan.password,s=t.tenNhaXe,i=t.sdt,l=t.moTaNgan,c=t.diaChi;!0===document.getElementById("switch".concat(t.id)).checked?(a="ACTIVE",document.getElementById("switch".concat(t.id)).checked=!1):(a="INACTIVE",document.getElementById("switch".concat(t.id)).checked=!0),n(e,{id:e,role:"NHAXE",username:r,password:o,tenNhaXe:s,sdt:i,moTaNgan:l,diaChi:c,trangThaiHoatDong:a})}else{var d=document.getElementById("switch".concat(t.id)).checked;document.getElementById("switch".concat(t.id)).checked=!0!==d}},R=[{name:(0,g.jsx)("div",{children:"Username"}),selector:function(e){return e.taiKhoan.username},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("vaitro")}),selector:function(e){return e.taiKhoan.role},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("tennhaxe")}),selector:function(e){return e.tenNhaXe},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("sodienthoai")}),selector:function(e){return e.sdt},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("motangan")}),selector:function(e){return e.moTaNgan},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("diachi")}),selector:function(e){return e.diaChi},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:M("trangthai")}),selector:function(e,t){return"ACTIVE"===e.taiKhoan.trangThaiHoatDong?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("td",{children:(0,g.jsx)(o.Z.Check,{onChange:function(){return P(e.id,e)},type:"switch",defaultChecked:!0,id:"switch".concat(e.id)},"ACTIVE"+t)})}):"INACTIVE"===e.taiKhoan.trangThaiHoatDong?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("td",{children:(0,g.jsx)(o.Z.Check,{onChange:function(){return P(e.id,e)},type:"switch",id:"switch".concat(e.id)},"INACTIVE"+t)})}):void 0},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{}),selector:function(e){return(0,g.jsxs)("div",{style:{margin:"10px"},children:[(0,g.jsx)(i.Hlf,{className:"edit-btn",onClick:function(){return I(e),void F(!0)}}),(0,g.jsx)(c._51,{className:"delete-btn",onClick:0}),(0,g.jsx)(i.vpV,{onClick:function(){return I(e),void K(!0)},className:"edit-password-btn"})]})},sortable:!0,wrap:!0}],U={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:x.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:x.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:x.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:x.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:x.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:x.kG.default.divider.default}}},W=(0,r.useState)(!0),_=(0,a.Z)(W,2),q=_[0],O=_[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){O(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.default,{showForm:B,setShowForm:H,add:Z,role:"NHAXE"}),(0,g.jsx)(u.Z,{showForm:L,setShowForm:F,update:n,role:"NHAXE",tk:T},T.id),function(){if(T.taiKhoan)return(0,g.jsx)(m.Z,{showForm:A,setShowForm:K,update:v,role:"NHAXE",tk:T},T.id+"matkhau")}(),(0,g.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,g.jsx)("h2",{children:M("quanlytaikhoannhaxe")})}),(0,g.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("input",{id:"searchText",onKeyDown:function(e){var t;"Enter"===(t=e).key&&C(t.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:M("timkiemtheousername")}),(0,g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,g.jsxs)(s.Z,{onClick:function(){C(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,g.jsx)(f.yD8,{}),M("timkiem")]})}),(0,g.jsx)(l.RDM,{style:{marginTop:"25px"},onClick:function(){return H(!0)},className:"add-btn"})]}),(0,g.jsx)("div",{style:{padding:"20px",overflow:"auto"},children:(0,g.jsx)(x.ZP,{columns:R,data:t.filter((function(e){return(0,p.RP)(e.taiKhoan.username.toLowerCase()).indexOf((0,p.RP)(w.toLowerCase()))>=0})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:U,progressPending:q})})]})]})}},793:function(e,t,n){var a=n(2791),r=n(5316),o=n(3063),s=n(3360),i=n(39),l=n(9230),c=n(184);t.Z=function(e){var t=e.showForm,n=e.setShowForm,d=e.update,h=e.role,u=e.tk,m=(0,l.$G)().t,x=function(){n(!1)},p=function(e){if(e.preventDefault(),"USER"===h){var t=u.taiKhoan.username,n=document.getElementById("formHoTen").value,a=document.getElementById("formCMND").value,r=document.getElementById("formSDT").value,o=document.getElementById("formEmail").value,s=document.getElementById("formDiaChi").value,i=u.taiKhoan.trangThaiHoatDong;if(h&&t&&n&&a&&r&&o&&s){var l={role:h,username:t,hoTen:n,cmnd:a,sdt:r,email:o,diaChi:s,trangThaiHoatDong:i};try{d(u.id,l)}catch(S){}}else window.alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!")}else if("NHAXE"===h){var c=document.getElementById("formDiaChi").value,m=document.getElementById("city")[document.getElementById("city").selectedIndex].innerHTML,x=document.getElementById("district")[document.getElementById("district").selectedIndex].innerHTML,p=document.getElementById("ward")[document.getElementById("ward").selectedIndex].innerHTML,f=u.taiKhoan.username,j=document.getElementById("formTenNhaXe").value,g=document.getElementById("formSDT").value,Z=document.getElementById("formMoTaNgan").value,v=c+", "+p+", "+x+", "+m,y=u.taiKhoan.trangThaiHoatDong;if(h&&f&&j&&g&&Z&&v&&c&&"Ch\u1ecdn t\u1ec9nh th\xe0nh"!==m&&"Ch\u1ecdn qu\u1eadn huy\u1ec7n"!==x&&"Ch\u1ecdn ph\u01b0\u1eddng x\xe3"!==p){var b={role:h,username:f,tenNhaXe:j,sdt:g,moTaNgan:Z,diaChi:v,trangThaiHoatDong:y};try{d(u.id,b)}catch(B){}}else window.alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!")}else if("ADMIN"===h){var w=u.taiKhoan.username,C=document.getElementById("formTenAdmin").value,N=document.getElementById("formCMND").value,k=document.getElementById("formSDT").value,T=document.getElementById("formEmail").value,I=u.taiKhoan.trangThaiHoatDong;if(h&&w&&C&&N&&k&&T){var E={role:h,username:w,name:C,cmnd:N,sdt:k,email:T,trangThaiHoatDong:I};try{d(u.id,E)}catch(H){console.log(H)}}else window.alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!")}};return(0,a.useEffect)((function(){"NHAXE"===h&&(0,i.rt)()})),"USER"===h?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.Z,{show:t,onHide:x,children:[(0,c.jsx)(r.Z.Header,{closeButton:!0,children:(0,c.jsx)(r.Z.Title,{children:m("capnhattaikhoanuser")})}),(0,c.jsx)(r.Z.Body,{children:(0,c.jsxs)(o.Z,{onSubmit:p,children:[(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formHoTen",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("hoten")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhaphotenuser"),defaultValue:u.hoTen})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formCMND",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("cmnd")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:"Nh\u1eadp CMND",defaultValue:u.cmnd})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("sodienthoai")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhapsdtuser"),defaultValue:u.sdt})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:"Email"}),(0,c.jsx)(o.Z.Control,{type:"email",placeholder:m("nhapemail"),defaultValue:u.email})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formDiaChi",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("diachi")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhapdiachiuser"),defaultValue:u.diaChi})]})]})}),(0,c.jsxs)(r.Z.Footer,{children:[(0,c.jsx)(s.Z,{variant:"secondary",onClick:x,children:m("dong")}),(0,c.jsx)(s.Z,{variant:"primary",type:"button",onClick:p,children:m("capnhat")})]})]})}):"NHAXE"===h?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.Z,{show:t,onHide:x,children:[(0,c.jsx)(r.Z.Header,{closeButton:!0,children:(0,c.jsx)(r.Z.Title,{children:m("capnhattaikhoannhaxe")})}),(0,c.jsx)(r.Z.Body,{children:(0,c.jsxs)(o.Z,{onSubmit:p,children:[(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formTenNhaXe",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("tennhaxe")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhaptennhaxe"),defaultValue:u.tenNhaXe})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("sodienthoai")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhapsodienthoai"),defaultValue:u.sdt})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formMoTaNgan",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("motangan")}),(0,c.jsx)(o.Z.Control,{as:"textarea",rows:3,placeholder:m("nhapmotangan"),defaultValue:u.moTaNgan})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formDiaChi",children:[(0,c.jsx)(o.Z.Label,{children:m("diachi")}),(0,c.jsx)(o.Z.Select,{className:"mb-3",id:"city","aria-label":"Ch\u1ecdn t\u1ec9nh th\xe0nh",children:(0,c.jsx)("option",{children:m("chontinhthanh")})}),(0,c.jsx)(o.Z.Select,{className:"mb-3",id:"district","aria-label":"Ch\u1ecdn qu\u1eadn huy\u1ec7n",children:(0,c.jsx)("option",{children:m("chonquanhuyen")})}),(0,c.jsx)(o.Z.Select,{className:"mb-3",id:"ward","aria-label":"Ch\u1ecdn ph\u01b0\u1eddng x\xe3",children:(0,c.jsx)("option",{children:m("chonphuongxa")})}),function(){if(u.diaChi)return(0,c.jsx)(o.Z.Control,{type:"text",placeholder:"Nh\u1eadp s\u1ed1 nh\xe0",defaultValue:u.diaChi.split(", ")[0]})}()]})]})}),(0,c.jsxs)(r.Z.Footer,{children:[(0,c.jsx)(s.Z,{variant:"secondary",onClick:x,children:m("dong")}),(0,c.jsx)(s.Z,{variant:"primary",type:"button",onClick:p,children:m("capnhat")})]})]})}):"ADMIN"===h?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.Z,{show:t,onHide:x,children:[(0,c.jsx)(r.Z.Header,{closeButton:!0,children:(0,c.jsx)(r.Z.Title,{children:m("capnhattaikhoanadmin")})}),(0,c.jsx)(r.Z.Body,{children:(0,c.jsxs)(o.Z,{onSubmit:p,children:[(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formTenAdmin",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("hoten")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhaphotenadmin"),defaultValue:u.name})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formCMND",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("cmnd")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhapcmnd"),defaultValue:u.cmnd})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formSDT",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:m("sodienthoai")}),(0,c.jsx)(o.Z.Control,{type:"text",placeholder:m("nhapsdtadmin"),defaultValue:u.sdt})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,c.jsx)(o.Z.Label,{className:"text-center",children:"Email"}),(0,c.jsx)(o.Z.Control,{type:"email",placeholder:m("nhapemail"),defaultValue:u.email})]})]})}),(0,c.jsxs)(r.Z.Footer,{children:[(0,c.jsx)(s.Z,{variant:"secondary",onClick:x,children:m("dong")}),(0,c.jsx)(s.Z,{variant:"primary",type:"button",onClick:p,children:m("capnhat")})]})]})}):void 0}},6887:function(e,t,n){n(2791);var a=n(5316),r=n(3063),o=n(3360),s=(n(39),n(9230)),i=n(184);t.Z=function(e){var t=e.showForm,n=e.setShowForm,l=e.update,c=(e.role,e.tk),d=(0,s.$G)().t,h=function(){var e=document.getElementById("formPassword").value;if(e===document.getElementById("formConfirmPassword").value)if(e){var t={password:e};try{l(c.taiKhoan.id,t)}catch(n){console.log(n)}}else window.alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!");else window.alert("Password v\xe0 Confirm password kh\xf4ng tr\xf9ng nhau!!!")},u=function(){n(!1)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{show:t,onHide:u,children:[(0,i.jsx)(a.Z.Header,{closeButton:!0,children:(0,i.jsx)(a.Z.Title,{children:d("thaydoipassword")})}),(0,i.jsx)(a.Z.Body,{children:(0,i.jsxs)(r.Z,{onSubmit:h,children:[(0,i.jsxs)(r.Z.Group,{className:"mb-3",controlId:"formPassword",children:[(0,i.jsx)(r.Z.Label,{className:"text-center",children:"Password"}),(0,i.jsx)(r.Z.Control,{type:"password",placeholder:d("nhappassword")})]}),(0,i.jsxs)(r.Z.Group,{className:"mb-3",controlId:"formConfirmPassword",children:[(0,i.jsx)(r.Z.Label,{className:"text-center",children:"Confirm password"}),(0,i.jsx)(r.Z.Control,{type:"password",placeholder:d("nhapconfirmpassword")})]})]})}),(0,i.jsxs)(a.Z.Footer,{children:[(0,i.jsx)(o.Z,{variant:"secondary",onClick:u,children:d("dong")}),(0,i.jsx)(o.Z,{variant:"primary",type:"button",onClick:h,children:d("capnhat")})]})]})})}},2662:function(e,t,n){var a=n(4165),r=n(5861),o=n(9439),s=n(2791),i=n(5642),l=n(8429);t.Z=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],c=t[1],d=(0,s.useContext)(i.I).token,h=(0,s.useContext)(i.I).account,u=(0,s.useCallback)((0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.httpGetNhaXe)(d);case 2:200==(t=e.sent).status?c(t.object):c([]);case 4:case"end":return e.stop()}}),e)}))),[]),m=(0,s.useCallback)((0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.httpGetNhaXeUserAll)(d);case 2:200==(t=e.sent).status?c(t.object):c([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,s.useEffect)((function(){h?"USER"===h.role||"NHAXE"===h.role?m():u():m()}),[u,m]);var x=(0,s.useCallback)(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.tenNhaXe&&t.diaChi){e.next=4;break}alert("Missing data"),e.next=12;break;case 4:return e.prev=4,e.next=7,(0,l.httpPostNhaXe)(t,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert("Fail");case 12:u();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),[u]),p=(0,s.useCallback)(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.tenNhaXe&&n.diaChi){e.next=4;break}alert("Missing data"),e.next=12;break;case 4:return e.prev=4,e.next=7,(0,l.httpPutNhaXe)(t,n,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):e.message?alert(e.message):alert("B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp l\u1ea1i!!!")}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert("Fail");case 12:u();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n){return e.apply(this,arguments)}}(),[u]),f=(0,s.useCallback)(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.httpDeleteNhaXe)(t,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[u]),j=(0,s.useCallback)(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.httpPutTaiKhoan)(t,n,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),[u]),g=(0,s.useCallback)(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.username&&t.password){e.next=4;break}alert("Missing data"),e.next=12;break;case 4:return e.prev=4,e.next=7,(0,l.httpPostSignUp)(t,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert("Fail");case 12:u();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),[u]);return{nhaXe:n,addNhaXe:x,updateNhaXe:p,deleteNhaXe:f,updateTaiKhoan:j,signUp:g}}},974:function(e,t,n){n(2791),n(5642)}}]);
//# sourceMappingURL=9076.8c21de1d.chunk.js.map