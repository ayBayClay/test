function addPony(e) {
  const pony = document.createElement('div');
  pony.innerHTML = 'PNY';
  pony.className = 'pony';
  pony.style.color = randomColor();
  document.querySelector('.add-to').append(pony);
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#'
  for(let i = 0; i < 6; i ++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color;
}

const button = document.querySelector(".add-pony")
button.addEventListener('click', addPony);