"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[5155],{7748:function(e,t,n){var r=n(9085),o=n(6906);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.jO;r.Am.fail(e,{position:r.Am.POSITION.TOP_RIGHT})}},39:function(e,t,n){n.d(t,{J6:function(){return C},Jd:function(){return B},QY:function(){return Z},RP:function(){return E},Sy:function(){return I},Tj:function(){return k},UU:function(){return G},X_:function(){return m},Xu:function(){return S},kV:function(){return j},mn:function(){return X},p5:function(){return w},rt:function(){return y},yl:function(){return T}});var r=n(4165),o=n(5861),a=n(7762),u=n(8429),c=u.httpGetBenXeById,i=(u.httpGetLoaiXeById,u.httpGetBenXeUser),s=(u.httpGetNhaXeById,u.httpGetAllDanhGiaByIdNhaXe),l=u.httpGetTuyenXeFindByAddress,f=u.httpGetAllVeXeByTuyenXeId,p=u.httpGetTuyenXeById,d=u.httpGetNhaXeUserById,h=u.httpGetNhaXeUserAll,x=u.httpGetVeXeUserById,v=u.httpGetTuyenXeFindByAddressDate,b=(u.httpGetSaoTrungBinhNhaXe,u.httpGetHangHoaByUserId),g=u.httpGetHangHoaByTuyenXeId,y=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){var u=r.value;e.options[e.options.length]=new Option(u.Name,u.Id)}}catch(c){o.e(c)}finally{o.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),o=(0,a.Z)(r[0].Districts);try{for(o.s();!(t=o.n()).done;){var u=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(u.Name,u.Id)}}catch(c){o.e(c)}finally{o.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var o=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var u,i=o[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,s=(0,a.Z)(i);try{for(s.s();!(u=s.n()).done;){var l=u.value;t.options[t.options.length]=new Option(l.Name,l.Id)}}catch(c){s.e(c)}finally{s.f()}}}}}(n)}))},m=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t,n);case 2:if(200!=(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v(t,n);case 3:if(o=e.sent,console.log(o),200!=o.status){e.next=8;break}return console.log(o.object),e.abrupt("return",o.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function E(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}},8212:function(e,t,n){var r=n(4165),o=n(5861),a=n(9439),u=n(2791),c=n(1469),i=n(8429),s=n(7899),l=n(4586),f=n(7748),p=n(9230);t.Z=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],d=t[1],h=(0,u.useContext)(c.I).token,x=(0,u.useContext)(c.I).account,v=(0,p.$G)().t,b=(0,u.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t,n,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=15;break}if("USER"!=x.role){e.next=8;break}return e.next=4,(0,i.httpGetTuyenXe)();case 4:200==(t=e.sent).status?d(t.object):d([]),e.next=13;break;case 8:if("ADMIN"!=x.role){e.next=13;break}return e.next=11,(0,i.httpGetTuyenXeAdmin)(h);case 11:200==(n=e.sent).status?d(n.object):d([]);case 13:e.next=19;break;case 15:return e.next=17,(0,i.httpGetTuyenXe)();case 17:200==(o=e.sent).status?d(o.object):d([]);case 19:case"end":return e.stop()}}),e)}))),[]);(0,u.useEffect)((function(){b()}),[b]);var g=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpPostTuyenXe)(t,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)(v("Th\xe0nh c\xf4ng")):(0,l.Z)(v("Th\u1ea5t b\u1ea1i"))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,f.Z)(v("Th\u1ea5t b\u1ea1i"));case 8:b();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[b]),y=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpPutTuyenXe)(t,n,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)(v("Th\xe0nh c\xf4ng")):(0,l.Z)(v("Th\u1ea5t b\u1ea1i"))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,f.Z)(v("Th\u1ea5t b\u1ea1i"));case 8:b();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),[b]),m=(0,u.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.httpDeleteTuyenXe)(t,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,s.Z)(v("Th\xe0nh c\xf4ng")):(0,l.Z)(v("Th\u1ea5t b\u1ea1i"))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,f.Z)(v("Th\u1ea5t b\u1ea1i"));case 8:b();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[b]);return{tuyenXe:n,addTuyenXe:g,updateTuyenXe:y,deleteTuyenXe:m}}},5155:function(e,t,n){n.r(t);var r=n(9439),o=n(2791),a=n(3360),u=n(7689),c=n(1469),i=n(8212),s=n(3513),l=n(6053),f=n(39),p=n(9230),d=n(9085),h=n(184);t.default=function(){var e=(0,o.useContext)(c.I).account,t=(0,i.Z)().tuyenXe,n=(0,o.useState)(""),x=(0,r.Z)(n,2),v=x[0],b=x[1],g=(0,p.$G)().t,y=(0,u.s0)(),m=[{name:(0,h.jsx)("div",{children:g("B\u1ebfn xe \u0111i")}),selector:function(e){return e.benXeDi.tenBenXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:g("B\u1ebfn xe \u0111\u1ebfn")}),selector:function(e){return e.benXeDen.tenBenXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:g("Bi\u1ec3n s\u1ed1 xe")}),selector:function(e){return e.xe.bienSoXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:g("Ng\xe0y \u0111i")}),selector:function(e){return e.ngayDi},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:g("Gi\u1edd kh\u1edfi h\xe0nh")}),selector:function(e){return e.gioDi},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:g("Th\u1eddi gian h\xe0nh tr\xecnh")}),selector:function(e){return e.thoiGianHanhTrinh},sortable:!0,wrap:!0},{name:"",selector:function(e,t){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{style:{margin:"10px"},children:(0,h.jsx)(a.Z,{onClick:function(){y("/nha-xe/ve-xe/quan-ly/".concat(e.id))},style:{margin:"10px",backgroundColor:"#00FF99",color:"black"},children:g("Qu\u1ea3n l\xfd v\xe9 xe")})})})},wrap:!0}],Z={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:s.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:s.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:s.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:s.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:s.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:s.kG.default.divider.default}}},k=(0,o.useState)(!0),w=(0,r.Z)(k,2),j=w[0],T=w[1];(0,o.useEffect)((function(){var e=setTimeout((function(){T(!1)}),1e3);return function(){return clearTimeout(e)}}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Ix,{}),(0,h.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,h.jsx)("h2",{children:g("Qu\u1ea3n l\xfd v\xe9 xe")})}),(0,h.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("input",{id:"searchText",onKeyDown:function(e){var t;"Enter"===(t=e).key&&b(t.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:g("T\xecm ki\u1ebfm theo t\xean b\u1ebfn xe \u0111i")}),(0,h.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,h.jsxs)(a.Z,{onClick:function(){b(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,h.jsx)(l.yD8,{}),g("T\xecm ki\u1ebfm")]})})]}),(0,h.jsx)("div",{style:{padding:"20px",overflow:"auto"},children:(0,h.jsx)(s.ZP,{columns:m,data:t.filter((function(e){return(0,f.RP)(e.benXeDi.tenBenXe.toLowerCase()).indexOf((0,f.RP)(v.toLowerCase()))>=0})).filter((function(t){return t.xe.nhaXe.taiKhoan.username===e.username})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:Z,progressPending:j})})]})]})}}}]);
//# sourceMappingURL=5155.a76e4c80.chunk.js.map