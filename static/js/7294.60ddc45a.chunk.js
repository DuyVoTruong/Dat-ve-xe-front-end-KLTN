"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[7294],{1101:function(e,n,t){t.r(n);var i=t(2791),r=t(5316),a=t(3063),o=t(3360),c=t(5642),s=t(4271),l=(t(2662),t(4385)),d=t(9230),u=t(184);n.default=function(e){var n=e.showForm,t=e.setShowForm,h=e.update,x=e.tx,m=e.role,p=(0,l.Z)().xe,f=(0,s.Z)(m).benXe,b=(0,i.useContext)(c.I).account,g=(0,d.$G)().t,v=function(){t(!1)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.Z,{show:n,onHide:v,children:[(0,u.jsx)(r.Z.Header,{closeButton:!0,children:(0,u.jsx)(r.Z.Title,{children:g("capnhattuyenxe")})}),(0,u.jsx)(r.Z.Body,{children:(0,u.jsxs)(a.Z,{children:[(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("benxedi")}),(0,u.jsx)(a.Z.Select,{id:"benXeDi",children:f.map((function(e){if(x.benXeDi&&"ACTIVE"===e.trangThai)return e.tenBenXe===x.benXeDi.tenBenXe?(0,u.jsx)("option",{selected:!0,value:e.id,children:e.tenBenXe},"benXeDi".concat(e.id)):(0,u.jsx)("option",{value:e.id,children:e.tenBenXe},"benXeDi".concat(e.id))}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("benxeden")}),(0,u.jsx)(a.Z.Select,{id:"benXeDen",children:f.map((function(e){if(x.benXeDen&&"ACTIVE"===e.trangThai)return e.tenBenXe===x.benXeDen.tenBenXe?(0,u.jsx)("option",{selected:!0,value:e.id,children:e.tenBenXe},"benXeDen".concat(e.id)):(0,u.jsx)("option",{value:e.id,children:e.tenBenXe},"benXeDen".concat(e.id))}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("xe")}),(0,u.jsx)(a.Z.Select,{id:"xe",children:p.map((function(e){return"NHAXE"!==m||e.nhaXe.taiKhoan.username===b.username?x.xe&&x.xe.bienSoXe===e.bienSoXe?(0,u.jsxs)("option",{selected:!0,value:e.bienSoXe,children:["Bi\u1ec3n s\u1ed1 xe: ",e.bienSoXe," - Nh\xe0 xe ",x.xe.nhaXe.tenNhaXe]},"xe".concat(e.id)):(0,u.jsxs)("option",{value:e.bienSoXe,children:["Bi\u1ec3n s\u1ed1 xe: ",e.bienSoXe," - Nh\xe0 xe ",e.nhaXe.tenNhaXe]},"xe".concat(e.id)):void 0}))})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("giokhoihanh")}),(0,u.jsx)(a.Z.Control,{id:"gioDi",type:"time",defaultValue:x.gioDi})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsxs)(a.Z.Label,{className:"text-center",children:[g("ngaydi")," (yy-mm-dd)"]}),(0,u.jsx)(a.Z.Control,{id:"ngayDi",type:"date",defaultValue:x.ngayDi})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("thoigianhanhtrinh")}),(0,u.jsx)(a.Z.Control,{id:"thoiGianHanhTrinh",type:"text",defaultValue:x.thoiGianHanhTrinh})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsxs)(a.Z.Label,{className:"text-center",children:[g("gia")," ",g("donvi")]}),(0,u.jsx)(a.Z.Control,{id:"giaVe",type:"number",min:1,defaultValue:x.giaVe})]}),(0,u.jsxs)(a.Z.Group,{className:"mb-3",children:[(0,u.jsx)(a.Z.Label,{className:"text-center",children:g("trangthai")}),(0,u.jsx)("br",{}),(0,u.jsx)(a.Z.Check,{inline:!0,defaultChecked:!0,label:"on",name:"Group",type:"radio",id:"activeOn",value:"ACTIVE"}),(0,u.jsx)(a.Z.Check,{inline:!0,label:"off",name:"Group",type:"radio",id:"activeOff",value:"INACTIVE"})]})]})}),(0,u.jsxs)(r.Z.Footer,{children:[(0,u.jsx)(o.Z,{variant:"secondary",onClick:v,children:g("dong")}),(0,u.jsx)(o.Z,{variant:"primary",type:"button",onClick:function(e){var n=document.getElementById("benXeDi")[document.getElementById("benXeDi").selectedIndex].innerHTML,t=document.getElementById("benXeDen")[document.getElementById("benXeDen").selectedIndex].innerHTML,i=document.getElementById("xe").value,r=document.getElementById("ngayDi").value,a=document.getElementById("gioDi").value;console.log("gi\u1edd \u0111i "+a);for(var o=document.getElementById("thoiGianHanhTrinh").value,c=Number(document.getElementById("giaVe").value),s="",l=document.getElementsByName("Group"),d=0;d<l.length;d++)!0===l[d].checked&&(s=l[d].value);if(n&&t&&r&&a&&o&&c&&s&&i)if(t===n)window.alert("T\xean b\u1ebfn xe \u0111i v\xe0 t\xean b\u1ebfn xe \u0111\u1ebfn b\u1ecb tr\xf9ng nhau!!! Vui l\xf2ng ch\u1ecdn l\u1ea1i!!!");else if(c<0)window.alert("Gi\xe1 v\xe9 ph\u1ea3i l\u1edbn h\u01a1n h\u01a1n 0!!!");else{var u={tenBenXeDi:n,tenBenXeDen:t,ngayDi:r,gioDi:a,xe:p,thoiGianHanhTrinh:o,giaVe:c,trangThai:s,bienSoXe:i};console.log(u),h(x.id,u)}else window.alert("B\u1ea1n ph\u1ea3i \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!!!")},children:g("capnhat")})]})]})})}},8212:function(e,n,t){var i=t(4165),r=t(5861),a=t(9439),o=t(2791),c=t(5642),s=t(8429);n.Z=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],l=n[1],d=(0,o.useContext)(c.I).token,u=(0,o.useCallback)((0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.httpGetTuyenXe)();case 2:200==(n=e.sent).status?l(n.object):l([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,o.useEffect)((function(){u()}),[u]);var h=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPostTuyenXe)(n,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),[u]),x=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPutTuyenXe)(n,t,d).then((function(e){return e.json()})).then((function(e){200==e.status?alert("Success"):alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}(),[u]),m=(0,o.useCallback)(function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpDeleteTuyenXe)(n,d).then((function(e){return e.json()})).then((function(e){e.status,alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Fail");case 8:u();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),[u]);return{tuyenXe:t,addTuyenXe:h,updateTuyenXe:x,deleteTuyenXe:m}}},7294:function(e,n,t){t.r(n);var i=t(9439),r=t(2791),a=t(3063),o=t(3360),c=t(7692),s=t(9126),l=t(828),d=t(5642),u=t(3810),h=t(1101),x=t(8212),m=t(3513),p=t(6053),f=t(39),b=t(9230),g=t(184);n.default=function(){var e=(0,r.useContext)(d.I).account,n=(0,x.Z)(),t=n.tuyenXe,v=n.updateTuyenXe,y=n.addTuyenXe,j=n.deleteTuyenXe,X=(0,r.useState)(""),Z=(0,i.Z)(X,2),w=Z[0],T=Z[1],C=(0,r.useState)(!1),k=(0,i.Z)(C,2),D=k[0],B=k[1],I=(0,r.useState)(!1),N=(0,i.Z)(I,2),E=N[0],S=N[1],G=(0,r.useState)([]),V=(0,i.Z)(G,2),L=V[0],A=V[1],H=(0,b.$G)().t,F=function(e,n){if(!0===window.confirm("Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i")){var t=n.benXeDi.tenBenXe,i=n.benXeDen.tenBenXe,r=n.ngayDi,a=n.gioDi,o=n.thoiGianHanhTrinh,c=n.giaVe,s=n.xe.bienSoXe,l="ACTIVE";!0===document.getElementById("switch".concat(n.id)).checked?(l="ACTIVE",document.getElementById("switch".concat(n.id)).checked=!1):(l="INACTIVE",document.getElementById("switch".concat(n.id)).checked=!0),v(e,{ngayDi:r,gioDi:a,thoiGianHanhTrinh:o,giaVe:c,trangThai:l,bienSoXe:s,tenBenXeDi:t,tenBenXeDen:i})}else{var d=document.getElementById("switch".concat(n.id)).checked;document.getElementById("switch".concat(n.id)).checked=!0!==d}},R=[{name:(0,g.jsx)("div",{children:H("benxedi")}),selector:function(e){return e.benXeDi.tenBenXe},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("benxeden")}),selector:function(e){return e.benXeDen.tenBenXe},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("biensoxe")}),selector:function(e){return e.xe.bienSoXe},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("ngaydi")}),selector:function(e){return e.ngayDi},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("giokhoihanh")}),selector:function(e){return e.gioDi},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("thoigianhanhtrinh")}),selector:function(e){return e.thoiGianHanhTrinh},sortable:!0,wrap:!0},{name:(0,g.jsxs)("div",{children:[H("gia")," ",H("donvi")]}),selector:function(e){return e.giaVe},sortable:!0,wrap:!0},{name:(0,g.jsx)("div",{children:H("trangthai")}),selector:function(e,n){return"ACTIVE"===e.trangThai?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("td",{children:(0,g.jsx)(a.Z.Check,{onChange:function(){return F(e.id,e)},type:"switch",defaultChecked:!0,id:"switch".concat(e.id)},"ACTIVE"+n)})}):"INACTIVE"===e.trangThai?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("td",{children:(0,g.jsx)(a.Z.Check,{onChange:function(){return F(e.id,e)},type:"switch",id:"switch".concat(e.id)},"INACTIVE"+n)})}):void 0},sortable:!0,wrap:!0},{name:"",selector:function(e,n){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{style:{margin:"10px"},children:[(0,g.jsx)(c.Hlf,{className:"edit-btn",onClick:function(){return function(e){A(e),S(!0)}(e)}}),(0,g.jsx)(l._51,{className:"delete-btn",onClick:function(){return n=e.id,void(!0===window.confirm("Delete")&&j(n));var n}})]})})},wrap:!0}],P={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:m.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:m.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:m.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:m.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:m.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:m.kG.default.divider.default}}},W=(0,r.useState)(!0),O=(0,i.Z)(W,2),_=O[0],K=O[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){K(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.default,{showFormAdd:D,setShowFormAdd:B,add:y,role:"NHAXE",nx:""}),(0,g.jsx)(h.default,{showForm:E,setShowForm:S,update:v,tx:L,role:"NHAXE"},L.id),(0,g.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,g.jsx)("h2",{children:H("quanlytuyenxe")})}),(0,g.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("input",{id:"searchText",onKeyDown:function(e){var n;"Enter"===(n=e).key&&T(n.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:H("timkiemtheotenbenxedi")}),(0,g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,g.jsxs)(o.Z,{onClick:function(){T(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,g.jsx)(p.yD8,{}),H("timkiem")]})}),(0,g.jsx)(s.RDM,{style:{marginTop:"25px"},onClick:function(){return B(!0)},className:"add-btn"})]}),(0,g.jsx)("div",{style:{padding:"20px",overflow:"auto"},children:(0,g.jsx)(m.ZP,{columns:R,data:t.filter((function(e){return(0,f.RP)(e.benXeDi.tenBenXe.toLowerCase()).indexOf((0,f.RP)(w.toLowerCase()))>=0})).filter((function(n){return n.xe.nhaXe.taiKhoan.username===e.username})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:P,progressPending:_})})]})]})}}}]);
//# sourceMappingURL=7294.60ddc45a.chunk.js.map