"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[3318],{3318:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(9439),o=n(2791),a=n(3360),c=n(7692),u=n(9126),s=n(828),i=n(2741),l=n(5316),d=n(3063),p=(n(9743),n(2677),n(9140),n(1087),n(9230)),f=n(3204),h=n(184);var x=function(e){var t=e.showForm,n=e.setShowForm,r=e.add,o=(0,p.$G)().t,c=function(e){e.preventDefault();var t=document.getElementById("formTenLoaiXe").value,n=Number(document.getElementById("formSucChua").value);t&&n?n<1?(0,f.Z)("S\u1ee9c ch\u1ee9a c\u1ee7a xe ph\u1ea3i l\u1edbn h\u01a1n 0"):r({tenLoaiXe:t,sucChua:n}):(0,f.Z)()},u=function(){n(!1)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.Z,{show:t,onHide:u,children:[(0,h.jsx)(l.Z.Header,{closeButton:!0,children:(0,h.jsx)(l.Z.Title,{children:o("Th\xeam lo\u1ea1i xe")})}),(0,h.jsx)(l.Z.Body,{children:(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)(d.Z.Group,{className:"mb-3",controlId:"formTenLoaiXe",children:[(0,h.jsx)(d.Z.Label,{className:"text-center",children:o("T\xean lo\u1ea1i xe")}),(0,h.jsx)(d.Z.Control,{type:"text",placeholder:o("Nh\u1eadp t\xean lo\u1ea1i xe")})]}),(0,h.jsxs)(d.Z.Group,{className:"mb-3",controlId:"formSucChua",children:[(0,h.jsx)(d.Z.Label,{children:o("S\u1ee9c ch\u1ee9a")}),(0,h.jsx)(d.Z.Control,{type:"number",min:1,defaultValue:1,placeholder:o("Nh\u1eadp s\u1ee9c ch\u1ee9a c\u1ee7a xe")})]})]})}),(0,h.jsxs)(l.Z.Footer,{children:[(0,h.jsx)(a.Z,{variant:"secondary",onClick:u,children:o("\u0110\xf3ng")}),(0,h.jsx)(a.Z,{variant:"primary",type:"button",onClick:c,children:o("Th\xeam")})]})]})})};n(39);var m=function(e){var t=e.showForm,n=e.setShowForm,r=e.update,o=e.id,c=e.lx,u=function(){n(!1)},s=(0,p.$G)().t,i=function(e){e.preventDefault();var t=document.getElementById("formTenLoaiXe").value,n=Number(document.getElementById("formSucChua").value);if(t&&n)if(n<1)(0,f.Z)(s("S\u1ee9c ch\u1ee9a c\u1ee7a xe ph\u1ea3i l\u1edbn h\u01a1n 0"));else{var a={tenLoaiXe:t,sucChua:n};r(o,a),console.log(a)}else(0,f.Z)()};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.Z,{show:t,onHide:u,children:[(0,h.jsx)(l.Z.Header,{closeButton:!0,children:(0,h.jsx)(l.Z.Title,{children:s("C\u1eadp nh\u1eadt th\xf4ng tin lo\u1ea1i xe")})}),(0,h.jsx)(l.Z.Body,{children:(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)(d.Z.Group,{className:"mb-3",controlId:"formTenLoaiXe",children:[(0,h.jsx)(d.Z.Label,{className:"text-center",children:s("T\xean lo\u1ea1i xe")}),(0,h.jsx)(d.Z.Control,{type:"text",placeholder:s("Nh\u1eadp t\xean lo\u1ea1i xe"),defaultValue:c.tenLoaiXe})]}),(0,h.jsxs)(d.Z.Group,{className:"mb-3",controlId:"formSucChua",children:[(0,h.jsx)(d.Z.Label,{children:s("S\u1ee9c ch\u1ee9a")}),(0,h.jsx)(d.Z.Control,{type:"number",min:1,defaultValue:c.sucChua,placeholder:s("Nh\u1eadp s\u1ee9c ch\u1ee9a c\u1ee7a xe")})]})]})}),(0,h.jsxs)(l.Z.Footer,{children:[(0,h.jsx)(a.Z,{variant:"secondary",onClick:u,children:s("\u0110\xf3ng")}),(0,h.jsx)(a.Z,{variant:"primary",type:"button",onClick:i,children:s("C\u1eadp nh\u1eadt")})]})]})})},v=n(3513),Z=n(6053),g=n(9085),b=n(2062),y=n.n(b);var j=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],l=t[1],d=(0,o.useState)(!1),f=(0,r.Z)(d,2),b=f[0],j=f[1],k=(0,o.useState)(!1),w=(0,r.Z)(k,2),C=w[0],I=w[1],X=(0,o.useState)(""),T=(0,r.Z)(X,2),B=T[0],L=T[1],G=(0,i.Z)(),S=G.loaiXe,N=G.addLoaiXe,E=G.updateLoaiXe,F=G.deleteLoaiXe,H=(0,p.$G)().t,D=[{name:(0,h.jsx)("div",{children:H("T\xean lo\u1ea1i xe")}),selector:function(e){return e.tenLoaiXe},sortable:!0,wrap:!0},{name:(0,h.jsx)("div",{children:H("S\u1ee9c ch\u1ee9a")}),selector:function(e){return e.sucChua},sortable:!0,wrap:!0},{name:"",selector:function(e,t){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{style:{margin:"10px"},children:[(0,h.jsx)(c.Hlf,{className:"edit-btn",onClick:function(){return function(e){L(e),I(!0)}(e)}}),(0,h.jsx)(s._51,{className:"delete-btn",onClick:function(){return t=e.id,void y()({title:H("B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a?"),text:"",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&F(t)}));var t}})]})})},wrap:!0}],O={rows:{style:{fontSize:"16px",borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:v.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:v.kG.default.divider.default}},headCells:{style:{fontSize:"16px",borderRightStyle:"solid",borderRightWidth:"1px",borderTopColor:v.kG.default.divider.default,borderTopStyle:"solid",borderTopWidth:"1px",borderRightColor:v.kG.default.divider.default,borderLeftStyle:"solid",borderLeftWidth:"1px",borderLeftColor:v.kG.default.divider.default}},cells:{style:{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:v.kG.default.divider.default}}},R=(0,o.useState)(!0),A=(0,r.Z)(R,2),U=A[0],_=A[1];return(0,o.useEffect)((function(){var e=setTimeout((function(){_(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Ix,{}),(0,h.jsx)(x,{showForm:b,setShowForm:j,add:N}),function(){if(B)return(0,h.jsx)(m,{showForm:C,setShowForm:I,update:E,id:B.id,lx:B},B.id)}(),(0,h.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,h.jsx)("h2",{children:H("Qu\u1ea3n l\xfd lo\u1ea1i xe")})}),(0,h.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("input",{id:"searchText",onKeyDown:function(e){var t;"Enter"===(t=e).key&&l(t.target.value)},className:"form-control",style:{marginTop:"20px",marginBottom:"20px",marginLeft:"25px",width:"30%"},type:"search",placeholder:H("T\xecm ki\u1ebfm theo t\xean lo\u1ea1i xe")}),(0,h.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px",marginRight:"10px"},children:(0,h.jsxs)(a.Z,{onClick:function(){l(document.getElementById("searchText").value)},variant:"outline-success",children:[(0,h.jsx)(Z.yD8,{}),H("T\xecm ki\u1ebfm")]})}),(0,h.jsx)(u.RDM,{style:{marginTop:"25px"},onClick:function(){return j(!0)},className:"add-btn"})]}),(0,h.jsx)("div",{style:{padding:"20px",overflow:"auto"},children:(0,h.jsx)(v.ZP,{columns:D,data:S.filter((function(e){return e.tenLoaiXe.toLowerCase().indexOf(n.toLowerCase())>=0})),pagination:!0,highlightOnHover:!0,pointerOnHover:!0,striped:!0,responsive:!0,customStyles:O,progressPending:U})})]})]})}},7748:function(e,t,n){var r=n(9085),o=n(6906);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.jO;r.Am.fail(e,{position:r.Am.POSITION.TOP_RIGHT})}},39:function(e,t,n){n.d(t,{J6:function(){return L},Jd:function(){return T},QY:function(){return y},RP:function(){return S},Sy:function(){return X},Tj:function(){return j},UU:function(){return B},X_:function(){return b},Xu:function(){return G},kV:function(){return w},mn:function(){return I},p5:function(){return k},rt:function(){return g},yl:function(){return C}});var r=n(4165),o=n(5861),a=n(7762),c=n(8429),u=c.httpGetBenXeById,s=(c.httpGetLoaiXeById,c.httpGetBenXeUser),i=(c.httpGetNhaXeById,c.httpGetAllDanhGiaByIdNhaXe),l=c.httpGetTuyenXeFindByAddress,d=c.httpGetAllVeXeByTuyenXeId,p=c.httpGetTuyenXeById,f=c.httpGetNhaXeUserById,h=c.httpGetNhaXeUserAll,x=c.httpGetVeXeUserById,m=c.httpGetTuyenXeFindByAddressDate,v=(c.httpGetSaoTrungBinhNhaXe,c.httpGetHangHoaByUserId),Z=c.httpGetHangHoaByTuyenXeId,g=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){var c=r.value;e.options[e.options.length]=new Option(c.Name,c.Id)}}catch(u){o.e(u)}finally{o.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),o=(0,a.Z)(r[0].Districts);try{for(o.s();!(t=o.n()).done;){var c=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(c.Name,c.Id)}}catch(u){o.e(u)}finally{o.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var o=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var c,s=o[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,i=(0,a.Z)(s);try{for(i.s();!(c=i.n()).done;){var l=c.value;t.options[t.options.length]=new Option(l.Name,l.Id)}}catch(u){i.e(u)}finally{i.f()}}}}}(n)}))},b=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,n);case 2:if(200!=(o=e.sent).status){e.next=5;break}return e.abrupt("return",o.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,m(t,n);case 3:if(o=e.sent,console.log(o),200!=o.status){e.next=8;break}return console.log(o.object),e.abrupt("return",o.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(t,n);case 2:if(o=e.sent,console.log(o),200!=o.status){e.next=7;break}return console.log(o.object),e.abrupt("return",o.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function S(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}},2741:function(e,t,n){var r=n(4165),o=n(5861),a=n(9439),c=n(2791),u=n(4047),s=n(8429),i=n(3204),l=n(7899),d=n(4586),p=n(7748);t.Z=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],f=t[1],h=(0,c.useContext)(u.I).token,x=(0,c.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.httpGetLoaiXe)(h);case 2:200==(t=e.sent).status?f(t.object):f([]);case 4:case"end":return e.stop()}}),e)}))),[]);(0,c.useEffect)((function(){x()}),[x]);var m=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.tenLoaiXe&&t.sucChua){e.next=4;break}(0,i.Z)(),e.next=12;break;case 4:return e.prev=4,e.next=7,(0,s.httpPostLoaiXe)(t,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,l.Z)():(0,d.Z)(e.message)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),(0,p.Z)();case 12:x();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),[x]),v=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.tenLoaiXe&&n.sucChua){e.next=4;break}(0,i.Z)(),e.next=12;break;case 4:return e.prev=4,e.next=7,(0,s.httpPutLoaiXe)(t,n,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,l.Z)():(0,d.Z)(e.message)}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),(0,p.Z)();case 12:x();case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n){return e.apply(this,arguments)}}(),[x]),Z=(0,c.useCallback)(function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.httpDeleteLoaiXe)(t,h).then((function(e){return e.json()})).then((function(e){200==e.status?(0,l.Z)():(0,d.Z)(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,p.Z)();case 8:x();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[x]);return{loaiXe:n,addLoaiXe:m,updateLoaiXe:v,deleteLoaiXe:Z}}}}]);
//# sourceMappingURL=3318.ee5bc0f0.chunk.js.map