import { tellMe, show, Animal, Login } from "./oopindex.js";
import home from "./oopindex.js";

home();

let lion = new Animal("Lion",2,4,1,"Roars");
lion.makeSound();
lion.walk();
lion.makeSound("Second Roar");

const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.querySelector("form");

form.onsubmit = function(e){
  e.preventDefault();
  //create the object of the login class
  const login = new Login(email,pass);
  if(!login.verifyEmail()){
    email.style.border = '1px solid red';
  }else{
    email.style.border = '1px solid green';
  }

  if(!login.verifyPassword()){
    pass.style.border = '1px solid red';
}else{
  pass.style.border = '1px solid green';
}
}
