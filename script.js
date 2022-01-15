let resolution = 100;
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
/*
for(let i = 0; i <resolution;i++){
    let gridItem = document.createElement('div')
    gridItem.textContent = 'div'
    container.appendChild(gridItem)
    console.log(i)
}
*/
