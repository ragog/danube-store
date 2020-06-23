webpackJsonp([1],{0:function(t,i){},BLEX:function(t,i){},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("7+uW"),s={data:function(){return{items:[{id:1,title:"This book",author:"this author"},{id:2,title:"That book",author:"that author"}],id:"books"}},mounted:function(){this.pullItems()},methods:{pullItems:function(){var t=this;this.$http.get("/api/books").then(function(i){t.items=i.body},function(t){console.log(t)})},navigateToMessage:function(t){var i=this;this.$router.push({path:"/books/"+t}).catch(function(t){i.$router.push({path:"/"})})}}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"shop"},[a("div",{staticClass:"special-offer"}),t._v(" "),a("div",{staticClass:"shop-content"},[a("h2",[t._v("Top sellers")]),t._v(" "),a("ul",t._l(t.items,function(i){return a("li",{key:i.TITLE,staticClass:"preview",on:{click:function(a){return t.navigateToMessage(i.id)}}},[a("div",{staticClass:"preview-title"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"preview-author"},[t._v("by "+t._s(i.author))]),t._v(" "),a("p",[t._v("★★★★☆")])])}),0)])])},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(t){a("BLEX")},"data-v-573233d6",null).exports,n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"category-title-wrapper"},[a("h2",[t._v("Books")])]),t._v(" "),a("ul",[a("li",[t._v("Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Novels & Stories")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Erotic Novels")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Horror")])])])]),t._v(" "),a("li",[t._v("Non-Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("History")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Psychology")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Philosophy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Cooking")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Economics")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Mathematics")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Business")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Finance")])])])])]),t._v(" "),a("div",{staticClass:"category-title-wrapper"},[a("h2",[t._v("DVDs")])]),t._v(" "),a("ul",[a("li",[t._v("Fiction\n      "),a("ul",{staticClass:"sidebar-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Documentaries")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("TV")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Horror")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("Cartoons")])])])])])])}]};var l=a("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){a("yaMp")},"data-v-9d77d970",null).exports,c={data:function(){return{bookName:"placeholder name",bookAuthor:"placeholder name",bookPrice:"$14.95",bookStock:"3",bookId:this.$route.params.id,details:""}},mounted:function(){this.pullDetails()},methods:{pullDetails:function(){var t=this;this.$http.get("/api/books/"+this.bookId).then(function(i){t.bookName=i.body.title,t.bookAuthor=i.body.author},function(t){console.log(t)})}}},v={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-wrapper"},[a("div",{staticClass:"detail-content"},[a("div",{staticClass:"detail-text-content"},[a("h2",[t._v(t._s(t.bookName))]),t._v(" "),a("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),a("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),a("p",[t._v("Price: "+t._s(t.bookPrice))]),t._v(" "),a("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),a("div",{staticClass:"detail-image-container"},[a("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),a("div",{staticClass:"centered"},[a("p",{staticClass:"title"},[t._v(t._s(t.bookName))]),t._v(" "),a("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),a("button",{staticClass:"call-to-action"},[t._v("Add to cart")])])])},staticRenderFns:[]};var u=a("VU/8")(c,v,!1,function(t){a("htYT")},"data-v-223d6eaf",null).exports,d={name:"App",data:{},methods:{show:function(){this.$modal.show("hello-world")},signIn:function(){this.$modal.hide("hello-world")}},components:{"component-sidebar":l,"component-Shop":r,"component-detail":u}},_={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"topbar"},[t._m(1),t._v(" "),a("input",{attrs:{type:"text",name:"fname"}}),t._v(" "),a("button",{attrs:{id:"button-search"}},[t._v("Search")]),t._v(" "),a("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),a("div",{staticClass:"account"},[a("button",{attrs:{id:"login"},on:{click:function(i){return t.show()}}},[t._v("Log in")]),t._v(" "),a("button",{staticClass:"call-to-action",attrs:{id:"signup"}},[t._v("Sign up")])])]),t._v(" "),a("hr"),t._v(" "),a("modal",{attrs:{name:"hello-world"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[a("div",{staticClass:"partition",attrs:{id:"partition-register"}},[a("div",{staticClass:"partition-title"},[t._v("CREATE ACCOUNT")]),t._v(" "),a("div",{staticClass:"partition-form"},[a("form",{attrs:{autocomplete:"false"}},[a("div",{staticClass:"autocomplete-fix"},[a("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),a("input",{attrs:{id:"n-email",type:"text",placeholder:"Email"}}),t._v(" "),a("input",{attrs:{id:"n-username",type:"text",placeholder:"Username"}}),t._v(" "),a("input",{attrs:{id:"n-password2",type:"password",placeholder:"Password"}})]),t._v(" "),a("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),a("div",{staticClass:"button-set"},[a("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")]),t._v(" "),a("button",{attrs:{id:"register-btn"},on:{click:t.register}},[t._v("Register")])])])])]),t._v(" "),a("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[a("div",{staticClass:"box-messages"})])])]),t._v(" "),a("div",{staticClass:"main-container"},[a("router-view",{attrs:{name:"componentShop"}}),t._v(" "),a("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),a("router-view",{attrs:{name:"componentSidebar"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"top-special-offer"}},[i("h3",[this._v("SPECIAL OFFER: 20% OFF BOOKS WITH "),i("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME ONLY!")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:"static/logo-horizontal.png"}})])}]};var p=a("VU/8")(d,_,!1,function(t){a("T/cW")},null,null).exports,h=a("/ocq"),m=a("8+8L");e.a.use(h.a),e.a.use(m.a);var f=new h.a({routes:[{path:"/",components:{componentSidebar:l,componentShop:r}},{path:"/books/:id",components:{componentSidebar:l,componentDetail:u}}],mode:"history"}),b=a("rifk"),C=a.n(b);e.a.config.productionTip=!1,e.a.use(C.a),new e.a({el:"#app",router:f,components:{App:p},template:"<App/>",render:function(t){return t(p)}})},"T/cW":function(t,i){},htYT:function(t,i){},yaMp:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.59634d22fb872296d18f.js.map