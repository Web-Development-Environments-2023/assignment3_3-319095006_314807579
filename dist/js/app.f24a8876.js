(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-11e813ac":"9000288c","chunk-1b465b89":"83e4a08e","chunk-2d0c19e3":"c20d676f","chunk-2d0da96f":"30664114","chunk-2d0e6711":"100bebb3","chunk-2d23822a":"52238b04","chunk-46fc1ccd":"fa9d3ac4","chunk-489850bb":"503c09dd"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-11e813ac":1,"chunk-1b465b89":1,"chunk-46fc1ccd":1,"chunk-489850bb":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-11e813ac":"b25b9f0d","chunk-1b465b89":"c879c876","chunk-2d0c19e3":"31d6cfe0","chunk-2d0da96f":"31d6cfe0","chunk-2d0e6711":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-46fc1ccd":"e0d4fc32","chunk-489850bb":"8435a9eb"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],m.parentNode.removeChild(m),r(o)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0653":function(e,t,r){"use strict";var n=r("f26a"),a=r.n(n);a.a},"28dc":function(e,t,r){"use strict";var n=r("aec2"),a=r.n(n);a.a},"305c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),r("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "),r("router-link",{attrs:{to:{name:"about"}}},[e._v("About")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?r("span",[e._v(" "+e._s(e.$root.store.username)+": "),r("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| "),r("b-dropdown",{attrs:{text:"Personal"}},[r("b-dropdown-item",{attrs:{to:{name:"myRecipes"}}},[e._v("My Recipes")]),r("b-dropdown-item",{attrs:{to:{name:"myFavorites"}}},[e._v("My Favorites")]),r("b-dropdown-item",{attrs:{to:{name:"myFamilyRecipes"}}},[e._v(" My Family Recipes")])],1),e._v("| "),r("b-button",{on:{click:e.showModal}},[e._v("New Recipe")]),e._v("| "),r("b-modal",{attrs:{title:"Add a New Recipe"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[r("b-button",{on:{click:e.hideModal}},[e._v("Close")]),r("b-button",{on:{click:e.onSave}},[e._v("Save")])]},proxy:!0}]),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[r("NewRecipe",{ref:"NewRecipe"})],1)],1):r("span",[e._v(" Hello Guest: "),r("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),r("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),r("router-view")],1)},i=[],o=r("6aac"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Add a New Recipe")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onCreate(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("b-form-group",{attrs:{id:"input-group-recipeName","label-cols-sm":"3",label:"Recipe Name:","label-for":"recipeName"}},[r("b-form-input",{attrs:{id:"recipeName",type:"text",state:e.validateState("recipeName")},model:{value:e.$v.form.recipeName.$model,callback:function(t){e.$set(e.$v.form.recipeName,"$model",t)},expression:"$v.form.recipeName.$model"}}),e.$v.form.recipeName.required?e._e():r("b-form-invalid-feedback",[e._v(" Recipe name is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Image","label-cols-sm":"3",label:"Image:","label-for":"Image"}},[r("b-form-input",{attrs:{id:"Image",type:"text",state:e.validateState("Image")},model:{value:e.$v.form.Image.$model,callback:function(t){e.$set(e.$v.form.Image,"$model",t)},expression:"$v.form.Image.$model"}}),e.$v.form.Image.required?e._e():r("b-form-invalid-feedback",[e._v(" Image is required ")])],1),r("b-form-group",{attrs:{id:"input-group-readyInMinutes","label-cols-sm":"3",label:"Ready In Minutes:","label-for":"readyInMinutes"}},[r("b-form-input",{attrs:{id:"readyInMinutes",type:"text",state:e.validateState("readyInMinutes")},model:{value:e.$v.form.readyInMinutes.$model,callback:function(t){e.$set(e.$v.form.readyInMinutes,"$model",t)},expression:"$v.form.readyInMinutes.$model"}}),e.$v.form.readyInMinutes.required?e.$v.form.readyInMinutes.decimal?e._e():r("b-form-invalid-feedback",[e._v(" Ready in minutes should be a number ")]):r("b-form-invalid-feedback",[e._v(" Ready in minutes is required ")])],1),r("b-form-group",{attrs:{id:"input-group-vegetarian","label-cols-sm":"3",label:"Vegetarian:","label-for":"vegetarian"}},[r("b-form-checkbox",{attrs:{id:"vegetarian",type:"checkbox",state:e.validateState("vegetarian")},model:{value:e.vegetarian_isChecked,callback:function(t){e.vegetarian_isChecked=t},expression:"vegetarian_isChecked"}},[e._v("vegetarian")])],1),r("b-form-group",{attrs:{id:"input-group-vegan","label-cols-sm":"3",label:"Vegan:","label-for":"vegan"}},[r("b-form-checkbox",{attrs:{id:"vegan",type:"checkbox",state:e.validateState("vegan")},model:{value:e.vegan_isChecked,callback:function(t){e.vegan_isChecked=t},expression:"vegan_isChecked"}},[e._v("vegan")])],1),r("b-form-group",{attrs:{id:"input-group-gluten_free","label-cols-sm":"3",label:"Gluten Free:","label-for":"gluten_free"}},[r("b-form-checkbox",{attrs:{id:"gluten_free",type:"checkbox",state:e.validateState("gluten_free")},model:{value:e.gluten_free_isChecked,callback:function(t){e.gluten_free_isChecked=t},expression:"gluten_free_isChecked"}},[e._v("gluten free")])],1),r("b-form-group",{attrs:{id:"input-group-ingredients","label-cols-sm":"3",label:"Ingredients:","label-for":"ingredients"}},[r("b-form-input",{attrs:{id:"ingredients",type:"text",state:e.validateState("ingredients")},model:{value:e.$v.form.ingredients.$model,callback:function(t){e.$set(e.$v.form.ingredients,"$model",t)},expression:"$v.form.ingredients.$model"}}),e.$v.form.ingredients.required?e._e():r("b-form-invalid-feedback",[e._v(" Ingredients is required ")])],1),r("b-form-group",{attrs:{id:"input-group-instructions","label-cols-sm":"3",label:"Instructions:","label-for":"instructions"}},[r("b-form-input",{attrs:{id:"instructions",type:"text",state:e.validateState("instructions")},model:{value:e.$v.form.instructions.$model,callback:function(t){e.$set(e.$v.form.instructions,"$model",t)},expression:"$v.form.instructions.$model"}}),e.$v.form.instructions.required?e._e():r("b-form-invalid-feedback",[e._v(" Instructions is required ")])],1),r("b-form-group",{attrs:{id:"input-group-meals","label-cols-sm":"3",label:"Meals:","label-for":"meals"}},[r("b-form-input",{attrs:{id:"meals",type:"text",state:e.validateState("meals")},model:{value:e.$v.form.meals.$model,callback:function(t){e.$set(e.$v.form.meals,"$model",t)},expression:"$v.form.meals.$model"}}),e.$v.form.meals.required?e.$v.form.meals.decimal?e._e():r("b-form-invalid-feedback",[e._v(" Meals should be a number ")]):r("b-form-invalid-feedback",[e._v(" Meals is required ")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v("recipe save failed:"+e._s(e.form.submitError))]):e._e()],1)},c=[],u=(r("96cf"),r("1da1")),l=r("c3e6"),d=r("b5ae"),m={components:{BFormCheckbox:l["a"]},name:"NewRecipe",data:function(){return{vegetarian_isChecked:!1,gluten_free_isChecked:!1,vegan_isChecked:!1,form:{recipeName:"",Image:"",readyInMinutes:"",vegetarian:"",vegan:"",gluten_free:"",ingredients:"",instructions:"",meals:"",submitError:void 0},errors:[],validated:!1,isChecked:!1}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},saveRecipe:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.form.$touch(),!e.$v.form.$anyError){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.axios.post(e.$root.store.server_domain+"/users/newRecipe",{title:e.form.recipeName,image:e.form.Image,readyInMinutes:e.form.readyInMinutes,vegetarian:e.form.vegetarian,vegan:e.form.vegan,gluten_free:e.form.gluten_free,ingredients:e.form.ingredients,instructions:e.form.instructions,meals:e.form.meals},{withCredentials:!0});case 6:t.sent,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[3,9]])})))()}},validations:{form:{recipeName:{required:d["required"]},Image:{},readyInMinutes:{required:d["required"],decimal:d["decimal"]},vegetarian:{},vegan:{},gluten_free:{},ingredients:{required:d["required"]},instructions:{required:d["required"]},meals:{required:d["required"],decimal:d["decimal"]}}}},f=m,p=r("2877"),v=Object(p["a"])(f,s,c,!1,null,"9a24e41c",null),b=v.exports,g={name:"App",components:{BModal:o["a"],NewRecipe:b},data:function(){return{modalVisible:!1}},methods:{onSave:function(){this.$refs.NewRecipe.saveRecipe()},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},showModal:function(){this.modalVisible=!0},hideModal:function(){this.modalVisible=!1}}},h=g,_=(r("5c0b"),Object(p["a"])(h,a,i,!1,null,null,null)),k=_.exports,y=r("a7fe"),$=r.n(y),w=r("bc3a"),x=r.n(w),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),r("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Randome Recipes"}}),e.$root.store.username?e._e():r("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(!e.$root.store.username)+" "),r("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)},C=[],I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),r("b-row",e._l(e.recipes,(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},M=[],S=r("2909"),q=r("832a"),N={name:"RecipePreviewList",components:{RecipePreview:q["a"]},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/getRandomRecipes");case 3:n=t.sent,console.log(n.data),a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(S["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},j=N,O=(r("0653"),Object(p["a"])(j,I,M,!1,null,"003eb7c2",null)),E=O.exports,P={components:{RecipePreviewList:E}},L=P,F=(r("8574"),Object(p["a"])(L,R,C,!1,null,"cd02df54",null)),T=F.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},V=[],B={},D=Object(p["a"])(B,A,V,!1,null,null,null),H=D.exports,G=[{path:"/",name:"main",component:T},{path:"/register",name:"register",component:function(){return r.e("chunk-489850bb").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return r.e("chunk-46fc1ccd").then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-1b465b89").then(r.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e("chunk-11e813ac").then(r.bind(null,"6619"))}},{path:"/users/myRecipes",name:"myRecipes",component:function(){return r.e("chunk-2d23822a").then(r.bind(null,"fda7"))}},{path:"/users/favorites",name:"myFavorites",component:function(){return r.e("chunk-2d0da96f").then(r.bind(null,"6bf3"))}},{path:"/about",name:"about",component:function(){return r.e("chunk-2d0c19e3").then(r.bind(null,"478b"))}},{path:"/users/myFamilyRecipes",name:"myFamilyRecipes",component:function(){return r.e("chunk-2d0e6711").then(r.bind(null,"9983"))}},{path:"*",name:"notFound",component:H}],U=G,J=r("8c4f"),K=r("2b27"),Y=r.n(K),z=r("1dce"),Q=r.n(z),W=(r("f9e3"),r("2dd8"),r("1073")),X=r("cbd0"),Z=r("b1fc"),ee=r("7049"),te=r("a7e2"),re=r("f9bc"),ne=r("44d4"),ae=r("cca8"),ie=r("51c2"),oe=r("498a");n["default"].use(J["a"]),n["default"].use(Y.a);var se=new J["a"]({routes:U});[W["a"],X["a"],Z["a"],ee["a"],te["a"],re["a"],ne["a"],ae["a"],ie["a"],oe["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(Q.a),x.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),x.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use($.a,x.a),n["default"].config.productionTip=!1;var ce={username:localStorage.username,server_domain:"http://127.0.0.1:3000",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ce),new n["default"]({router:se,data:function(){return{store:ce}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"832a":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[r("div",{staticClass:"recipe-body"},[e.image_load?r("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),r("div",{staticClass:"recipe-footer"},[r("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),r("ul",{staticClass:"recipe-overview"},[r("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),r("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},a=[],i={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},o=i,s=(r("28dc"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,"0275d809",null);t["a"]=c.exports},8574:function(e,t,r){"use strict";var n=r("305c"),a=r.n(n);a.a},"9c0c":function(e,t,r){},aec2:function(e,t,r){},f26a:function(e,t,r){}});
//# sourceMappingURL=app.f24a8876.js.map