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
  
  
  $(document).ready(function(){
    $("#pizzaOrder").submit(function(event){
      event.preventDefault();
      var size = parseInt($("#size").val());
      var crust = parseInt($("#crust").val());
      var toppings = parseInt($("#toppings").val());
      var number = parseInt($("#number").val());
      var userPizza = new Pizza(size,crust,toppings, number);
      
      $("#customerOrder").slideToggle();
      $("li").remove();
      $("ul").append("<li>" + "ksh " + userPizza.price() + "</li>");
    });
  });
  

  