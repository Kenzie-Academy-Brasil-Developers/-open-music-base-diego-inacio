/* Desenvolva sua lógica aqui ... */
const buttonTheme = document.querySelector("#btn-theme")
const imgBtn = document.querySelector("#img-btn")
const body = document.body
const theme = "dark-mode"
const srcImg = ["./assets/img/moon.png", "./assets/img/sun.png"]
let darkMode

imgBtn.src = srcImg[0]

buttonTheme.addEventListener("click", function(){

        darkMode = !darkMode
        body.classList.toggle(theme)

        localStorage.setItem(theme, darkMode)
        
        if(darkMode){
            imgBtn.src = srcImg[1]
            
        }else{
          imgBtn.src = srcImg[0]
          localStorage.removeItem
        }
})
