const firstNameCon = document.querySelector(".name");
const firstName = document.getElementById("First-Name")

const lastNameCont = document.querySelector(".last-name");
const lastName = document.getElementById("last-Name2")

const emailCont = document.querySelector(".second-section");
const emailInput = document.getElementById("email")

const messContiner = document.querySelector(".fouth-section")
const Message = document.getElementById("Message")

const butt = document.getElementById("butt");
let elementCreated = false;
let elementCreated2 = false;
let elementCreated3 = false;
let elementCreated4 = false;

butt.addEventListener("click",function(e){
  let inuptOne = firstName.value;
  let p1 = document.createElement("p")
  p1.className = "p1"
  p1.innerHTML = "This field is required"

  let inputTwo = lastName.value;
  let p2 =document.createElement("p")
  p2.className = "p1";
  p2.innerHTML = "This field is required"

  let messageInput = Message.value;
  let p3 = document.createElement("p")
  p3.className = "p1"
  p3.innerHTML = "This field is required"

  let emailInp = emailInput.value;
  let p4 = document.createElement("p");
  p4.className = "p1"
  p4.innerHTML = "Please enter a valid email address"

  if(inuptOne === ""){
    if(!elementCreated){
      firstNameCon.appendChild(p1)
      elementCreated = true;
    }
    firstName.style.border = "2px solid red";
  }
  else{
    firstName.style.border = "0.5px solid"
    firstNameCon.removeChild(firstNameCon.children[3])
  }

  if(inputTwo === ""){
    if(!elementCreated2){
      lastNameCont.appendChild(p2)
      elementCreated2 = true;
    }
    lastName.style.border = "2px solid red";
  }
  else{
    lastName.style.border = "0.5px solid"
    lastNameCont.removeChild(lastNameCont.children[3])
  }

  if(messageInput === ""){
    if(!elementCreated3){
      messContiner.appendChild(p3)
      elementCreated3 = true;
    }
    Message.style.border = "2px solid red";
  }
  else{
    Message.style.border = "0.5px solid"
    messContiner.removeChild(messContiner.children[3])
  }

  if(emailInp === ""){
    if(!elementCreated4){
      emailCont.appendChild(p4)
      elementCreated4 = true;
    }
    emailInput.style.border = "2px solid red";
  }
  else{
    emailInput.style.border = "0.5px solid"
    emailCont.removeChild(messContiner.children[3])
  }
  
})