const imgList = document.querySelector(".list-item");

const arrPicture = [
  "./img/first-avenger.jpeg",
  "./img/iron-man.jpeg",
  "./img/thor.jpeg",
  "./img/doctor-strange.jpeg",
  "./img/avengers-1.jpeg",
  "./img/infinity-war.jpeg",
  "./img/end-game.jpeg",
];

// li태그 만들고
// img의 src를 forEach를 통해서 넣어주고  html에 추가하기

arrPicture.forEach((item) => {
  const elLi = document.createElement("li");
  elLi.innerHTML = `<img src=${item} alt=''>`;

  // li 안에 img 태그 넣기
  imgList.appendChild(elLi); // ul의 자식 노드중 맨 마지막에 li태그 붙이기
});

const items = imgList.querySelectorAll("li");

// translateZ를 수치로
const radius = (items[0].offsetWidth * items.length) / 3.14 / 2;

items.forEach((item, index) => {
  if (index === 0) {
    item.style.transform = `rotateY(0) translateZ(${radius}px)`;
  } else {
    item.style.transform = `rotateY(${
      (360 / items.length) * index
    }deg) translateZ(${radius}px)`;
  }
});

const angle = 360 / items.length;
let currAngle = 0;

document.addEventListener("click", (event) => {
  if (window.innerWidth / 2 < event.clientX) {
    currAngle -= angle;
  } else {
    currAngle += angle;
  }
  imgList.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});
