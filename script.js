let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#resetGame');
let newGameBtn = document.querySelector('#newGame');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#winner');

let turno = true;
let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8,],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame =() =>{
    turno = true;
    enableBox();
    msgContainer.classList.add('hide')

}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('shivam clicked btn');
        if (turno) {
            box.innerText = `O`
            turno = false;
        } else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;

        checkWinner()
    })
});

const disableBox = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBox = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const showWiner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBox()
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern);
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('winner');
                showWiner(pos1val)

            }


        }
    }
}

newGameBtn.addEventListener('click', resetGame)
resetButton.addEventListener('click', resetGame)