(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c,n=a(1),s=a(0),l=a.n(s),r=a(12),i=a.n(r),o=(a(21),a(4)),d=a(7),u=a(2);!function(e){e.REGISTRATION_SUBMITTED="REGISTRATION_SUBMITTED",e.LOGIN_SUBMITTED="LOGIN_SUBMITTED",e.MESSAGE_REMOVED="MESSAGE_REMOVED",e.HABIT_FORM_SUBMITTED="HABIT_FORM_SUBMITTED"}(c||(c={}));var b=a(25),p="AUTH_STATE_CHANGED",j="MESSAGE_ADDED",m="ACTIONS_SET",h="EMIT_EVENT",O="SET_STATE",f="SET_HABITS",g="ADD_COMPLETED_TASK",y="REMOVE_COMPLETED_TASK",C=function(e,t){switch(console.log(t),t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[Object(u.a)(Object(u.a)({},t.payload),{},{uuid:t.payload.id||Object(b.a)()})])});case"LAST_MESSAGE_REMOVED":return Object(u.a)(Object(u.a)({},e),{},{messages:e.messages.splice(0,e.messages.length-1),eventEmitted:c.MESSAGE_REMOVED});case m:return Object(u.a)(Object(u.a)({},e),{},{actions:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{auth:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{eventEmitted:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{habits:t.payload});case g:return function(e,t){console.log(t);var a=Object(u.a)({},e),c=a.habits.findIndex((function(e){return e.id===t.HabitId})),n=Object(u.a)(Object(u.a)({},e.habits[c]),{},{CompletedTasks:[].concat(Object(d.a)(e.habits[c].CompletedTasks),[t])});return a.habits[c]=n,a}(e,t.payload);case y:return function(e,t){var a=Object(u.a)({},e),c=a.habits.findIndex((function(e){return e.id===t.HabitId})),n=a.habits[c].CompletedTasks,s=n.findIndex((function(e){return e.id===t.id}));s>-1&&n.splice(s,1);var l=Object(u.a)(Object(u.a)({},e.habits[c]),{},{CompletedTasks:n});return a.habits[c]=l,a}(e,t.payload);case O:return t.payload}return e},x={auth:{loggedIn:!1,name:""},messages:[],actions:[],eventEmitted:null,habits:[]},E=(a(22),function(){return Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"loading__dot"}),Object(n.jsx)("div",{className:"loading__dot"}),Object(n.jsx)("div",{className:"loading__dot"})]})});function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var w=s.createElement("path",{d:"M56.9775 31.4748C56.9775 46.76 44.6754 59.151 29.5 59.151C14.3246 59.151 2.02246 46.76 2.02246 31.4748C2.02246 16.1897 14.3246 3.7987 29.5 3.7987C44.6754 3.7987 56.9775 16.1897 56.9775 31.4748Z",fill:"#6E2FBC"}),T=s.createElement("path",{d:"M48.2919 31.9611C50.1878 31.9611 51.725 33.1807 51.725 34.6852V39.0192C51.725 40.5237 50.1878 41.7435 48.2919 41.7435C46.396 41.7435 44.8591 40.5237 44.8591 39.0192V34.6852C44.8591 33.1807 46.396 31.9611 48.2919 31.9611Z",fill:"#BFBFE3"}),N=s.createElement("path",{d:"M14.0772 34.6852V39.0192C14.0772 40.5237 12.5403 41.7435 10.6445 41.7435C8.74854 41.7435 7.21143 40.5237 7.21143 39.0192V34.6852C7.21143 33.1807 8.74854 31.9611 10.6445 31.9611C12.5403 31.9611 14.0772 33.1807 14.0772 34.6852Z",fill:"#BFBFE3"}),_=s.createElement("path",{d:"M28.0589 21.8765C28.5372 21.2668 29.0829 21.4043 29.7362 21.8199C29.2157 22.3368 28.8105 22.8249 28.1262 22.4887C27.9236 22.3893 27.9054 22.0721 28.0589 21.8765ZM30.7008 17.8732C30.6157 17.5959 30.4868 17.3485 30.1609 17.4144C29.7633 17.4946 29.9022 17.7988 29.9652 18.0509C30.1506 18.7933 30.2964 19.5423 30.243 20.3115C30.2107 20.7748 30.207 21.3088 29.485 20.8565C29.3025 20.7421 29.051 20.7302 28.8277 20.6921C28.1577 20.5779 27.6269 20.7911 27.3087 21.4151C26.9995 22.022 27.0652 22.5918 27.5415 23.0948C28.0561 23.6375 28.6394 23.5209 29.2072 23.2271C29.54 23.0547 29.8329 22.8046 30.2602 22.5087C30.772 24.0424 30.3169 25.3464 29.7022 26.6351C29.5581 26.9382 29.0967 27.3041 29.6575 27.5838C30.111 27.8097 30.2086 27.2992 30.3549 27.0338C31.2149 25.4766 31.6538 23.8531 30.8837 22.1252C30.7069 21.7282 30.7877 21.4006 30.8748 21.0279C31.1246 19.9623 31.0203 18.9111 30.7008 17.8732",fill:"#3A7189"}),I=s.createElement("path",{d:"M18.7641 25.1761H40.5725C44.4694 25.1761 47.6283 28.3579 47.6283 32.2828V43.2658C47.6283 47.1907 44.4694 50.3725 40.5725 50.3725H18.7641C14.8675 50.3725 11.7085 47.1907 11.7085 43.2658V32.2828C11.7085 28.3579 14.8675 25.1761 18.7641 25.1761Z",fill:"#E5BED9"}),M=s.createElement("path",{d:"M23.7751 35.304C23.7751 36.4503 22.8889 37.3797 21.7957 37.3797C20.7024 37.3797 19.8162 36.4503 19.8162 35.304C19.8162 34.1576 20.7024 33.2282 21.7957 33.2282C22.8889 33.2282 23.7751 34.1576 23.7751 35.304Z",fill:"#5B3758"}),k=s.createElement("path",{d:"M40.0745 35.6986C40.0745 36.8449 39.1882 37.7743 38.095 37.7743C37.0017 37.7743 36.1155 36.8449 36.1155 35.6986C36.1155 34.5522 37.0017 33.6228 38.095 33.6228C39.1882 33.6228 40.0745 34.5522 40.0745 35.6986Z",fill:"#5B3758"}),A=s.createElement("mask",{id:"path-8-inside-1",fill:"white"},s.createElement("path",{d:"M36.0897 42.2341C34.7529 45.7507 25.5291 46.5014 24.5195 42.2914Z"})),L=s.createElement("path",{d:"M168.796 92.6787C149.979 142.181 111.698 164.655 93.9459 172.947C73.3101 182.587 52.9954 186.352 35.6942 187.024C19.0422 187.671 -5.62546 185.86 -32.1425 173.817C-60.3077 161.025 -100.208 130.98 -113.537 75.3992L162.576 9.18372C149.752 -44.2926 111.383 -72.852 85.2731 -84.7105C60.8113 -95.8203 38.7224 -97.2494 24.6696 -96.7034C9.96772 -96.1321 -7.72737 -92.9513 -26.2261 -84.31C-41.8411 -77.0158 -78.4684 -55.9542 -96.6168 -8.21046L168.796 92.6787Z",fill:"#5B3758",mask:"url(#path-8-inside-1)"}),F=s.createElement("path",{d:"M35.6255 10.57C35.3221 9.38012 34.368 8.62665 33.0553 8.4837C32.9413 8.47131 32.8303 8.46527 32.7221 8.46527C31.581 8.46527 30.7692 9.13641 30.3051 10.0537C29.8202 9.0964 28.9925 8.47544 27.7857 8.47544C27.7058 8.47544 27.6242 8.47816 27.541 8.4837C26.3407 8.5634 25.3097 9.28635 24.9848 10.6956C24.4004 13.2307 27.1664 15.822 30.3052 18.3428C33.6432 15.839 36.2474 13.0089 35.6255 10.5697L35.6255 10.57Z",fill:"#FF0000"}),D=s.createElement("path",{d:"M35.6255 10.57C35.3221 9.38012 34.368 8.62665 33.0553 8.4837C32.9413 8.47131 32.8303 8.46527 32.7221 8.46527C31.581 8.46527 30.7692 9.13641 30.3051 10.0537C29.8202 9.0964 28.9925 8.47544 27.7857 8.47544C27.7058 8.47544 27.6242 8.47816 27.541 8.4837C26.3407 8.5634 25.3097 9.28635 24.9848 10.6956C24.4004 13.2307 27.1664 15.822 30.3052 18.3428C33.6432 15.839 36.2474 13.0089 35.6255 10.5697L35.6255 10.57Z",fill:"#FF0000"});function B(e,t){var a=e.title,c=e.titleId,n=S(e,["title","titleId"]);return s.createElement("svg",v({className:"avatar",width:60,height:60,viewBox:"0 0 59 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},n),a?s.createElement("title",{id:c},a):null,w,T,N,_,I,M,k,A,L,F,D)}var Z=s.forwardRef(B),U=(a.p,function(e){var t=e.message,a=Object(s.useContext)(Ne).dispatch,c=t.delay,l=t.messageClass,r=t.text,i=t.sender,d=t.showLoader,u=t.Component,b=Object(s.useState)(!!c),p=Object(o.a)(b,2),j=p[0],m=p[1],h=Object(s.useState)(!!c),O=Object(o.a)(h,2),f=O[0],g=O[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){m(!j),t.dispatchOnSend&&a(t.dispatchOnSend)}),c),n=setTimeout((function(){g(!j)}),.2*c);return function(){clearTimeout(e),clearTimeout(n)}}),[c]),Object(n.jsx)(n.Fragment,{children:!f&&(j?d&&Object(n.jsx)("div",{className:"message message--loading",children:Object(n.jsx)(E,{})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"message message--sender-".concat(i," ").concat(l),children:["message--initial"===l&&Object(n.jsx)(Z,{}),"message--component"===l?Object(n.jsx)(u,{}):Object(n.jsx)("p",{children:r})]})}))})}),P=function(e){var t=e.action,a=t.label,c=t.callback;return Object(n.jsx)("button",{className:"action-button",onClick:function(){return c()},children:a})},R=function(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){return e.current.scrollIntoView()})),Object(n.jsx)("div",{ref:e})},G=function(){var e=Object(s.useContext)(Ne),t=e.appState,a=(e.dispatch,Object(s.useState)(0)),c=Object(o.a)(a,2),l=c[0],r=c[1],i=Object(s.useState)([]),u=Object(o.a)(i,2),b=u[0],p=u[1];return Object(s.useEffect)((function(){var e=t.messages[l],a=[].concat(Object(d.a)(b),[e]);if(p(a),l<t.messages.length-1){var c=e.delay,n=setTimeout((function(){r(l+1)}),c);return function(){clearTimeout(n)}}}),[l]),Object(s.useEffect)((function(){b.length!==t.messages.length&&r(l+1)}),[t.messages]),Object(n.jsxs)("div",{className:"chatbox",children:[Object(n.jsx)("div",{className:"chatbox__messages",children:b.map((function(e){return e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(U,{message:e},e.uuid),Object(n.jsx)(R,{},"".concat(e.uuid,"x"))]})}))}),Object(n.jsx)("div",{className:"chatbox__actions",children:t.actions&&t.actions.map((function(e){return Object(n.jsx)(P,{action:e},e.uuid)}))})]})},V={dispatch:function(e){console.error("store is not ready")}},H={apiUrl:"https://middi-9hsdz.ondigitalocean.app/api",habitColors:{hc1:"#FFADAD",hc2:"#FFD6A5",hc3:"#FDFFB6",hc4:"#CAFFBF",hc5:"#9BF6FF",hc6:"#A0C4FF",hc7:"#BDB2FF",hc8:"#FFC6FF"}},z=a(6);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var K=s.createElement("defs",null,s.createElement("style",null,".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#5b8dc9;}.cls-3{fill:url(#linear-gradient-2);}.cls-4{fill:#c7cdd8;}.cls-5{fill:url(#linear-gradient-3);}.cls-6{fill:#7ece67;}.cls-7{fill:#47566a;}"),s.createElement("linearGradient",{id:"linear-gradient",x1:64,y1:127,x2:64,y2:1,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#7aa8d7"}),s.createElement("stop",{offset:1,stopColor:"#96c8ea"})),s.createElement("linearGradient",{id:"linear-gradient-2",x1:64,y1:118.65,x2:64,y2:10.22,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#dde1e8"}),s.createElement("stop",{offset:1,stopColor:"#f3f4f5"})),s.createElement("linearGradient",{id:"linear-gradient-3",x1:64,y1:85,x2:64,y2:39,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#8cdd79"}),s.createElement("stop",{offset:1,stopColor:"#d4e6b6"}))),X=s.createElement("g",{id:"Protection"},s.createElement("path",{className:"cls-1",d:"M64,127c-29.3-8.2-50-36.1-50-68.33V15A96.74,96.74,0,0,0,64,1a96.72,96.72,0,0,0,50,14V58.67C114,91,93.25,118.81,64,127Z"}),s.createElement("path",{className:"cls-2",d:"M114,55.67v3c0,32-20.52,60.07-50,68.33-29.48-8.26-50-36.29-50-68.33v-3c0,32,20.52,60.07,50,68.33C93.48,115.74,114,87.71,114,55.67Z"}),s.createElement("path",{className:"cls-3",d:"M64,118.65c-24.84-8-42-32.36-42-60v-36A105,105,0,0,0,64,10.22a105.08,105.08,0,0,0,42,12.47v36C106,86.29,88.84,110.62,64,118.65Z"}),s.createElement("path",{className:"cls-4",d:"M106,55.67v3c0,27.62-17.16,52-42,60-24.84-8-42-32.36-42-60v-3c0,27.62,17.16,52,42,60C88.84,107.62,106,83.29,106,55.67Z"}),s.createElement("path",{className:"cls-4",d:"M106,22.69v3A105.08,105.08,0,0,1,64,13.22,105,105,0,0,1,22,25.69v-3A105,105,0,0,0,64,10.22,105.08,105.08,0,0,0,106,22.69Z"}),s.createElement("circle",{className:"cls-5",cx:64,cy:62,r:23}),s.createElement("path",{className:"cls-6",d:"M64,85A23,23,0,0,1,41.09,60a23,23,0,0,0,45.82,0A23,23,0,0,1,64,85Z"}),s.createElement("path",{className:"cls-4",d:"M64,89A23,23,0,0,1,41.09,64a23,23,0,0,0,45.82,0A23,23,0,0,1,64,89Z"}),s.createElement("path",{className:"cls-7",d:"M114,14A95.81,95.81,0,0,1,64.52.12C64.41.06,64-.2,63.29.23A95.78,95.78,0,0,1,14,14a1,1,0,0,0-1,1V58.67c0,32.44,20.87,61,50.75,69.31a1,1,0,0,0,.54,0C94.15,119.62,115,91.11,115,58.67V15A1,1,0,0,0,114,14Zm-1,44.69c0,31.43-20.13,59.05-49,67.27C35.15,117.72,15,90.1,15,58.67V16A98.08,98.08,0,0,0,64,2.19,98.08,98.08,0,0,0,113,16Z"}),s.createElement("path",{className:"cls-7",d:"M21.92,21.67a1,1,0,0,0-.94,1v36c0,27.76,17.56,52.83,42.71,61a1.09,1.09,0,0,0,.62,0C89.46,111.5,107,86.43,107,58.67v-36a1,1,0,0,0-.94-1A103.24,103.24,0,0,1,64.49,9.32a1.06,1.06,0,0,0-1,0A103.24,103.24,0,0,1,21.92,21.67Zm83.06,2v35c0,26.77-16.84,50.94-41,58.9-24.14-8-41-32.13-41-58.9v-35A105.26,105.26,0,0,0,64,11.38,105.26,105.26,0,0,0,105,23.63Z"}),s.createElement("path",{className:"cls-7",d:"M64,86A24,24,0,1,0,40,62,24,24,0,0,0,64,86Zm0-46A22,22,0,1,1,42,62,22,22,0,0,1,64,40Z"}),s.createElement("path",{className:"cls-7",d:"M59.28,70.72a1,1,0,0,0,1.44,0l16-16a1,1,0,0,0-1.44-1.44L60,68.56l-7.28-7.28a1,1,0,0,0-1.44,1.44Z"}));function Y(e,t){var a=e.title,c=e.titleId,n=J(e,["title","titleId"]);return s.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 128 128",ref:t,"aria-labelledby":c},n),K,void 0===a?s.createElement("title",{id:c},"Protection"):a?s.createElement("title",{id:c},a):null,X)}var q=s.forwardRef(Y),Q=(a.p,function(){var e=Object(s.useContext)(Ne).appState,t=Object(s.useState)({name:"",email:"",password:""}),a=Object(o.a)(t,2),l=a[0],r=a[1],i=Object(s.useState)(!1),d=Object(o.a)(i,2),b=d[0],p=d[1],j=Object(s.useState)(!1),m=Object(o.a)(j,2),h=m[0],O=m[1],f=Object(s.useState)(" "),g=Object(o.a)(f,2),y=g[0],C=g[1];Object(s.useEffect)((function(){e.eventEmitted===c.REGISTRATION_SUBMITTED&&v()}),[e.eventEmitted]);var x=function(e){r(Object(u.a)(Object(u.a)({},l),{},Object(z.a)({},e.target.name,e.target.value)))},v=function(){p(!0),fetch("".concat(H.apiUrl,"/auth/register"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){e.err?(p(!1),C(e.err.message)):(p(!1),O(!0),xe(l.name))}))};return Object(n.jsx)("div",{className:"register-form",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h3",{children:"\ud83d\udc64 Sign Up"}),b?Object(n.jsx)(E,{}):h?Object(n.jsx)("div",{className:"form__placeholder-success",children:Object(n.jsx)(q,{})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{children:["Nickname ",Object(n.jsx)("input",{name:"name",type:"text",onChange:x,placeholder:"What should I call you?"})]}),Object(n.jsxs)("label",{children:["Email ",Object(n.jsx)("input",{name:"email",type:"email",onChange:x,placeholder:"Used for logging in"})]}),Object(n.jsxs)("label",{children:["Password ",Object(n.jsx)("input",{name:"password",type:"password",placeholder:"Choose something strong",onChange:x})]})]}),!b&&!h&&Object(n.jsxs)("div",{className:"form__extra",children:[Object(n.jsx)("p",{className:"error",children:y}),Object(n.jsx)("a",{onClick:Ce,children:"Log In"})]})]})})}),$=function(){var e=Object(s.useContext)(Ne),t=e.appState,a=e.dispatch,l=Object(s.useState)({email:"",password:""}),r=Object(o.a)(l,2),i=r[0],d=r[1],b=Object(s.useState)(!1),p=Object(o.a)(b,2),j=p[0],m=p[1],O=Object(s.useState)(!1),f=Object(o.a)(O,2),g=f[0],y=f[1],C=Object(s.useState)(" "),x=Object(o.a)(C,2),v=x[0],S=x[1];Object(s.useEffect)((function(){t.eventEmitted===c.LOGIN_SUBMITTED&&T()}),[t.eventEmitted]);var w=function(e){d(Object(u.a)(Object(u.a)({},i),{},Object(z.a)({},e.target.name,e.target.value)))},T=function(){S(""),m(!0),fetch("".concat(H.apiUrl,"/auth/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){if(e.err)m(!1),S(e.err.message);else{var c=e.name;m(!1),y(!0),Ee(c,t)}a({type:h,payload:""})}))};return Object(n.jsx)("div",{className:"form login-form",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h3",{children:"\ud83d\udc64 Login"}),j?Object(n.jsx)(E,{}):g?Object(n.jsx)("div",{className:"form__placeholder-success",children:Object(n.jsx)(q,{})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{children:["Email ",Object(n.jsx)("input",{name:"email",type:"email",onChange:w})]}),Object(n.jsxs)("label",{children:["Password ",Object(n.jsx)("input",{name:"password",type:"password",onChange:w})]})]}),!j&&!g&&Object(n.jsxs)("div",{className:"form__extra",children:[Object(n.jsx)("p",{className:"error",children:v}),Object(n.jsx)("a",{onClick:ye,children:"Sign Up"})]})]})})};function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ae=s.createElement("defs",null,s.createElement("style",null,".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#4da67f;}.cls-3{fill:url(#linear-gradient-2);}.cls-4{fill:#c7cdd8;}.cls-5{fill:#47566a;}"),s.createElement("linearGradient",{id:"linear-gradient",x1:64,y1:127,x2:64,y2:1,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#6ab891"}),s.createElement("stop",{offset:1,stopColor:"#85cba9"})),s.createElement("linearGradient",{id:"linear-gradient-2",x1:64,y1:110,x2:64,y2:18,gradientUnits:"userSpaceOnUse"},s.createElement("stop",{offset:0,stopColor:"#dde1e8"}),s.createElement("stop",{offset:1,stopColor:"#f3f4f5"}))),ce=s.createElement("g",{id:"Done"},s.createElement("path",{className:"cls-1",d:"M127,64c0,5.44-5.14,10.13-6.48,15.15-1.39,5.19.68,11.81-2,16.36s-9.46,6.12-13.2,9.86-5.25,10.53-9.86,13.2-11.17.56-16.36,2c-5,1.34-9.71,6.48-15.15,6.48s-10.13-5.14-15.15-6.48c-5.19-1.39-11.81.68-16.36-2s-6.12-9.46-9.86-13.2-10.53-5.25-13.2-9.86S8.87,84.34,7.48,79.15C6.14,74.13,1,69.44,1,64S6.14,53.87,7.48,48.85C8.87,43.66,6.8,37,9.43,32.49s9.46-6.12,13.2-9.86,5.25-10.53,9.86-13.2,11.17-.56,16.36-1.95C53.87,6.14,58.56,1,64,1S74.13,6.14,79.15,7.48C84.34,8.87,91,6.8,95.51,9.43s6.12,9.46,9.86,13.2,10.53,5.25,13.2,9.86.56,11.17,2,16.36C121.86,53.87,127,58.56,127,64Z"}),s.createElement("path",{className:"cls-2",d:"M3,57.55A60.74,60.74,0,0,0,5.74,75.13C1.69,67.87-1.09,65.06,3,57.55Z"}),s.createElement("path",{className:"cls-2",d:"M120.21,80.71c-.72,4.9.73,10.69-1.64,14.8-2.67,4.61-9.46,6.12-13.2,9.86s-5.25,10.53-9.86,13.2-11.17.56-16.36,2c-5,1.34-9.71,6.48-15.15,6.48s-10.13-5.14-15.15-6.48c-5.19-1.39-11.81.68-16.36-2s-6.12-9.46-9.86-13.2-10.53-5.25-13.2-9.86c-2.37-4.11-.92-9.9-1.64-14.8a61,61,0,0,0,112.42,0Z"}),s.createElement("path",{className:"cls-2",d:"M122.26,75.13A60.74,60.74,0,0,0,125,57.55C129.07,65,126.33,67.82,122.26,75.13Z"}),s.createElement("path",{className:"cls-2",d:"M7.79,80.71a58.75,58.75,0,0,1-2-5.57A15.09,15.09,0,0,1,7.79,80.71Z"}),s.createElement("path",{className:"cls-2",d:"M122.26,75.14a58.75,58.75,0,0,1-2.05,5.57A15.09,15.09,0,0,1,122.26,75.14Z"}),s.createElement("circle",{className:"cls-3",cx:64,cy:64,r:46}),s.createElement("path",{className:"cls-4",d:"M64,18a46,46,0,0,1,45.9,49,46,46,0,0,0-91.8,0A46,46,0,0,1,64,18Z"}),s.createElement("polygon",{className:"cls-2",points:"56 85.66 37.17 66.83 42.83 61.17 56 74.34 85.17 45.17 90.83 50.83 56 85.66"}),s.createElement("path",{className:"cls-5",d:"M64,17a47,47,0,1,0,47,47A47.07,47.07,0,0,0,64,17Zm0,92a45,45,0,1,1,45-45A45,45,0,0,1,64,109Z"}),s.createElement("path",{className:"cls-5",d:"M124.39,54.52c-3.13-5.22-3.48-6.32-3.39-12.76.12-9.2-1.16-11.51-9.33-16.06-5.48-3.05-6.3-3.87-9.37-9.37-4.59-8.24-7-9.45-16.06-9.33-6.43.08-7.52-.25-12.76-3.39-8.07-4.83-10.88-4.84-19,0C49.29,6.75,48.19,7.09,41.76,7c-9.1-.12-11.47,1.09-16.06,9.33-3.05,5.48-3.87,6.3-9.37,9.37C8.14,30.26,6.89,32.57,7,41.76c.09,6.41-.24,7.51-3.39,12.76-4.83,8.07-4.84,10.88,0,19C6.74,78.7,7.09,79.8,7,86.24c-.12,9.2,1.16,11.51,9.33,16.06,5.48,3,6.3,3.87,9.37,9.37,4.6,8.26,7,9.45,16.06,9.33,6.43-.08,7.52.25,12.76,3.39,8.07,4.83,10.88,4.84,19,0,5.23-3.13,6.32-3.47,12.76-3.39,9.17.11,11.49-1.12,16.06-9.33,3-5.48,3.87-6.3,9.37-9.37,8.19-4.56,9.44-6.87,9.33-16.06-.09-6.41.24-7.51,3.39-12.76C129.22,65.41,129.23,62.6,124.39,54.52Zm-1.72,17.93c-3.32,5.54-3.76,7-3.67,13.82.11,8.45-.79,10.1-8.3,14.28-5.82,3.24-6.9,4.32-10.15,10.15-4.19,7.53-5.84,8.4-14.28,8.3-6.81-.09-8.26.35-13.82,3.67-7.38,4.43-9.46,4.46-16.9,0C50.76,119.8,49,119,43.4,119c-3.56,0-7.58.36-10.41-1.28-4.29-2.48-5.79-9.18-9.65-13S12.78,99.29,10.3,95,9.87,84.22,8.45,78.89C7.08,73.79,2,69,2,64s5.1-9.87,6.45-14.89C9.87,43.79,7.86,37.21,10.3,33s9.18-5.79,13-9.65,5.37-10.56,9.65-13,10.8-.43,16.12-1.85C54.21,7.08,59,2,64,2s9.87,5.1,14.89,6.45C84.22,9.87,90.79,7.86,95,10.3s5.79,9.18,9.65,13,10.56,5.37,13,9.65.43,10.79,1.85,16.12C120.92,54.21,126,59,126,64,126,66.9,124.31,69.72,122.67,72.45Z"}),s.createElement("path",{className:"cls-5",d:"M85.89,44.45a1.05,1.05,0,0,0-1.44,0L56,72.9,43.55,60.45a1.05,1.05,0,0,0-1.44,0c-6.06,6.06-6,5.79-6,6.38S34.93,66,55.28,86.38a1,1,0,0,0,1.44,0C93.93,49.17,91.85,51.46,91.85,50.83S91.94,50.5,85.89,44.45ZM56,84.21,38.61,66.83l4.22-4.22L55.28,75.06a1,1,0,0,0,1.44,0L85.17,46.61l4.22,4.22Z"}));function ne(e,t){var a=e.title,c=e.titleId,n=te(e,["title","titleId"]);return s.createElement("svg",ee({className:"icon-success",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 128 128",ref:t,"aria-labelledby":c},n),ae,void 0===a?s.createElement("title",{id:c},"Done"):a?s.createElement("title",{id:c},a):null,ce)}var se=s.forwardRef(ne),le=(a.p,function(e){var t=e.onColorSelect,a=Object(s.useState)(""),c=Object(o.a)(a,2),l=c[0],r=c[1],i=function(e){r(e.target.value),t(e)};return Object(n.jsxs)("div",{className:"color-select",children:["Color:",Object(n.jsx)("div",{className:"color-select__options",children:Object.values(H.habitColors).map((function(e){return Object(n.jsx)("label",{style:{backgroundColor:e},className:e===l?"color-select__option--selected":"color-select__option",children:Object(n.jsx)("input",{type:"radio",name:"color",value:e,onChange:i})},e)}))})]})}),re=function(){var e=Object(s.useContext)(Ne),t=e.appState,a=e.dispatch,l=Object(s.useState)({name:"",description:"",color:"",weeklyGoal:7}),r=Object(o.a)(l,2),i=r[0],d=r[1],b=Object(s.useState)(!1),p=Object(o.a)(b,2),j=p[0],m=p[1],O=Object(s.useState)(!1),f=Object(o.a)(O,2),g=f[0],y=f[1],C=Object(s.useState)(" "),x=Object(o.a)(C,2),v=x[0],S=x[1];Object(s.useEffect)((function(){t.eventEmitted===c.HABIT_FORM_SUBMITTED&&T()}),[t.eventEmitted]);var w=function(e){d(Object(u.a)(Object(u.a)({},i),{},Object(z.a)({},e.target.name,e.target.value)))},T=function(){S(""),m(!0),fetch("".concat(H.apiUrl,"/habits"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){if(e.err)m(!1),S(e.err.message);else{e.name;m(!1),y(!0),we()}a({type:h,payload:""})}))};return Object(n.jsx)("div",{className:"form add-habit-form",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("h3",{children:"\u2795 New Habit"}),j?Object(n.jsx)(E,{}):g?Object(n.jsx)("div",{className:"form__placeholder-success",children:Object(n.jsx)(se,{})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{children:["Name ",Object(n.jsx)("input",{name:"name",type:"text",onChange:w,placeholder:"Drink 3 glasses of water, Do 10 pushups..."})]}),Object(n.jsxs)("label",{children:["Description (optional) ",Object(n.jsx)("textarea",{name:"description",rows:4,onChange:w})]}),Object(n.jsx)(le,{onColorSelect:w}),Object(n.jsxs)("label",{children:["Weekly goal - how many times a week are you aiming to complete this goal?",Object(n.jsxs)("select",{onChange:w,children:[Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"6",children:"6"}),Object(n.jsx)("option",{value:"7",children:"7"})]})]})]}),!j&&!g&&Object(n.jsx)("div",{className:"form__extra",children:Object(n.jsx)("p",{className:"error",children:v})})]})})},ie=a(13),oe=a.n(ie),de=a(15);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var pe=s.createElement("g",{fillRule:"evenodd"},s.createElement("path",{d:"m206.01 270.15c-0.4904 0.032959-0.92281 0.33325-1.125 0.78125-8.0536 16.982-4.4494 33.265 3.875 47.719s21.345 27.249 32.344 37.812c21.201 20.25 22.189 50.039 16.781 77.219-0.001953 0.041626-0.001953 0.083374 0 0.125-4.0948 34.412-1.2505 74.136 26.625 99.125 11.164 10.307 22.526 23.743 28.719 38.25 6.1932 14.507 7.2814 29.95-2 44.844-0.01059 0.010254-0.020996 0.02063-0.03125 0.03125-2.1389 3.6132-4.7729 6.9105-7.875 9.7188-0.40057 0.30456-0.59537 0.80878-0.5036 1.3036 0.091736 0.49475 0.45441 0.89557 0.93756 1.0362 0.48315 0.14062 1.0043-0.00293 1.3473-0.37109 3.3147-3.0007 6.1395-6.5145 8.4062-10.344 9.7719-15.681 8.609-32.209 2.1875-47.25-6.4214-15.041-18.059-28.711-29.406-39.188-26.87-24.088-29.814-62.744-25.781-96.75 0.003632-0.030579-0.003632-0.063171 0-0.09375 5.4731-27.586 4.5271-58.464-17.562-79.562-10.978-10.544-23.811-23.218-31.875-37.219-8.0636-14.001-11.424-29.166-3.7812-45.281 0.20424-0.42569 0.16792-0.92767-0.095459-1.3196-0.2634-0.39185-0.71449-0.61505-1.1858-0.5867z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.664}),s.createElement("g",{fill:"#0f9fe9",strokeWidth:1.25},s.createElement("path",{d:"m183.44 266.75c4.2066 3.2293 5.7871 8.6728 6.3229 13.732 0.42108 2.2411 0.08403 4.5009 0.12222 6.7517 0.012146 1.6569 0.9433 3.9213 2.9756 3.4894 1.4317-0.37875 2.6522-1.3348 3.8556-2.1815 3.0625-2.4373 5.2817-6.2024 9.2349-7.3227 3.2787-0.63687 6.8911-0.67349 9.6198-2.8651 1.8596-1.3253 1.3887-4.2905-0.81999-4.9463-2.2778-1.0148-4.8821-1.3597-6.822-3.0555-4.986-3.3969-8.0917-8.832-10.204-14.354-1.1476-2.0228-4.1858-1.465-5.3343 0.27655-2.6887 3.1381-3.5448 7.805-7.3946 9.9141-0.48886 0.25879-1.0135 0.45181-1.5561 0.56125z"}),s.createElement("path",{d:"m213.6 88.11c41.599 59.781 33.625 137.34-17.799 173.12-51.424 35.784-126.92 16.308-168.52-43.474-41.599-59.781-33.625-137.34 17.799-173.12 51.424-35.784 126.92-16.308 168.52 43.474z"})),s.createElement("path",{d:"m313.85 284.21c-0.68506 0.024994-1.2394 0.56576-1.2812 1.25-1.3355 15.479-6.221 31.684-8.75 47.906s-2.6991 32.539 5.6562 48c0.019501 0.032135 0.040344 0.063385 0.0625 0.09375 10.912 16.655 28.412 25.851 45.031 35.531 16.619 9.6801 32.343 19.788 40.375 38 0.017517 0.053345 0.038391 0.10553 0.0625 0.15625 13.496 23.355 11.361 50.899 8.8125 77.094-1.8007 20.694 1.5239 43.348 17.094 58.812 8.9805 12.084 16.872 26.197 15.562 41.406-0.060425 0.73352 0.48526 1.3771 1.2188 1.4375 0.73349 0.060425 1.3771-0.48523 1.4375-1.2188 1.3993-16.255-6.9377-30.941-16.062-43.219-0.048889-0.045532-0.1011-0.08728-0.15625-0.125-14.909-14.682-18.205-36.53-16.438-56.844 2.5474-26.183 4.8366-54.347-9.0938-78.562-0.019287-0.043762-0.043121-0.081329-0.0625-0.125-8.4196-18.969-24.761-29.398-41.406-39.094-16.684-9.7179-33.685-18.753-44.125-34.688-7.9289-14.735-7.8287-30.31-5.3438-46.25 2.4898-15.971 7.412-32.224 8.7812-48.094 0.039795-0.38388-0.088837-0.76614-0.3526-1.0479-0.26376-0.28174-0.63672-0.43527-1.0224-0.42084z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.664}),s.createElement("g",{fill:"#ff007f",strokeWidth:1.25},s.createElement("path",{d:"m307.17 262.08c1.6083 5.0534-0.20355 10.424-2.6535 14.883-0.93445 2.0801-2.5018 3.7425-3.7561 5.6118-0.9364 1.367-1.4654 3.7575 0.44943 4.5638 1.3915 0.50687 2.9394 0.41922 4.4108 0.41162 3.9059-0.25134 7.878-2.0743 11.763-0.73584 3.055 1.3499 6.041 3.3832 9.5326 3.1428 2.2834-0.025665 3.5905-2.7286 2.1521-4.5284-1.29-2.134-3.2307-3.9047-3.8544-6.4046-2.1524-5.6361-1.5972-11.871-0.17716-17.61 0.21338-2.3158-2.599-3.5933-4.5364-2.8198-3.9993 1.0401-7.3677 4.3819-11.732 3.9141-0.5491-0.066803-1.09-0.20801-1.5978-0.42813z"}),s.createElement("path",{d:"m433.97 132.67c0 72.83-50.846 131.94-113.5 131.94-62.649 0-113.5-59.109-113.5-131.94 0-72.83 50.846-131.94 113.5-131.94 62.649 0 113.5 59.109 113.5 131.94z"})),s.createElement("path",{d:"m455.23 287.34c-0.39536 0.043396-0.75064 0.26117-0.96875 0.59375-17.851 26.257-28.738 60.817-13.719 91.25 0.029327 0.059448 0.032959 0.12811 0.0625 0.1875 9.21 29.056 12.589 63.692-7.3125 88.812-0.021515 0.020142-0.042358 0.040985-0.0625 0.0625-18.063 26.034-19.756 58.751-11.188 88.281 7.4517 29.836-6.7578 58.159-23.062 82.688-0.01059 0.010254-0.020996 0.02063-0.03125 0.03125l-2.5312 3.9688c-0.39694 0.62134-0.21506 1.4468 0.40625 1.8438 0.62131 0.39697 1.4468 0.21509 1.8438-0.40625l2.5312-3.9688c16.433-24.723 31.146-53.853 23.406-84.844 4.88e-4 -0.020813 4.88e-4 -0.041687 0-0.0625-8.396-28.935-6.6984-60.761 10.812-86 20.713-26.216 17.03-61.937 7.6562-91.406-0.026276-0.06488-0.057617-0.12756-0.09375-0.1875-14.562-29.295-4.058-62.923 13.5-88.75 0.30579-0.43054 0.32846-1.0011 0.057739-1.4545-0.27069-0.45343-0.78366-0.70416-1.3077-0.63925z",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.664}),s.createElement("g",{fill:"#007fff",strokeWidth:1.25},s.createElement("path",{d:"m454.65 269.53c0.022003 5.3031-3.3146 9.8855-6.9868 13.406-1.5142 1.705-3.5074 2.822-5.2637 4.2302-1.3026 1.024-2.523 3.1466-0.93722 4.489 1.176 0.90015 2.6792 1.2799 4.0854 1.713 3.8021 0.92932 8.1377 0.37891 11.444 2.8188 2.5109 2.2025 4.7514 5.0364 8.1548 5.8521 2.1863 0.65897 4.2426-1.5288 3.4089-3.6766-0.5921-2.4223-1.9138-4.6927-1.7606-7.2647-0.36664-6.022 2.0294-11.805 5.1022-16.856 0.89679-2.1458-1.4043-4.2065-3.4844-4.0484-4.1273-0.20468-8.3416 1.9756-12.366 0.22284-0.50394-0.22809-0.97775-0.52475-1.3964-0.88675z"}),s.createElement("path",{d:"m614.37 184.02c-21.8 69.491-88.008 110.67-147.78 91.918-59.777-18.753-90.598-90.371-68.798-159.86 21.8-69.491 88.008-110.67 147.78-91.918 59.777 18.753 90.598 90.371 68.798 159.86z"})));function je(e,t){var a=e.title,c=e.titleId,n=be(e,["title","titleId"]);return s.createElement("svg",ue({className:"balloons",viewBox:"0 0 640 480",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},n),a?s.createElement("title",{id:c},a):null,pe)}var me=s.forwardRef(je),he=(a.p,function(e){var t=e.habit,a=Object(s.useContext)(Ne).dispatch,c=Object(s.useState)(""),l=Object(o.a)(c,2),r=l[0],i=l[1],d=Object(s.useState)(!1),u=Object(o.a)(d,2),b=u[0],p=u[1],j=Object(s.useState)(null),m=Object(o.a)(j,2),h=m[0],O=m[1],f=Object(s.useState)(!1),C=Object(o.a)(f,2),x=C[0],E=C[1];Object(s.useEffect)((function(){var e=Object.values(H.habitColors),a=Object.keys(H.habitColors),c=e.indexOf(t.color);i(a[c]);var n=t.CompletedTasks.find((function(e){return Object(de.a)(new Date(e.dateCompleted),new Date)}));n&&(p(!0),O(n))}),[]);return Object(n.jsxs)("div",{className:"habit-list__item habit-list__item--".concat(r),children:[t.name,Object(n.jsxs)("div",{children:[b&&Object(n.jsx)("p",{children:"Nice job! \ud83c\udf89"}),Object(n.jsx)("label",{children:Object(n.jsx)(oe.a,{checked:b,onChange:function(e){if(h)console.log("Deleteing..."),Te(h,"DELETE").then((function(t){p(e),a({type:y,payload:h})}));else{console.log("Creating...");var c={HabitId:t.id,dateCompleted:Date.now().toString()};Te(c,"POST").then((function(t){E(e),p(e),O(t.completedTask),a({type:g,payload:t.completedTask})}))}},onColor:H.habitColors[r],handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48})})]}),x&&Object(n.jsx)(me,{})]})}),Oe=a(14),fe=function(){var e=Object(s.useContext)(Ne).appState;return Object(n.jsxs)("div",{className:"habit-list",children:[Object(n.jsx)("p",{className:"habit-list__title",children:Object(Oe.a)(new Date,"EEEE, do LLLL yyyy")}),Object(n.jsx)("p",{className:"habit-list__subtitle",children:"Toggle a habit to complete it for today"}),e.habits.map((function(e){return Object(n.jsx)(he,{habit:e},e.id)}))]})},ge=function(){V.dispatch({type:j,payload:{messageClass:"message--component",uuid:Object(b.a)(),sender:"bot",text:null,delay:1e3,showLoader:!1,Component:re}}),V.dispatch({type:m,payload:[{uuid:Object(b.a)(),label:"Submit",callback:function(){V.dispatch({type:h,payload:c.HABIT_FORM_SUBMITTED})}}]})},ye=function(){V.dispatch({type:j,payload:{messageClass:"message--component",uuid:Object(b.a)(),sender:"bot",text:null,delay:1e3,showLoader:!1,Component:Q}}),V.dispatch({type:m,payload:[{uuid:Object(b.a)(),label:"Submit",callback:function(){V.dispatch({type:h,payload:c.REGISTRATION_SUBMITTED})}}]})},Ce=function(){V.dispatch({type:j,payload:{messageClass:"message--component",uuid:Object(b.a)(),sender:"bot",text:null,delay:1e3,showLoader:!1,Component:$}}),V.dispatch({type:m,payload:[{uuid:Object(b.a)(),label:"Submit",callback:function(){V.dispatch({type:h,payload:c.LOGIN_SUBMITTED})}}]})},xe=function(e){V.dispatch({type:j,payload:{messageClass:"message--inital",uuid:Object(b.a)(),sender:"bot",text:"Nice to meet you ".concat(e,"! We're on our way to building healthy habits \ud83d\ude80"),delay:1500,showLoader:!1}}),V.dispatch({type:j,payload:{messageClass:"message--grouped",sender:"bot",text:"First thing's first though, let's get a habit set up for you to track",delay:2500,showLoader:!0,uuid:Object(b.a)(),dispatchOnSend:{type:"ACTIONS_SET",payload:[{uuid:Object(b.a)(),label:"Add a habit",callback:ge}]}}})},Ee=function(e,t){var a=[{messageClass:"message--initial",sender:"bot",text:"Welcome back ".concat(e,"! Good to see you again \ud83d\ude01"),delay:1500,showLoader:!1,uuid:Object(b.a)()},{messageClass:"message--grouped",sender:"bot",text:"How can I help you today?",delay:1500,showLoader:!0,uuid:Object(b.a)(),dispatchOnSend:{type:"ACTIONS_SET",payload:[{uuid:Object(b.a)(),label:"View my habits",callback:ge},{uuid:Object(b.a)(),label:"Add a habit",callback:ge}]}}],c=Object(u.a)(Object(u.a)({},t),{},{auth:{loggedIn:!0,name:e},messages:[].concat(Object(d.a)(t.messages),a)});V.dispatch({type:O,payload:c})},ve={messageClass:"message--grouped",sender:"bot",text:"How can I help you?",delay:1500,showLoader:!0,uuid:Object(b.a)(),dispatchOnSend:{type:"ACTIONS_SET",payload:[{uuid:Object(b.a)(),label:"Complete a habit",callback:function(){V.dispatch({type:j,payload:{messageClass:"message--component",uuid:Object(b.a)(),sender:"bot",text:null,delay:1e3,showLoader:!1,Component:fe}}),V.dispatch({type:m,payload:[{uuid:Object(b.a)(),label:"Save",callback:function(){V.dispatch({type:j,payload:ve})}}]})}},{uuid:Object(b.a)(),label:"View my weekly progress",callback:ge}]}},Se=function(){return[{messageClass:"message--initial",sender:"bot",text:"Hi!",delay:500,showLoader:!1,uuid:Object(b.a)()},{messageClass:"message--grouped",sender:"bot",text:"My name's Middi. I'm here to help you create healthy habits while working from home.",delay:2e3,showLoader:!0,uuid:Object(b.a)()},{messageClass:"message--grouped",sender:"bot",text:"You can visit any time and I'll help you measure your habit progress.",delay:5e3,showLoader:!0,uuid:Object(b.a)()},{messageClass:"message--grouped",sender:"bot",text:"Ready to get started?",delay:7e3,showLoader:!0,uuid:Object(b.a)(),dispatchOnSend:{type:"ACTIONS_SET",payload:[{uuid:Object(b.a)(),label:"Log in",callback:Ce},{uuid:Object(b.a)(),label:"Sign up",callback:ye}]}}]},we=function(){return fetch("".concat(H.apiUrl,"/habits"),{credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.err?console.log(e.error):V.dispatch({type:f,payload:e.habits})}))},Te=function(e,t){return fetch("".concat(H.apiUrl,"/completed-tasks"),{credentials:"include",method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},Ne=Object(s.createContext)(),_e=function(){var e=Object(s.useReducer)(C,x),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(s.useState)(!0),r=Object(o.a)(l,2),i=r[0],d=r[1],j=function(){(function(e){return fetch("".concat(H.apiUrl,"/auth/auth-user"),{credentials:"include"}).then((function(e){return e.json()})).then((function(t){var a;t.user?(V.dispatch({type:O,payload:Object(u.a)(Object(u.a)({},e),{},{messages:(a=t.user.name,[{messageClass:"message--initial",sender:"bot",text:"Hi ".concat(a,"! Good to see you again \ud83d\ude42"),delay:500,showLoader:!1,uuid:Object(b.a)()},ve])})}),V.dispatch({type:p,payload:{loggedIn:!0,name:t.user.name}})):V.dispatch({type:O,payload:Object(u.a)(Object(u.a)({},e),{},{messages:Se()})})})).catch((function(t){V.dispatch({type:O,payload:Object(u.a)(Object(u.a)({},e),{},{messages:Se()})})}))})(a).then((function(){we()})).finally((function(){return d(!1)}))};return Object(s.useEffect)((function(){V.dispatch=function(e){return c(e)},Object.freeze(V),j()}),[]),Object(n.jsx)(Ne.Provider,{value:{appState:a,dispatch:c},children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("header",{className:"header",children:"Middi"}),!i&&Object(n.jsx)(G,{loggedIn:!1})]})})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(_e,{})}),document.getElementById("root")),Ie()}},[[24,1,2]]]);
//# sourceMappingURL=main.4986ec32.chunk.js.map