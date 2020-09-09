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
    $(function(){
      $("#pizza"). change(function(){
        var pizzaFlavour = $("#pizza option:selected").text();
        $(".daa ul").append("<li>" + "PIZZA FLAVOUR:   " +   pizzaFlavour + "</li>");
      })
    })
   

    $(function(){
      $("#size"). change(function(){
        var pizzaSize = $("#size option:selected").text();
        $(".daa ul").append("<li>" + "PIZZA SIZE:   " +   pizzaSize + "</li>");
      })
    })
    $(function(){
      $("#crust"). change(function(){
        var fevCrust = $("#crust option:selected").text();
        $(".daa ul").append("<li>" + "CRUST:   " +   fevCrust + "</li>");
      })
    })
    $(function(){
      $("#toppings"). change(function(){
        var fevToppings = $("#toppings option:selected").text();
        $(".daa ul").append("<li>" + "TOPPINGS:  " +  fevToppings + "</li>");
      })
    })
    $("#pizzaOrder").submit(function(event){
      event.preventDefault();
      var size = parseInt($("#size").val());
      var crust = parseInt($("#crust").val());
      var toppings = parseInt($("#toppings").val());
      var number = parseInt($("#number").val());
      var userPizza = new Pizza(size,crust,toppings, number);
      

      $(".pitza ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");
      $(".pitza li").remove();
      $(".pitza ul").append("<li>" + "Ksh" + userPizza.price() + "</li>");
     
      });
     
  });
  
  $(".deliver").click(function () {
    $('.daa').slideUp();
    $('.deliver').hide();
    $('.delivernot').hide();
    $('.cdata-overlay form').show();
});


$(".delivernot").click(function () {
  $(alert("Thank you, We have received your order and it is being processed"));

});


