var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
               {"name":"Home","href":"index.html"},
               {"name":"Catalog","href":"catalog.html"},
               {"name":"About us","href":"about_us.html"},
               {"name":"Contacats","href":"contacts.html"},
               {"name":"Portfolio","href":"portfolio.html"},
               {"name":"Registration","href":"registration.html"}
             ];
for (var i=0;i<names.length;i++){
  li = document.createElement('li');
  a = document.createElement('a');
  a.innerHTML = names[i].name;
  a.setAttribute("class","nav-link");
a.setAttribute("href", names[i].href);
li.setAttribute("class","nav-item")
li.appendChild(a);
navigation.appendChild(li);


if (document.location.href.indexOf(names[i].href) != -1){
  h1 = document.getElementById("h1");
  h1.innerHTML = names[i].name;
  document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
};
}

 let getInfo =  document.getElementById("btn"),
     registration = document.getElementById("more");
     overlay = document.getElementById('modal'),
     close = document.getElementById('closeModal')

 getInfo.addEventListener('click', function(event){
  event.preventDefault();
  // var email=document.getElementById("email").value;
  // var pass=document.getElementById("password").value;
  // console.log(email, pass);
  var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var regPass = /^([A-Za-z0-9_\-\.]){6,}/;
  var email = document.getElementById("email").value;
  var pass=document.getElementById("password").value;
  if(regEmail.test(email) == false && regPass.test(pass) == false) {
     alert('Введите корректный e-mail');
     return false;
  }
  console.log(email,pass);
 });

 registration.addEventListener('click',function (event) {
  event.preventDefault();
  overlay.style.display = 'block';
  document.body.style.overflow='hidden';
});

close.addEventListener('click',function (event) {
  event.preventDefault();
  overlay.style.display = 'none';
});


