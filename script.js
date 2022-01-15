
const container = document.getElementById('container')
const clear = document.getElementById('clear')

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
            event.target.style.backgroundColor = 'black'
        })
    })
}

//generate(parseInt(prompt('how many squares you fucker')))

clear.addEventListener('click', () => {
    generate(12)
})





/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
