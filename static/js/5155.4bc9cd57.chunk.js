"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[5155],{7748:function(e,t,n){var r=n(9085),o=n(6906);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.jO;r.Am.fail(e,{position:r.Am.POSITION.TOP_RIGHT})}},39:function(e,t,n){n.d(t,{J6:function(){return C},Jd:function(){return I},QY:function(){return Z},RP:function(){return E},Sy:function(){return X},Tj:function(){return k},UU:function(){return G},X_:function(){return m},Xu:function(){return S},kV:function(){return j},mn:function(){return B},p5:function(){return w},rt:function(){return y},yl:function(){return T}});var r=n(4165),o=n(5861),a=n(7762),u=n(8429),c=u.httpGetBenXeById,s=(u.httpGetLoaiXeById,u.httpGetBenXeUser),i=(u.httpGetNhaXeById,u.httpGetAllDanhGiaByIdNhaXe),l=u.httpGetTuyenXeFindByAddress,p=u.httpGetAllVeXeByTuyenXeId,f=u.httpGetTuyenXeById,d=u.httpGetNhaXeUserById,h=u.httpGetNhaXeUserAll,v=u.httpGetVeXeUserById,x=u.httpGetTuyenXeFindByAddressDate,g=(u.httpGetSaoTrungBinhNhaXe,u.httpGetHangHoaByUserId),b=u.httpGetHangHoaByTuyenXeId,y=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){var u=r.value;e.options[e.options.length]=new Option(u.Name,u.Id)}}catch(c){o.e(c)}finally{o.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),o=(0,a.Z)(r[0].Districts);try{for(o.s();!(t=o.n()).done;){var u=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(u.Name,u.Id)}}catch(c){o.e(c)}finally{o.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var o=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var u,s=o[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,i=(0,a.Z)(s);try{for(i.s();!(u=i.n()).done;){var l=u.value;t.options[t.options.length]=new Option(l.Name,l.Id)}}catch(c){i.e(c)}finally{i.f()}}}}}(n)}))},m=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,n);case 2:if(200!=(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x(t,n);case 3:if(o=e.sent,console.log(o),200!=o.status){e.next=8;break}return console.log(o.object),e.abrupt("return",o.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function E(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}},8212:function(e,t,n){var r=n(4165),o=n(5861),a=n(9439),u=n(2791),c=n(4047),s=n(8429),i=n(7899),l=n(4586),p=n(7748);t.Z=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],f=t[1],d=(0,u.useContext)(c.I).token,h=(0,u.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.httpGetTuyenXe)();case 2:200==(t=e.sent).status?f(t.object):f([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,u.useEffect)((function(){h()}),[h]);var v=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPostTuyenXe)(t,d).then((function(e){return e.json()})).then((function(e){200==e.status?(0,i.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,p.Z)();case 8:h();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[h]),x=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpPutTuyenXe)(t,n,d).then((function(e){return e.json()})).then((function(e){200==e.status?(0,i.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,p.Z)();case 8:h();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),[h]),g=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpDeleteTuyenXe)(t,d).then((function(e){return e.json()})).then((function(e){200==e.status?(0,i.Z)():(0,l.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,p.Z)();case 8:h();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[h]);return{tuyenXe:n,addTuyenXe:v,updateTuyenXe:x,deleteTuyenXe:g}}},5155:function(e,t,n){n.r(t);var r=n(9439),o=n(2791),a=n(3360),u=n(7689),c=n(4047),s=n(8212),i=n(3513),l=n(6053),p=n(39),f=n(9230),d=n(9085),h=n(184);t.default=function(){var e=(0,o.useContext)(c.I).account,t=(0,s.Z)().tuyenXe,n=(0,o.useState)(""),v=(0,r.Z)(n,2),x=v[0],g=v[1],b=(0,f.$G)().t,y=(0,u.s0)(),m=[{name:(0,h.jsx)("div",{children:b("B\u1ebfn xe \u0111i")}),selector:function(e){return e.benXeDi.tenBenXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:b("B\u1ebfn xe \u0111\u1ebfn")}),selector:function(e){return e.benXeDen.tenBenXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:b("Bi\u1ec3n s\u1ed1 xe")}),selector:function(e){return e.xe.bienSoXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:b("Ng\xe0y \u0111i")}),selector:function(e){return e.ngayDi},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:b("Gi\u1edd kh\u1edfi h\xe0nh")}),selector:function(e){return e.gioDi},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:b("Th\u1eddi gian h\xe0nh tr\xecnh")}),selector:function(e){return e.thoiGianHanhTrinh},sortable:!0,wrap:!0},{name:"",selector:function(e,t){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{style:{margin:"10px"},children:(0,h.jsx)(a.Z,{onClick:function(){y("/nha-xe/ve-xe/quan-ly/".concat(e.id))},style:{margin:"10px",backgroundColor:"#00FF99",color:"black"},children:b("Qu\u1ea3n l\xfd v\xe9 xe")})})})},wrap:!0}],Z={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:i.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:i.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:i.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:i.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:i.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:i.kG.default.divider.default}}},k=(0,o.useState)(!0),w=(0,r.Z)(k,2),j=w[0],T=w[1];(0,o.useEffect)((function(){var e=setTimeout((function(){T(!1)}),1e3);return function(){return clearTimeout(e)}}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Ix,{}),(0,h.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,h.jsx)("h2",{children:b("Qu\u1ea3n l\xfd v\xe9 xe")})}),(0,h.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("input",{id:"searchText",onKeyDown:function(e){var t;"Enter"===(t=e).key&&g(t.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:b("T\xecm ki\u1ebfm theo t\xean b\u1ebfn xe \u0111i")}),(0,h.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,h.jsxs)(a.Z,{onClick:function(){g(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,h.jsx)(l.yD8,{}),b("T\xecm ki\u1ebfm")]})})]}),(0,h.jsx)("div",{style:{padding:"20px",overflow:"auto"},children:(0,h.jsx)(i.ZP,{columns:m,data:t.filter((function(e){return(0,p.RP)(e.benXeDi.tenBenXe.toLowerCase()).indexOf((0,p.RP)(x.toLowerCase()))>=0})).filter((function(t){return t.xe.nhaXe.taiKhoan.username===e.username})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:Z,progressPending:j})})]})]})}}}]);
//# sourceMappingURL=5155.4bc9cd57.chunk.js.map