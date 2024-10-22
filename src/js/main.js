
import { categories } from "./categories";
import "./auth"
// import { registrationTemplate } from "./registration";
// import { addressTemplate } from "./address";

//////////////////language



document.getElementById('select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const langIcon = document.getElementById('langIcon');
    
    if (selectedLanguage === 'uz') {
      langIcon.src = './src/assets/img/LanguageUZ.svg';
      langIcon.alt = 'Uzbek';
      
    } else if (selectedLanguage === 'ru') {
      langIcon.src = './src/assets/img/LanguageRU.svg';
      langIcon.alt = 'Russian';
    }
  });

//   //////////////////////////////////////////////////////



// ////////////////////////////profile////////////////////////////////////////////////////////////////
// const loginInput = document.getElementById('loginInput');
// const loginMenu = document.getElementById('loginMenu');
// const headerWindow = document.getElementById('headerWindow');


// loginInput.addEventListener('focus', () => {
//     loginMenu.classList.remove('hidden');
//     headerWindow.classList.remove('hidden');
    
  

//   headerWindow.addEventListener('click', () => {
//     loginMenu.classList.add('hidden');
//     headerWindow.classList.add('hidden');
//     loginInput.style.backgroundColor = "";
//   });


//   document.addEventListener('click', (event) => {
//     if(!loginMenu.contains(event.target) && event.target !== loginInput){
//       loginMenu.classList.add('hidden');
//       headerWindow.classList.add('hidden');
//       loginInput.style.backgroundColor = "white";
      
//     }
//   },true);


//   headerWindow.style.pointerEvents = 'none';
// });


//////////////////////////////registrations //////////////////////////

// const login = document.getElementById("login");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// let users = {};

// function User(login, password) {
//   this.login = login;
//   this.password = password;
// }

// function createId(users) {
//   return Object.keys(users).length;
// }




///////////////////search///////////////////

const searchInput = document.getElementById('search');
const downMenu = document.getElementById('downMenu');
const mainWindow = document.getElementById('mainWindow');

searchInput.addEventListener('focus', () => {
    downMenu.classList.remove('hidden');
    mainWindow.classList.remove('hidden');


    searchInput.style.backgroundColor = "#fff"
  });

  mainWindow.addEventListener('click', () => {
    downMenu.classList.add('hidden');
    mainWindow.classList.add('hidden');
    searchInput.style.backgroundColor = ""
  })

  mainWindow.addEventListener('click', (Event) =>{
    if (downMenu.contains(Event.target) && Event.target !== searchInput){
        downMenu.classList.add('hidden');
        mainWindow.classList.add('hidden');
        searchInput.style.backgroundColor = "white"
    }
  }, true);

  mainWindow.style.pointerEvents = 'none';




///////////////////////////////////////////////////////////////////////////////////Категория/////////////////////
const hideEl = (el, display = "block") => {
  if (display) {
    el.classList.remove(display);
  }

  el.classList.add("hidden");
};

const showEl = (el, display = "block") => {
  el.classList.remove("hidden");

  if (display) {
    el.classList.add(display);
  }
};

const getCateogryTemplate = (category, idx) => {
  return `
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center justify-start gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group"
      data-index="${idx}"
      onclick="toggleDropdown(${idx})"
    >
      <div
        class="category__img border border-gray-4  shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-[0.3s] group-hover:bg-blue group-hover:border-white/20"
      >
        <img src="${category.icon}" :alt="${
    category.name
  }" class="w-8 h-8 icon-blue  group-hover:icon-white" />
      </div>
      <div class="flex-grow pl-3 text-start">
        <h3 class:"font-semibold text-base font-sans">${category.name}</h3>
        <p class:"text-sm font-normal text-[#8E9297">${category.announcementCount} объявлений</p>
      </div>
      <img src="./src/assets/img/icons/chevron-right.svg" "chevron-right" class="category__chevron transition-[transform]  duration-200" />
    </div>
  `;
};

const renderCatetories = () => {
  const categoriesSection = document.querySelector(".categories");

  categories.forEach((category, idx) => {
    categoriesSection.innerHTML =categoriesSection.innerHTML +  getCateogryTemplate(category, idx);
  });
};

renderCatetories();

const getSubcategoryTemplate = (subcategory) => {
  return `
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${subcategory.name}</h4>
      <img src="./src/assets/img/icons/chevron-right.svg" alt="chevron-right" />
    </a>
  `;
};

let activeIdx = null;

const adjustDropdownPosition = (categoryIdx, dropdownContainer) => {
  const activeRow = Math.floor(categoryIdx / 3) + 2;
  dropdownContainer.style.gridRow = activeRow;
};

const toggleDropdownVisibility = (categoryIdx, dropdownContainer) => {
  if (dropdownContainer.classList.contains("hidden")) {
    showEl(dropdownContainer, "grid");
  } else if (activeIdx === categoryIdx) {
    hideEl(dropdownContainer, "grid");
  }
};

const renderSubcategories = (subcategories, dropdownContainer) => {
  dropdownContainer.innerHTML = subcategories
    ? subcategories.map(getSubcategoryTemplate).join("")
    : "Empty";
};

const toggleCategoryActive = (categoryIdx) => {
  const categories = document.querySelectorAll(".categories .category");

  categories.forEach((c) => c.classList.remove("active"));

  if (activeIdx === categoryIdx) {
    categories[categoryIdx].classList.remove("active");  
  } else {
    categories[categoryIdx].classList.toggle("active");
  }
};

window.toggleDropdown = (categoryIdx) => {
  const subcategories = categories[categoryIdx].subcategories

  const dropdownContainer = document.querySelector(".subcategories-dropdown");

  adjustDropdownPosition(categoryIdx, dropdownContainer);

  toggleDropdownVisibility(categoryIdx, dropdownContainer);

  toggleCategoryActive(categoryIdx);

  renderSubcategories(subcategories, dropdownContainer);

  activeIdx = categoryIdx;
};




