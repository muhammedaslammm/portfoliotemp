(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// form validation
var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const commentError=document.getElementById("comment-error");
const noproblem=document.getElementById("noproblem");
const submitError = document.getElementById("submit-error");


function validateName(){
    var inputed_name = document.getElementById("name_input").value;

    if(inputed_name.length == 0){
        nameError.innerHTML = "name required";
        return false;
    }
    else if(!/^[A-Za-z\s]+$/.test(inputed_name)){
        nameError.innerHTML = "name nust only contains letters."
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}

function validateEmail(){
    var inputedEmail = document.getElementById("email").value;
    var emailExp = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(inputedEmail.length == 0){
        emailError.innerHTML = "enter mail id";
        return false;
    }
    else if(!inputedEmail.match(emailExp)){
        emailError.innerHTML = "invalid mail id";
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check"></i>';
    return true;

}
function subjectValidate(){
    const subjectvalue = document.getElementById("subject").value;
    const limit = 3;
    if(subjectvalue.length == 0){
        subjectError.innerHTML = "enter subject";
        return false;
    }
    else if(subjectvalue.length< limit){
        subjectError.innerHTML = "enter minimum three characters";
        return false;
    }
    subjectError.innerHTML = '<i class="bi bi-check"></i>';
    return true;
}
function commentvalidate(){
    const commentvalue = document.getElementById("comment").value;
    const maxlength = 50;
    const remaining = maxlength - commentvalue.length;
    if(remaining<=0){
        commentError.innerHTML = "limit exceeded ("+remaining+")";
        noproblem.innerHTML = "";
        return false;
    }
    commentError.innerHTML = "";
    noproblem.innerHTML = "letter limit "+remaining;
    return true;

    
}
function checkValidation(){
    if(!validateName() || !validateEmail() || !subjectValidate() || !commentvalidate()){
        submitError.innerHTML = "fix the errors!";
        subjectError.style.display = 'block';
        setTimeout(function(){
            submitError.style.display = 'none';
        },1000);

        return false;
    }
    
        
}