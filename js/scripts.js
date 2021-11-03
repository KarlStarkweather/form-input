$(document).ready(function() {
  $("button#submitBtn").click(function() {
    const name = $("#name").val();
    const birthDate = $("#birthDate").val();
    const favFood = $("#favFood").val();
    const gender = $("input:radio[name=gender]:checked").val();
    const housing = $("input:radio[name=housing]:checked").val();
    if (gender === "nonBinary") {
      if (favFood === "Pizza") {
        alert("Sorry, Non Binary people can't have Pizza");
      } 
    }
    // alert("gender is " + gender + " and housing status is " + housing);  
  });
  
 
});


