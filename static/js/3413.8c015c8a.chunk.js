"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[3413],{7748:function(e,t,n){var r=n(9085),o=n(6906);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.jO;r.Am.fail(e,{position:r.Am.POSITION.TOP_RIGHT})}},39:function(e,t,n){n.d(t,{J6:function(){return G},Jd:function(){return X},QY:function(){return Z},RP:function(){return N},Sy:function(){return C},Tj:function(){return k},UU:function(){return B},X_:function(){return m},Xu:function(){return E},kV:function(){return w},mn:function(){return I},p5:function(){return j},rt:function(){return b},yl:function(){return T}});var r=n(4165),o=n(5861),a=n(7762),c=n(8429),u=c.httpGetBenXeById,i=(c.httpGetLoaiXeById,c.httpGetBenXeUser),s=(c.httpGetNhaXeById,c.httpGetAllDanhGiaByIdNhaXe),l=c.httpGetTuyenXeFindByAddress,h=c.httpGetAllVeXeByTuyenXeId,d=c.httpGetTuyenXeById,f=c.httpGetNhaXeUserById,p=c.httpGetNhaXeUserAll,x=c.httpGetVeXeUserById,g=c.httpGetTuyenXeFindByAddressDate,v=(c.httpGetSaoTrungBinhNhaXe,c.httpGetHangHoaByUserId),y=c.httpGetHangHoaByTuyenXeId,b=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){var c=r.value;e.options[e.options.length]=new Option(c.Name,c.Id)}}catch(u){o.e(u)}finally{o.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),o=(0,a.Z)(r[0].Districts);try{for(o.s();!(t=o.n()).done;){var c=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(c.Name,c.Id)}}catch(u){o.e(u)}finally{o.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var o=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var c,i=o[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,s=(0,a.Z)(i);try{for(s.s();!(c=s.n()).done;){var l=c.value;t.options[t.options.length]=new Option(l.Name,l.Id)}}catch(u){s.e(u)}finally{s.f()}}}}}(n)}))},m=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t,n);case 2:if(200!=(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,g(t,n);case 3:if(o=e.sent,console.log(o),200!=o.status){e.next=8;break}return console.log(o.object),e.abrupt("return",o.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function N(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}},8212:function(e,t,n){var r=n(4165),o=n(5861),a=n(9439),c=n(2791),u=n(4047),i=n(8429),s=n(7899),l=n(4586),h=n(7748);t.Z=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],d=t[1],f=(0,c.useContext)(u.I).token,p=(0,c.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.httpGetTuyenXe)();case 2:200==(t=e.sent).status?d(t.object):d([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,c.useEffect)((function(){p()}),[p]);var x=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpPostTuyenXe)(t,f).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,h.Z)();case 8:p();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[p]),g=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpPutTuyenXe)(t,n,f).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,h.Z)();case 8:p();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),[p]),v=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpDeleteTuyenXe)(t,f).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,h.Z)();case 8:p();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[p]);return{tuyenXe:n,addTuyenXe:x,updateTuyenXe:g,deleteTuyenXe:v}}},7501:function(e,t,n){n(2791),n(4047),n(3204),n(7899),n(4586),n(7748)},3413:function(e,t,n){n.r(t);var r=n(9439),o=n(2791),a=n(3360),c=n(9126),u=n(7689),i=n(4047),s=n(39),l=(n(8212),n(7501),n(3513)),h=n(6053),d=n(9230),f=n(9085),p=n(7899),x=n(4586),g=n(2062),v=n.n(g),y=n(184);t.default=function(){(0,o.useContext)(i.I).account;var e=(0,o.useContext)(i.I).token,t=(0,u.UO)().id,n=(0,o.useState)(""),g=(0,r.Z)(n,2),b=g[0],m=g[1],Z=(0,o.useState)([]),k=(0,r.Z)(Z,2),j=k[0],w=k[1],T=(0,o.useState)([]),I=(0,r.Z)(T,2),C=I[0],X=I[1],B=(0,o.useState)(!1),G=(0,r.Z)(B,2),E=G[0],N=G[1],S=(0,d.$G)().t,D=function(t,n){fetch("http://localhost:8081/api/vexe/".concat(t),{method:"PUT",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){200==e.status&&((0,p.Z)(),N(!0))}))};(0,o.useEffect)((function(){(0,s.kV)(t,e).then((function(e){e&&w(e)})),(0,s.yl)(t,e).then((function(e){e&&X(e)})),N(!1)}),[E]);var A=function(t){v()({title:S("B\u1ea1n mu\u1ed1n h\u1ee7y v\xe9 xe n\xe0y?"),text:"",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&fetch("http://localhost:8081/api/vexe/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){200==e.status?((0,p.Z)(S("H\u1ee7y v\xe9 xe th\xe0nh c\xf4ng!!!")),N(!0)):window.alert(S("\u0110\xe3 x\u1ea3y ra l\u1ed7i!!!"))}))}))},F=[{name:(0,y.jsx)("div",{children:S("Ng\u01b0\u1eddi \u0111\u1eb7t")}),selector:function(e){return e.user.hoTen},sortable:!0,wrap:!0,width:"15%"},{name:(0,y.jsx)("div",{children:S("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i")}),selector:function(e){return e.user.sdt},sortable:!0,wrap:!0},{name:(0,y.jsx)("div",{children:S("Ng\xe0y \u0111\u1eb7t")}),selector:function(e){return e.ngayDat},sortable:!0,wrap:!0},{name:(0,y.jsx)("div",{children:S("Ng\xe0y nh\u1eadn")}),selector:function(e){return e.ngayNhan},sortable:!0,wrap:!0},{name:(0,y.jsx)("div",{children:S("S\u1ed1 gh\u1ebf")}),selector:function(e){return e.soGhe},sortable:!0,wrap:!0},{name:(0,y.jsx)("div",{children:S("Lo\u1ea1i gh\u1ebf")}),selector:function(e){return e.tuyenXe.xe.loaiXe.tenLoaiXe},sortable:!0,wrap:!0},{name:(0,y.jsx)("div",{children:S("Tr\u1ea1ng th\xe1i")}),selector:function(e){return e.trangThai},sortable:!0,wrap:!0},{name:"",selector:function(e,t){return"INACTIVE"===e.trangThai?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{children:[(0,y.jsx)(a.Z,{onClick:function(){return function(e){var t=[e.soGhe],n=e.ngayNhan,r=e.hinhThucThanhToan,o="ACTIVE";if(t&&n&&r){var a={soGhe:t,ngayNhan:n,hinhThucThanhToan:r,trangThai:o};D(e.id,a)}else(0,x.Z)(S("\u0110\xe3 x\u1ea3y ra l\u1ed7i!!! Vui l\xf2ng x\xe1c nh\u1eadn l\u1ea1i!!!"))}(e)},style:{margin:"10px",backgroundColor:"#33FF99",color:"black"},children:S("X\xe1c nh\u1eadn")}),(0,y.jsx)(a.Z,{onClick:function(){return A(e.id)},style:{margin:"10px",backgroundColor:"#FF6600",color:"black"},children:S("H\u1ee7y")})]})}):"ACTIVE"===e.trangThai?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{children:[(0,y.jsx)(a.Z,{onClick:function(){return function(e){var t=[e.soGhe],n=e.ngayNhan,r=e.hinhThucThanhToan,o="COMPLETED";if(t&&n&&r){var a={soGhe:t,ngayNhan:n,hinhThucThanhToan:r,trangThai:o};D(e.id,a)}else(0,x.Z)(S("\u0110\xe3 x\u1ea3y ra l\u1ed7i!!! Vui l\xf2ng x\xe1c nh\u1eadn l\u1ea1i!!!"))}(e)},style:{margin:"10px",backgroundColor:"#33FF99",color:"black"},children:S("Ho\xe0n th\xe0nh")}),(0,y.jsx)(a.Z,{onClick:function(){return A(e.id)},style:{margin:"10px",backgroundColor:"#FF6600",color:"black"},children:S("H\u1ee7y")})]})}):void 0},wrap:!0,width:"20%"}],L={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:l.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:l.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:l.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:l.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:l.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:l.kG.default.divider.default}}},O=(0,o.useState)(!0),R=(0,r.Z)(O,2),H=R[0],P=R[1];(0,o.useEffect)((function(){var e=setTimeout((function(){P(!1)}),1e3);return function(){return clearTimeout(e)}}),[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.Ix,{}),(0,y.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,y.jsxs)("div",{style:{display:"flex"},children:[(0,y.jsx)("input",{id:"searchText",onKeyDown:function(e){var t;"Enter"===(t=e).key&&m(t.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:S("T\xecm ki\u1ebfm theo t\xean c\u1ee7a ng\u01b0\u1eddi \u0111\u1eb7t")}),(0,y.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,y.jsxs)(a.Z,{onClick:function(){m(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,y.jsx)(h.yD8,{}),S("T\xecm ki\u1ebfm")]})}),(0,y.jsx)(c.RDM,{style:{marginTop:"25px"},onClick:0,className:"add-btn"})]}),(0,y.jsxs)("div",{style:{padding:"20px",overflow:"auto"},children:[function(){if(C&&C.benXeDi&&C.benXeDen&&C.xe)return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[S("Qu\u1ea3n l\xfd v\xe9 xe c\u1ee7a tuy\u1ebfn xe"),":"]}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("b",{children:[S("B\u1ebfn xe \u0111i"),":"]})," ",C.benXeDi.tenBenXe," - ",(0,y.jsxs)("b",{children:[S("B\u1ebfn xe \u0111\u1ebfn"),":"]})," ",C.benXeDen.tenBenXe," - ",(0,y.jsxs)("b",{children:[S("Bi\u1ec3n s\u1ed1 xe"),":"]})," ",C.xe.bienSoXe," - ",(0,y.jsxs)("b",{children:[S("Ng\xe0y \u0111i"),":"]})," ",C.ngayDi," - ",(0,y.jsxs)("b",{children:[S("Gi\u1edd kh\u1edfi h\xe0nh"),":"]})," ",C.gioDi]})]})}(),(0,y.jsx)("h1",{style:{textAlign:"center"},children:S("Danh s\xe1ch c\xe1c v\xe9 xe")}),(0,y.jsx)(l.ZP,{columns:F,data:j.filter((function(e){return(0,s.RP)(e.user.hoTen.toLowerCase()).indexOf((0,s.RP)(b.toLowerCase()))>=0})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:L,progressPending:H})]})]})]})}}}]);
//# sourceMappingURL=3413.8c015c8a.chunk.js.map