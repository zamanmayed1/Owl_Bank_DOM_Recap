
    // Get references to the input fields and the login button
    const LoginPage = document.getElementById("loginpage");
    
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("submit");
    

    function handleLogin() {
      const email = emailInput.value;
      const password = passwordInput.value;
  
      const hardcodedEmail = "zamanmayed01@gmail.com";
      const hardcodedPassword = "123456";
  
      if (email === hardcodedEmail && password === hardcodedPassword) {
        const user = {
          email,
          password
        };
  
        LoginPage.style.display ="none"
        console.log("Logged in as:", user);
  
      } else {
       
        alert("Invalid email or password. Please try again.");
      }
    }
  
 
    loginButton.addEventListener("click", function (event) {
      event.preventDefault(); 
      handleLogin(); 
    });

  



const AccountPage = document.getElementById("#myaccount");
let btn = document.querySelector("#logout")
btn.addEventListener("click", function (event) {
  LoginPage.style.display ="flex"
});