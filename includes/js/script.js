

$(function(){

    $('#alert1').click(function(e){

        e.preventDefault();

        $('#successAlert').slideDown();
    });

});

$('a.pop').click(function(e){
    e.preventDefault();

});
$('a.pop').popover();
$('[rel="tooltip"]').tooltip();

var username,password,email;
function register(){

        username = document.getElementById("inputName").value;
        email = document.getElementById("inputEmail").value;
        password = document.getElementById("password").value;
        localStorage.setItem("user",username );
        localStorage.setItem("email",email );
        localStorage.setItem("password",password );
        alert("Registered sucessfully!!");
   
}

function login(){
    var email1,password1;
    email1 = document.getElementById("inputEmail1").value;
    password1 = document.getElementById("password1").value;
    if(email1==email && password==password1)
    document.getElementById("user").innerHTML='<span class="glyphicon glyphicon-user "></span> ' +username;
    else
    alert("Email and password don't match!!!");
}

var price;
function book(p){
    price = p;
    localStorage.setItem("p1",price);
}

