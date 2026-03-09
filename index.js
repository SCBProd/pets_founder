import{i as h,a as g,S as R,N as D,P as _,A as z,R as F}from"./assets/vendor-BzGjJ17i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const C=document.querySelector(".order-backdrop"),U=document.querySelector(".order-modal-btn"),B=document.querySelector(".order-modal-form");document.querySelector(".modal-pet-btn");const p=document.querySelector(".send-button"),l=document.querySelector("#user-name"),i=document.querySelector("#user_phone"),d=document.querySelector("#user-comment"),x=l.closest(".order-modal-form-field").querySelector(".error-message"),P=i.closest(".order-modal-form-field").querySelector(".error-message"),I=d.closest(".order-modal-form-comment").querySelector(".error-message");let j=0;window.addEventListener("open-order-modal",e=>{const t=e?.detail?.petId;if(!t){h.error({title:"Помилка",message:"Не вдалося визначити тварину для заявки",position:"topRight"});return}j=t,openModal()});function E(){C.classList.remove("is-open"),document.body.classList.remove("no-scroll"),B.reset(),c(l,x),c(i,P),c(d,I),w()}U.addEventListener("click",E);C.addEventListener("click",e=>{e.target===C&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});function m(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function c(e,t){e.classList.remove("error"),t.textContent=""}p.disabled=!0;p.classList.add("disabled");function w(){const e=l.value.trim()!=="",t=/^380\d{9}$/.test(i.value.trim()),s=d.value.trim()!=="";p.disabled=!(e&&t&&s),p.disabled?p.classList.add("disabled"):p.classList.remove("disabled")}function W(){let e=!0;return l.value.trim()?c(l,x):(m(l,x,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(i.value.trim())?c(i,P):(m(i,P,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),d.value.trim()?c(d,I):(m(d,I,"Введіть коментар"),e=!1),w(),e}[l,i,d].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===i?/^380\d{9}$/.test(e.value.trim())||m(e,t,"Невірний формат телефону"):e.value.trim()===""?m(e,t,"Поле обов'язкове"):c(e,t),w()}),e.addEventListener("input",()=>{c(e,t),w()})});B.addEventListener("submit",async e=>{if(e.preventDefault(),!W())return;const{name:t,phone:s,comment:a}=B.elements,r={name:t.value.trim(),phone:s.value.trim(),comment:a.value.trim(),animalId:j};try{const n=(await g.post("https://paw-hut.b.goit.study/api/orders",r)).data;h.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),E()}catch{h.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const b=document.querySelector(".header-burger-btn"),u=document.querySelector(".mobile-menu-backdrop"),H=document.querySelector(".mobile-menu-close"),K=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(b&&u&&H){const e=()=>{u.classList.add("is-open"),document.body.classList.add("menu-open"),b.setAttribute("aria-expanded","true")},t=()=>{u.classList.remove("is-open"),document.body.classList.remove("menu-open"),b.setAttribute("aria-expanded","false")};b.addEventListener("click",e),H.addEventListener("click",t),u.addEventListener("click",s=>{s.target===u&&t()}),K.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&u.classList.contains("is-open")&&t()})}g.defaults.baseURL="https://paw-hut.b.goit.study";async function G(){const e=await g.get("api/categories");return e.data.unshift("Всі"),e.data}async function J(e=1,t=8,s=null){const a={page:e,limit:t};return s&&(a.categoryId=s),(await g.get("/api/animals",{params:a})).data}function Q(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,a=t._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${s==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${s}"
            data-id="${a}"
          >
            ${s}
          </button>
        </li>
      `}).join("")}function X(e){return e.map(({image:t,species:s,name:a,categories:r,age:o,gender:n,shortDescription:q,_id:$})=>{const N=r.map(V=>`<li class="pet-card-category">${V.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${a}</h3>
              <ul class="pet-card-category-list">
                ${N}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${n}</li>
              </ul>
              <p class="pet-card-descr">
                ${q}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${$}">Дізнатись більше</button>
          </li>`}).join("")}function Y(e){const{image:t,species:s,name:a,age:r,gender:o,description:n,healthStatus:q,behavior:$}=e;return`    <button class="modal-details-btn" type="button">
      <svg width="14" height="14">
        <use href="./img/close1.svg"></use>
      </svg>
    </button>

  <div class="pet-details-content">
  <img class="pet-details-img" src="${t}" alt="${s}" />

  <div class="pet-details-info">
    <p class="pet-details-type">${s}</p>
    <h3 class="pet-details-name">${a}</h3>

    <ul class="pet-details-age-gender">
      <li class="pet-details-age">${r}</li>
      <li class="pet-details-gender">${o}</li>
    </ul>

    <h4 class="pet-details-heading">Опис:</h4>
    <p class="pet-details-text">${n}</p>

    <h4 class="pet-details-heading">Здоров’я:</h4>
    <p class="pet-details-text">${q}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${$}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const T=document.querySelector(".pets-category"),S=document.querySelector(".pets-list"),k=document.querySelector(".add-more-cards-btn"),f=document.querySelector(".backdrop"),Z=document.querySelector(".modal-details");let y=1,O=null,L=[];async function ee(){try{const e=await G();T.innerHTML=Q(e)}catch(e){console.log(e)}}ee();async function A(){try{let e=window.innerWidth>=1440?9:8;const t=await J(y,e,O);y===1?(L=t.animals,S.innerHTML=""):L=[...L,...t.animals];const s=X(t.animals);S.insertAdjacentHTML("beforeend",s),t.totalItems<=y*e?k.style.display="none":k.style.display="block"}catch(e){console.log(e)}}A();T.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;O=e.target.dataset.id,y=1;let t=e.target;T.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),S.innerHTML="",k.style.display="block",await A()});k.addEventListener("click",async()=>{y++,await A()});S.addEventListener("click",te);async function te(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,a=L.find(o=>o._id===s);if(!a)return;Z.innerHTML=Y(a),document.querySelector(".modal-details-btn").addEventListener("click",()=>{f.classList.remove("is-open"),document.body.style.overflow=""}),f.classList.add("is-open"),document.body.style.overflow="hidden"}f.addEventListener("click",e=>{e.target===f&&(f.classList.remove("is-open"),document.body.style.overflow="")});const se=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(se.classList.add("is-open"),document.body.classList.add("no-scroll"))});const re=document.querySelector(".js-about-swiper");re&&new R(".js-about-swiper",{modules:[D,_],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new z(".accordion-container",{duration:400,showMultiple:!1});const oe=g.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function ae(){try{const{data:e}=await oe.get("/feedbacks");return e.feedbacks}catch{return null}}function ne(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:a,rate:r,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${a}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(a=>{new F(a,{starType:"svg",readOnly:!0}).init()})}const ie=document.querySelector(".stories-loader"),ce=document.querySelector(".stories-section .stories-controls");function M(e){h.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function v(){ie.classList.remove("loader")}function le(){ce.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await ae();if(e===null){M("Не вдалося завантажити історії. Спробуйте пізніше"),v();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){M("Нажаль, історії зараз недоступні"),v();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ne(e);const t=new R(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});le(),v()}catch{M("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),v()}});
//# sourceMappingURL=index.js.map
