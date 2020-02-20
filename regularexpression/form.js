let form=document.querySelector("form");
let button=document.querySelector("button");
let regname=/(^[^0-9])+.{8,12}$/i;
let regemail=/(^[^0-9])+([a-zA-Z0-9]{9})(\@[a-z]{5})\.([a-z]{3})$/i;
let regpassword=/(^[a-zA-Z0-9]{8,15}$)/i;

form.name.addEventListener("keyup",()=>{
    if(regname.test(form.name.value)){
        form.name.classList.add("is-valid");
        form.name.classList.remove("is-invalid");
        button.removeAttribute("disabled");

    }else{
        form.name.classList.remove("is-valid");
        form.name.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
    }

});


form.email.addEventListener("keyup",()=>{
    if(regemail.test(form.email.value)){
        form.email.classList.add("is-valid");
        form.email.classList.remove("is-invalid");
        button.removeAttribute("disabled");

    }else{
        form.email.classList.remove("is-valid");
        form.email.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
    }

});

form.password.addEventListener("keyup",()=>{
    if(regpassword.test(form.password.value)){
        form.password.classList.add("is-valid");
        form.password.classList.remove("is-invalid");
        button.removeAttribute("disabled");

    }else{
        form.password.classList.remove("is-valid");
        form.password.classList.add("is-invalid");
        button.setAttribute("disabled","disabled");
    }

});