//Get container element
const container = document.querySelector('.container');

//Get close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for close click
closeBtn.addEventListener('click', closeContainer);


//Function to close Page
function closeContainer() {
    container.style.display = 'none';
    //location.replace('index.html');
}

/*
const container = document.querySelector('.container');

//show/hide
const pwShowHide = document.querySelectorAll('.showHidePw'),
const pwFields = document.querySelectorAll('.password');

//code to show/hide password and change icon
pwShowHide.forEach (eyeicon =>{
    eyeicon.addEventListener('click' ()=>{
        pwFields.forEach (pwFields =>{
            if (pwField.type === "password" {
                pwField.type = "text";
            }else {
                pwField.type = "password";
            }
        })
    })
})
*/