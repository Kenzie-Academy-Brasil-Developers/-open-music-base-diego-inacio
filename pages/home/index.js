/* Desenvolva sua lógica aqui ... */
const listTypesMusic = document.querySelector(".listTypes")

function renderCategories (types){

    types.forEach(type => {
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.className = "btn-categories"
        button.innerText = `${type}`
        li.className ="list-style"
        li.appendChild(button)
        listTypesMusic.appendChild(li)
        
    });

}
renderCategories(categories)


let cards = document.querySelector(".cards")

function renderCard(listProduts){

    listProduts.forEach((product) => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let divTitle = document.createElement("div")
        let spanBand = document.createElement("span")
        let spanYaer = document.createElement("span")
        let album = document.createElement("p")
        let price = document.createElement("span")
        let divPrice =document.createElement("div")
        let btnBuy = document.createElement("button")
        
        li.className ="list-style"
        img.src = product.img
        img.alt = `Álbum ${product.title}`
        divTitle.className = "band-year"
        spanBand.innerText = product.band
        spanYaer.innerText = product.year
        album.innerText = product.title
        price.innerText = `R$ ${product.price},00`
        divPrice.className= "btn-price"
        btnBuy.innerText= "Comprar"
        btnBuy.className ="btn-categories"

        cards.append(li)
        divTitle.append(spanBand, spanYaer)
        divPrice.append(price, btnBuy)
        li.append(img, divTitle, album, divPrice)

    })

}
renderCard(products)

function renderAll(){
    const btnCategories = document.querySelectorAll(".btn-categories")
    let cards = document.querySelector(".cards")
    
    btnCategories.forEach((btn) => {
        btn.addEventListener("click", function(){

            cards.innerHTML = ""
            const filter = btn.innerText

            if(filter == "Todos"){
                renderCard(products)
            }

            const genreFiltered = filterGenre(filter)

            renderCard(genreFiltered)
        })
    })
}
function filterGenre(text){
    const genreList = products.filter((product)=> product.genre.includes(text))
    return genreList
}
renderAll()

