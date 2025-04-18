const gameboard = document.querySelector(".gameboard");
const info = document.querySelector("#info");
let curentPlayer = "X";
const statusText = document.getElementById('info')
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const startCells = [
    '', '', '',
    '', '', '',
    '', '', ''
];



function createBoard() {

    startCells.forEach((_cells, index) => {
        const cellElements = document.createElement('div');
        cellElements.classList.add('cellSquare');
        cellElements.id = index;

        gameboard.appendChild(cellElements);
        cellElements.addEventListener('click', whenclick);

    })



};

createBoard();

function whenclick(e) {
   
    const cellElement02 = document.getElementById(this.id);


    if (curentPlayer == "X") {
        cellElement02.innerHTML = `<h1 id="symbol">X</h1>`;
        statusText.innerText = 'Turn of player O';
        startCells[this.id] = "X";
    }
    else {
        cellElement02.innerHTML = `<h1 id="symbol">O</h1>`;
        statusText.innerText = 'Turn of player X';
        startCells[this.id] = "O";
    }
    curentPlayer = curentPlayer == "X" ? "O" : "X";
    checkWin();
    e.target.removeEventListener('click', whenclick);
    
}

function checkWin() {
    const firstRow = startCells[0] === startCells[1] && startCells[1] === startCells[2] && 
    startCells[0];
    const secondRow = startCells[3] === startCells[4] && startCells[4] === startCells[5] && 
    startCells[3];
    const thirdRow = startCells[6] === startCells[7] && startCells[7] === startCells[8] && 
    startCells[6];


    if (firstRow === 'X') {
        statusText.innerHTML = 'player X wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('2').style.backgroundColor = 'green';
    }
    else if (firstRow === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('2').style.backgroundColor = 'green';
    }
    else if (secondRow === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
    }
    else if (secondRow === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
    }
    else if (thirdRow === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('6').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    else if (thirdRow === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('6').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    const firstColumn = startCells[0] === startCells[3] && startCells[3] === startCells[6] && 
    startCells[0];
    const secondColumn = startCells[1] === startCells[4] && startCells[4] === startCells[7] && 
    startCells[1];
    const thirdColumn = startCells[2] === startCells[5] && startCells[5] === startCells[8] && 
    startCells[2];
    const diagonal1 = startCells[0] === startCells[4] && startCells[4] === startCells[8] && 
    startCells[0];
    const diagonal2 = startCells[2] === startCells[4] && startCells[4] === startCells[6] && 
    startCells[2];

    if (firstColumn === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
    }
    else if (firstColumn === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('3').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
    }
    else if (secondColumn === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
    }
    else if (secondColumn === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('7').style.backgroundColor = 'green';
    }
    else if (thirdColumn === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    else if (thirdColumn === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('5').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    else if (diagonal1 === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    else if (diagonal1 === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('0').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('8').style.backgroundColor = 'green';
    }
    else if (diagonal2 === 'X') {
        statusText.innerText = 'player X wins!';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
    }
    else if (diagonal2 === 'O') {
        statusText.innerText = 'player O wins!';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('4').style.backgroundColor = 'green';
        document.getElementById('6').style.backgroundColor = 'green';
    }
    
};


function resetGame(){
    window.addEventListener('click', () => {
        location.reload();
    });

}
