document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    //vai varrer cada square entre todos os squares
    squares.forEach((square) => {
        square.addEventListener('click', (event) => {
            let square = event.target
            let position = square.id

            handleMove(position)
            updateSquare(position)
        })
    })
})

function updateSquare(position){
    let square = document.getElementById(position)
    let symbol = board[position]

    square.innerHTML = `<div class='${symbol}'></div>`
}