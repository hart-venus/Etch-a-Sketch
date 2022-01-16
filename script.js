
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
                //event.target.style.backgroundColor = LightenDarkenColor(event.target.style.backgroundCorlo, -20) 
                let bgClr = window.getComputedStyle(event.target).backgroundColor
                event.target.style.backgroundColor = DarkenColor(bgClr, 20)
            }
            
        })
    })
}

generate(16)
//generate(parseInt(prompt('how many squares you fucker')))
function DarkenColor(col,amt) {
    let rgb = col;
    let newRgb = []
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');

    rgb.forEach(value => {
        if(value>amt){
            newRgb.push(value-amt)
        }
        else{
            newRgb.push('0')
        }
    })
    console.log(col)
    return('rgb('+newRgb[0]+', '+newRgb[1]+', ' + newRgb[2]+')')

}
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

  


/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
