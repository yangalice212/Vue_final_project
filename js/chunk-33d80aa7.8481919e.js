(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33d80aa7"],{"1dde":function(t,e,n){var c=n("d039"),a=n("b622"),o=n("2d00"),s=a("species");t.exports=function(t){return o>=51||!c((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"62b3":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),a={class:"container my-3"},o=Object(c["g"])("h2",{class:"text-center mb-3"},"購物車",-1),s={key:0},i={class:"table-responsive"},r={class:"text-end mb-3"},u={class:"table align-middle mb-3"},l=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th"),Object(c["g"])("th",null,"品名"),Object(c["g"])("th",{width:"300"},"數量/單位"),Object(c["g"])("th",{class:"text-end"},"價格")])],-1),d=Object(c["g"])("i",{class:"fas fa-spinner fa-pulse"},null,-1),b=Object(c["f"])(" x "),g={class:"d-flex w-50 btn-group"},p={class:"text-end"},f=Object(c["g"])("td",{colspan:"3",class:"text-end"},"總計",-1),h={class:"text-end"},O={colspan:"4",class:"text-end"},j={class:"input-group w-25 ms-auto"},y={key:0},m=Object(c["g"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),x={class:"text-end text-success"},C={class:"text-end"},v={key:1,class:"text-center"},w=Object(c["g"])("h3",null,"目前購物車是空的哦～",-1),k={class:"text-center"},$=Object(c["f"])(" 繼續購物 ");function B(t,e,n,B,L,T){var q=Object(c["x"])("Loading"),A=Object(c["x"])("router-link");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(q,{isLoading:L.isLoading},null,8,["isLoading"]),Object(c["g"])("div",a,[o,0!==L.cart.length?(Object(c["s"])(),Object(c["d"])("div",s,[Object(c["g"])("div",i,[Object(c["g"])("div",r,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[1]||(e[1]=function(){return T.delCart&&T.delCart.apply(T,arguments)})}," 刪除全部購物車 ")]),Object(c["g"])("table",u,[l,Object(c["g"])("tbody",null,[L.cart?(Object(c["s"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["w"])(L.cart,(function(t,e){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return T.delCartItem(t.id)}},[d,b],8,["onClick"])]),Object(c["g"])("td",null,Object(c["A"])(t.product.title),1),Object(c["g"])("td",null,[Object(c["g"])("div",g,[Object(c["g"])("button",{class:"btn btn-outline-secondary remove text-xl",type:"button",onClick:function(t){return T.minusQty(e)},disabled:t.qty<=1}," - ",8,["onClick","disabled"]),Object(c["I"])(Object(c["g"])("input",{class:"text-center quantity w-100 text-lg",type:"number",min:"1","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return T.updateCart(t)}},null,40,["onUpdate:modelValue","onChange"]),[[c["E"],t.qty,void 0,{number:!0}]]),Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary plus text-xl",onClick:function(t){return T.addQty(e)}}," + ",8,["onClick"])])]),Object(c["g"])("td",p,Object(c["A"])(t.total),1)])})),128)):Object(c["e"])("",!0)]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[f,Object(c["g"])("td",h,"NT$ "+Object(c["A"])(L.carts.total),1)]),Object(c["g"])("tr",null,[Object(c["g"])("td",O,[Object(c["g"])("div",j,[Object(c["I"])(Object(c["g"])("input",{type:"text",class:"form-control",placeholder:"輸入優惠卷代碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return L.couponCode=t})},null,512),[[c["E"],L.couponCode]]),Object(c["g"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[3]||(e[3]=function(t){return T.useCoupon(L.couponCode)})}," 套用優惠卷 ")])])]),L.carts.final_total!==L.carts.total?(Object(c["s"])(),Object(c["d"])("tr",y,[m,Object(c["g"])("td",x,"NT$ "+Object(c["A"])(L.carts.final_total),1)])):Object(c["e"])("",!0)])]),Object(c["g"])("div",C,[Object(c["g"])("button",{onClick:e[4]||(e[4]=function(){return T.goPay&&T.goPay.apply(T,arguments)}),class:"btn btn-outline-primary"},"結帳去")])])])):(Object(c["s"])(),Object(c["d"])("div",v,[w])),Object(c["g"])("div",k,[Object(c["g"])(A,{to:"/products",class:"btn btn-primary"},{default:Object(c["H"])((function(){return[$]})),_:1})])])],64)}n("99af");var L=n("e689"),T={name:"Cart",data:function(){return{cart:[],carts:{},isLoading:!1,qty:1,couponCode:""}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cart=e.data.data.carts,t.carts=e.data.data,t.isLoading=!1):alert(e.data.message)})).catch((function(t){console.log(t)}))},minusQty:function(t){this.cart[t].qty-=1,this.updateCart(this.cart[t])},addQty:function(t){this.cart[t].qty+=1,this.updateCart(this.cart[t])},updateCart:function(t){var e=this;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/cart/").concat(t.id),c={product_id:t.product.id,qty:t.qty};this.$http.put(n,{data:c}).then((function(t){t.data.success?(e.getCart(),e.isLoading=!1):alert(t.data.message)})).catch((function(t){console.log(t)}))},goPay:function(){0!==this.cart.length?this.$router.push("/checkout"):this.$swal({icon:"warning",title:"購物車是空的呦",confirmButtonColor:"#3085d6"})},useCoupon:function(t){var e=this;this.couponCode=t;var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/coupon");this.$http.post(n,{data:{code:t}}).then((function(t){t.data.success?(e.getCart(),e.$swal(t.data.message,"","success")):e.$swal({title:t.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})).catch((function(t){console.log(t)}))},delCartItem:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/cart/").concat(t);this.$swal({icon:"warning",title:"確定要刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(t){t.isConfirmed&&(e.isLoading=!0,e.$http.delete(n).then((function(t){t.data.success?(e.isLoading=!1,e.getCart(),L["a"].emit("update-cart"),e.$swal(t.data.message,"","success")):e.$swal({title:t.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})))}))},delCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/carts");this.$swal({icon:"warning",title:"確定要刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(n){n.isConfirmed&&(t.isLoading=!0,t.$http.delete(e).then((function(e){e.data.success?(t.isLoading=!1,t.$swal(e.data.message,"","success"),t.getCart(),L["a"].emit("update-cart")):(t.isLoading=!1,t.$swal({title:e.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"}))})))}))}},mounted:function(){this.getCart()}};T.render=B;e["default"]=T},8418:function(t,e,n){"use strict";var c=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=c(e);s in t?a.f(t,s,o(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var c=n("23e7"),a=n("d039"),o=n("e8b5"),s=n("861d"),i=n("7b0b"),r=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),b=n("b622"),g=n("2d00"),p=b("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",O=g>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),j=d("concat"),y=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},m=!O||!j;c({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,c,a,o,s=i(this),d=l(s,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?s:arguments[e],y(o)){if(a=r(o.length),b+a>f)throw TypeError(h);for(n=0;n<a;n++,b++)n in o&&u(d,b,o[n])}else{if(b>=f)throw TypeError(h);u(d,b++,o)}return d.length=b,d}})},e689:function(t,e,n){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,n){var c=t.get(e);c?c.push(n):t.set(e,[n])},off:function(e,n){var c=t.get(e);c&&(n?c.splice(c.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var c=t.get(e);c&&c.slice().map((function(t){t(n)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,n)}))}}},a=c();e["a"]=a}}]);
//# sourceMappingURL=chunk-33d80aa7.8481919e.js.map