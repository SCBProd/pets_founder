import{a as p,R as b,S as L,i as v}from"./assets/vendor-HjG_fzVm.js";import M from"https://cdn.jsdelivr.net/npm/accordion-js/+esm";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();p.defaults.baseURL="https://paw-hut.b.goit.study";async function S(){const e=await p.get("api/categories");return e.data.unshift("Всі"),e.data}async function $(e=1,r=8,s=null){const n={page:e,limit:r};return s&&(n.categoryId=s),(await p.get("/api/animals",{params:n})).data}function q(e){return e.map(r=>{const s=typeof r=="string"?r:r.name,n=r._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${s==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${s}"
            data-id="${n}"
          >
            ${s}
          </button>
        </li>
      `}).join("")}function E(e){return e.map(({image:r,species:s,name:n,categories:t,age:a,gender:o,shortDescription:m})=>{const w=t.map(h=>`<li class="pet-card-category">${h.name}</li>`).join("");return`<li class="pet-card">
            <img class="pet-card-img" src="${r}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${n}</h3>
              <ul class="pet-card-category-list">
                ${w}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${a}</li>
                <li class="pet-card-gender">${o}</li>
              </ul>
              <p class="pet-card-descr">
                ${m}
              </p>
            </div>
            <button class="pet-card-btn">Дізнатись більше</button>
          </li>`}).join("")}const u=document.querySelector(".pets-category"),y=document.querySelector(".pets-list"),l=document.querySelector(".add-more-cards-btn");let i=1,f=null;async function T(){try{const e=await S();u.innerHTML=q(e)}catch(e){console.log(e)}}T();async function g(){try{let e=window.innerWidth>=1440?9:8;const r=await $(i,e,f),s=E(r.animals);i===1&&(y.innerHTML=""),y.insertAdjacentHTML("beforeend",s),r.totalItems<=i*e?l.style.display="none":l.style.display="block"}catch(e){console.log(e)}}g();u.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;f=e.target.dataset.id,i=1;let r=e.target;u.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),r.classList.add("pets-category-btn-active"),y.innerHTML="",l.style.display="block",await g()});l.addEventListener("click",async()=>{i++,await g()});new M(".accordion-container",{duration:400,showMultiple:!1});const k=p.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function C(){try{const{data:e}=await k.get("/feedbacks");return e.feedbacks}catch{return null}}function H(e){const r=document.querySelector(".happy-tails-section .swiper-wrapper"),s=e.map(({description:n,rate:t,author:a})=>`
        <div class="swiper-slide">
            <div class="star-rating" data-score="${t}"></div>
            <p class="swiper-slide-content">${n}</p>
            <p class="swiper-slide-author">${a}</p>
        </div>
    `).join("");r.insertAdjacentHTML("beforeend",s),r.querySelectorAll(".star-rating").forEach(n=>{new b(n,{starType:"svg",readOnly:!0}).init()})}const O=document.querySelector(".loader-element"),P=document.querySelector(".happy-tails-section .swiper-controls");function d(e){v.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function c(){O.classList.remove("loader")}function j(){P.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{const e=await C();if(!e){d("Не вдалося завантажити історії. Спробуйте пізніше"),c(),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">Не вдалося завантажити історії</p>';return}if(e.length===0){d("На жаль, історії зараз відсутні"),c(),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">На жаль, історії зараз відсутні</p>';return}H(e),new L(".happy-tails-section .swiper-wrapper-container",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".happy-tails-section .swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".happy-tails-section .swiper-button-next",prevEl:".happy-tails-section .swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}}),j(),c()}catch{d("Сталася помилка. Спробуйте пізніше"),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">На жаль, історії зараз відсутні</p>',c()}});
//# sourceMappingURL=index.js.map
