(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b53a2e6"],{"6d09":function(t,e,c){"use strict";c.r(e);var o=c("7a23"),n={class:"container"},a={class:"text-end my-4"},i={class:"table"},l=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",null,"產品圖片"),Object(o["h"])("th",null,"產品名稱"),Object(o["h"])("th",null,"原價"),Object(o["h"])("th",null,"售價"),Object(o["h"])("th",{width:"120"},"狀態"),Object(o["h"])("th",{width:"150"},"編輯 / 刪除")])],-1),r={key:0,class:"text-success"},s={key:1},d={class:"btn-group"},u={class:"d-flex justify-content-center"};function b(t,e,c,b,p,h){var m=Object(o["y"])("Pagination"),j=Object(o["y"])("ProductModal");return Object(o["t"])(),Object(o["d"])(o["a"],null,[Object(o["h"])("div",n,[Object(o["h"])("div",a,[Object(o["h"])("button",{type:"button",class:"btn btn-primary me-2",onClick:e[1]||(e[1]=Object(o["K"])((function(t){return h.openModal({},"new")}),["prevent"]))}," 新增產品 "),Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=Object(o["K"])((function(){return h.delProducts&&h.delProducts.apply(h,arguments)}),["prevent"]))}," 刪除全部產品 ")]),Object(o["h"])("table",i,[l,Object(o["h"])("tbody",null,[(Object(o["t"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(p.products,(function(t){return Object(o["t"])(),Object(o["d"])("tr",{key:t.id},[Object(o["h"])("td",null,[Object(o["h"])("div",{style:[{height:"100px","background-size":"cover","background-position":"center"},{"background-image":"url(".concat(t.imageUrl,")")}]},null,4)]),Object(o["h"])("td",null,Object(o["B"])(t.title),1),Object(o["h"])("td",null,"NT$ "+Object(o["B"])(t.price),1),Object(o["h"])("td",null,"NT$ "+Object(o["B"])(t.origin_price),1),Object(o["h"])("td",null,[t.is_enabled?(Object(o["t"])(),Object(o["d"])("span",r,"啟用")):(Object(o["t"])(),Object(o["d"])("span",s,"未啟用"))]),Object(o["h"])("td",null,[Object(o["h"])("div",d,[Object(o["h"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary",onClick:function(e){return h.openModal(t,"edit")}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:" button",class:"btn btn-sm btn-outline-danger",onClick:function(e){return h.delProduct(t.id)}}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(o["h"])("div",u,[Object(o["h"])(m,{page:p.pagination,onGetData:h.getProducts},null,8,["page","onGetData"])]),Object(o["h"])(j,{product:p.tempProduct,"is-new":p.isNew,onUpdateProduct:h.updateProduct,ref:"productModal"},null,8,["product","is-new","onUpdateProduct"])],64)}var p=c("5530"),h=(c("99af"),c("a4d3"),c("e01a"),{id:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"}),m={class:"modal-dialog modal-xl"},j={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},g={id:"productModalLabel",class:"modal-title"},f={key:0},v={key:1},P=Object(o["h"])("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),y={class:"modal-body text-start text-dark"},w={class:"row"},U={class:"col-sm-4"},k={class:"mb-1"},x={class:"form-group"},$=Object(o["h"])("label",{for:"imageUrl"},"主要圖片",-1),C=Object(o["h"])("div",{class:"mb-1"},"多圖新增",-1),B={key:0},M={class:"form-group"},J=Object(o["h"])("label",{for:"imageUrl"},"輸入圖片網址",-1),V={key:0},F={key:1},N={class:"col-sm-8"},T={class:"form-group"},_=Object(o["h"])("label",{for:"title"},"標題",-1),D={class:"row"},S={class:"form-group col-md-6"},L=Object(o["h"])("label",{for:"category"},"分類",-1),A={class:"form-group col-md-6"},G=Object(o["h"])("label",{for:"unit"},"單位",-1),I={class:"row"},K={class:"form-group col-md-6"},z=Object(o["h"])("label",{for:"origin_price"},"原價",-1),E={class:"form-group col-md-6"},q=Object(o["h"])("label",{for:"price"},"售價",-1),H=Object(o["h"])("hr",null,null,-1),Q={class:"form-group"},R=Object(o["h"])("label",{for:"description"},"產品描述",-1),W={class:"form-group"},X=Object(o["h"])("label",{for:"content"},"說明內容",-1),Y={class:"form-group"},Z={class:"form-check"},tt=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),et={class:"modal-footer"},ct=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,c,n,a,i){return Object(o["t"])(),Object(o["d"])("div",h,[Object(o["h"])("div",m,[Object(o["h"])("div",j,[Object(o["h"])("div",O,[Object(o["h"])("h5",g,[c.isNew?(Object(o["t"])(),Object(o["d"])("span",f,"新增產品")):(Object(o["t"])(),Object(o["d"])("span",v,"編輯產品"))]),P]),Object(o["h"])("div",y,[Object(o["h"])("div",w,[Object(o["h"])("div",U,[Object(o["h"])("div",k,[Object(o["h"])("div",x,[$,Object(o["J"])(Object(o["h"])("input",{id:"imageUrl","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.tempProduct.imageUrl=t}),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[o["F"],a.tempProduct.imageUrl]]),Object(o["h"])("img",{class:"img-fluid",src:a.tempProduct.imageUrl},null,8,["src"])])]),C,Array.isArray(a.tempProduct.imagesUrl)?(Object(o["t"])(),Object(o["d"])("div",B,[(Object(o["t"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(a.tempProduct.imagesUrl,(function(t,e){return Object(o["t"])(),Object(o["d"])("div",{key:e,class:"mb-1"},[Object(o["h"])("div",M,[J,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return a.tempProduct.imagesUrl[e]=t},type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,["onUpdate:modelValue"]),[[o["F"],a.tempProduct.imagesUrl[e]]])]),Object(o["h"])("img",{class:"img-fluid",src:t},null,8,["src"])])})),128)),!a.tempProduct.imagesUrl.length||a.tempProduct.imagesUrl[a.tempProduct.imagesUrl.length-1]?(Object(o["t"])(),Object(o["d"])("div",V,[Object(o["h"])("button",{onClick:e[2]||(e[2]=function(t){return a.tempProduct.imagesUrl.push("")}),class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")])):(Object(o["t"])(),Object(o["d"])("div",F,[Object(o["h"])("button",{onClick:e[3]||(e[3]=function(t){return a.tempProduct.imagesUrl.pop()}),class:"btn btn-outline-danger btn-sm d-block w-100"}," 刪除圖片 ")]))])):Object(o["e"])("",!0)]),Object(o["h"])("div",N,[Object(o["h"])("div",T,[_,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return a.tempProduct.title=t}),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[o["F"],a.tempProduct.title,void 0,{trim:!0}]])]),Object(o["h"])("div",D,[Object(o["h"])("div",S,[L,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return a.tempProduct.category=t}),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[o["F"],a.tempProduct.category,void 0,{trim:!0}]])]),Object(o["h"])("div",A,[G,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[6]||(e[6]=function(t){return a.tempProduct.unit=t}),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[o["F"],a.tempProduct.unit,void 0,{trim:!0}]])])]),Object(o["h"])("div",I,[Object(o["h"])("div",K,[z,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return a.tempProduct.origin_price=t}),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[o["F"],a.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",E,[q,Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return a.tempProduct.price=t}),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[o["F"],a.tempProduct.price,void 0,{number:!0}]])])]),H,Object(o["h"])("div",Q,[R,Object(o["J"])(Object(o["h"])("textarea",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return a.tempProduct.description=t}),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},"\n                ",512),[[o["F"],a.tempProduct.description,void 0,{trim:!0}]])]),Object(o["h"])("div",W,[X,Object(o["J"])(Object(o["h"])("textarea",{"onUpdate:modelValue":e[10]||(e[10]=function(t){return a.tempProduct.content=t}),id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容"},"\n                ",512),[[o["F"],a.tempProduct.content,void 0,{trim:!0}]])]),Object(o["h"])("div",Y,[Object(o["h"])("div",Z,[Object(o["J"])(Object(o["h"])("input",{"onUpdate:modelValue":e[11]||(e[11]=function(t){return a.tempProduct.is_enabled=t}),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[o["E"],a.tempProduct.is_enabled]]),tt])])])])]),Object(o["h"])("div",et,[ct,Object(o["h"])("button",{onClick:e[12]||(e[12]=function(e){return t.$emit("update-product",a.tempProduct)}),type:"button",class:"btn btn-primary"}," 確認 ")])])])],512)}var nt=c("9641"),at={props:["product","isNew"],data:function(){return{imgData:null,tempProduct:Object(p["a"])({},this.product)}},mixins:[nt["a"]],methods:{getImgData:function(t){var e=t.target.files[0],c=new FormData;c.append("file-to-upload",e),this.imgData=c,console.log(this.$refs)},uploadImg:function(){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/upload"),this.imgData).then((function(e){e.data.success?(t.imgData=null,t.$refs.imageUrl.value="","new"===t.action?t.tempProduct.imageUrl=e.data.imageUrl:"edit"===t.action&&t.tempProduct.imagesUrl.push(e.data.imageUrl)):alert(e.data.message)})).catch((function(t){console.log(t)}))}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}}};at.render=ot;var it=at,lt=c("1799"),rt={name:"Products",data:function(){return{products:[],tempProduct:{},pagination:{},isNew:!1,isLoading:!1}},components:{Pagination:lt["a"],ProductModal:it},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){e.data.success?(t.products=e.data.products,t.pagination=e.data.pagination):t.$swal({title:e.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})})).catch((function(t){console.log(t)}))},openModal:function(t,e){var c=this.$refs.productModal;switch(this.tempProduct=Object(p["a"])({},t),e){case"new":this.isNew=!0,c.openModal();break;case"edit":this.isNew=!1,c.openModal();break;default:break}},updateProduct:function(){var t=this,e=this.$refs.productModal,c=this.isNew?"post":"put",o=this.isNew?"":"".concat(this.tempProduct.id),n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/product/").concat(o);this.$http[c](n,{data:this.tempProduct}).then((function(c){c.data.success?(t.$swal({title:c.data.message}),t.getProducts(),e.hideModal(),t.isLoading=!1):(t.$swal({title:c.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"}),t.isLoading=!1)})).catch((function(t){console.log(t)}))},delProduct:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/product/").concat(t);this.$swal({icon:"warning",title:"確定要刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(t){t.isConfirmed&&e.$http.delete(c).then((function(t){t.data.success?(e.$swal(t.data.message,"","success"),e.getProducts()):e.$swal({title:t.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})}))}))},delProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yangalice212","/admin/products/all");this.$swal({icon:"warning",title:"確定要全部刪除嗎？",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(c){c.isConfirmed&&t.$http.delete(e).then((function(e){e.data.success?(t.$swal(e.data.message,"","success"),t.getProducts()):t.$swal({title:e.data.message,icon:"error",showCancelButton:!0,cancelButtonText:"取消"})}))}))}}};rt.render=b;e["default"]=rt},e01a:function(t,e,c){"use strict";var o=c("23e7"),n=c("83ab"),a=c("da84"),i=c("5135"),l=c("861d"),r=c("9bf2").f,s=c("e893"),d=a.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};s(b,d);var p=b.prototype=d.prototype;p.constructor=b;var h=p.toString,m="Symbol(test)"==String(d("test")),j=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=h.call(t);if(i(u,t))return"";var c=m?e.slice(7,-1):e.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-6b53a2e6.15325a42.js.map