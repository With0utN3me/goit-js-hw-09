import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector("form");let a="feedback-form-state",l={};window.addEventListener("load",()=>{if(localStorage.getItem(a)!==null){let t=JSON.parse(localStorage.getItem(a));e.elements.email.value=t.email??"",e.elements.message.value=t.message??""}});e.addEventListener("input",()=>{l={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()},localStorage.setItem(a,JSON.stringify(l))});e.addEventListener("submit",t=>{if(e.elements.email.value!==""&&e.elements.message.value!==""){let s=JSON.parse(localStorage.getItem(a));t.preventDefault(),console.log(s),localStorage.removeItem(a),e.reset()}else t.preventDefault(),alert("Please, fill all the inputs")});
//# sourceMappingURL=commonHelpers2.js.map
