// function adicionaItem(event){
//     const item = document.createElement('article');
//     item.classList.add("item");
    
//     const cont = document.getElementById('container');
//     cont.insertAdjacentElement('beforeend', item)
// }

//OUTRA OPÇÃO:

function adicionaItem(event){
    const cont = document.getElementById('container');
    cont.innerHTML += `<article class="item" onclick="removeItem(event)"></article>`
}

function removeItem(event) {
    event.target.remove()
}