// business logic
function Account(name, password, amount) {
  this.name = name;
  this.password = password;
  this.amount = amount;
}

Account.prototype.userData = function(){
  return this.name + " amount:" + this.amount;
}

function restFields() {
  $("input#name").val("");
  $("input#password").val("");
  $("input#amount").val("");
}

// User Interface Logic
$(document).ready(function() {
debugger;

  $("#submitButton").click(function(){
    event.preventDefault();

      $(".accountInfo").each(function(){
        var name = $(this).find("input#name").val();
        var password = $(this).find("input#password").val();
        var amount = parseInt($(this).find("input#amount").val());
        $(".output").text("$" + amount);
      });




  });



});
