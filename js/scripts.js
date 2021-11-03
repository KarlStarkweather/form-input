$(document).ready(function() {
  $("button#submitBtn").click(function() {
    const name = $("#name").val();
    const birthDate = $("#birthDate").val();
    const favFood = $("#favFood").val();
    alert("food selected was " + favFood);  
  });
  
 
});


