window.onload = () => {

    let $formLogin = document.querySelector("#login")
    let $formPass1 = document.querySelector("#pass1")
    let $formPass2 = document.querySelector("#pass2")
    
    $formLogin.addEventListener("click", function() {
        console.log($formLogin)
        if ($formLogin.value === "Логин") {
            $formLogin.value = ""
        }
    })

    $formPass1.addEventListener("click", function() {
        console.log($formLogin)
        if ($formPass1.value === "Пароль") {
            $formPass1.value = ""
        }
    })

    $formPass2.addEventListener("click", function() {
        console.log($formLogin)
        if ($formPass2.value === "Снова пароль") {
            $formPass2.value = ""
        }
    })
    
    let $registerButton = document.querySelector("#register")
    
    $registerButton.addEventListener("click", function () {

        console.log("button clicked")

        let $lisenceCheck = document.querySelector("label input[type=checkbox]").checked
        
        if ($formLogin.value === "admin" && $formPass1.value === "admin" && $formPass2.value === "admin" && $lisenceCheck === true) {
            let  $registerWindow = document.querySelector("#registerStatus")
            $registerWindow.innerHTML =
                `
                <p id="registerStatus" class="success">Вы таки смогли зарегистрироваться!</p>
                `
        } else  {
            let  $registerWindow = document.querySelector("#registerStatus")
            $registerWindow.innerHTML =
                `
                <p id="registerStatus" class="unsuccess">Вы что-то сделали не так!</p>
                `
        }
        
        
    })
    
    
    
}