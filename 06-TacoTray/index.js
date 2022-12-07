// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    
    // create an array that is a random length between 1 and 10
    const tacoTray = new Array(Math.floor(Math.random() * (10 - 1) + 1));
    
    // fill the array with a taco emoji in each empty slot
    tacoTray.fill('🌮', 0)

    return tacoTray;

}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()