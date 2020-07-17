webpackJsonp([1],{0:function(t,e){},"1O9p":function(t,e){},"4YOb":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),o=i("mtWM"),s=i.n(o),n={data:function(){return{books:[],id:"books",searchQuery:this.$route.query.string}},beforeMount:function(){this.$route.query.string?this.pullSearchedBooks():this.pullAllBooks()},methods:{pullAllBooks:function(){var t=this;s.a.get("/api/books",{headers:{Accept:"application/json"}}).then(function(e){t.books=e.body},function(t){console.log(t)})},pullSearchedBooks:function(){var t=this;this.books=[],console.log("called");var e=this.$route.query.string;s.a.get("/api/books",{headers:{Accept:"application/json"}}).then(function(i){i.body.forEach(function(i){(i.title.toUpperCase().includes(e.toUpperCase())||i.author.toUpperCase().includes(e.toUpperCase()))&&t.books.push(i)})},function(t){console.log(t)})},navigateToMessage:function(t){var e=this;this.$router.push({path:"/books/"+t}).catch(function(t){e.$router.push({path:"/"})})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop"},[i("div",{staticClass:"special-offer"}),t._v(" "),i("div",{staticClass:"shop-content"},[i("h2",[t._v("Top sellers")]),t._v(" "),i("ul",t._l(t.books,function(e){return i("li",{key:e.TITLE,staticClass:"preview",on:{click:function(i){return t.navigateToMessage(e.id)}}},[i("div",{staticClass:"preview-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"preview-author"},[t._v(t._s(e.author))]),t._v(" "),i("div",{staticClass:"preview-details"},[i("p",[t._v(t._s(e.rating))]),t._v(" "),i("p",[t._v("$"+t._s(e.price))])])])}),0)])])},staticRenderFns:[]};var l=i("VU/8")(n,r,!1,function(t){i("4YOb")},"data-v-81d882bc",null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("div",{staticClass:"category-title-wrapper"},[i("h2",[t._v("Books")])]),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Novels & Stories")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Erotic Novels")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Horror")])])])]),t._v(" "),i("li",[t._v("Non-Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("History")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Psychology")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Philosophy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Cooking")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Economics")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Mathematics")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Business")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Finance")])])])])]),t._v(" "),i("div",{staticClass:"category-title-wrapper"},[i("h2",[t._v("DVDs")])]),t._v(" "),i("ul",[i("li",[t._v("Fiction\n      "),i("ul",{staticClass:"sidebar-list"},[i("li",[i("a",{attrs:{href:""}},[t._v("Crime & Thrillers")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Documentaries")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("TV")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Sci-Fi")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Fantasy")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Horror")])]),t._v(" "),i("li",[i("a",{attrs:{href:""}},[t._v("Cartoons")])])])])])])}]};var p=i("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){i("VPzO")},"data-v-59ad704b",null).exports,u=i("mvHQ"),d=i.n(u),v={data:function(){return{book:"",bookTitle:"",bookAuthor:"",bookGenre:"",bookPrice:"",bookStock:"",bookId:this.$route.params.id}},beforeMount:function(){this.pullDetails()},methods:{pullDetails:function(){var t=this;s.a.get("/api/books/"+this.bookId,{headers:{Accept:"application/json"}}).then(function(e){t.book=e.body,t.bookTitle=t.book.title,t.bookAuthor=t.book.author,t.bookPrice=t.book.price,t.bookStock=t.book.stock,t.bookGenre=t.book.genre},function(t){console.log(t)})},addToCart:function(){var t=this,e=window.localStorage,i=e.getItem("cartContent")?e.getItem("cartContent"):"[]",a=JSON.parse(i);a.push(this.book),i=d()(a),e.setItem("cartContent",i),this.$router.push({path:"/cart"}).catch(function(e){t.$router.push({path:"/"})})}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"detail-wrapper"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-text-content"},[i("h2",[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",[t._v("by "+t._s(t.bookAuthor))]),t._v(" "),i("p",[t._v("Genre: "+t._s(t.bookGenre))]),t._v(" "),i("p",[t._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")]),t._v(" "),i("p",[t._v("Price: $"+t._s(t.bookPrice))]),t._v(" "),i("p",[t._v("Left in stock: "+t._s(t.bookStock))])]),t._v(" "),i("div",{staticClass:"detail-image-container"},[i("img",{attrs:{src:"/static/generic-book.jpg"}}),t._v(" "),i("div",{staticClass:"centered"},[i("p",{staticClass:"title"},[t._v(t._s(t.bookTitle))]),t._v(" "),i("p",[t._v(t._s(t.bookAuthor))])])])]),t._v(" "),t.book?i("button",{staticClass:"call-to-action",on:{click:function(e){return t.addToCart()}}},[t._v("Add to cart")]):t._e()])])},staticRenderFns:[]};var h=i("VU/8")(v,m,!1,function(t){i("pO8d")},"data-v-b6329f18",null).exports,g={data:function(){return{loggedIn:!1,email:"",password:"",error:!1,searchQuery:""}},methods:{show:function(){this.$modal.show("modal-login")},signIn:function(){this.email&&this.password?(this.loggedIn=!0,this.$modal.hide("modal-login")):this.error=!0},signOut:function(){this.loggedIn=!1},signUp:function(){this.$modal.show("modal-signup")},submitSignUp:function(){this.email?(console.log("email found"),this.loggedIn=!0,this.$modal.hide("modal-signup")):(this.error="error",console.log("no email found"))},navigateToCart:function(){var t=this;this.$router.push({path:"/cart"}).catch(function(e){t.$router.push({path:"/"})})},navigateToSearch:function(){var t=this;this.$router.push({path:"/search",query:{string:this.searchQuery}}).catch(function(e){t.$router.push({path:"/"})})}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topbar"},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"text",name:"searchbar"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),i("button",{attrs:{id:"button-search"},on:{click:function(e){return t.navigateToSearch()}}},[t._v("Search")]),t._v(" "),t.loggedIn?i("div",{attrs:{id:"login-message"}},[t._v("Welcome back, "+t._s(t.email))]):t._e(),t._v(" "),i("p",{attrs:{id:"clock"}},[t._v("3:43pm 23/06/2002")]),t._v(" "),i("div",{staticClass:"account"},[t.loggedIn?i("button",{attrs:{id:"logout"},on:{click:function(e){return t.signOut()}}},[t._v("Log out")]):i("button",{attrs:{id:"login"},on:{click:function(e){return t.show()}}},[t._v("Log in")]),t._v(" "),i("button",{staticClass:"call-to-action",attrs:{id:"signup"},on:{click:function(e){return t.signUp()}}},[t._v("Sign up")]),t._v(" "),i("button",{attrs:{id:"cart"},on:{click:function(e){return t.navigateToCart()}}},[i("i",{staticClass:"fas fa-shopping-cart cart-img"})])]),t._v(" "),i("modal",{attrs:{name:"modal-login"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-login"}},[i("div",{staticClass:"partition-title"},[t._v("LOG IN")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"n-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"textfield-modal",attrs:{id:"n-password2",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              Please fill in all fields.\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"goto-signin-btn"},on:{click:t.signIn}},[t._v("Sign In")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])]),t._v(" "),i("modal",{attrs:{name:"modal-signup",height:"auto"}},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-part",attrs:{id:"bp-left"}},[i("div",{staticClass:"partition",attrs:{id:"partition-register"}},[i("div",{staticClass:"partition-title"},[t._v("SIGN UP")]),t._v(" "),i("div",{staticClass:"partition-form"},[i("form",{attrs:{autocomplete:"false"}},[i("div",{staticClass:"autocomplete-fix"},[i("input",{attrs:{disabled:"",type:"password"}})]),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"textfield-modal",attrs:{id:"s-email",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-password2",type:"password",placeholder:"Password"}}),t._v(" "),i("input",{staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I will be using my account for:")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"myself",name:"user-type",value:"myelf"}}),t._v(" "),i("label",{attrs:{for:"myself"}},[t._v("Myself")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"business",name:"user-type",value:"business"}}),t._v(" "),i("label",{attrs:{for:"business"}},[t._v("My business")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"marketing-agreement",name:"marketing-agreement"}}),t._v(" "),i("label",{attrs:{for:"marketing-agreement"}},[t._v("I would like to receive promotional emails")]),i("br"),t._v(" "),i("input",{attrs:{type:"checkbox",id:"privacy-policy",name:"privacy-policy"}}),t._v(" "),i("label",{attrs:{for:"privacy-policy"}},[t._v("I have read and accept the privacy policy")]),i("br")]),t._v(" "),t.error?i("div",{staticClass:"error-message"},[t._v("\n              Please fill in all fields.\n            ")]):t._e(),t._v(" "),i("div",{staticStyle:{"margin-top":"42px"}}),t._v(" "),i("div",{staticClass:"button-set"},[i("button",{attrs:{id:"register-btn"},on:{click:function(e){return t.submitSignUp()}}},[t._v("\n                Register\n              ")])])])])]),t._v(" "),i("div",{staticClass:"box-part",attrs:{id:"bp-right"}},[i("div",{staticClass:"box-messages"})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{attrs:{id:"logo",src:"static/logo-horizontal.png"}})])}]};var f=i("VU/8")(g,_,!1,function(t){i("eOy0")},"data-v-4b4f1b6c",null).exports,b={data:function(){return{cartItems:[],totalPrice:0,billingCoupon:!1,coupon:"",couponAccepted:!1}},methods:{navigateToCheckout:function(){var t=this;this.$router.push({path:"/checkout"}).catch(function(e){t.$router.push({path:"/"})})},emptyCart:function(){window.localStorage;localStorage.removeItem("cartContent"),this.cartItems=[]},fetchItems:function(){var t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)},sumPrices:function(){var t=0;this.cartItems.forEach(function(e){t+=parseFloat(e.price)}),this.totalPrice=t.toFixed(2)},applyCoupon:function(){"COUPON2020"===this.coupon&&(this.couponAccepted=!0,this.totalPrice=.8*this.totalPrice)}},mounted:function(){this.fetchItems(),this.sumPrices()}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart"},[i("h1",[t._v("Your Shopping Cart")]),t._v(" "),t.cartItems?t._e():i("p",[t._v("Your shopping cart is empty. Go buy some books!")]),t._v(" "),i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n      1x, "+t._s(e.title)+", "+t._s(e.author)+", $"+t._s(e.price)+"\n    ")])}),0),t._v("\n  Total: $"),i("div",{attrs:{id:"total-price"}},[t._v(t._s(t.totalPrice))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCoupon,expression:"billingCoupon"}],attrs:{type:"checkbox",id:"billing-coupon",name:"billing-coupon"},domProps:{checked:Array.isArray(t.billingCoupon)?t._i(t.billingCoupon,null)>-1:t.billingCoupon},on:{change:function(e){var i=t.billingCoupon,a=e.target,o=!!a.checked;if(Array.isArray(i)){var s=t._i(i,null);a.checked?s<0&&(t.billingCoupon=i.concat([null])):s>-1&&(t.billingCoupon=i.slice(0,s).concat(i.slice(s+1)))}else t.billingCoupon=o}}}),t._v(" "),i("label",{attrs:{for:"billing-coupon"}},[t._v("I have a coupon for this order")]),i("br"),t._v(" "),t.billingCoupon?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"textfield-modal",attrs:{id:"coupon",type:"text",placeholder:"Coupon"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.applyCoupon}},[t._v("Apply")]),t._v(" "),t.couponAccepted?i("p",[t._v("Coupon applied! 20% discount")]):i("p",[t._v("Invalid coupon.")])]):t._e(),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToCheckout()}}},[t._v("\n    Checkout\n  ")]),t._v(" "),i("button",{on:{click:function(e){return t.emptyCart()}}},[t._v("Empty Cart")])])},staticRenderFns:[]};var y=i("VU/8")(b,C,!1,function(t){i("1O9p")},"data-v-3ffc652b",null).exports,k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout"},[i("h1",[t._v("Checkout")]),t._v(" "),i("h2",[t._v("buy those books already...")]),t._v(" "),i("p",[t._v("Shipping:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(0),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingName,expression:"shippingName"}],staticClass:"textfield-modal",attrs:{id:"s-name",type:"text",placeholder:"Name"},domProps:{value:t.shippingName},on:{input:function(e){e.target.composing||(t.shippingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingSurname,expression:"shippingSurname"}],staticClass:"textfield-modal",attrs:{id:"s-surname",type:"text",placeholder:"Surname"},domProps:{value:t.shippingSurname},on:{input:function(e){e.target.composing||(t.shippingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingAddress,expression:"shippingAddress"}],staticClass:"textfield-modal",attrs:{id:"s-address",type:"text",placeholder:"Address"},domProps:{value:t.shippingAddress},on:{input:function(e){e.target.composing||(t.shippingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingZipcode,expression:"shippingZipcode"}],staticClass:"textfield-modal",attrs:{id:"s-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.shippingZipcode},on:{input:function(e){e.target.composing||(t.shippingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCity,expression:"shippingCity"}],staticClass:"textfield-modal",attrs:{id:"s-city",type:"text",placeholder:"City"},domProps:{value:t.shippingCity},on:{input:function(e){e.target.composing||(t.shippingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingCompany,expression:"shippingCompany"}],staticClass:"textfield-modal",attrs:{id:"s-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.shippingCompany},on:{input:function(e){e.target.composing||(t.shippingCompany=e.target.value)}}}),t._v(" "),i("br"),t._v(" "),i("label",{attrs:{id:"account-usage"}},[t._v("I would like the items to be shipped")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"asap",name:"user-type",value:"asap"}}),t._v(" "),i("label",{attrs:{for:"asap"}},[t._v("as soon as possible")]),i("br"),t._v(" "),i("input",{attrs:{type:"radio",id:"single",name:"user-type",value:"single"}}),t._v(" "),i("label",{attrs:{for:"single"}},[t._v("in a single package")]),i("br"),t._v(" "),i("br"),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.separateBilling,expression:"separateBilling"}],attrs:{type:"checkbox",id:"billing-different",name:"billing-different"},domProps:{checked:Array.isArray(t.separateBilling)?t._i(t.separateBilling,null)>-1:t.separateBilling},on:{change:function(e){var i=t.separateBilling,a=e.target,o=!!a.checked;if(Array.isArray(i)){var s=t._i(i,null);a.checked?s<0&&(t.separateBilling=i.concat([null])):s>-1&&(t.separateBilling=i.slice(0,s).concat(i.slice(s+1)))}else t.separateBilling=o}}}),t._v(" "),i("label",{attrs:{for:"billing-different"}},[t._v("Billing address is different from shipping")]),i("br")]),t._v(" "),t.separateBilling?i("div",{attrs:{id:"billing-block"}},[i("p",[t._v("Billing:")]),t._v(" "),i("form",{attrs:{autocomplete:"false"}},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingName,expression:"billingName"}],staticClass:"textfield-modal",attrs:{id:"b-name",type:"text",placeholder:"Name"},domProps:{value:t.billingName},on:{input:function(e){e.target.composing||(t.billingName=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingSurname,expression:"billingSurname"}],staticClass:"textfield-modal",attrs:{id:"b-surname",type:"text",placeholder:"Surname"},domProps:{value:t.billingSurname},on:{input:function(e){e.target.composing||(t.billingSurname=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingAddress,expression:"billingAddress"}],staticClass:"textfield-modal",attrs:{id:"b-address",type:"text",placeholder:"Address"},domProps:{value:t.billingAddress},on:{input:function(e){e.target.composing||(t.billingAddress=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingZipcode,expression:"billingZipcode"}],staticClass:"textfield-modal",attrs:{id:"b-zipcode",type:"text",placeholder:"Zipcode"},domProps:{value:t.billingZipcode},on:{input:function(e){e.target.composing||(t.billingZipcode=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCity,expression:"billingCity"}],staticClass:"textfield-modal",attrs:{id:"b-city",type:"text",placeholder:"City"},domProps:{value:t.billingCity},on:{input:function(e){e.target.composing||(t.billingCity=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingCompany,expression:"billingCompany"}],staticClass:"textfield-modal",attrs:{id:"b-company",type:"text",placeholder:"Company (optional)"},domProps:{value:t.billingCompany},on:{input:function(e){e.target.composing||(t.billingCompany=e.target.value)}}}),t._v(" "),i("br")])]):t._e(),t._v(" "),t.errorMessage?i("p",{attrs:{id:"error-message"}},[t._v(t._s(t.errorMessage))]):t._e(),t._v(" "),i("button",{staticClass:"call-to-action",on:{click:function(e){return t.navigateToRecap()}}},[t._v("Buy")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"autocomplete-fix"},[e("input",{attrs:{disabled:"",type:"password"}})])}]};var x=i("VU/8")({data:function(){return{shippingName:"",shippingSurname:"",shippingAddress:"",shippingZipcode:"",shippingCity:"",shippingCompany:"",billingName:"",billingSurname:"",billingAddress:"",billingZipcode:"",billingCity:"",billingCompany:"",errorMessage:"",separateBilling:!1}},methods:{navigateToRecap:function(){this.shippingName&&this.shippingSurname&&this.shippingAddress&&this.shippingZipcode&&this.shippingCity&&this.shippingCompany?this.$router.push({path:"/recap"}).catch(function(t){}):this.errorMessage="Please fill in all fields."}}},k,!1,function(t){i("e2Ql")},"data-v-6a43f68b",null).exports,w={data:function(){return{cartItems:[]}},methods:{navigateToCheckout:function(){var t=this;this.$router.push({path:"/checkout"}).catch(function(e){t.$router.push({path:"/"})})},navigateToHome:function(){var t=this;this.$router.push({path:"/"}).catch(function(e){t.$router.push({path:"/"})})}},mounted:function(){var t=window.localStorage.getItem("cartContent");this.cartItems=JSON.parse(t)}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recap"},[i("p",{attrs:{id:"order-confirmation"}},[t._v("All good, order is on the way. Thank you!!")]),t._v(" "),i("p",{attrs:{id:"recap-content"}},[i("ul",t._l(t.cartItems,function(e){return i("li",{key:e.title},[t._v("\n                1x, "+t._s(e.title)+", "+t._s(e.author)+"\n            ")])}),0)]),t._v(" "),i("button",{on:{click:function(e){return t.navigateToHome()}}},[t._v("Shop more")])])},staticRenderFns:[]};var N=i("VU/8")(w,S,!1,function(t){i("u2Ps")},"data-v-829b8cd2",null).exports,P={name:"App",data:function(){return{}},methods:{},components:{"component-sidebar":p,"component-shop":l,"component-detail":h,"component-topbar":f,"component-cart":y,"component-checkout":x,"component-recap":N}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("component-topbar"),t._v(" "),i("hr"),t._v(" "),i("div",{attrs:{id:"app-content"}},[i("div",{staticClass:"main-container"},[i("router-view",{key:t.$route.fullPath,attrs:{name:"componentShop"}}),t._v(" "),i("router-view",{attrs:{name:"componentDetail"}}),t._v(" "),i("router-view",{attrs:{name:"componentSidebar"}}),t._v(" "),i("router-view",{attrs:{name:"componentCart"}}),t._v(" "),i("router-view",{attrs:{name:"componentCheckout"}}),t._v(" "),i("router-view",{attrs:{name:"componentRecap"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"top-special-offer"}},[e("h3",[this._v("\n      SPECIAL OFFER: 20% OFF BOOKS WITH "),e("i",[this._v("WORDS")]),this._v(" IN THEM!!! LIMITED TIME\n      ONLY!\n    ")])])}]};var A=i("VU/8")(P,I,!1,function(t){i("xV0W")},null,null).exports,$=i("/ocq"),T=i("8+8L");a.a.use($.a),a.a.use(T.a);var E=new $.a({routes:[{path:"/",components:{componentSidebar:p,componentShop:l}},{path:"/books/:id",components:{componentSidebar:p,componentDetail:h}},{path:"/cart",components:{componentCart:y}},{path:"/checkout",components:{componentCheckout:x}},{path:"/recap",components:{componentRecap:N}},{path:"/search",components:{componentSidebar:p,componentShop:l}}],mode:"history"}),O=i("rifk"),F=i.n(O);a.a.config.productionTip=!1,a.a.use(F.a),new a.a({el:"#app",router:E,components:{App:A},template:"<App/>",render:function(t){return t(A)}})},VPzO:function(t,e){},e2Ql:function(t,e){},eOy0:function(t,e){},pO8d:function(t,e){},u2Ps:function(t,e){},xV0W:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cd98461ff6a73b9e923b.js.map