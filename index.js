import{a as m,A as C,R as T,S as x,i as B}from"./assets/vendor-Cq87y5Rf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const b=document.querySelector(".backdrop"),H=document.querySelector(".modal-btn"),O=document.querySelector(".modal-form"),f=document.querySelector("#user-name"),d=document.querySelector("#user_phone"),y=document.querySelector("#user-comment"),a=document.querySelector(".send-button"),P=f.closest(".modal-form-field").querySelector(".error-message"),I=d.closest(".modal-form-field").querySelector(".error-message"),j=y.closest(".modal-form-comment").querySelector(".error-message");function v(){b.classList.remove("is-open"),document.body.classList.remove("no-scroll"),O.reset(),i(f,P),i(d,I),i(y,j),L()}H.addEventListener("click",v);b.addEventListener("click",e=>{e.target===b&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});function q(e,t,r="Error text"){e.classList.add("error"),t.textContent=r}function i(e,t){e.classList.remove("error"),t.textContent=""}a.disabled=!0;a.classList.add("disabled");function L(){const e=f.value.trim()!=="",t=/^380\d{9}$/.test(d.value.trim()),r=y.value.trim()!=="";a.disabled=!(e&&t&&r),a.disabled?a.classList.add("disabled"):a.classList.remove("disabled")}[f,d,y].forEach(e=>{const t=e.closest(".modal-form-field, .modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===d?/^380\d{9}$/.test(e.value.trim())||q(e,t,"Error text"):e.value.trim()===""?q(e,t,"Error text"):i(e,t),L()}),e.addEventListener("input",()=>{i(e,t),L()})});m.defaults.baseURL="https://paw-hut.b.goit.study";async function A(){const e=await m.get("api/categories");return e.data.unshift("Всі"),e.data}async function R(e=1,t=8,r=null){const n={page:e,limit:t};return r&&(n.categoryId=r),(await m.get("/api/animals",{params:n})).data}function N(e){return e.map(t=>{const r=typeof t=="string"?t:t.name,n=t._id||"";return`
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
      `}).join("")}function V(e){return e.map(({image:t,species:r,name:n,categories:s,age:o,gender:c,shortDescription:$})=>{const k=s.map(M=>`<li class="pet-card-category">${M.name}</li>`).join("");return`<li class="pet-card">
            <img class="pet-card-img" src="${t}" alt="${r}" />
            <div class="pet-description">
              <p class="pet-card-type">${r}</p>
              <h3 class="pet-card-name">${n}</h3>
              <ul class="pet-card-category-list">
                ${k}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${c}</li>
              </ul>
              <p class="pet-card-descr">
                ${$}
              </p>
            </div>
            <button class="pet-card-btn">Дізнатись більше</button>
          </li>`}).join("")}const w=document.querySelector(".pets-category"),h=document.querySelector(".pets-list"),p=document.querySelector(".add-more-cards-btn");let l=1,E=null;async function z(){try{const e=await A();w.innerHTML=N(e)}catch(e){console.log(e)}}z();async function S(){try{let e=window.innerWidth>=1440?9:8;const t=await R(l,e,E),r=V(t.animals);l===1&&(h.innerHTML=""),h.insertAdjacentHTML("beforeend",r),t.totalItems<=l*e?p.style.display="none":p.style.display="block"}catch(e){console.log(e)}}S();w.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;E=e.target.dataset.id,l=1;let t=e.target;w.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),h.innerHTML="",p.style.display="block",await S()});p.addEventListener("click",async()=>{l++,await S()});new C(".accordion-container",{duration:400,showMultiple:!1});const U=m.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function W(){try{const{data:e}=await U.get("/feedbacks");return e.feedbacks}catch{return null}}function _(e){const t=document.querySelector(".stories-section .stories-wrapper"),r=e.map(({description:n,rate:s,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${s}"></div>     
          <p class="storie-text">${n}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",r),document.querySelectorAll(".star-rating").forEach(n=>{new T(n,{starType:"svg",readOnly:!0}).init()})}const D=document.querySelector(".stories-loader"),F=document.querySelector(".stories-section .stories-controls");function g(e){B.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function u(){D.classList.remove("loader")}function K(){F.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await W();if(e===null){g("Не вдалося завантажити історії. Спробуйте пізніше"),u();const r=document.querySelector(".stories-section .stories-wrapper");r&&(r.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){g("Нажаль, історії зараз недоступні"),u();const r=document.querySelector(".stories-section .stories-wrapper");r&&(r.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}_(e);const t=new x(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});K(),u()}catch{g("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),u()}});
//# sourceMappingURL=index.js.map
