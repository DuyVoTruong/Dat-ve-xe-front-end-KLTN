"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[679],{679:function(e,n,t){t.r(n);var i=t(9439),r=t(2791),a=t(3063),o=t(3360),c=t(7692),s=t(9126),l=t(828),d=t(8212),u=t(3810),h=t(1101),x=t(3513),m=t(39),p=t(6053),f=t(9230),b=t(184);n.default=function(){var e=(0,d.Z)(),n=e.tuyenXe,t=e.updateTuyenXe,g=e.addTuyenXe,v=e.deleteTuyenXe,y=(0,r.useState)(""),j=(0,i.Z)(y,2),X=j[0],Z=j[1],w=(0,r.useState)(!1),T=(0,i.Z)(w,2),C=T[0],k=T[1],D=(0,r.useState)(!1),B=(0,i.Z)(D,2),I=B[0],S=B[1],N=(0,r.useState)([]),E=(0,i.Z)(N,2),G=E[0],V=E[1],L=(0,f.$G)().t,A=function(e,n){if(!0===window.confirm("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i")){var i=n.benXeDi.tenBenXe,r=n.benXeDen.tenBenXe,a=n.ngayDi,o=n.gioDi,c=n.thoiGianHanhTrinh,s=n.giaVe,l=n.xe.bienSoXe,d="ACTIVE";!0===document.getElementById("switch".concat(n.id)).checked?(d="ACTIVE",document.getElementById("switch".concat(n.id)).checked=!1):(d="INACTIVE",document.getElementById("switch".concat(n.id)).checked=!0),t(e,{ngayDi:a,gioDi:o,thoiGianHanhTrinh:c,giaVe:s,trangThai:d,bienSoXe:l,tenBenXeDi:i,tenBenXeDen:r})}else{var u=document.getElementById("switch".concat(n.id)).checked;document.getElementById("switch".concat(n.id)).checked=!0!==u}},F=[{name:(0,b.jsx)("div",{children:L("benxedi")}),selector:function(e){return e.benXeDi.tenBenXe},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("benxeden")}),selector:function(e){return e.benXeDen.tenBenXe},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("biensoxe")}),selector:function(e){return e.xe.bienSoXe},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("ngaydi")}),selector:function(e){return e.ngayDi},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("giokhoihanh")}),selector:function(e){return e.gioDi},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("thoigianhanhtrinh")}),selector:function(e){return e.thoiGianHanhTrinh},sortable:!0,wrap:!0},{name:(0,b.jsxs)("div",{children:[L("gia")," ",L("donvi")]}),selector:function(e){return e.giaVe},sortable:!0,wrap:!0},{name:(0,b.jsx)("div",{children:L("trangthai")}),selector:function(e,n){return"ACTIVE"===e.trangThai?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("td",{children:(0,b.jsx)(a.Z.Check,{onChange:function(){return A(e.id,e)},type:"switch",defaultChecked:!0,id:"switch".concat(e.id)},"ACTIVE"+n)})}):"INACTIVE"===e.trangThai?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("td",{children:(0,b.jsx)(a.Z.Check,{onChange:function(){return A(e.id,e)},type:"switch",id:"switch".concat(e.id)},"INACTIVE"+n)})}):void 0},sortable:!0,wrap:!0},{name:"",selector:function(e,n){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{style:{margin:"10px"},children:[(0,b.jsx)(c.Hlf,{className:"edit-btn",onClick:function(){return function(e){V(e),S(!0)}(e)}}),(0,b.jsx)(l._51,{className:"delete-btn",onClick:function(){return n=e.id,void(!0===window.confirm("Delete")&&v(n));var n}})]})})},wrap:!0}],H={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:x.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:x.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:x.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:x.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:x.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:x.kG.default.divider.default}}},R=(0,r.useState)(!0),P=(0,i.Z)(R,2),W=P[0],O=P[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){O(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.default,{showFormAdd:C,setShowFormAdd:k,add:g}),(0,b.jsx)(h.default,{showForm:I,setShowForm:S,update:t,tx:G},G.id),(0,b.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,b.jsx)("h2",{children:L("quanlytuyenxe")})}),(0,b.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,b.jsxs)("div",{style:{display:"flex"},children:[(0,b.jsx)("input",{id:"searchText",onKeyDown:function(e){var n;"Enter"===(n=e).key&&Z(n.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:L("timkiemtheotenbenxedi")}),(0,b.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,b.jsxs)(o.Z,{onClick:function(){Z(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,b.jsx)(p.yD8,{}),L("timkiem")]})}),(0,b.jsx)(s.RDM,{style:{marginTop:"25px"},onClick:function(){return k(!0)},className:"add-btn"})]}),(0,b.jsx)("div",{style:{padding:"30px",overflow:"auto"},children:(0,b.jsx)(x.ZP,{columns:F,data:n.filter((function(e){return(0,m.RP)(e.benXeDi.tenBenXe.toLowerCase()).indexOf((0,m.RP)(X.toLowerCase()))>=0})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:H,progressPending:W})})]})]})}},1101:function(e,n,t){t.r(n);var i=t(2791),r=t(5316),a=t(3063),o=t(3360),c=t(5642),s=t(4271),l=(t(2662),t(4385)),d=t(9230),u=t(184);n.default=function(e){var n=e.showForm,t=e.setShowForm,h=e.update,x=e.tx,m=e.role,p=(0,l.Z)().xe,f=(0,s.Z)(m).benXe,b=(0,i.useContext)(c.I).account,g=(0,d.$G)().t,v=function(){t(!1)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{show:n,onHide:v,children:[(0,u.jsx)(r.Z.Header,{closeButton:!0,children:(0,u.jsx)(r.Z.Title,{children:g("capnhattuyenxe")})}),(0,u.jsx)(r.Z.Body,{children:(0,u.jsxs)(a.Z,{children:[(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("benxedi")}),(0,u.jsx)(a.Z.Select,{id:"benXeDi",children:f.map((function(e){if(x.benXeDi&&"ACTIVE"===e.trangThai)return e.tenBenXe===x.benXeDi.tenBenXe?(0,u.jsx)("option",{selected:!0,value:e.id,children:e.tenBenXe},"benXeDi".concat(e.id)):(0,u.jsx)("option",{value:e.id,children:e.tenBenXe},"benXeDi".concat(e.id))}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("benxeden")}),(0,u.jsx)(a.Z.Select,{id:"benXeDen",children:f.map((function(e){if(x.benXeDen&&"ACTIVE"===e.trangThai)return e.tenBenXe===x.benXeDen.tenBenXe?(0,u.jsx)("option",{selected:!0,value:e.id,children:e.tenBenXe},"benXeDen".concat(e.id)):(0,u.jsx)("option",{value:e.id,children:e.tenBenXe},"benXeDen".concat(e.id))}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("xe")}),(0,u.jsx)(a.Z.Select,{id:"xe",children:p.map((function(e){return"NHAXE"!==m||e.nhaXe.taiKhoan.username===b.username?x.xe&&x.xe.bienSoXe===e.bienSoXe?(0,u.jsxs)("option",{selected:!0,value:e.bienSoXe,children:["Bi\u1ec3n s\u1ed1 xe: ",e.bienSoXe," - Nh\xe0 xe ",x.xe.nhaXe.tenNhaXe]},"xe".concat(e.id)):(0,u.jsxs)("option",{value:e.bienSoXe,children:["Bi\u1ec3n s\u1ed1 xe: ",e.bienSoXe," - Nh\xe0 xe ",e.nhaXe.tenNhaXe]},"xe".concat(e.id)):void 0}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("giokhoihanh")}),(0,u.jsx)(a.Z.Control,{id:"gioDi",type:"time",defaultValue:x.gioDi})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsxs)(a.Z.Label,{className:"text-center",children:[g("ngaydi")," (yy-mm-dd)"]}),(0,u.jsx)(a.Z.Control,{id:"ngayDi",type:"date",defaultValue:x.ngayDi})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("thoigianhanhtrinh")}),(0,u.jsx)(a.Z.Control,{id:"thoiGianHanhTrinh",type:"text",defaultValue:x.thoiGianHanhTrinh})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsxs)(a.Z.Label,{className:"text-center",children:[g("gia")," ",g("donvi")]}),(0,u.jsx)(a.Z.Control,{id:"giaVe",type:"number",min:1,defaultValue:x.giaVe})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("trangthai")}),(0,u.jsx)("br",{}),(0,u.jsx)(a.Z.Check,{inline:!0,defaultChecked:!0,label:"on",name:"Group",type:"radio",id:"activeOn",value:"ACTIVE"}),(0,u.jsx)(a.Z.Check,{inline:!0,label:"off",name:"Group",type:"radio",id:"activeOff",value:"INACTIVE"})]})]})}),(0,u.jsxs)(r.Z.Footer,{children:[(0,u.jsx)(o.Z,{variant:"secondary",onClick:v,children:g("dong")}),(0,u.jsx)(o.Z,{variant:"primary",type:"button",onClick:function(e){var n=document.getElementById("benXeDi")[document.getElementById("benXeDi").selectedIndex].innerHTML,t=document.getElementById("benXeDen")[document.getElementById("benXeDen").selectedIndex].innerHTML,i=document.getElementById("xe").value,r=document.getElementById("ngayDi").value,a=document.getElementById("gioDi").value;console.log("gi\u1edd \u0111i "+a);for(var o=document.getElementById("thoiGianHanhTrinh").value,c=Number(document.getElementById("giaVe").value),s="",l=document.getElementsByName("Group"),d=0;d<l.length;d++)!0===l[d].checked&&(s=l[d].value);if(n&&t&&r&&a&&o&&c&&s&&i)if(t===n)window.alert("T\xean b\u1ebfn xe \u0111i v\xe0 t\xean b\u1ebfn xe \u0111\u1ebfn b\u1ecb tr\xf9ng nhau!!! Vui l\xf2ng ch\u1ecdn l\u1ea1i!!!");else if(c<0)window.alert("Gi\xe1 v\xe9 ph\u1ea3i l\u1edbn h\u01a1n h\u01a1n 0!!!");else{var u={tenBenXeDi:n,tenBenXeDen:t,ngayDi:r,gioDi:a,xe:p,thoiGianHanhTrinh:o,giaVe:c,trangThai:s,bienSoXe:i};console.log(u),h(x.id,u)}else window.alert("B\u1ea1n ph\u1ea3i \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!")},children:g("capnhat")})]})]})})}},8212:function(e,n,t){var i=t(4165),r=t(5861),a=t(9439),o=t(2791),c=t(5642),s=t(8429);n.Z=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],l=n[1],d=(0,o.useContext)(c.I).token,u=(0,o.useCallback)((0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.httpGetTuyenXe)();case 2:200==(n=e.sent).status?l(n.object):l([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,o.useEffect)((function(){u()}),[u]);var h=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPostTuyenXe)(n,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),[u]),x=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPutTuyenXe)(n,t,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}(),[u]),m=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpDeleteTuyenXe)(n,d).then((function(e){return e.json()})).then((function(e){e.status,alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),[u]);return{tuyenXe:t,addTuyenXe:h,updateTuyenXe:x,deleteTuyenXe:m}}}}]);
//# sourceMappingURL=679.361f128d.chunk.js.map