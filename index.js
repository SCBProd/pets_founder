import{i as y,a as v,S as O,N as _,P as z,A as U,R as W}from"./assets/vendor-BzGjJ17i.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const B=document.querySelector(".order-backdrop"),K=document.querySelector(".order-modal-btn"),x=document.querySelector(".order-modal-form");document.querySelector(".modal-pet-btn");const m=document.querySelector(".send-button"),l=document.querySelector("#user-name"),i=document.querySelector("#user_phone"),d=document.querySelector("#user-comment"),P=l.closest(".order-modal-form-field").querySelector(".error-message"),T=i.closest(".order-modal-form-field").querySelector(".error-message"),I=d.closest(".order-modal-form-comment").querySelector(".error-message");let j=0;window.addEventListener("open-order-modal",e=>{const t=e?.detail?.petId;if(!t){y.error({title:"Помилка",message:"Не вдалося визначити тварину для заявки",position:"topRight"});return}j=t,openModal()});function q(){B.classList.remove("is-open"),document.body.classList.remove("no-scroll"),x.reset(),c(l,P),c(i,T),c(d,I),E()}K.addEventListener("click",q);B.addEventListener("click",e=>{e.target===B&&q()});document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});function f(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function c(e,t){e.classList.remove("error"),t.textContent=""}m.disabled=!0;m.classList.add("disabled");function E(){const e=l.value.trim()!=="",t=/^380\d{9}$/.test(i.value.trim()),s=d.value.trim()!=="";m.disabled=!(e&&t&&s),m.disabled?m.classList.add("disabled"):m.classList.remove("disabled")}function G(){let e=!0;return l.value.trim()?c(l,P):(f(l,P,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(i.value.trim())?c(i,T):(f(i,T,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),d.value.trim()?c(d,I):(f(d,I,"Введіть коментар"),e=!1),E(),e}[l,i,d].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===i?/^380\d{9}$/.test(e.value.trim())||f(e,t,"Невірний формат телефону"):e.value.trim()===""?f(e,t,"Поле обов'язкове"):c(e,t),E()}),e.addEventListener("input",()=>{c(e,t),E()})});x.addEventListener("submit",async e=>{if(e.preventDefault(),!G())return;const{name:t,phone:s,comment:a}=x.elements,r={name:t.value.trim(),phone:s.value.trim(),comment:a.value.trim(),animalId:j};try{const n=(await v.post("https://paw-hut.b.goit.study/api/orders",r)).data;y.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),q()}catch{y.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const L=document.querySelector(".header-burger-btn"),p=document.querySelector(".mobile-menu-backdrop"),H=document.querySelector(".mobile-menu-close"),J=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(L&&p&&H){const e=()=>{p.classList.add("is-open"),document.body.classList.add("menu-open"),L.setAttribute("aria-expanded","true")},t=()=>{p.classList.remove("is-open"),document.body.classList.remove("menu-open"),L.setAttribute("aria-expanded","false")};L.addEventListener("click",e),H.addEventListener("click",t),p.addEventListener("click",s=>{s.target===p&&t()}),J.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&p.classList.contains("is-open")&&t()})}v.defaults.baseURL="https://paw-hut.b.goit.study";async function Q(){const e=await v.get("api/categories");return e.data.unshift("Всі"),e.data}async function X(e=1,t=8,s=null){const a={page:e,limit:t};return s&&(a.categoryId=s),(await v.get("/api/animals",{params:a})).data}function Y(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,a=t._id||"";return`
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
      `}).join("")}function Z(e){return e.map(({image:t,species:s,name:a,categories:r,age:o,gender:n,shortDescription:$,_id:M})=>{const D=r.map(F=>`<li class="pet-card-category">${F.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${a}</h3>
              <ul class="pet-card-category-list">
                ${D}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${n}</li>
              </ul>
              <p class="pet-card-descr">
                ${$}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${M}">Дізнатись більше</button>
          </li>`}).join("")}function ee(e){const{image:t,species:s,name:a,age:r,gender:o,description:n,healthStatus:$,behavior:M}=e;return`    <button class="modal-details-btn" type="button">
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
    <p class="pet-details-text">${$}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${M}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const R=document.querySelector(".pets-category"),k=document.querySelector(".pets-list"),g=document.querySelector(".add-more-cards-btn"),u=document.querySelector(".backdrop"),te=document.querySelector(".modal-details"),N=document.querySelector(".loader-text");let b=1,V=null,w=[];async function se(){try{const e=await Q();R.innerHTML=Y(e)}catch{y.error({title:"Error",message:"Failed to load categories.",position:"topRight"})}}se();async function A(){try{let e=window.innerWidth>=1440?9:8;oe(),g.style.display="none";const t=await X(b,e,V);b===1?(w=t.animals,k.innerHTML=""):w=[...w,...t.animals];const s=Z(t.animals);k.insertAdjacentHTML("beforeend",s),t.totalItems>b*e?g.style.display="block":g.style.display="none"}catch{y.error({title:"Error",message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{ae()}}A();R.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;V=e.target.dataset.id,b=1;let t=e.target;R.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),k.innerHTML="",g.style.display="block",await A()});g.addEventListener("click",async()=>{b++,await A()});k.addEventListener("click",re);async function re(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,a=w.find(o=>o._id===s);if(!a)return;te.innerHTML=ee(a),document.querySelector(".modal-details-btn").addEventListener("click",()=>{u.classList.remove("is-open"),document.body.style.overflow=""}),u.classList.add("is-open"),document.body.classList.add("no-scroll")}u.addEventListener("click",e=>{e.target===u&&(u.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});const S=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(S.classList.add("is-open"),document.body.classList.add("no-scroll"),u.classList.contains("is-open")&&u.classList.remove("is-open"))});S.addEventListener("click",e=>{e.target===S&&(S.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});function oe(){N.style.display="block"}function ae(){N.style.display="none"}const ne=document.querySelector(".js-about-swiper");ne&&new O(".js-about-swiper",{modules:[_,z],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new U(".accordion-container",{duration:400,showMultiple:!1});const ie=v.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function ce(){try{const{data:e}=await ie.get("/feedbacks");return e.feedbacks}catch{return null}}function le(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:a,rate:r,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${a}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(a=>{new W(a,{starType:"svg",readOnly:!0}).init()})}const de=document.querySelector(".stories-loader"),ue=document.querySelector(".stories-section .stories-controls");function C(e){y.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function h(){de.classList.remove("loader")}function pe(){ue.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await ce();if(e===null){C("Не вдалося завантажити історії. Спробуйте пізніше"),h();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){C("Нажаль, історії зараз недоступні"),h();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}le(e);const t=new O(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});pe(),h()}catch{C("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),h()}});
//# sourceMappingURL=index.js.map
