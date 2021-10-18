(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={item:"Contacts_item__2Gmj9",button:"Contacts_button__3zKln"}},12:function(e,t,n){e.exports={section:"Section_section__2aN0g",title:"Section_title__2oIwe"}},13:function(e,t,n){e.exports={input:"Filter_input__3K0YO",label:"Filter_label__23XmH"}},21:function(e,t,n){e.exports={app:"App_app__1tA9O"}},23:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=(n(28),n(3)),s=n(18),u=n(2),l=n(19),b=n(15),j="contact/add",d="contact/delete",m="contact/changeFilter",p=Object(u.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=function(){return alert("".concat(r.name," is already in contacts!")),Object(b.a)(e)};switch(n){case j:console.log(r);var c=e.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}));return c?a():[].concat(Object(b.a)(e),[r]);case d:return e.filter((function(e){return e.id!==r}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return n===m?r:e}}),f=n(14),O=n(20),h={key:"contacts",storage:n.n(O).a,blacklist:["filter"]},_=Object(u.combineReducers)({contacts:Object(f.a)(h,p)}),x=Object(u.createStore)(_,Object(l.composeWithDevTools)()),v={store:x,persistor:Object(f.b)(x)},g=n(21),y=n.n(g),C=n(16),N=n(5),w=n.n(N),k=n(22),S=n.n(k),A=function(e){return{type:j,payload:e}},D=function(e){return{type:d,payload:e}},F=function(e){return{type:m,payload:e}},I=n(1),U=Object(i.b)(null,(function(e){return{addUser:function(t){return e(A(t))}}}))((function(e){var t=e.addUser,n=Object(r.useState)(""),a=Object(C.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(C.a)(i,2),u=s[0],l=s[1],b=function(e){var t=e.target,n=t.value;switch(t.name){case"name":o(n);break;case"number":l(n);break;default:return}};return Object(I.jsxs)("form",{className:w.a.form,onSubmit:function(e){e.preventDefault(),t({name:c,number:u,id:S.a.generate()}),o(""),l("")},children:[Object(I.jsxs)("label",{children:["Name:",Object(I.jsx)("input",{type:"text",name:"name",className:w.a.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,value:c})]}),Object(I.jsxs)("label",{children:["Number:",Object(I.jsx)("input",{type:"tel",name:"number",className:w.a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,value:u})]}),Object(I.jsx)("button",{type:"submit",className:w.a.btn,children:"Add contact"})]})})),z=n(11),L=n.n(z),R=function(e){var t=e.name,n=e.id,r=e.number,a=e.onRemoveUser;return Object(I.jsxs)("li",{className:L.a.item,children:[Object(I.jsxs)("span",{children:[t,": "]}),r,Object(I.jsx)("button",{type:"button",className:L.a.button,onClick:function(){return a(n)},children:"Delete"})]})},J=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},Z=Object(i.b)((function(e){var t=e.contacts,n=t.items,r=t.filter;return{contacts:J(n,r)}}),(function(e){return{removeUser:function(t){return e(D(t))}}}))((function(e){var t=e.contacts,n=e.removeUser;return Object(I.jsx)(I.Fragment,{children:t.length>0&&Object(I.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(I.jsx)(R,{id:t,name:r,number:a,onRemoveUser:function(){return n(t)}},t)}))})})})),q=n(12),B=n.n(q),E=function(e){var t=e.children,n=e.title;return Object(I.jsxs)("div",{className:B.a.section,children:[Object(I.jsx)("h2",{className:B.a.title,children:n.toUpperCase()}),t]})},G=n(13),K=n.n(G),M=Object(i.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{setFilter:function(t){return e(F(t.target.value))}}}))((function(e){var t=e.filter,n=e.setFilter;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("label",{className:K.a.label,children:["Find contacts by name:",Object(I.jsx)("input",{type:"text",name:"filter",className:K.a.input,onChange:n,value:t})]})})})),W=n(23),Y=n.n(W),H=function(e){var t=e.children;return Object(I.jsx)("div",{className:Y.a.Container,children:t})},P=function(){return Object(I.jsx)("div",{className:y.a.app,children:Object(I.jsxs)(H,{children:[Object(I.jsx)(E,{title:"Phonebook",children:Object(I.jsx)(U,{})}),Object(I.jsxs)(E,{title:"Contacts",children:[Object(I.jsx)(M,{}),Object(I.jsx)(Z,{})]})]})})};o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(i.a,{store:v.store,children:Object(I.jsx)(s.a,{loading:null,persistor:v.persistor,children:Object(I.jsx)(P,{})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"DataInput_form__1El21",number:"DataInput_number__2m9S-",name:"DataInput_name__2_neu DataInput_number__2m9S-",btn:"DataInput_btn__3YWIG"}}},[[46,1,2]]]);
//# sourceMappingURL=main.f5ebbe4d.chunk.js.map