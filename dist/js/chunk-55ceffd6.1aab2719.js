(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55ceffd6"],{"23e8":function(r,e,t){"use strict";var o=t("b0d3"),s=t.n(o);s.a},"62cc":function(r,e,t){"use strict";t.r(e);var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[r._v("Login")]),t("b-form",{on:{submit:function(e){return e.preventDefault(),r.onLogin(e)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:r.validateState("username")},model:{value:r.$v.form.username.$model,callback:function(e){r.$set(r.$v.form.username,"$model",e)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[r._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:r.validateState("password")},model:{value:r.$v.form.password.$model,callback:function(e){r.$set(r.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[r._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[r._v("Login")]),t("div",{staticClass:"mt-2"},[r._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[r._v(" Register in here")])],1)],1),r.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[r._v(" Login failed: "+r._s(r.form.submitError)+" ")]):r._e()],1)},s=[],a=(t("96cf"),t("1da1")),n=t("b5ae"),i={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:n["required"]},password:{required:n["required"]}}},methods:{validateState:function(r){var e=this.$v.form[r],t=e.$dirty,o=e.$error;return t?!o:null},Login:function(){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.axios.post(r.$root.store.server_domain+"/login",{username:r.form.username,password:r.form.password});case 3:e.sent,console.log(r.$root.store.login),r.$root.store.login(r.form.username),r.$router.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0.response),r.form.submitError=e.t0.response.data.message;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=i,m=(t("23e8"),t("2877")),l=Object(m["a"])(u,o,s,!1,null,"6ea77d16",null);e["default"]=l.exports},b0d3:function(r,e,t){}}]);
//# sourceMappingURL=chunk-55ceffd6.1aab2719.js.map