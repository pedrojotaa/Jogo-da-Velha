document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    //vai varrer cada square entre todos os squares
    squares.forEach((square) => {
        square.addEventListener('click', (event) => {
            let square = event.target
            let position = square.id

            handleMove(position)
            updateSquare()
        })
    })

    function updateSquare(){
        let squares = document.querySelectorAll('.square')

        squares.forEach((square) => {
            let position = square.id
            let symbol = board[position]

            if(symbol != ''){
                square.innerHTML = `<div class= '${symbol}'></div> `
            }
        })
    }
 
})

