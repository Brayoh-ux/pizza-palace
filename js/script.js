function Contact (name, email){
    this.name = name;
    this.email = email;
    this.comment = comment;
}

// write message section
$(document).ready(function (){

   $("#comment").submit(function(n){
       n.preventDefault();
       var name = $("input#name").val();
       var email = $("input#email").val();
       var comment = $("#message").val();

       if(name == "" || email == "" || comment == ""){
           alert("Please fill in the form completely!");
       }
       else{
           $("#placeComment").text("Thank you " + name + " we have recieved your feedback!" + 
           " we will contact you through " + email);
       }

   });
});