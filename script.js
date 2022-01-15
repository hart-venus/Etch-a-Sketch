let resolution = 16;
const container = document.getElementById('container')
for(let i = 0; i <resolution;i++){
    let subContainer = document.createElement('div')
    subContainer.textContent = 'div'
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
