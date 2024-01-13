let creatAccount=document.querySelector('button');
let passwordInputs=document.querySelectorAll('.error')
creatAccount.addEventListener('click',()=>{
    let password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('confirm-password').value
    if(password===confirmPassword){
        passwordInputs.forEach(n=>{
            n.style.cssText='border:2px solid green;'
        })
    }
    else{
        passwordInputs.forEach(n=>{
            n.style.cssText='border:2px solid red;'
        })
        alert('password don\'t match')
    }
    console.log(password,confirmPassword)
})
