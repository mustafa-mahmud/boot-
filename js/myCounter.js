const myCounter = document.getElementById('my-counter');
const datas = myCounter.querySelectorAll('.counter');

//set only times counter active
let bool = true;

//get counter height+offset scroll
const counterOffsetHeight = myCounter.offsetHeight;
const counterOffsetTop = myCounter.offsetTop;
const counter = counterOffsetTop + counterOffsetHeight;

window.addEventListener('scroll', (e) => {
  const winHeight = window.innerHeight;
  const winScroll = Math.floor(window.scrollY + winHeight + 10);

  if (winScroll >= counter && bool) {
    datas.forEach((data) => {
      //value increaments
      incData(data);
    });
    //only one time show counter
    bool = false;
  } else {
    //if u need multitime show coutner
    //bool = true;
  }
});

function incData(data) {
  const dataSet = +data.getAttribute('data-set');

  for (let i = 0; i <= dataSet; i++) {
    setTimeout(() => {
      data.innerHTML = i;
    }, 10);
  }
}
