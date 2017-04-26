///////////////////////////////////////////////////////
//                  BUSINESS LOGIC                   //
///////////////////////////////////////////////////////

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

///////////////////////////////////////////////////////
//               USER INTERFACE LOGIC                //
///////////////////////////////////////////////////////
$(document).ready(function() {
  $("form#add").submit(function(e) {
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#sub").submit(function(e) {
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(e) {
    var number1 = parseInt($("#mult1").val());
    var number2 = parseInt($("#mult2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(e) {
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });

  $('form').bind('submit', function(e) {
    e.preventDefault();
  });
});
