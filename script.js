
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
                event.target.style.backgroundColor = 'black'
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


// normalmode.addEventListener('click', () )




/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
