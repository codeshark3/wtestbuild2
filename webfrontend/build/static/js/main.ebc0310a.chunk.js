(this.webpackJsonpwebfrontend=this.webpackJsonpwebfrontend||[]).push([[0],{219:function(e,t){},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},264:function(e,t,n){},300:function(e,t){},302:function(e,t){},312:function(e,t){},314:function(e,t){},341:function(e,t){},343:function(e,t){},344:function(e,t){},349:function(e,t){},351:function(e,t){},357:function(e,t){},359:function(e,t){},378:function(e,t){},390:function(e,t){},393:function(e,t){},399:function(e,t){},400:function(e,t){},402:function(e,t,n){},403:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(39),r=n.n(s),c=n(10),i=n(81),o=n(224),l=n(223),d=n(2),j="TEST_LIST_REQUEST",u="TEST_LIST_SUCCESS",b="TEST_LIST_FAIL",h="TEST_DETAILS_REQUEST",p="TEST_DETAILS_SUCCESS",O="TEST_DETAILS_FAIL",x="COUNT_REQUEST",f="COUNT_SUCCESS",m="COUNT_FAIL",g="CHARTS_REQUEST",v="CHARTS_SUCCESS",y="CHARTS_FAIL",S="USER_LOGIN_REQUEST",E="USER_LOGIN_SUCCESS",I="USER_LOGIN_FAIL ",L="USER_LOGOUT",C="USER_REGISTER_REQUEST",w="USER_REGISTER_SUCCESS",T="USER_REGISTER_FAIL ",_="USER_REGISTER_RESET ",N="USER_DETAILS_REQUEST",R="USER_DETAILS_SUCCESS",k="USER_DETAILS_FAIL",A="USER_DETAILS_RESET",U="USER_UPDATE_PROFILE_REQUEST",P="USER_UPDATE_PROFILE_SUCCESS",D="USER_UPDATE_PROFILE_FAIL",z="USER_UPDATE_PROFILE_RESET",G="USER_LIST_REQUEST",F="USER_LIST_SUCCESS",H="USER_LIST_FAIL",W="USER_LIST_RESET",B="USER_DELETE_REQUEST",M="USER_DELETE_SUCCESS",Q="USER_DELETE_FAIL",q="USER_UPDATE_REQUEST",J="USER_UPDATE_SUCCESS",K="USER_UPDATE_FAIL",V="USER_UPDATE_RESET",Y=Object(i.combineReducers)({testList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tests:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0,tests:[]};case u:return{loading:!1,tests:t.payload.tests,page:t.payload.page,pages:t.payload.pages};case b:return{loading:!1,error:t.payload};default:return e}},testDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{test:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)({loading:!0},e);case p:return{loading:!1,test:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},countList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0,count:[]};case f:return{loading:!1,count:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},chartValues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{charts:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0,charts:{}};case v:return{loading:!1,charts:t.payload};case y:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case E:return{loading:!1,userInfo:t.payload};case I:return{loading:!1,error:t.payload};case L:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case w:return{loading:!1,successRegister:!0};case T:return{loading:!1,error:t.payload};case _:return{successRegister:!1};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case R:return{loading:!1,user:t.payload};case k:return{loading:!1,error:t.payload};case A:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{loading:!0};case P:return{loading:!1,success:!0,userInfo:t.payload};case D:return{loading:!1,error:t.payload};case z:return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{loading:!0};case F:return{loading:!1,users:t.payload};case H:return{loading:!1,error:t.payload};case W:return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{loading:!0};case M:return{loading:!1,success:!0};case Q:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case J:return{loading:!1,success:!0};case K:return{loading:!1,error:t.payload};case V:return{user:{}};default:return e}}}),X={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},Z=[o.a],$=Object(i.createStore)(Y,X,Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,Z))),ee=(n(242),n(243),n(36)),te=n(18),ne=(n(244),n(410)),ae=n(418),se=n(419),re=n(411),ce=n(227),ie=n(16),oe=n.n(ie),le=n(29),de=n(30),je=n.n(de),ue=(n(264),n(416)),be=n(1),he=function(e){var t=e.title,n=e.tests,a=e.ptest,s=e.ntest;return Object(be.jsx)(ue.a,{bg:"var(--main-color)",text:"dark",children:Object(be.jsxs)(ue.a.Body,{children:[Object(be.jsxs)(ue.a.Title,{children:[" ",t," "]}),Object(be.jsxs)("ul",{className:"list-group",children:[Object(be.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Number of Tests",Object(be.jsx)("span",{className:"badge bg-primary rounded-pill",children:n})]}),Object(be.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Positive Results",Object(be.jsx)("span",{className:"badge bg-primary rounded-pill",children:a})]}),Object(be.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["Negative Results",Object(be.jsx)("span",{className:"badge bg-primary rounded-pill",children:s})]})]})]})})},pe=n(409),Oe=function(){return Object(be.jsx)(pe.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object(be.jsx)("span",{className:"sr-only",children:"Loading..."})})},xe=n(417);var fe=function(e){var t=e.variant,n=e.children;return Object(be.jsx)("div",{children:Object(be.jsx)(xe.a,{variant:t,children:n})})},me=(n(266),n(82)),ge=function(e){var t=e.history,n=Object(c.b)(),s=Object(c.c)((function(e){return e.userLogin})).userInfo,r=Object(c.c)((function(e){return e.countList})),i=r.error,o=r.loading,l=r.count,d=Object(c.c)((function(e){return e.chartValues})).charts;return Object(a.useEffect)((function(){s?(n(function(){var e=Object(le.a)(oe.a.mark((function e(t,n){var a,s,r,c,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),a=n(),s=a.userLogin.userInfo,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s.token)}},e.next=6,je.a.get("/api/count/",r);case 6:c=e.sent,i=c.data,t({type:f,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:m,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),n(function(){var e=Object(le.a)(oe.a.mark((function e(t,n){var a,s,r,c,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:g}),a=n(),s=a.userLogin.userInfo,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s.token)}},e.next=6,je.a.get("/api/charts/",r);case 6:c=e.sent,i=c.data,t({type:v,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:y,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())):t.push("/login")}),[n,t,s]),Object(be.jsx)("div",{children:o?Object(be.jsx)(Oe,{}):i?Object(be.jsx)(fe,{variant:"danger",children:i}):Object(be.jsxs)(ne.a,{fluid:!0,style:{paddingLeft:"0px !important"},children:[Object(be.jsx)("div",{sm:1,children:Object(be.jsxs)(ae.a,{defaultActiveKey:"oncho",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(be.jsx)(se.a,{eventKey:"oncho",title:"Onchocerciasis",children:Object(be.jsx)("div",{children:Object(be.jsx)(me.a,{data:{labels:d.labels,datasets:[{label:"Soil transmitted Helminths",data:d.values,backgroundColor:"#333366"}]},type:"bar",width:600,height:400,options:{maintainAspectRatio:!1}})})}),Object(be.jsx)(se.a,{eventKey:"schisto",title:"Schistosomiasis",children:Object(be.jsx)("div",{children:Object(be.jsx)(me.a,{data:{labels:d.labels,datasets:[{label:"Soil transmitted Helminths",data:d.values,backgroundColor:"#333366"}]},type:"bar",width:600,height:400,options:{maintainAspectRatio:!1}})})}),Object(be.jsx)(se.a,{eventKey:"lf",title:"Lymphatic Filariasis",children:Object(be.jsx)("div",{children:Object(be.jsx)(me.a,{data:{labels:d.labels,datasets:[{label:"Soil transmitted Helminths",data:d.values,backgroundColor:"#333366"}]},type:"bar",width:600,height:400,options:{maintainAspectRatio:!1}})})}),Object(be.jsx)(se.a,{eventKey:"helminths",title:"S.T. Hemlinths",children:Object(be.jsx)("div",{children:Object(be.jsx)(me.a,{data:{labels:d.labels,datasets:[{label:"Soil transmitted Helminths",data:d.values,backgroundColor:"#333366"}]},type:"bar",width:600,height:400,options:{maintainAspectRatio:!1}})})})]})}),Object(be.jsx)("div",{children:Object(be.jsxs)(re.a,{sm:1,lg:4,children:[Object(be.jsx)(ce.a,{children:Object(be.jsx)(he,{title:" onchocerciasis",tests:l.oTests,ptest:l.opTests,ntest:l.onTests})}),Object(be.jsx)(ce.a,{children:Object(be.jsx)(he,{title:"schistosomiasis",tests:l.sTests,ptest:l.spTests,ntest:l.snTests})}),Object(be.jsx)(ce.a,{children:Object(be.jsx)(he,{title:" l. filariasis",tests:l.lTests,ptest:l.lpTests,ntest:l.lnTests})}),Object(be.jsx)(ce.a,{children:Object(be.jsx)(he,{title:"S. T. Helminths",tests:l.hTests,ptest:l.hpTests,ntest:l.hnTests})})]})})]})})},ve=n(412),ye=n(28),Se=function(e){var t=e.tests;e.loading;return Object(be.jsxs)(ve.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",id:"excel-export",children:[Object(be.jsx)("thead",{children:Object(be.jsxs)("tr",{children:[Object(be.jsx)("th",{scope:"col",children:"ID"}),Object(be.jsx)("th",{scope:"col",children:"NAME"}),Object(be.jsx)("th",{scope:"col",children:"age"}),Object(be.jsx)("th",{scope:"col",children:"Gender"}),Object(be.jsx)("th",{scope:"col",children:"Location"}),Object(be.jsx)("th",{scope:"col",children:"Onchocerciasis"}),Object(be.jsx)("th",{scope:"col",children:"Schistosomiasis"}),Object(be.jsx)("th",{scope:"col",children:"lf"}),Object(be.jsx)("th",{scope:"col",children:"s.T. Helminths"})]})}),Object(be.jsx)("tbody",{children:t.map((function(e){return Object(be.jsx)(ye.LinkContainer,{to:"/test/".concat(e._id),children:Object(be.jsxs)("tr",{children:[Object(be.jsxs)("td",{style:{fontWeight:"bold"},children:[" ",e._id]}),Object(be.jsxs)("td",{style:{fontWeight:"bold"},children:[" ",e.name]}),Object(be.jsxs)("td",{style:{fontWeight:"bold"},children:[" ",e.age]}),Object(be.jsxs)("td",{style:{fontWeight:"bold"},children:[" ",e.sex]}),Object(be.jsxs)("td",{style:{fontWeight:"bold"},children:[" ",e.location]}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:1===e.oncho?"Positive":"Negative"}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:1===e.schisto?"Positive":"Negative"}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:1===e.lf?"Positive":"Negative"}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:1===e.helminths?"Positive":"Negative"})]},e._id)},e._id)}))})]})},Ee=n(141),Ie=n.n(Ee),Le=n(229),Ce=Ie.a.ExcelFile,we=Ie.a.ExcelSheet,Te=function(e){var t=[{columns:[{title:" Id",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:" Name",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:" Age",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:" Gender",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:"Location",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:" Onchocerciasis",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:" Schistosomiasis",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:"L.F.",style:{font:{sz:"16",bold:!0}},width:{wpx:125}},{title:"  S.T. Helminths",style:{font:{sz:"16",bold:!0}},width:{wpx:125}}],data:e.tests.map((function(e){return[{value:e._id,style:{font:{sz:"14"}}},{value:e.name,style:{font:{sz:"14"}}},{value:e.age,style:{font:{sz:"14"}}},{value:e.sex,style:{font:{sz:"14"}}},{value:e.location,style:{font:{sz:"14"}}},{value:1===e.oncho?"Positive":"Negative",style:{font:{sz:"14"}}},{value:1===e.schisto?"Positive":"Negative",style:{font:{sz:"14"}}},{value:1===e.lf?"Positive":"Negative",style:{font:{sz:"14"}}},{value:1===e.helminths?"Positive":"Negative",style:{font:{sz:"14"}}}]}))}];return Object(be.jsx)(Ce,{filename:"Watertest",element:Object(be.jsx)(Le.a,{className:"btn btn-block btn-primary",children:" Export to Excel"}),children:Object(be.jsx)(we,{dataSet:t,name:"WaterTest"})})},_e=n(6),Ne=n(414);var Re=function(){var e=Object(a.useState)(""),t=Object(_e.a)(e,2),n=t[0],s=t[1],r=Object(te.k)();return Object(be.jsxs)(Ne.a,{onSubmit:function(e){e.preventDefault(),n?r.push("/tests/?keyword=".concat(n,"&page=1")):r.push(r.push(r.location.pathname))},className:"d-flex",children:[Object(be.jsx)(Ne.a.Control,{type:"text",name:"q",onChange:function(e){return s(e.target.value)},className:"mr-sm-2 ml-sm-5"}),Object(be.jsx)(Le.a,{type:"submit",variant:"outline-info",className:"p-2",children:Object(be.jsx)("i",{className:"fa fa-search"})})]})},ke=n(21),Ae=n(420);var Ue=function(e){var t=e.pages,n=e.page,a=e.keyword,s=void 0===a?"":a;return e.isAdmin,s&&(s=s.split("?keyword=")[1].split("&")[0]),t>1&&Object(be.jsx)(Ae.a,{children:Object(ke.a)(Array(t).keys()).map((function(e){return Object(be.jsx)(ye.LinkContainer,{to:"/tests/?keyword=".concat(s,"&page=").concat(e+1),children:Object(be.jsx)(Ae.a.Item,{active:e+1===n,children:e+1})},e+1)}))})},Pe=function(e){var t=e.history,n=Object(c.b)(),s=Object(c.c)((function(e){return e.userLogin})).userInfo,r=Object(c.c)((function(e){return e.testList})),i=r.error,o=r.loading,l=r.tests,d=r.page,h=r.pages,p=t.location.search;return console.log(p),Object(a.useEffect)((function(){s?n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:j}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.get("/api/tests".concat(e),c);case 6:i=t.sent,o=i.data,n({type:u,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:b,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(p)):t.push("/login")}),[n,t,s,p]),Object(be.jsx)("div",{children:o?Object(be.jsx)(Oe,{}):i?Object(be.jsx)(fe,{variant:"danger",children:i}):Object(be.jsxs)("div",{children:[Object(be.jsx)(Re,{}),Object(be.jsx)(Se,{tests:l,loading:o}),Object(be.jsx)(Ue,{page:d,pages:h,keyword:p}),Object(be.jsx)(Te,{tests:l})]})})},De=(n(402),function(e){var t=e.match,n=Object(c.b)(),s=Object(c.c)((function(e){return e.testDetails})),r=s.loading,i=s.error,o=s.test;return Object(a.useEffect)((function(){var e;n((e=t.params.id,function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:h}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.get("/api/tests/".concat(e),c);case 6:i=t.sent,o=i.data,n({type:p,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:O,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()))}),[n,t]),Object(be.jsxs)("div",{children:[r?Object(be.jsx)(Oe,{}):i?Object(be.jsxs)(fe,{variant:"danger",children:[i," "]}):Object(be.jsxs)("div",{children:[Object(be.jsx)(re.a,{children:Object(be.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline"},children:"Personal Information"})}),Object(be.jsxs)("div",{className:"details-text",children:[Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"NAME"}),Object(be.jsxs)(ce.a,{className:"table-text",children:[" ",o.name]})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"AGE"}),Object(be.jsxs)(ce.a,{className:"table-text",children:[" ",o.age]})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"GENDER"}),Object(be.jsxs)(ce.a,{className:"table-text",children:[" ",o.sex]})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"LOCATION"}),Object(be.jsxs)(ce.a,{className:"table-text",children:[" ",o.location]})]})]}),Object(be.jsx)("h3",{style:{textAlign:"center",textDecoration:"underline"},children:"Tests"}),Object(be.jsxs)("div",{children:[Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"ONCHOCERCIASIS"}),Object(be.jsx)(ce.a,{className:"table-text",children:1===o.oncho?"Positive":"Negative"})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"SCHISTOSOMIASIS"}),Object(be.jsxs)(ce.a,{className:"table-text",children:[1===o.schisto?"Positive":"Negative"," "]})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"LYMPHATIC FILARIASIS"}),Object(be.jsx)(ce.a,{className:"table-text",children:1===o.lf?"Positive":"Negative"})]}),Object(be.jsxs)(re.a,{children:[Object(be.jsx)(ce.a,{className:"table-text",children:"SOIL TRANSMITTED HELMINTHS"}),Object(be.jsx)(ce.a,{className:"table-text",children:1===o.helminths?"Positive":"Negative"})]})]})]}),Object(be.jsx)(ee.Link,{to:"/tests",className:"btn btn-block bg-primary  ",style:{color:" var(--txt-white) "},children:"Back"})]})});var ze=function(e){var t=e.children;return Object(be.jsx)(ne.a,{children:Object(be.jsx)(re.a,{className:"justify-content-md-center",children:Object(be.jsx)(ce.a,{xs:12,md:6,children:t})})})},Ge=function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:N}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.get("/api/users/".concat(e,"/"),c);case 6:i=t.sent,o=i.data,n({type:R,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:k,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()};var Fe=function(e){e.location;var t=e.history,n=Object(a.useState)(""),s=Object(_e.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(_e.a)(o,2),d=l[0],j=l[1],u=Object(c.b)(),b=Object(c.c)((function(e){return e.userLogin})),h=b.error,p=b.loading,O=b.userInfo;return Object(a.useEffect)((function(){O&&t.push("/")}),[t,O]),Object(be.jsxs)(ze,{children:[Object(be.jsx)("h1",{children:"Sign In"}),h&&Object(be.jsx)(fe,{variant:"danger",children:h}),p&&Object(be.jsx)(Oe,{}),Object(be.jsxs)(Ne.a,{onSubmit:function(e){e.preventDefault(),u(function(e,t){return function(){var n=Object(le.a)(oe.a.mark((function n(a){var s,r,c;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:S}),s={headers:{"Content-type":"application/json"}},n.next=5,je.a.post("/api/users/login/",{username:e,password:t},s);case 5:r=n.sent,c=r.data,a({type:E,payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:I,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(r,d))},children:[Object(be.jsxs)(Ne.a.Group,{controlId:"email",children:[Object(be.jsx)(Ne.a.Label,{children:"Email Address"}),Object(be.jsx)(Ne.a.Control,{type:"email",placeholder:"Enter Email",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"password",children:[Object(be.jsx)(Ne.a.Label,{children:"Password"}),Object(be.jsx)(Ne.a.Control,{type:"password",placeholder:"Enter Password",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(be.jsx)(Le.a,{type:"submit",variant:"primary",className:"btn btn-block",children:"Sign In"})]})]})};var He=function(e){var t=e.location,n=e.history,s=Object(a.useState)(""),r=Object(_e.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(_e.a)(l,2),j=d[0],u=d[1],b=Object(a.useState)(""),h=Object(_e.a)(b,2),p=h[0],O=h[1],x=Object(a.useState)(""),f=Object(_e.a)(x,2),m=f[0],g=f[1],v=Object(a.useState)(""),y=Object(_e.a)(v,2),S=y[0],E=y[1],I=Object(c.b)(),L=(t.search&&t.search.split("=")[1],Object(c.c)((function(e){return e.userRegister}))),N=L.error,R=L.loading,k=L.successRegister;return Object(a.useEffect)((function(){k&&(I({type:_}),n.push("/admin/userlist"))}),[n,k]),Object(be.jsxs)(ze,{children:[Object(be.jsx)("h1",{children:"Register"}),S&&Object(be.jsx)(fe,{variant:"danger",children:S}),N&&Object(be.jsx)(fe,{variant:"danger",children:N}),R&&Object(be.jsx)(Oe,{}),Object(be.jsxs)(Ne.a,{onSubmit:function(e){e.preventDefault(),p!=m?E("Passwords do not match"):I(function(e,t,n){return function(){var a=Object(le.a)(oe.a.mark((function a(s){var r;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:C}),r={headers:{"Content-type":"application/json"}},a.next=5,je.a.post("/api/users/register/",{name:e,email:t,password:n},r);case 5:a.sent.data,s({type:w}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),s({type:T,payload:a.t0.response&&a.t0.response.data.detail?a.t0.response.data.detail:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(i,j,p))},children:[Object(be.jsxs)(Ne.a.Group,{controlId:"name",children:[Object(be.jsx)(Ne.a.Label,{children:"Name"}),Object(be.jsx)(Ne.a.Control,{type:"name",placeholder:"Enter Name",value:i,required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"email",children:[Object(be.jsx)(Ne.a.Label,{children:"Email Address"}),Object(be.jsx)(Ne.a.Control,{type:"email",required:!0,placeholder:"Enter Email",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"password",children:[Object(be.jsx)(Ne.a.Label,{children:"Password"}),Object(be.jsx)(Ne.a.Control,{type:"password",placeholder:"Enter Password",required:!0,value:p,onChange:function(e){return O(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"passwordConfirm",children:[Object(be.jsx)(Ne.a.Label,{children:" Confirm Password"}),Object(be.jsx)(Ne.a.Control,{type:"password",placeholder:"Confirm Password",required:!0,value:m,onChange:function(e){return g(e.target.value)}})]}),Object(be.jsx)(Le.a,{type:"submit",variant:"primary",children:"Register"})]})]})};var We=function(e){var t=e.history,n=Object(a.useState)(""),s=Object(_e.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(_e.a)(o,2),d=l[0],j=l[1],u=Object(a.useState)(""),b=Object(_e.a)(u,2),h=b[0],p=b[1],O=Object(a.useState)(""),x=Object(_e.a)(O,2),f=x[0],m=x[1],g=Object(a.useState)(""),v=Object(_e.a)(g,2),y=v[0],S=v[1],I=Object(c.b)(),L=Object(c.c)((function(e){return e.userDetails})),C=L.error,w=L.loading,T=L.user,_=Object(c.c)((function(e){return e.userLogin})).userInfo,N=Object(c.c)((function(e){return e.userUpdateProfile})).success;return Object(a.useEffect)((function(){_?T&&T.name&&!N&&_._id===T._id?(i(T.name),j(T.email)):(I({type:z}),I(Ge("profile"))):t.push("/")}),[I,T,t,_,N]),Object(be.jsxs)(re.a,{children:[Object(be.jsxs)(ce.a,{md:3,lg:3,children:[Object(be.jsx)("h2",{children:"User Profile"}),y&&Object(be.jsx)(fe,{variant:"danger",children:y}),C&&Object(be.jsx)(fe,{variant:"danger",children:C}),w&&Object(be.jsx)(Oe,{}),Object(be.jsxs)(Ne.a,{onSubmit:function(e){e.preventDefault(),h!==f?S("Passwords do not match"):(I(function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:U}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.put("/api/users/profile/update/",e,c);case 6:i=t.sent,o=i.data,n({type:P,payload:o}),n({type:E,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:D,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}({id:T._id,name:r,email:d,password:h})),S(""))},children:[Object(be.jsxs)(Ne.a.Group,{controlId:"name",children:[Object(be.jsx)(Ne.a.Label,{children:"Name"}),Object(be.jsx)(Ne.a.Control,{type:"name",placeholder:"Enter Name",value:r,required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"email",children:[Object(be.jsx)(Ne.a.Label,{children:"Email Address"}),Object(be.jsx)(Ne.a.Control,{type:"email",required:!0,placeholder:"Enter Email",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"password",children:[Object(be.jsx)(Ne.a.Label,{children:"Password"}),Object(be.jsx)(Ne.a.Control,{type:"password",placeholder:"Enter Password",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"passwordConfirm",children:[Object(be.jsx)(Ne.a.Label,{children:" Confirm Password"}),Object(be.jsx)(Ne.a.Control,{type:"password",placeholder:"Confirm Password",value:f,onChange:function(e){return m(e.target.value)}})]}),Object(be.jsx)(Le.a,{type:"submit",variant:"primary",children:"Update"})]})]}),Object(be.jsx)(ce.a,{md:9,lg:9,children:Object(be.jsx)("h2",{children:"My Tests"})})]})};var Be=function(e){var t=e.history,n=Object(c.b)(),s=Object(c.c)((function(e){return e.userList})),r=s.loading,i=s.error,o=s.users,l=Object(c.c)((function(e){return e.userLogin})).userInfo,d=Object(c.c)((function(e){return e.userDelete})).success;Object(a.useEffect)((function(){l&&l.isAdmin?n(function(){var e=Object(le.a)(oe.a.mark((function e(t,n){var a,s,r,c,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:G}),a=n(),s=a.userLogin.userInfo,r={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s.token)}},e.next=6,je.a.get("/api/users/",r);case 6:c=e.sent,i=c.data,t({type:F,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:H,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()):t.push("/login")}),[n,t,d,l]);var j=function(e){window.confirm("Are you sure you want to delete this user?")&&n(function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:B}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.delete("/api/users/delete/".concat(e),c);case 6:i=t.sent,o=i.data,n({type:M,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:Q,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return Object(be.jsxs)("div",{children:[Object(be.jsx)("h1",{children:"USERS"}),r?Object(be.jsx)(Oe,{}):i?Object(be.jsx)(fe,{variant:"danger",children:i}):Object(be.jsxs)(ve.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object(be.jsx)("thead",{children:Object(be.jsxs)("tr",{children:[Object(be.jsx)("th",{children:"ID"}),Object(be.jsx)("th",{children:"NAME"}),Object(be.jsx)("th",{children:"EMAIL"}),Object(be.jsx)("th",{children:"ADMIN"}),Object(be.jsx)("th",{})]})}),Object(be.jsx)("tbody",{children:o.map((function(e){return Object(be.jsxs)("tr",{children:[Object(be.jsx)("td",{style:{fontWeight:"bold"},children:e._id}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:e.name}),Object(be.jsx)("td",{style:{fontWeight:"bold"},children:e.email}),Object(be.jsx)("td",{children:e.isAdmin?Object(be.jsx)("i",{className:"fas fa-check-circle",style:{color:"green"}}):Object(be.jsx)("i",{className:"fas fa-times-circle",style:{color:"red"}})}),Object(be.jsxs)("td",{children:[Object(be.jsx)(ye.LinkContainer,{to:"/admin/user/".concat(e._id,"/edit"),children:Object(be.jsx)(Le.a,{variant:"light",className:"btn-sm",children:Object(be.jsx)("i",{className:"fas fa-edit"})})}),Object(be.jsx)(Le.a,{variant:"danger",className:"btn-sm",onClick:function(){return j(e._id)},children:Object(be.jsx)("i",{className:"fas fa-trash"})})]})]},e._id)}))})]})]})};var Me=function(e){var t=e.match,n=e.history,s=t.params.id,r=Object(a.useState)(""),i=Object(_e.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(""),j=Object(_e.a)(d,2),u=j[0],b=j[1],h=Object(a.useState)(!1),p=Object(_e.a)(h,2),O=p[0],x=p[1],f=Object(c.b)(),m=Object(c.c)((function(e){return e.userDetails})),g=m.error,v=m.loading,y=m.user,S=Object(c.c)((function(e){return e.userUpdate})),E=S.error,I=S.loading,L=S.success;return Object(a.useEffect)((function(){L?(f({type:V}),n.push("/admin/userlist")):y.name&&y._id===Number(s)?(l(y.name),b(y.email),x(y.isAdmin)):f(Ge(s))}),[y,s,L,n]),Object(be.jsxs)("div",{children:[Object(be.jsx)(ee.Link,{to:"/admin/userlist",children:"Go Back"}),Object(be.jsxs)(ze,{children:[Object(be.jsx)("h1",{children:"Edit User"}),I&&Object(be.jsx)(Oe,{}),E&&Object(be.jsx)(fe,{variant:"danger",children:E}),v?Object(be.jsx)(Oe,{}):g?Object(be.jsx)(fe,{variant:"danger",children:g}):Object(be.jsxs)(Ne.a,{onSubmit:function(e){e.preventDefault(),f(function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n,a){var s,r,c,i,o;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:q}),s=a(),r=s.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r.token)}},t.next=6,je.a.put("/api/users/update/".concat(e._id,"/"),e,c);case 6:i=t.sent,o=i.data,n({type:J}),n({type:R,payload:o}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:K,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}({_id:y._id,name:o,email:u,isAdmin:O}))},children:[Object(be.jsxs)(Ne.a.Group,{controlId:"name",children:[Object(be.jsx)(Ne.a.Label,{children:"Name"}),Object(be.jsx)(Ne.a.Control,{type:"name",placeholder:"Enter Name",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"email",children:[Object(be.jsx)(Ne.a.Label,{children:"Email Address"}),Object(be.jsx)(Ne.a.Control,{type:"email",placeholder:"Enter Email",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(be.jsxs)(Ne.a.Group,{controlId:"isAdmin",children:[Object(be.jsx)(Ne.a.Label,{children:"Password"}),Object(be.jsx)(Ne.a.Check,{type:"checkbox",label:"Is Admin",checked:O,onChange:function(e){return x(e.target.checked)}})]}),Object(be.jsx)(Le.a,{type:"submit",variant:"primary",className:"btn  btn- primary btn-block",children:"Update"})]})]})]})},Qe=n(415),qe=n(231),Je=n(413);var Ke=function(){var e=Object(c.c)((function(e){return e.userLogin})).userInfo,t=Object(c.b)();return Object(be.jsx)("header",{children:Object(be.jsx)(Qe.a,{bg:"primary",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(be.jsxs)(ne.a,{children:[Object(be.jsx)(ye.LinkContainer,{to:"/",children:Object(be.jsx)(Qe.a.Brand,{children:"Testcms"})}),Object(be.jsx)(Qe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(be.jsx)(Qe.a.Collapse,{id:"basic-navbar-nav",children:Object(be.jsxs)(qe.a,{className:"d-flex justify-content-end",children:[e&&Object(be.jsx)(ye.LinkContainer,{to:"/tests",children:Object(be.jsxs)(qe.a.Link,{children:[Object(be.jsx)("i",{className:"fa fa-flask"}),"Tests"]})}),e?Object(be.jsxs)(Je.a,{title:e.name,id:"username",children:[Object(be.jsx)(ye.LinkContainer,{to:"/profile",children:Object(be.jsx)(Je.a.Item,{children:"Profile"})}),Object(be.jsx)(ye.LinkContainer,{to:"/",children:Object(be.jsx)(Je.a.Item,{onClick:function(e){e.history;t((function(e){localStorage.removeItem("userInfo"),e({type:L}),e({type:A}),e({type:W})}))},children:"Logout"})})]}):Object(be.jsx)(ye.LinkContainer,{to:"/",children:Object(be.jsxs)(qe.a.Link,{children:[Object(be.jsx)("i",{className:"fa fa-user"}),"Login"]})}),e&&e.isAdmin&&Object(be.jsxs)(Je.a,{title:"Admin",id:"adminmenu",children:[Object(be.jsx)(ye.LinkContainer,{to:"/admin/userlist",children:Object(be.jsx)(Je.a.Item,{children:"Users"})}),Object(be.jsx)(ye.LinkContainer,{to:"/register",children:Object(be.jsx)(Je.a.Item,{children:"Register"})})]})]})})]})})})};var Ve=function(){return Object(be.jsx)("footer",{children:Object(be.jsx)(ne.a,{children:Object(be.jsx)(re.a,{children:Object(be.jsx)(ce.a,{className:"text-center py-3",children:" Copyright \xa9 CSIR-Water"})})})})};document.title="Water Test";var Ye=function(){return Object(be.jsxs)(ee.HashRouter,{children:[Object(be.jsx)(Ke,{}),Object(be.jsx)("main",{className:"py-3",children:Object(be.jsxs)(ne.a,{children:[Object(be.jsx)(te.d,{path:"/",exact:!0,component:ge}),Object(be.jsx)(te.d,{path:"/login",component:Fe}),Object(be.jsx)(te.d,{path:"/register",component:He}),Object(be.jsx)(te.d,{path:"/profile",component:We}),Object(be.jsx)(te.d,{path:"/tests",component:Pe}),Object(be.jsx)(te.d,{path:"/test/:id",component:De}),Object(be.jsx)(te.d,{path:"/admin/userlist",component:Be}),Object(be.jsx)(te.d,{path:"/admin/user/:id/edit",component:Me})]})}),Object(be.jsx)(Ve,{})]})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,421)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};r.a.render(Object(be.jsx)(c.a,{store:$,children:Object(be.jsx)(Ye,{})}),document.getElementById("root")),Xe()}},[[403,1,2]]]);
//# sourceMappingURL=main.ebc0310a.chunk.js.map