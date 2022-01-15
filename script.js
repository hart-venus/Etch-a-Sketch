let resolution = 16;
const container = document.getElementById('container')

for(let i = 0; i <resolution;i++){
    let subContainer = document.createElement('div')
    subContainer.classList.add('subcontainer')
    for(let i = 0; i<resolution;i++){
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



/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
