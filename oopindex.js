export function tellMe(){
  console.log("I just want to show off a lil bit");
}
export function show(str) {
  console.log(str);
}

export default function home (){
  show("i am the default exporter");
}

// Animals
// Dog
// Cat
// Lion

export class Animal {
  constructor(name,eyes,legs,tails,sound){
    this.eyes = eyes;
    this.legs = legs;
    this.tails = tails;
    this.sound = sound;
    this.name = name;
  }
  makeSound(){         //class method
    console.log(this.sound);
  }
  walk(){
    console.log(this.name +' has ' + this.legs + 'legs and walks');
}
}

export class Login{

  constructor(email, password){
    this.email = email.value;
    this.pass = password.value;
}

verifyEmail(){
let allowed_domain = ["gmail.com", "yahoo.com"];
let emailCheck     = this.email.split("@")[1];
//check if the entered email is among the allowed domains
if(allowed_domain.includes(emailCheck)){
  return true;
}else{
  return false;
}
}
verifyPassword(){
  if(this.pass.length >=6 && this.pass.length <=10){
    return true;
  }else{
    return false;
  }
}
}
