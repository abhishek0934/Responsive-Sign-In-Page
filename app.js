let signUpbtn = document.querySelector('.signupbtn');
let signInbtn = document.querySelector('.signinbtn');
let usernameField = document.querySelector('.input-field:first-child'); 
let title = document.querySelector('.tittle');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

// Functionality for "Sign In" button click
signInbtn.addEventListener('click', () => {
    // Make the username field visible again
    usernameField.style.maxHeight = '60px'; 
    usernameField.style.padding = '18px 15px'; 
    usernameField.style.margin = '15px 0'; 
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    underline.style.transform = 'translateX(28px)'; 

 
    let name = document.querySelector('input[placeholder="name"]').value.trim();
    let email = document.querySelector('input[placeholder="email"]').value.trim();
    let password = document.querySelector('input[placeholder="password"]').value.trim();
    let number = document.querySelector('input[placeholder="number"]').value.trim();

   

    
    if (name !== "" && email !== "" && password !== "" && number!== "") {
        title.innerHTML = 'Registration Successful'; // Update the title
        alert("Thanks you for Join us ,Registration is Succesful");
            setTimeout(() => {
                location.reload();
            }, 1000);
      
    }
  
});


signUpbtn.addEventListener('click', () => {
    if ( name !== "" && email !== "" && password !== "" ) {
        if(email !== "" && password !== "")
        title.innerHTML = 'Our old customer';
        setTimeout(() => {
            window.location.reload(); 
        }, 700);
    }
    
    usernameField.style.maxHeight = '0';  
    usernameField.style.padding = '0'; 
    usernameField.style.margin = '0';  
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'password Suggestions';
    underline.style.transform = 'translateX(-12px)'; 
});