
function sendEmail(){
Email.send({
   SecureToken:"ae43f67f-1248-46e6-bff5-54d197bd3d4c",
    To : 'sanja95s@them@website.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);}