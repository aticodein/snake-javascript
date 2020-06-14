let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
          if (lastInputDirection.y !==0) break  
          inputDirection = { x: 0, y: -1 }
          break
        case "ArrowDown": 
          if (lastInputDirection.y !==0) break
          inputDirection = { x: 0, y: 1 }
          break
        case "ArrowLeft": 
          if (lastInputDirection.x !==0) break
          inputDirection = { x: -1, y: 0 }
          break
        case "ArrowRight": 
          if (lastInputDirection.x !==0) break
          inputDirection = { x: 1, y: 0 }
          break      
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}


document.getElementById("fa-arrow-alt-circle-up").addEventListener("click", arrowUp);

function arrowUp() {
    inputDirection = { x: 0, y: -1 }
}

document.getElementById("fa-arrow-alt-circle-down").addEventListener("click", arrowDown);

function arrowDown() {
    
    inputDirection = { x: 0, y: 1 }
}

document.getElementById("fa-arrow-alt-circle-left").addEventListener("click", arrowLeft);

function arrowLeft() {
    inputDirection = { x: -1, y: 0 }
}

document.getElementById("fa-arrow-alt-circle-right").addEventListener("click", arrowRight);

function arrowRight() {
    inputDirection = { x: 1, y: 0 }
}