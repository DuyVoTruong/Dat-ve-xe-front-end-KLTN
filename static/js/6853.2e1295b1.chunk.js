"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[6853],{39:function(e,t,n){n.d(t,{J6:function(){return B},Jd:function(){return D},QY:function(){return Z},RP:function(){return C},Sy:function(){return X},Tj:function(){return j},UU:function(){return G},X_:function(){return b},Xu:function(){return T},kV:function(){return I},mn:function(){return k},p5:function(){return N},rt:function(){return y},yl:function(){return w}});var r=n(4165),a=n(5861),o=n(7762),s=n(8429),c=s.httpGetBenXeById,u=(s.httpGetLoaiXeById,s.httpGetBenXeUser),i=(s.httpGetNhaXeById,s.httpGetAllDanhGiaByIdNhaXe),l=s.httpGetTuyenXeFindByAddress,h=s.httpGetAllVeXeByTuyenXeId,d=s.httpGetTuyenXeById,f=s.httpGetNhaXeUserById,p=s.httpGetNhaXeUserAll,g=s.httpGetVeXeUserById,m=s.httpGetTuyenXeFindByAddressDate,x=(s.httpGetSaoTrungBinhNhaXe,s.httpGetHangHoaByUserId),v=s.httpGetHangHoaByTuyenXeId,y=function(){var e=document.getElementById("city"),t=(document.getElementById("district"),document.getElementById("ward"));fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(n){!function(n){if(e.options.length<=63){var r,a=(0,o.Z)(n);try{for(a.s();!(r=a.n()).done;){var s=r.value;e.options[e.options.length]=new Option(s.Name,s.Id)}}catch(c){a.e(c)}finally{a.f()}e.onchange=function(){var e=this;if(document.getElementById("district").length=1,document.getElementById("ward").length=1,""!=this.value){var t,r=n.filter((function(t){return t.Id===e.value})),a=(0,o.Z)(r[0].Districts);try{for(a.s();!(t=a.n()).done;){var s=t.value;document.getElementById("district").options[document.getElementById("district").options.length]=new Option(s.Name,s.Id)}}catch(c){a.e(c)}finally{a.f()}}},document.getElementById("district").onchange=function(){var r=this;document.getElementById("ward").length=1;var a=n.filter((function(t){return t.Id===e.value}));if(""!=this.value){var s,u=a[0].Districts.filter((function(e){return e.Id===r.value}))[0].Wards,i=(0,o.Z)(u);try{for(i.s();!(s=i.n()).done;){var l=s.value;t.options[t.options.length]=new Option(l.Name,l.Id)}}catch(c){i.e(c)}finally{i.f()}}}}}(n)}))},b=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:if(200!=(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.object);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:if(200!=(t=e.sent).status){e.next=5;break}return e.abrupt("return",t.object);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t,n);case 2:if(200!=(a=e.sent).status){e.next=5;break}return e.abrupt("return",a.object);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:if(n=e.sent,console.log(n),200!=n.status){e.next=7;break}return console.log(n.object),e.abrupt("return",n.object);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,m(t,n);case 3:if(a=e.sent,console.log(a),200!=a.status){e.next=8;break}return console.log(a.object),e.abrupt("return",a.object);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:if(a=e.sent,console.log(a),200!=a.status){e.next=7;break}return console.log(a.object),e.abrupt("return",a.object);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function C(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")).replace(/  +/g," ")}},622:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),a=n(2791),o=n(7022),s=n(9743),c=n(2677),u=n(9140),i=n(3063),l=n(3360),h=n(7689),d=n(5642),f=n(8429),p=n(39),g=n(9085),m=(n(5462),n(9230)),x=n(184);var v=function(){var e=(0,a.useContext)(d.I).token,t=(0,a.useContext)(d.I).account,n=(0,h.UO)("id").id,v=(0,a.useState)([]),y=(0,r.Z)(v,2),b=y[0],Z=y[1],j=(0,a.useState)([]),N=(0,r.Z)(j,2),I=(N[0],N[1]),w=(0,a.useState)("ONLINE"),k=(0,r.Z)(w,2),X=k[0],D=k[1],G=new Date,B=(0,m.$G)().t,T=G.getFullYear()+"-"+(G.getMonth()+1)+"-"+G.getDate(),C=new Date;C.setDate(G.getDate()+1);var E=C.getFullYear()+"-"+(C.getMonth()+1)+"-"+C.getDate(),O="",L="",F="",U="",A=(0,h.s0)(),M=function(e){var t;if(e.getDate()<10||e.getMonth()<9){var n=e.getDate(),r=e.getMonth()+1;n<10&&(n="0"+n),r<10&&(r="0"+r),t=e.getFullYear()+"-"+r+"-"+n}else t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return t};return(0,a.useEffect)((function(){window.scrollTo(0,0),(0,p.kV)(n,e).then((function(e){e&&I(e)})),(0,p.yl)(n,e).then((function(e){e&&(Z(e),console.log(e))}))}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.Ix,{}),(0,x.jsx)(o.Z,{children:(0,x.jsx)("div",{children:(0,x.jsx)(s.Z,{className:"d-flex justify-content-center align-items-center",style:{marginBottom:"200px",marginTop:"100px"},children:(0,x.jsxs)(c.Z,{md:8,lg:6,xs:12,children:[(0,x.jsx)("div",{style:{border:"solid 10px blue",background:"blue"}}),(0,x.jsx)(u.Z,{className:"shadow",children:(0,x.jsx)(u.Z.Body,{children:(0,x.jsxs)("div",{className:"mb-3 mt-md-4",children:[(0,x.jsx)("p",{className:" mb-5",children:B("vuilongchonhinhthucthanhtoanvasoghebenduoi")}),(0,x.jsx)("div",{className:"mb-3",children:(0,x.jsxs)(i.Z,{children:[(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formUsername",children:[(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("tentaikhoan")}),(0,x.jsx)(i.Z.Control,{type:"text",value:t.username,readOnly:!0})]}),(b.benXeDi&&(L=b.benXeDi.tenBenXe),b.benXeDen&&(O=b.benXeDen.tenBenXe),b.xe&&(b.xe.nhaXe&&(F=b.xe.nhaXe.tenNhaXe,U=b.xe.nhaXe.sdt),b.xe.loaiXe&&b.xe.loaiXe.sucChua),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formTuyenXe",children:[(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("tuyenxe")}),(0,x.jsx)(i.Z.Control,{type:"text",value:L+" => "+O,readOnly:!0})]})})),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formNhaXe",children:[(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("nhaxe")}),(0,x.jsx)(i.Z.Control,{type:"text",value:F+" - S\u0110T: "+U,readOnly:!0})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formGioDi",children:[(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("giokhoihanh")}),(0,x.jsx)(i.Z.Control,{type:"time",value:b.gioDi,readOnly:!0})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formNgayDi",children:[(0,x.jsxs)(i.Z.Label,{className:"text-center",children:[B("ngaydi")," (yy-mm-dd)"]}),(0,x.jsx)(i.Z.Control,{type:"datetime",value:b.ngayDi,readOnly:!0})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formNgayDat",children:[(0,x.jsxs)(i.Z.Label,{className:"text-center",children:[B("ngaydat")," (yy-mm-dd)"]}),(0,x.jsx)(i.Z.Control,{type:"datetime",value:T,readOnly:!0})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formNgayNhan",children:[(0,x.jsxs)(i.Z.Label,{className:"text-center",children:[B("ngaynhan")," (yy-mm-dd)"]}),(0,x.jsx)(i.Z.Control,{type:"datetime",value:E,readOnly:!0})]}),(0,x.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formHinhThucThanhToan",children:[(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("hinhthucthanhtoan")}),(0,x.jsxs)(i.Z.Select,{onChange:function(e){return D(e.target.value)},children:[(0,x.jsx)("option",{defaultChecked:!0,value:"ONLINE",children:"online"},"online"),(0,x.jsx)("option",{value:"OFFLINE",children:"offline"},"offline")]})]}),(0,x.jsx)(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:(0,x.jsx)(i.Z.Label,{className:"text-center",children:B("chonsoghe")})}),(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"checkbox"}),(0,x.jsxs)("span",{class:"label",children:["Check me ",(0,x.jsx)("img",{class:"seat",src:"https://i7.uihere.com/icons/572/337/91/seat-border-1bec7cb26b10f7ff80b54393d015d762.svg"})]})]}),(0,x.jsx)("div",{className:"d-grid",children:(0,x.jsx)(l.Z,{variant:"primary",type:"button",onClick:function(){for(var r=document.getElementsByName("Group1"),a=[],o=0;o<r.length;o++)!0===r[o].checked&&a.push(r[o].value);var s=t.id;if(E=function(){var e,t=new Date;if(t.setDate(G.getDate()+1),t.getDate()<10||t.getMonth()<9){var n=t.getDate(),r=t.getMonth()+1;n<10&&(n="0"+n),r<10&&(r="0"+r),e=t.getFullYear()+"-"+r+"-"+n}else e=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();return e}(),T&&E&&X&&n&&0!=a.length)if(null===s)g.Am.info(B("banphaidangnhapdedatve"));else{var c={soGhe:a,ngayDat:M(G),ngayNhan:E,hinhThucThanhToan:X,tuyenXeId:n,userId:s};console.log(c),(0,f.httpPostVeXe)(c,e).then((function(e){return e.json()})).then((function(e){200==e.status?(g.Am.success(B("bandadatvethanhcong")),setTimeout((function(){A("/lich-su-dat-ve")}),3e3)):window.alert(e.message)}))}else g.Am.info(B("vuilongdiendayduthongtin"))},children:B("datve")})})]})})]})})})]})})})})]})}}}]);
//# sourceMappingURL=6853.2e1295b1.chunk.js.map