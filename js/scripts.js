function Pizza(size, crust,toppings,number){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;

  };
  

  Pizza.prototype.price = function(){
    var total = (this.size + this.crust + this.toppings)* this.number;
    return total;
  };
  

// var pizza = document.getElementById("pizza").value;
// var size = document.getElementById("size");
// var crust =document.getElementById("crust").value;
// var toppings = document.getElementById("toppings").value;
  
  $(document).ready(function(){
    $("#pizzaOrder").submit(function(event){
      event.preventDefault();
      var size = parseInt($("#size").val());
      var crust = parseInt($("#crust").val());
      var toppings = parseInt($("#toppings").val());
      var number = parseInt($("#number").val());
      var userPizza = new Pizza(size,crust,toppings, number);
      
      $("#customerOrder").slideToggle(500);
      $(".pitza ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");
      $(".pitza li").remove();
      $(".pitza ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");
      });
  });
  