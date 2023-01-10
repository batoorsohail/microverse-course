const menu = document.getElementById('menu');

function openMenu() {
  menu.style.display = 'flex';
}

function closeMenu() {
  menu.style.display = 'none';
}

menu.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);

const teachers = document.getElementById('teachers-container');

const teacherInfo = [
  {
    img: './images/bill.png',
    name: 'Bill Gates',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/elon.png',
    name: 'Elon Mush',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/jeff.png',
    name: 'Jeff bezos',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/mark.png',
    name: 'Mark Zukerbarg',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/steve.png',
    name: 'Steve Jobs',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
  {
    img: './images/zhao.png',
    name: 'Zhao',
    company: 'Consectetur adipisicing elit. Voluptas, repellendus!',
    subject: 'Quae voluptate similique doloremque voluptatem debitis neque at, est amet incidunt? Nobis.',
  },
];

if (teachers) {
  for (let i = 0; i < teacherInfo.length; i += 1) {
    teachers.innerHTML += `
      <article class= "teachers-sample">
        <img src="${teacherInfo[i].img}" class="teachers-images" alt="teachers Gates photo">
        <div class= "teachers-info">
          <h3 class= "teachers-name">${teacherInfo[i].name}</h3>
          <p class= "teachers-company">${teacherInfo[i].company}</p>
          <div class="short-line"></div>
          <p class= "teachers-subject">${teacherInfo[i].subject}</p>
        </div>
      </article>`;
  }
}
