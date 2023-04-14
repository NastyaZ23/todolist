(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{106:function(t,e,a){t.exports={appbar:"App_appbar__1QaGQ",header:"App_header__5RBuX"}},137:function(t,e,a){t.exports={error:"AddItemForm_error__3At2_",wrapper:"AddItemForm_wrapper__1Z66Y"}},139:function(t,e,a){t.exports={completedTask:"Task_completedTask__1qx3H"}},140:function(t,e,a){t.exports={btn:"Button_btn__CT9Ov"}},157:function(t,e,a){},207:function(t,e,a){"use strict";a.r(e);var n,r,c,s,i,o,u,l=a(12),d=a.n(l),p=(a(157),a(0)),f=a.n(p);!function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(n||(n={})),function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t.Todolists="todo-lists",t.Tasks="tasks",t.Login="auth/login",t.Me="auth/me"}(c||(c={})),function(t){t.START="/",t.LOGIN_PATH="/login",t.NOT_FOUND="/404",t.ANY="*"}(s||(s={})),function(t){t.All="all",t.CompletedFilter="completed",t.Active="active"}(i||(i={})),function(t){t.Idle="idle",t.Loading="loading",t.Succeeded="succeeded",t.Failed="failed"}(o||(o={})),function(t){t[t.success=0]="success",t[t.error=1]="error",t[t.captcha=10]="captcha"}(u||(u={}));var b=a(241),j=a(242),O=a(213),m=a(237),x=a(243),v=a(244),h=a(245),k=a(106),w=a.n(k),y=a(16),g=a(20),T=a(249),C=a(246),I=a(233),A=a(33),S={status:o.Idle,error:null,isInitialize:!1},_=Object(A.b)({name:"app",initialState:S,reducers:{toggleIsInitialize:function(t,e){t.isInitialize=e.payload.value},setRequestStatus:function(t,e){t.status=e.payload.status},setErrorText:function(t,e){t.error=e.payload.error}}}),L=_.actions,F=L.setRequestStatus,N=L.toggleIsInitialize,z=L.setErrorText,E=_.reducer,P=a(4),R=f.a.forwardRef((function(t,e){return Object(P.jsx)(C.a,Object(g.a)({elevation:6,ref:e,variant:"filled"},t))})),D=Object(I.a)((function(t){return{root:{width:"100%","& > * + *":{marginTop:t.spacing(2)}}}}));function M(){var t=Object(y.c)((function(t){return t.app.error})),e=D(),a=Object(y.b)(),n=function(t,e){"clickaway"!==e&&a(z({error:null}))};return Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(T.a,{open:!!t,autoHideDuration:6e3,onClose:n,children:Object(P.jsxs)(R,{onClose:n,severity:"error",children:[t," \ud83d\ude2d"]})})})}var U=a(107),H=a.n(U),q=a(104),G=a(212),B=a(234),Y=a(235),Z=a(236),J=a(247),K=a(142),Q=a(7),X=a.n(Q),V=a(13),$=a(136),W=a.n($).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"78ba9efb-88a6-4c7f-b505-5ad3ba5a9466"}}),tt=c.Todolists,et=c.Login,at=c.Me,nt=function(){return Object(V.a)(X.a.mark((function t(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.get(tt);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},rt=function(t){return Object(V.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post(tt,{title:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))()},ct=function(t){return Object(V.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.delete("".concat(tt,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))()},st=function(t,e){return Object(V.a)(X.a.mark((function a(){var n;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.put("".concat(tt,"/").concat(t),{title:e});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},it=function(t){return Object(V.a)(X.a.mark((function e(){var a,n,r,c,s;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,r=t.rememberMe,c=t.captcha,e.next=3,W.post(et,{email:a,password:n,rememberMe:r,captcha:c});case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))()},ot=function(){return Object(V.a)(X.a.mark((function t(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.delete(et);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},ut=function(){return Object(V.a)(X.a.mark((function t(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.get(at);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))()},lt=o.Failed,dt=function(t,e){t(z({error:e.message})),t(F({status:lt}))},pt=function(t,e){var a=e.messages;t(z(a?{error:a[0]}:{error:"Some error occurred"})),t(F({status:lt}))},ft=o.Loading,bt=o.Succeeded,jt=u.success,Ot=Object(A.b)({name:"auth",initialState:{isLoggedIn:!1,data:{id:null,login:null,email:null}},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value},setAuthUserData:function(t,e){t.data=e.payload.data}}}),mt=Ot.actions,xt=mt.setIsLoggedInAC,vt=(mt.setAuthUserData,Ot.reducer),ht=a(10),kt=function(){var t=Object(y.b)(),e=Object(y.c)((function(t){return t.auth.isLoggedIn})),a=s.START,n=Object(K.a)({initialValues:{email:"free@samuraijs.com",password:"free",rememberMe:!1},validate:function(t){var e={};return function(t,e){var a=t.email,n=t.password;a?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a)||(e.email="Invalid email address"):e.email="Required",n||(e.password="Required"),(null===n||void 0===n?void 0:n.length)<3&&(e.password="Min password length is 3 symbols")}(t,e),e},onSubmit:function(e){var a;n.resetForm(),t((a=e,function(){var t=Object(V.a)(X.a.mark((function t(e){var n;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(F({status:ft})),t.next=4,it(a);case 4:(n=t.sent).resultCode===jt?(e(xt({value:!0})),e(F({status:bt}))):pt(e,n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),dt(e,t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}}),r=n.touched,c=n.errors,i=c.password,o=[{name:"email",err:c.email,touch:r.email,type:"text"},{name:"password",err:i,touch:r.password,type:"password"}];return e?Object(P.jsx)(ht.a,{to:a}):Object(P.jsx)(H.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(H.a,{item:!0,children:Object(P.jsx)("form",{onSubmit:n.handleSubmit,children:Object(P.jsxs)(q.a,{children:[Object(P.jsxs)(G.a,{children:[Object(P.jsxs)("p",{children:["To log in get registered"," ",Object(P.jsx)("a",{href:"https://social-network.samuraijs.com/",rel:"noreferrer",target:"_blank",children:"here"})]}),Object(P.jsx)("p",{children:"or use common test account credentials:"}),Object(P.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(P.jsx)("p",{children:"Password: free"})]}),Object(P.jsxs)(B.a,{children:[o.map((function(t){var e=t.name,a=t.touch,r=t.err,c=t.type;return Object(P.jsxs)(p.Fragment,{children:[Object(P.jsx)(Y.a,Object(g.a)({label:e,margin:"normal",type:c},n.getFieldProps({name:e}))),a&&r&&Object(P.jsx)("div",{style:{color:"red"},children:r})]},e)})),Object(P.jsx)(Z.a,{label:"Remember me",checked:n.values.rememberMe,control:Object(P.jsx)(J.a,Object(g.a)({},n.getFieldProps("rememberMe")))}),Object(P.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},wt=o.Idle,yt=i.All,gt=Object(A.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));-1!==a&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(g.a)(Object(g.a)({},e.payload.todolist),{},{filter:yt,entityStatus:wt}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a]=Object(g.a)(Object(g.a)({},t[a]),{},{filter:e.payload.newFilter})},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:yt,entityStatus:wt})}))},setTodolistProgressStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todolistId}));t[a]=Object(g.a)(Object(g.a)({},t[a]),{},{entityStatus:e.payload.entityStatus})}}}),Tt=gt.actions,Ct=Tt.removeTodolistAC,It=Tt.addTodolistAC,At=Tt.changeTodolistTitleAC,St=Tt.changeTodolistFilterAC,_t=Tt.setTodolistsAC,Lt=Tt.setTodolistProgressStatus,Ft=gt.reducer,Nt=c.Todolists,zt=c.Tasks,Et=function(t){return Object(V.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("".concat(Nt,"/").concat(t,"/").concat(zt));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))()},Pt=function(t,e){return Object(V.a)(X.a.mark((function a(){var n;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.post("".concat(Nt,"/").concat(t,"/").concat(zt),{title:e});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},Rt=function(t,e){return Object(V.a)(X.a.mark((function a(){var n;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,W.delete("".concat(Nt,"/").concat(t,"/").concat(zt,"/").concat(e));case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},Dt=function(t,e,a){return Object(V.a)(X.a.mark((function n(){var r,c,s,i,o,u,l;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.title,c=a.description,s=a.status,i=a.priority,o=a.startDate,u=a.deadline,n.next=3,W.put("".concat(Nt,"/").concat(t,"/").concat(zt,"/").concat(e),{title:r,description:c,status:s,priority:i,startDate:o,deadline:u});case 3:return l=n.sent,n.abrupt("return",l.data);case 5:case"end":return n.stop()}}),n)})))()},Mt=Object(A.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.id].findIndex((function(t){return t.id===e.payload.taskId}));-1!==a&&t[e.payload.id].splice(a,1)},addTaskAC:function(t,e){t[e.payload.id].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.task.todoListId].findIndex((function(t){return t.id===e.payload.taskId}));t[e.payload.task.todoListId][a]=Object(g.a)(Object(g.a)({},t[e.payload.task.todoListId][a]),e.payload.task)},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(It,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(_t,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})),t.addCase(Ct,(function(t,e){delete t[e.payload.id]}))}}),Ut=Mt.actions,Ht=Ut.removeTaskAC,qt=Ut.addTaskAC,Gt=Ut.updateTaskAC,Bt=Ut.setTasksAC,Yt=Mt.reducer,Zt=o.Succeeded,Jt=o.Loading,Kt=u.success,Qt=function(t,e,a){return function(){var n=Object(V.a)(X.a.mark((function n(r,c){var s,i,o,u,l,d;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=c().tasks,i=s[t].find((function(t){return t.id===e})),n.prev=2,!i){n.next=11;break}return o=i,u=Object(g.a)(Object(g.a)({},o),a),r(F({status:Jt})),n.next=9,Dt(t,e,u);case 9:(l=n.sent).resultCode===Kt?(d=l.data.item,r(Gt({task:d,taskId:e})),r(F({status:Zt}))):pt(r,l);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),dt(r,n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(t,e){return n.apply(this,arguments)}}()},Xt=o.Loading,Vt=o.Succeeded,$t=o.Failed,Wt=u.success,te=a(240),ee=a(211),ae=a(28),ne=a(137),re=a.n(ne),ce=a(232),se=a(238),ie=Object(p.memo)((function(t){var e=t.addItem,a=Object(p.useState)(""),n=Object(ae.a)(a,2),r=n[0],c=n[1],s=Object(p.useState)(null),i=Object(ae.a)(s,2),o=i[0],u=i[1],l=function(){""!==r.trim()?(e(r),c("")):u("name required")};return Object(P.jsxs)("div",{className:re.a.wrapper,children:[Object(P.jsx)(Y.a,{error:!!o,id:o?"outlined-error":"standard-basic",label:o?"Error":"write title",onChange:function(t){c(t.currentTarget.value),t.currentTarget.value.length>0&&u(null)},onKeyPress:function(t){"Enter"===t.key&&l()},value:r,size:"small"}),Object(P.jsx)(ce.a,{size:"small",onClick:l,children:Object(P.jsx)(se.a,{style:{color:"LightGreen"}})})]})})),oe=a(138),ue=a.n(oe),le=Object(p.memo)((function(t){var e=t.title,a=t.updateTitle,n=Object(p.useState)(!0),r=Object(ae.a)(n,2),c=r[0],s=r[1],i=Object(p.useState)(e),o=Object(ae.a)(i,2),u=o[0],l=o[1];return c?Object(P.jsx)("span",{onDoubleClick:function(){s(!1)},children:e}):Object(P.jsx)(ue.a,{id:"standard-basic",variant:"standard",value:u,onBlur:function(){s(!0),a(u)},autoFocus:!0,onChange:function(t){l(t.currentTarget.value)}})})),de=a(139),pe=a.n(de),fe=a(239),be=Object(p.memo)((function(t){var e=t.taskId,a=t.todolistId,n=t.status,c=t.taskTitle,s=Object(y.b)(),i=r.Completed,o=r.New,u=Object(p.useCallback)((function(t){s(Qt(a,e,{title:t}))}),[s,a,e]);return Object(P.jsxs)("li",{className:n===i?pe.a.completedTask:"",children:[Object(P.jsx)(ce.a,{"aria-label":"delete",size:"small",onClick:function(){s(function(t,e){return function(){var a=Object(V.a)(X.a.mark((function a(n){var r;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(F({status:Jt})),a.next=4,Rt(t,e);case 4:(r=a.sent).resultCode===Kt?(n(Ht({taskId:e,id:t})),n(F({status:Zt}))):pt(n,r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),dt(n,a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(t){return a.apply(this,arguments)}}()}(a,e))},children:Object(P.jsx)(fe.a,{fontSize:"small"})}),Object(P.jsx)(J.a,{checked:n===i,onChange:function(t){var n=t.currentTarget.checked;s(Qt(a,e,{status:n?i:o}))},color:"secondary",size:"small"}),Object(P.jsx)(le,{title:c,updateTitle:u})]})})),je=a(141),Oe=a.n(je),me=a(140),xe=a.n(me),ve=Object(p.memo)((function(t){var e=t.callback,a=t.title;return Object(P.jsx)(m.a,{variant:"text",size:"small",color:"primary",onClick:e,className:xe.a.btn,children:a})})),he=Object(p.memo)((function(t){var e,a=t.todolistTitle,n=t.tasks,c=t.filter,s=t.todolistId,u=t.entityStatus,l=Object(y.b)(),d=i.All,f=i.CompletedFilter,b=i.Active,j=r.Completed,O=r.New,m=o.Loading,x=Object(p.useCallback)((function(){l(St({id:s,newFilter:d}))}),[l,s,d]),v=Object(p.useCallback)((function(){l(St({id:s,newFilter:f}))}),[l,s,f]),h=Object(p.useCallback)((function(){l(St({id:s,newFilter:b}))}),[l,s,b]),k=Object(p.useCallback)((function(t){l(function(t,e){return function(){var a=Object(V.a)(X.a.mark((function a(n){var r,c;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(F({status:Jt})),a.next=4,Pt(t,e);case 4:(r=a.sent).resultCode===Kt?(c=r.data.item,n(qt({task:c,id:t})),n(F({status:Zt}))):pt(n,r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),dt(n,a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(t){return a.apply(this,arguments)}}()}(s,t))}),[l,s]),w=Object(p.useCallback)((function(t){l(function(t,e){return function(){var a=Object(V.a)(X.a.mark((function a(n){var r;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(F({status:Xt})),a.next=4,st(t,e);case 4:(r=a.sent).resultCode===Wt?(n(At({id:t,title:e})),n(F({status:Vt}))):pt(n,r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),dt(n,a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(t){return a.apply(this,arguments)}}()}(s,t))}),[s,l]),g=[{callback:x,name:d},{callback:v,name:f},{callback:h,name:b}],T=n;return c===f&&(T=n.filter((function(t){return t.status===j}))),c===b&&(T=n.filter((function(t){return t.status===O}))),Object(P.jsxs)("div",{children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)(le,{title:a,updateTitle:w}),Object(P.jsx)(Oe.a,{"aria-label":"delete",size:"small",onClick:function(){l(function(t){return function(){var e=Object(V.a)(X.a.mark((function e(a){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(F({status:Xt})),a(Lt({entityStatus:Xt,todolistId:t})),e.next=5,ct(t);case 5:(n=e.sent).resultCode===Wt?(a(Ct({id:t})),a(Lt({entityStatus:Vt,todolistId:t})),a(F({status:Vt}))):(pt(a,n),a(Lt({entityStatus:$t,todolistId:t}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),dt(a,e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}(s))},disabled:u===m,children:Object(P.jsx)(fe.a,{fontSize:"small"})})]}),Object(P.jsx)(ie,{addItem:k}),Object(P.jsx)("ul",{children:null===(e=T)||void 0===e?void 0:e.map((function(t){var e=t.id,a=t.status,n=t.title;return Object(P.jsx)(be,{taskId:e,todolistId:s,status:a,taskTitle:n},e)}))}),Object(P.jsx)("div",{children:g.map((function(t){var e=t.callback,a=t.name;return Object(P.jsx)(ve,{title:a,callback:e},a)}))})]})})),ke=function(){var t=Object(y.c)((function(t){return t.auth.isLoggedIn})),e=Object(y.c)((function(t){return t.todolists})),a=Object(y.c)((function(t){return t.tasks})),n=Object(y.b)(),r=s.LOGIN_PATH;Object(p.useEffect)((function(){t&&(e||n(function(){var t=Object(V.a)(X.a.mark((function t(e){var a;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(F({status:Xt})),t.next=4,nt();case 4:a=t.sent,e(_t({todolists:a})),e(F({status:Vt})),a.forEach((function(t){return e((a=t.id,function(){var t=Object(V.a)(X.a.mark((function t(e){var n;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(F({status:Jt})),t.next=4,Et(a);case 4:n=t.sent,e(Bt({tasks:n.items,todolistId:a})),e(F({status:Zt})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),dt(e,t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()));var a})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),dt(e,t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[n,e,t]);var c=Object(p.useCallback)((function(t){var e;n((e=t,function(){var t=Object(V.a)(X.a.mark((function t(a){var n;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(F({status:Xt})),t.next=4,rt(e);case 4:(n=t.sent).resultCode===Wt?(a(It({todolist:n.data.item})),a(F({status:Vt}))):pt(a,n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),dt(a,t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[n]);return t?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(te.a,{container:!0,style:{padding:"20px"},children:Object(P.jsx)(ie,{addItem:c})}),Object(P.jsx)(te.a,{container:!0,spacing:3,children:e.map((function(t){var e=t.id,n=t.entityStatus,r=t.title,c=t.filter,s=a[e];return Object(P.jsx)(te.a,{item:!0,children:Object(P.jsx)(ee.a,{style:{padding:"10px"},children:Object(P.jsx)(he,{todolistId:e,entityStatus:n,todolistTitle:r,tasks:s,filter:c},e)})},e)}))})]}):Object(P.jsx)(ht.a,{to:r})};var we=function(){var t=Object(y.b)(),e=Object(y.c)((function(t){return t.app.status})),a=Object(y.c)((function(t){return t.app.isInitialize})),n=Object(y.c)((function(t){return t.auth.isLoggedIn})),r=o.Loading,c=s.START,i=s.LOGIN_PATH,u=s.NOT_FOUND,l=s.ANY;Object(p.useEffect)((function(){t(function(){var t=Object(V.a)(X.a.mark((function t(e){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(F({status:ft})),t.next=4,ut();case 4:t.sent.resultCode===jt&&e(xt({value:!0})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),dt(e,t.t0);case 11:return t.prev=11,e(N({value:!0})),e(F({status:bt})),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,8,11,15]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var d=Object(p.useCallback)((function(){t(function(){var t=Object(V.a)(X.a.mark((function t(e){var a;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(F({status:ft})),t.next=4,ot();case 4:(a=t.sent).resultCode===jt?(e(xt({value:!1})),e(F({status:bt}))):pt(e,a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),dt(e,t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);return Object(P.jsxs)("div",{children:[Object(P.jsx)(b.a,{position:"static",style:{background:"SkyBlue"},className:w.a.appbar,children:Object(P.jsxs)(j.a,{variant:"dense",className:w.a.header,children:[Object(P.jsx)(O.a,{variant:"h6",children:"Todolist"}),n&&Object(P.jsx)(m.a,{onClick:d,color:"inherit",style:{float:"right"},children:"log out"})]})}),e===r&&Object(P.jsx)(x.a,{}),a?Object(P.jsx)(h.a,{fixed:!0,children:Object(P.jsxs)(ht.d,{children:[Object(P.jsx)(ht.b,{path:c,element:Object(P.jsx)(ke,{})}),Object(P.jsx)(ht.b,{path:i,element:Object(P.jsx)(kt,{})}),Object(P.jsx)(ht.b,{path:l,element:Object(P.jsx)(ht.a,{to:u})}),Object(P.jsx)(ht.b,{path:u,element:Object(P.jsx)("h1",{children:"PAGE_NOT_FOUND_TEXT"})})]})}):Object(P.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(P.jsx)(v.a,{})}),Object(P.jsx)(M,{})]})},ye=a(31),ge=a(62),Te=Object(ye.b)({tasks:Yt,todolists:Ft,app:E,auth:vt}),Ce=Object(A.a)({reducer:Te,middleware:function(t){return t().prepend(ge.a)}}),Ie=a(61);d.a.render(Object(P.jsx)(y.a,{store:Ce,children:Object(P.jsx)(Ie.a,{children:Object(P.jsx)(we,{})})}),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.c126c055.chunk.js.map