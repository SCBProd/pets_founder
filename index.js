import{i as u,a as g,S as O,N as _,P as z,A as U,R as W}from"./assets/vendor-BzGjJ17i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const w=document.querySelector(".order-backdrop"),K=document.querySelector(".order-modal-btn"),B=document.querySelector(".order-modal-form"),d=document.querySelector(".send-button"),c=document.querySelector("#user-name"),n=document.querySelector("#user_phone"),P=c.closest(".order-modal-form-field").querySelector(".error-message"),T=n.closest(".order-modal-form-field").querySelector(".error-message");let k=null;function G(){w.classList.add("is-open"),document.body.classList.add("no-scroll")}window.addEventListener("open-order-modal",e=>{const t=e?.detail?.petId;t&&(k=t,G())});function q(){w.classList.remove("is-open"),document.body.classList.remove("no-scroll"),B.reset(),p(c,P),p(n,T),k=null,E()}K.addEventListener("click",q);w.addEventListener("click",e=>{e.target===w&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});function S(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function p(e,t){e.classList.remove("error"),t.textContent=""}d.disabled=!0;d.classList.add("disabled");function E(){const e=c.value.trim()!=="",t=/^380\d{9}$/.test(n.value.trim());d.disabled=!(e&&t),d.disabled?d.classList.add("disabled"):d.classList.remove("disabled")}function J(){let e=!0;return c.value.trim()?p(c,P):(S(c,P,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(n.value.trim())?p(n,T):(S(n,T,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),E(),e}[c,n].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===n?/^380\d{9}$/.test(e.value.trim())||S(e,t,"Невірний формат телефону"):e.value.trim()===""?S(e,t,"Поле обов'язкове"):p(e,t),E()}),e.addEventListener("input",()=>{p(e,t),E()})});B.addEventListener("submit",async e=>{if(e.preventDefault(),!J())return;if(!k){u.error({title:"Помилка",message:"Не обрано тварину",position:"topRight"});return}const{name:t,phone:s,comment:o}=B.elements,r={name:t.value.trim(),phone:s.value.trim(),comment:o.value.trim()||void 0,animalId:k};try{await g.post("https://paw-hut.b.goit.study/api/orders",r),u.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),q()}catch{u.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const b=document.querySelector(".header-burger-btn"),l=document.querySelector(".mobile-menu-backdrop"),I=document.querySelector(".mobile-menu-close"),Q=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(b&&l&&I){const e=()=>{l.classList.add("is-open"),document.body.classList.add("menu-open"),b.setAttribute("aria-expanded","true")},t=()=>{l.classList.remove("is-open"),document.body.classList.remove("menu-open"),b.setAttribute("aria-expanded","false")};b.addEventListener("click",e),I.addEventListener("click",t),l.addEventListener("click",s=>{s.target===l&&t()}),Q.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l.classList.contains("is-open")&&t()})}g.defaults.baseURL="https://paw-hut.b.goit.study";async function X(){const e=await g.get("api/categories");return e.data.unshift("Всі"),e.data}async function Y(e=1,t=8,s=null){const o={page:e,limit:t};return s&&(o.categoryId=s),(await g.get("/api/animals",{params:o})).data}function Z(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,o=t._id||"";return`
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
      `}).join("")}function ee(e){return e.map(({image:t,species:s,name:o,categories:r,age:a,gender:i,shortDescription:M,_id:x})=>{const D=r.map(F=>`<li class="pet-card-category">${F.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${o}</h3>
              <ul class="pet-card-category-list">
                ${D}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${a}</li>
                <li class="pet-card-gender">${i}</li>
              </ul>
              <p class="pet-card-descr">
                ${M}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${x}">Дізнатись більше</button>
          </li>`}).join("")}function te(e){const{image:t,species:s,name:o,age:r,gender:a,description:i,healthStatus:M,behavior:x}=e;return`    <button class="modal-details-btn" type="button">
        <svg width="14" height="14" viewBox="0 0 14 14">
    <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="2"/>
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
    <p class="pet-details-text">${M}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${x}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const R=document.querySelector(".pets-category"),$=document.querySelector(".pets-list"),y=document.querySelector(".add-more-cards-btn"),m=document.querySelector(".backdrop"),H=document.querySelector(".modal-details"),j=document.querySelector(".loader-text");let f=1,N=null,v=[];async function se(){try{const e=await X();R.innerHTML=Z(e)}catch{u.error({title:"Error",message:"Failed to load categories.",position:"topRight"})}}se();async function A(){try{let e=window.innerWidth>=1440?9:8;ae(),y.style.display="none";const t=await Y(f,e,N);f===1?(v=t.animals,$.innerHTML=""):v=[...v,...t.animals];const s=ee(t.animals);$.insertAdjacentHTML("beforeend",s),t.totalItems>f*e?y.style.display="block":y.style.display="none"}catch{u.error({title:"Error",message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{ne()}}A();R.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;N=e.target.dataset.id,f=1;let t=e.target;R.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),$.innerHTML="",y.style.display="block",await A()});y.addEventListener("click",async()=>{f++,await A()});$.addEventListener("click",re);async function re(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,o=v.find(a=>a._id===s);if(!o)return;H.innerHTML=te(o),oe(),H.querySelector(".modal-details-btn").addEventListener("click",()=>{V()})}m.addEventListener("click",e=>{e.target===m&&V()});const h=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(h.classList.add("is-open"),document.body.classList.add("no-scroll"),m.classList.contains("is-open")&&m.classList.remove("is-open"))});h.addEventListener("click",e=>{e.target===h&&(h.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});function oe(){m.classList.add("is-open"),document.body.classList.add("no-scroll")}function V(){m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function ae(){j.style.display="block"}function ne(){j.style.display="none"}const ie=document.querySelector(".js-about-swiper");ie&&new O(".js-about-swiper",{modules:[_,z],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new U(".accordion-container",{duration:400,showMultiple:!1});const ce=g.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function le(){try{const{data:e}=await ce.get("/feedbacks");return e.feedbacks}catch{return null}}function de(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:o,rate:r,author:a})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${o}</p>
          <p class="storie-names">${a}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(o=>{new W(o,{starType:"svg",readOnly:!0}).init()})}const ue=document.querySelector(".stories-loader"),pe=document.querySelector(".stories-section .stories-controls");function C(e){u.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function L(){ue.classList.remove("loader")}function me(){pe.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await le();if(e===null){C("Не вдалося завантажити історії. Спробуйте пізніше"),L();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){C("Нажаль, історії зараз недоступні"),L();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}de(e);const t=new O(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});me(),L()}catch{C("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),L()}});
//# sourceMappingURL=index.js.map
