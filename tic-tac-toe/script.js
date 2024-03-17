'use strict';



let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const combo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let player = 1;
let winner;


function checkWin() {
    let zeroNums = 0;
    board.forEach((item) => {if (item === 0) zeroNums++})
    if (zeroNums === 0) winner = 'Ничья'

    let p1, p2, p3
    for(let indexes of combo) {
        [p1, p2, p3] = indexes
        if (board[p1] === 1 && board[p2] === 1 && board[p3] === 1) {
            winner = 'Победил первый игрок!'
        }
        else if (board[p1] === 2 && board[p2] === 2 && board[p3] === 2) {
            winner = 'Победил второй игрок!'
        }
    }
    if (winner) {
     render()
     alert(winner)
    }
}
function handleCellClick(index) {
    let cell = board[index]
    if (cell === 0 && !winner) {
        board[index] = player
        player = player == 1 ? 2 : 1
        console.log(board)
        checkWin()
        render()
    }
    
}



function render() {
    const board_obj = document.getElementById('board');
    board_obj.innerHTML = '';
    let cell, cell_obj
    board.forEach((item, index) => {
        cell = item
        cell_obj = document.createElement('div')
        cell_obj.classList.add('cell')
        let calback_func = () => handleCellClick(index)
        cell_obj.onclick = calback_func;
        if (cell === 1) {
            cell_obj.innerText = "X"
        }
        else if(cell === 2) {
            cell_obj.innerText = "O"
        }
        board_obj.appendChild(cell_obj)
    })
}

render()