var userResponses1 = [];
var userResponses2 = [];
var userResponses3 = [];

$(document).ready(function() {
  $("form#stress_test").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=warning-sign]:checked").each(function(){
      var warningSignMode = $(this).val();
      userResponses1.push(warningSignMode);
    });

    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptomsMode = $(this).val();
      userResponses2.push(healthSymptomsMode);
    });

    $("input:checkbox[name=recommended-methods]:checked").each(function(){
      var recommendedMethodsMode = $(this).val();
      userResponses3.push(recommendedMethodsMode);
    });

    if (userResponses3.length >= 3) {
      $("#good").show();
    } else if (userResponses2.length >= 3) {
      $("#neutral").show();
    } else if (userResponses1.length >= 3) {
      $("#bad").show();
    } else {}


  });
});
