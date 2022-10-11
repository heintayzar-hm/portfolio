const projects = [
  {
    id: "0",
    title: "Hein",
    tags: ["Canopy", "Back End dev", "2015"],
    imgsrc: "resources/index_fake1_project.svg",
    description: {
      small: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      big: "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
    technologies: ["HTML", "CSS", "Ruby on Rails"],
    links: ["github pages", "heroku"],
  },
  {
    id: "1",
    title: "Multi-Post Stories",
    tags: ["FACEBOOK", "Full Stack Dev", "2015"],
    imgsrc: "resources/index_fake2_project.svg",
    description: {
      small: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      big: "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
    technologies: ["HTML", "CSS", "Ruby on Rails"],
    links: ["github pages", "heroku"],
  },
  {
    id: "2",
    title: "Tonic",
    tags: ["Canopy", "Back End dev", "2015"],
    imgsrc: "resources/index_fake1_project.svg",
    description: {
      small: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      big: "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
    technologies: ["HTML", "CSS", "Ruby on Rails"],
    links: ["github pages", "heroku"],
  },
  {
    id: "3",
    title: "Tonic",
    tags: ["Canopy", "Back End dev", "2015"],
    imgsrc: "resources/index_fake1_project.svg",
    description: {
      small: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      big: "A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required."
    },
    technologies: ["HTML", "CSS", "Ruby on Rails"],
    links: ["github pages", "heroku"],
  }
];

const hamburgerBtn = document.querySelector('#hamburger-btn');
const crossBtn = document.querySelector('#cross-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const popup = document.querySelector('.pop-up');
const mobileLinks = document.querySelectorAll('.mobile-link');
const btnProjects = document.querySelectorAll('.btn-project');
const workPortfolio = document.querySelector('#portfolio');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// popupCloseBtn.addEventListener('click', () => {
//   popup.style.display = 'none';
// })

mobileLinks.forEach(
  (link) => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  },
);

let listOfelements = '';

btnProjects.forEach(
  (btnProject, i) => {
    btnProject.addEventListener('click', () => {
      console.log(projects[i].title);
      {projects[i].technologies.forEach((technologie) => {
        listOfelements += '<li class="card-tag"><span class="card-tag-text">' + technologie + '</span></li>';
      })}
      const divPopup = document.createElement('div');
      divPopup.classList.add('pop-up');
      divPopup.innerHTML = ` <div class="pop-up-card">
<div class="pop-up-header">
    <div class="w-full">
        <h2>${projects[i].title}</h2>
        <img id="pop-up-cross" src="resources/Normal Button/Tertiary/Icons/cross_black.png" alt="cross">
    </div>
   
    <div class="card-header-frame pop-up-header-span">
        <div class="card-header-frame-client">
            <span class="card-header-frame-client-text">${projects[i].tags[0]}</span>
        </div>
        <span class="counter">
             <img src="resources/Counter.svg" alt="counter"> 
        </span>
        <div class="card-header-frame-role">
            <span class="card-header-frame-role-text">${projects[i].tags[1]}</span>
        </div>
        <span class="counter">
             <img src="resources/Counter.svg" alt="counter"> 
        </span>
        <div class="card-header-frame-year">
            <span class="card-header-frame-year-text">${projects[i].tags[2]}</span>
        </div>
    </div>
</div>
<img class="pop-up-img" src="${projects[i].imgsrc}" alt="fake2">


    <div class="pop-up-footer">
        <p>${projects[i].description.big}</p>
      <div class="pop-up-resources">
        <ul class="card-tags">

        ${listOfelements}
        </ul>
        <div class="pop-up-buttons">
            <button type="button" class="button-link w-146 translate-button"><a href="#" class="button-link-text btn-flex">See Live
            <img class="p-3" src="resources/live_show.svg" alt="live_icon">
        </a>  </button>
            <button type="button" class="button-link w-146 translate-button"><a  href="#" class="button-link-text btn-flex">See Source
                <img class="p-3" src="resources/github_icon.svg" alt="live_icon">
            </a>
            </button>

        </div>
      </div>
    </div>

</div>`
      workPortfolio.appendChild(divPopup);
      divPopup.style.display = 'flex';

      // Waiting for popup to get closed 
      const popupCloseBtn = document.querySelector('#pop-up-cross');
      popupCloseBtn.addEventListener('click', () => {
        divPopup.style.display = 'none';
      })

    })
  }
)


// const divPopupCard = document.createElement('div');
// divPopupCard.classList.add("pop-up");
// const divPopupHeader = document.createElement('div');
// divPopupHeader.classList.add("pop-up-header");
// const divWFull = document.createElement('div');
// divWFull.classList.add("w-full");
// const headerPopup = document.createElement('h2');
// const crossImg = document.createElement('img');
// crossImg.setAttribute("id", "pop-up-cross");
// divWFull.appendChild(headerPopup);
// divWFull.appendChild(crossImg);
