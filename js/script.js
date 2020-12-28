// message Bussiness logic
function Contact (name, email){
    this.name = name;
    this.email = email;
    this.comment = comment;
}
// order Bussiness logic
function getPizza() {
    var pizza = document.getElementById("pizzaType").value;
    return parseInt(pizza);
}
function getSize() {
    var size = document.getElementById("pizzaSize").value;
    return parseInt(size);
}
function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
}
function getTop() {
    var toppings = document.getElementById("pizzaToppings").value;
    return parseInt(toppings);
}
function getQuantity() {
    var quantity = document.getElementById("quantity").value;
    return parseInt(quantity);
}
//  user logic

$(document).ready(function (){

// write message section
   $("#comment").submit(function(n){
       n.preventDefault();
       var name = $("input#name").val();
       var email = $("input#email").val();
       var comment = $("textarea#message").val();

       if(name == "" || email == "" || comment == ""){
           alert("Please fill in the form completely!");
       }
       else{
           $("#placeMessage").text("Thank you " + name + " we have recieved your feedback!" + 
           " we will contact you through " + email + ".");
       }

   });
// order section
   $("#makeOrder").submit(function (e){
       e.preventDefault();
       var total = (getPizza() + getSize() + getCrust() + getTop()) * getQuantity();
        if (pizza !== "" && crust !== "" && toppings !== "" || size !== "" || quantity !== ""){
            $("#orderList").text("You have ordered " + getQuantity("") + " pizza(s), " + "amounting to Ksh." + total + ". If you want a delivery, " 
            + "please fill in the delivery form on the left.Thank you");
        }
        else{
            alert("Please specify the type of Pizza you want!!");
        }
   });
      
});