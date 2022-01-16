
const container = document.getElementById('container')
const clear = document.getElementById('clear')
const normalmode = document.getElementById('normal')
const rainbowmode = document.getElementById('rainbow')
const greyscalemode = document.getElementById('grey')
// 0: normal 1: rainbow 2: greyscale
let currentmode = 0


function generate(res){
    for(let i = 0; i <res;i++){
        let subContainer = document.createElement('div')
        subContainer.classList.add('subcontainer')
        for(let i = 0; i<res;i++){
            let gridItem = document.createElement('div')

            
            gridItem.classList.add('gridItem')
            subContainer.appendChild(gridItem)
        }
        
        
    
        container.appendChild(subContainer)
    
    }
    document.querySelectorAll('.gridItem').forEach(item => {
        item.addEventListener('mouseover', function(event){
            if(currentmode == 0){
                event.target.style.backgroundColor = '#000000'
            }
            else if(currentmode == 1){
                event.target.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            }
            else{
                //event.target.style.backgroundColor = LightenDarkenColor(event.target.style.backgroundColor, -20) 
                console.log(window.getComputedStyle(event.target).backgroundColor)
            }
            
        })
    })
}

generate(16)
//generate(parseInt(prompt('how many squares you fucker')))

clear.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

    let resolution  = parseInt(prompt('How big? (number not bigger than 100)'))
    if(resolution<101){
        generate(resolution)
    }
})

normalmode.addEventListener('click', () => {
    currentmode = 0
})
rainbowmode.addEventListener('click', () => {
    currentmode = 1
})
greyscalemode.addEventListener('click', () => {
    currentmode = 2
})

// normalmode.addEventListener('click', () )

function LightenDarkenColor(col, amt) {
    col = parseInt(col, 16);
    return (((col & 0x0000FF) + amt) | ((((col >> 8) & 0x00FF) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
  }
  


/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
