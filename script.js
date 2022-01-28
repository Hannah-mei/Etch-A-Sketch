let side=Number(prompt('How many cells per side would you like?', ''));
let cellAmount=side ** 2;
let cellSize=600/side;

const container=document.getElementById('container');

for (let i=0; i<cellAmount; i++) {
    let cell=document.createElement('div');
    container.appendChild(cell)
    cell.style.height=`${cellSize}px`;
    cell.style.width=`${cellSize}px`;
    cell.onmouseover = () => cell.style.backgroundColor = 'black';
}

