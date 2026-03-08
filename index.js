import{i as m,a as L,S as j,N as U,P as W,A as K,R as G}from"./assets/vendor-BzGjJ17i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const B=document.querySelector(".order-backdrop"),J=document.querySelector(".order-modal-btn"),x=document.querySelector(".order-modal-form");document.querySelector(".modal-pet-btn");const p=document.querySelector(".send-button"),l=document.querySelector("#user-name"),i=document.querySelector("#user_phone"),d=document.querySelector("#user-comment"),P=l.closest(".order-modal-form-field").querySelector(".error-message"),T=i.closest(".order-modal-form-field").querySelector(".error-message"),I=d.closest(".order-modal-form-comment").querySelector(".error-message");let N=0;window.addEventListener("open-order-modal",e=>{const t=e?.detail?.petId;if(!t){m.error({title:"Помилка",message:"Не вдалося визначити тварину для заявки",position:"topRight"});return}N=t,openModal()});function $(){B.classList.remove("is-open"),document.body.classList.remove("no-scroll"),x.reset(),c(l,P),c(i,T),c(d,I),E()}J.addEventListener("click",$);B.addEventListener("click",e=>{e.target===B&&$()});document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});function y(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function c(e,t){e.classList.remove("error"),t.textContent=""}p.disabled=!0;p.classList.add("disabled");function E(){const e=l.value.trim()!=="",t=/^380\d{9}$/.test(i.value.trim()),s=d.value.trim()!=="";p.disabled=!(e&&t&&s),p.disabled?p.classList.add("disabled"):p.classList.remove("disabled")}function Q(){let e=!0;return l.value.trim()?c(l,P):(y(l,P,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(i.value.trim())?c(i,T):(y(i,T,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),d.value.trim()?c(d,I):(y(d,I,"Введіть коментар"),e=!1),E(),e}[l,i,d].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===i?/^380\d{9}$/.test(e.value.trim())||y(e,t,"Невірний формат телефону"):e.value.trim()===""?y(e,t,"Поле обов'язкове"):c(e,t),E()}),e.addEventListener("input",()=>{c(e,t),E()})});x.addEventListener("submit",async e=>{if(e.preventDefault(),!Q())return;const{name:t,phone:s,comment:a}=x.elements,r={name:t.value.trim(),phone:s.value.trim(),comment:a.value.trim(),animalId:N};try{const n=(await L.post("https://paw-hut.b.goit.study/api/orders",r)).data;m.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),$()}catch{m.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const v=document.querySelector(".header-burger-btn"),u=document.querySelector(".mobile-menu-backdrop"),H=document.querySelector(".mobile-menu-close"),X=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(v&&u&&H){const e=()=>{u.classList.add("is-open"),document.body.classList.add("menu-open"),v.setAttribute("aria-expanded","true")},t=()=>{u.classList.remove("is-open"),document.body.classList.remove("menu-open"),v.setAttribute("aria-expanded","false")};v.addEventListener("click",e),H.addEventListener("click",t),u.addEventListener("click",s=>{s.target===u&&t()}),X.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&u.classList.contains("is-open")&&t()})}L.defaults.baseURL="https://paw-hut.b.goit.study";async function Y(){const e=await L.get("api/categories");return e.data.unshift("Всі"),e.data}async function Z(e=1,t=8,s=null){const a={page:e,limit:t};return s&&(a.categoryId=s),(await L.get("/api/animals",{params:a})).data}function ee(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,a=t._id||"";return`
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
      `}).join("")}function te(e){return e.map(({image:t,species:s,name:a,categories:r,age:o,gender:n,shortDescription:q,_id:M})=>{const _=r.map(z=>`<li class="pet-card-category">${z.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${a}</h3>
              <ul class="pet-card-category-list">
                ${_}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${n}</li>
              </ul>
              <p class="pet-card-descr">
                ${q}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${M}">Дізнатись більше</button>
          </li>`}).join("")}function se(e){const{image:t,species:s,name:a,age:r,gender:o,description:n,healthStatus:q,behavior:M}=e;return`    <button class="modal-details-btn" type="button">
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
    <p class="pet-details-text">${M}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const R=document.querySelector(".pets-category"),k=document.querySelector(".pets-list"),g=document.querySelector(".add-more-cards-btn"),f=document.querySelector(".backdrop"),O=document.querySelector(".modal-details"),V=document.querySelector(".loader-text");let b=1,D=null,w=[];async function re(){try{const e=await Y();R.innerHTML=ee(e)}catch{m.error({title:"Error",message:"Failed to load categories.",position:"topRight"})}}re();async function A(){try{let e=window.innerWidth>=1440?9:8;ne(),g.style.display="none";const t=await Z(b,e,D);b===1?(w=t.animals,k.innerHTML=""):w=[...w,...t.animals];const s=te(t.animals);k.insertAdjacentHTML("beforeend",s),t.totalItems>b*e?g.style.display="block":g.style.display="none"}catch{m.error({title:"Error",message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{ie()}}A();R.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;D=e.target.dataset.id,b=1;let t=e.target;R.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),k.innerHTML="",g.style.display="block",await A()});g.addEventListener("click",async()=>{b++,await A()});k.addEventListener("click",oe);async function oe(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,a=w.find(o=>o._id===s);if(!a)return;O.innerHTML=se(a),ae(),O.querySelector(".modal-details-btn").addEventListener("click",()=>{F()})}f.addEventListener("click",e=>{e.target===f&&F()});const S=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(S.classList.add("is-open"),document.body.classList.add("no-scroll"),f.classList.contains("is-open")&&f.classList.remove("is-open"))});S.addEventListener("click",e=>{e.target===S&&(S.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});function ae(){f.classList.add("is-open"),document.body.classList.add("no-scroll")}function F(){f.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function ne(){V.style.display="block"}function ie(){V.style.display="none"}const ce=document.querySelector(".js-about-swiper");ce&&new j(".js-about-swiper",{modules:[U,W],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new K(".accordion-container",{duration:400,showMultiple:!1});const le=L.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function de(){try{const{data:e}=await le.get("/feedbacks");return e.feedbacks}catch{return null}}function ue(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:a,rate:r,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${a}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(a=>{new G(a,{starType:"svg",readOnly:!0}).init()})}const pe=document.querySelector(".stories-loader"),me=document.querySelector(".stories-section .stories-controls");function C(e){m.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function h(){pe.classList.remove("loader")}function fe(){me.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await de();if(e===null){C("Не вдалося завантажити історії. Спробуйте пізніше"),h();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){C("Нажаль, історії зараз недоступні"),h();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ue(e);const t=new j(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});fe(),h()}catch{C("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),h()}});
//# sourceMappingURL=index.js.map
