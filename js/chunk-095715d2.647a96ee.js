(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095715d2"],{a55b:function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",[r("div",{staticClass:"login_form"},[r("b-form-group",{attrs:{id:"input-group-2",label:"帳號:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",placeholder:"請輸入帳號",required:""},model:{value:a.form.username,callback:function(e){a.$set(a.form,"username",e)},expression:"form.username"}})],1),r("label",{attrs:{for:"text-password"}},[a._v("密碼 : ")]),r("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block",placeholder:"請輸入密碼",required:""},model:{value:a.form.password,callback:function(e){a.$set(a.form,"password",e)},expression:"form.password"}}),r("div",{staticClass:"button",staticStyle:{"margin-top":"30px"}},[r("b-button",{attrs:{type:"submit",variant:"primary",size:"lg"},on:{click:a.handleLogin}},[a._v("送出")])],1)],1)])},o=[],s=r("a78e"),n=r.n(s),i={data:function(){return{form:{email:"",username:"",password:""}}},methods:{handleLogin:function(){var a="asdsadsafASFadfsaf",e=this.form.username,r=this.form.password;""!==e&&""!==r?this.form.token=a:alert("帳號密碼不能為空"),n.a.set("login",JSON.stringify(this.form),{expires:1}),console.log(this.form),n.a.get("login")&&this.form.token&&(alert("------get ------"),this.$router.push({name:"Dashboard"}))},removeCookie:function(){n.a.remove("login")}}},l=i,f=(r("f7a6"),r("2877")),u=Object(f["a"])(l,t,o,!1,null,"8cce5f2a",null);e["default"]=u.exports},a6fa:function(a,e,r){},f7a6:function(a,e,r){"use strict";var t=r("a6fa"),o=r.n(t);o.a}}]);
//# sourceMappingURL=chunk-095715d2.647a96ee.js.map