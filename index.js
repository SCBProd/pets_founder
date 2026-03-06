import{a as p,R as b,S as L,i as v}from"./assets/vendor-HjG_fzVm.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();p.defaults.baseURL="https://paw-hut.b.goit.study";async function S(){const e=await p.get("api/categories");return e.data.unshift("Всі"),e.data}async function $(e=1,s=8,r=null){const n={page:e,limit:s};return r&&(n.categoryId=r),(await p.get("/api/animals",{params:n})).data}function M(e){return e.map(s=>{const r=typeof s=="string"?s:s.name,n=s._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${r==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${r}"
            data-id="${n}"
          >
            ${r}
          </button>
        </li>
      `}).join("")}function q(e){return e.map(({image:s,species:r,name:n,categories:t,age:a,gender:o,shortDescription:m})=>{const h=t.map(w=>`<li class="pet-card-category">${w.name}</li>`).join("");return`<li class="pet-card">
            <img class="pet-card-img" src="${s}" alt="${r}" />
            <div class="pet-description">
              <p class="pet-card-type">${r}</p>
              <h3 class="pet-card-name">${n}</h3>
              <ul class="pet-card-category-list">
                ${h}
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
          </li>`}).join("")}const u=document.querySelector(".pets-category"),y=document.querySelector(".pets-list"),l=document.querySelector(".add-more-cards-btn");let i=1,f=null;async function E(){try{const e=await S();u.innerHTML=M(e)}catch(e){console.log(e)}}E();async function g(){try{let e=window.innerWidth>=1440?9:8;const s=await $(i,e,f),r=q(s.animals);i===1&&(y.innerHTML=""),y.insertAdjacentHTML("beforeend",r),s.totalItems<=i*e?l.style.display="none":l.style.display="block"}catch(e){console.log(e)}}g();u.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;f=e.target.dataset.id,i=1;let s=e.target;u.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),s.classList.add("pets-category-btn-active"),y.innerHTML="",l.style.display="block",await g()});l.addEventListener("click",async()=>{i++,await g()});const T=p.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function k(){try{const{data:e}=await T.get("/feedbacks");return e.feedbacks}catch{return null}}function C(e){const s=document.querySelector(".happy-tails-section .swiper-wrapper"),r=e.map(({description:n,rate:t,author:a})=>`
        <div class="swiper-slide">
            <div class="star-rating" data-score="${t}"></div>
            <p class="swiper-slide-content">${n}</p>
            <p class="swiper-slide-author">${a}</p>
        </div>
    `).join("");s.insertAdjacentHTML("beforeend",r),s.querySelectorAll(".star-rating").forEach(n=>{new b(n,{starType:"svg",readOnly:!0}).init()})}const H=document.querySelector(".loader-element"),O=document.querySelector(".happy-tails-section .swiper-controls");function d(e){v.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function c(){H.classList.remove("loader")}function P(){O.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{const e=await k();if(!e){d("Не вдалося завантажити історії. Спробуйте пізніше"),c(),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">Не вдалося завантажити історії</p>';return}if(e.length===0){d("На жаль, історії зараз відсутні"),c(),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">На жаль, історії зараз відсутні</p>';return}C(e),new L(".happy-tails-section .swiper-wrapper-container",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".happy-tails-section .swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".happy-tails-section .swiper-button-next",prevEl:".happy-tails-section .swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}}),P(),c()}catch{d("Сталася помилка. Спробуйте пізніше"),document.querySelector(".happy-tails-section .swiper-wrapper").innerHTML='<p class="error-message">На жаль, історії зараз відсутні</p>',c()}});
//# sourceMappingURL=index.js.map
