import{a as p,A as L,R as h,S as v,i as S}from"./assets/vendor-Cq87y5Rf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();p.defaults.baseURL="https://paw-hut.b.goit.study";async function $(){const e=await p.get("api/categories");return e.data.unshift("Всі"),e.data}async function M(e=1,t=8,r=null){const a={page:e,limit:t};return r&&(a.categoryId=r),(await p.get("/api/animals",{params:a})).data}function q(e){return e.map(t=>{const r=typeof t=="string"?t:t.name,a=t._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${r==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${r}"
            data-id="${a}"
          >
            ${r}
          </button>
        </li>
      `}).join("")}function T(e){return e.map(({image:t,species:r,name:a,categories:s,age:o,gender:n,shortDescription:m})=>{const w=s.map(b=>`<li class="pet-card-category">${b.name}</li>`).join("");return`<li class="pet-card">
            <img class="pet-card-img" src="${t}" alt="${r}" />
            <div class="pet-description">
              <p class="pet-card-type">${r}</p>
              <h3 class="pet-card-name">${a}</h3>
              <ul class="pet-card-category-list">
                ${w}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${n}</li>
              </ul>
              <p class="pet-card-descr">
                ${m}
              </p>
            </div>
            <button class="pet-card-btn">Дізнатись більше</button>
          </li>`}).join("")}const u=document.querySelector(".pets-category"),y=document.querySelector(".pets-list"),l=document.querySelector(".add-more-cards-btn");let i=1,g=null;async function k(){try{const e=await $();u.innerHTML=q(e)}catch(e){console.log(e)}}k();async function f(){try{let e=window.innerWidth>=1440?9:8;const t=await M(i,e,g),r=T(t.animals);i===1&&(y.innerHTML=""),y.insertAdjacentHTML("beforeend",r),t.totalItems<=i*e?l.style.display="none":l.style.display="block"}catch(e){console.log(e)}}f();u.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;g=e.target.dataset.id,i=1;let t=e.target;u.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),y.innerHTML="",l.style.display="block",await f()});l.addEventListener("click",async()=>{i++,await f()});new L(".accordion-container",{duration:400,showMultiple:!1});const C=p.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function E(){try{const{data:e}=await C.get("/feedbacks");return e.feedbacks}catch{return null}}function H(e){const t=document.querySelector(".stories-section .stories-wrapper"),r=e.map(({description:a,rate:s,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${s}"></div>     
          <p class="storie-text">${a}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",r),document.querySelectorAll(".star-rating").forEach(a=>{new h(a,{starType:"svg",readOnly:!0}).init()})}const O=document.querySelector(".stories-loader"),P=document.querySelector(".stories-section .stories-controls");function d(e){S.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function c(){O.classList.remove("loader")}function j(){P.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await E();if(e===null){d("Не вдалося завантажити історії. Спробуйте пізніше"),c();const r=document.querySelector(".stories-section .stories-wrapper");r&&(r.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){d("Нажаль, історії зараз недоступні"),c();const r=document.querySelector(".stories-section .stories-wrapper");r&&(r.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}H(e);const t=new v(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});j(),c()}catch{d("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),c()}});
//# sourceMappingURL=index.js.map
