let board = document.querySelector('.board');

// создаем массив с рандомными цветами для красоты xD
let colorsArray = ['#ea425f', '#763dd9', '#c2dc36', '#e24a4d', '#f3fced', '#ffabad', '#f2d60e', '#0077c0'];
let emojisArray = ['😍', '🥰', '🤩', '🤠', '🤑', '❤️'];

for (let i = 0; i < 49; i++)
{
  // создаем элемент на доске
  let div = document.createElement('div');
  div.classList.add('board-item');

  // добавляем событие, которое изменяет цвет элемента на доске
  div.addEventListener("mouseenter", (event) => {
    event.target.style.background = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    event.target.innerHTML = emojisArray[Math.floor(Math.random() * emojisArray.length)];
  })

  // обнуляем прошлое событие
  div.addEventListener("mouseleave", (event) => {
    setTimeout(() => {
      event.target.style.removeProperty('background');
      event.target.innerHTML = '';
    }, 500)
  })

  // добавляем элемент на доску
  board.appendChild(div);
}