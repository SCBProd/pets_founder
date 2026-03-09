import{i as b,a as f,S as H,N,P as V,A as D,R as _}from"./assets/vendor-BzGjJ17i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const L=document.querySelector(".order-backdrop"),z=document.querySelector(".order-modal-btn"),B=document.querySelector(".order-modal-form"),d=document.querySelector(".send-button"),c=document.querySelector("#user-name"),n=document.querySelector("#user_phone"),x=c.closest(".order-modal-form-field").querySelector(".error-message"),P=n.closest(".order-modal-form-field").querySelector(".error-message");let h=null;function F(){L.classList.add("is-open"),document.body.classList.add("no-scroll")}window.addEventListener("open-order-modal",e=>{const t=e?.detail?.petId;t&&(h=t,F())});function $(){L.classList.remove("is-open"),document.body.classList.remove("no-scroll"),B.reset(),u(c,x),u(n,P),h=null,S()}z.addEventListener("click",$);L.addEventListener("click",e=>{e.target===L&&$()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});function w(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function u(e,t){e.classList.remove("error"),t.textContent=""}d.disabled=!0;d.classList.add("disabled");function S(){const e=c.value.trim()!=="",t=/^380\d{9}$/.test(n.value.trim());d.disabled=!(e&&t),d.disabled?d.classList.add("disabled"):d.classList.remove("disabled")}function U(){let e=!0;return c.value.trim()?u(c,x):(w(c,x,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(n.value.trim())?u(n,P):(w(n,P,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),S(),e}[c,n].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===n?/^380\d{9}$/.test(e.value.trim())||w(e,t,"Невірний формат телефону"):e.value.trim()===""?w(e,t,"Поле обов'язкове"):u(e,t),S()}),e.addEventListener("input",()=>{u(e,t),S()})});B.addEventListener("submit",async e=>{if(e.preventDefault(),!U())return;if(!h){b.error({title:"Помилка",message:"Не обрано тварину",position:"topRight"});return}const{name:t,phone:s,comment:o}=B.elements,r={name:t.value.trim(),phone:s.value.trim(),comment:o.value.trim()||void 0,animalId:h};try{await f.post("https://paw-hut.b.goit.study/api/orders",r),b.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),$()}catch{b.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const y=document.querySelector(".header-burger-btn"),l=document.querySelector(".mobile-menu-backdrop"),I=document.querySelector(".mobile-menu-close"),W=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(y&&l&&I){const e=()=>{l.classList.add("is-open"),document.body.classList.add("menu-open"),y.setAttribute("aria-expanded","true")},t=()=>{l.classList.remove("is-open"),document.body.classList.remove("menu-open"),y.setAttribute("aria-expanded","false")};y.addEventListener("click",e),I.addEventListener("click",t),l.addEventListener("click",s=>{s.target===l&&t()}),W.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l.classList.contains("is-open")&&t()})}f.defaults.baseURL="https://paw-hut.b.goit.study";async function K(){const e=await f.get("api/categories");return e.data.unshift("Всі"),e.data}async function G(e=1,t=8,s=null){const o={page:e,limit:t};return s&&(o.categoryId=s),(await f.get("/api/animals",{params:o})).data}function J(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,o=t._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${s==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${s}"
            data-id="${o}"
          >
            ${s}
          </button>
        </li>
      `}).join("")}function Q(e){return e.map(({image:t,species:s,name:o,categories:r,age:a,gender:i,shortDescription:q,_id:M})=>{const j=r.map(O=>`<li class="pet-card-category">${O.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${o}</h3>
              <ul class="pet-card-category-list">
                ${j}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${a}</li>
                <li class="pet-card-gender">${i}</li>
              </ul>
              <p class="pet-card-descr">
                ${q}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${M}">Дізнатись більше</button>
          </li>`}).join("")}function X(e){const{image:t,species:s,name:o,age:r,gender:a,description:i,healthStatus:q,behavior:M}=e;return`    <button class="modal-details-btn" type="button">
      <svg width="14" height="14">
        <use href="./img/close1.svg"></use>
      </svg>
    </button>

  <div class="pet-details-content">
  <img class="pet-details-img" src="${t}" alt="${s}" />

  <div class="pet-details-info">
    <p class="pet-details-type">${s}</p>
    <h3 class="pet-details-name">${o}</h3>

    <ul class="pet-details-age-gender">
      <li class="pet-details-age">${r}</li>
      <li class="pet-details-gender">${a}</li>
    </ul>

    <h4 class="pet-details-heading">Опис:</h4>
    <p class="pet-details-text">${i}</p>

    <h4 class="pet-details-heading">Здоров’я:</h4>
    <p class="pet-details-text">${q}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${M}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const T=document.querySelector(".pets-category"),k=document.querySelector(".pets-list"),E=document.querySelector(".add-more-cards-btn"),p=document.querySelector(".backdrop"),Y=document.querySelector(".modal-details");let m=1,R=null,v=[];async function Z(){try{const e=await K();T.innerHTML=J(e)}catch(e){console.log(e)}}Z();async function A(){try{let e=window.innerWidth>=1440?9:8;const t=await G(m,e,R);m===1?(v=t.animals,k.innerHTML=""):v=[...v,...t.animals];const s=Q(t.animals);k.insertAdjacentHTML("beforeend",s),t.totalItems<=m*e?E.style.display="none":E.style.display="block"}catch(e){console.log(e)}}A();T.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;R=e.target.dataset.id,m=1;let t=e.target;T.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),k.innerHTML="",E.style.display="block",await A()});E.addEventListener("click",async()=>{m++,await A()});k.addEventListener("click",ee);async function ee(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,o=v.find(a=>a._id===s);if(!o)return;Y.innerHTML=X(o),document.querySelector(".modal-details-btn").addEventListener("click",()=>{p.classList.remove("is-open"),document.body.style.overflow=""}),p.classList.add("is-open"),document.body.style.overflow="hidden"}p.addEventListener("click",e=>{e.target===p&&(p.classList.remove("is-open"),document.body.style.overflow="")});const te=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(te.classList.add("is-open"),document.body.classList.add("no-scroll"))});const se=document.querySelector(".js-about-swiper");se&&new H(".js-about-swiper",{modules:[N,V],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new D(".accordion-container",{duration:400,showMultiple:!1});const re=f.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function oe(){try{const{data:e}=await re.get("/feedbacks");return e.feedbacks}catch{return null}}function ae(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:o,rate:r,author:a})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${o}</p>
          <p class="storie-names">${a}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(o=>{new _(o,{starType:"svg",readOnly:!0}).init()})}const ne=document.querySelector(".stories-loader"),ie=document.querySelector(".stories-section .stories-controls");function C(e){b.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function g(){ne.classList.remove("loader")}function ce(){ie.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await oe();if(e===null){C("Не вдалося завантажити історії. Спробуйте пізніше"),g();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){C("Нажаль, історії зараз недоступні"),g();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ae(e);const t=new H(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});ce(),g()}catch{C("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),g()}});
//# sourceMappingURL=index.js.map
