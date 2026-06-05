
$(document).ready(function() {

    console.log('--- jQuery ready ---');

    console.log($('#form').contents().length);
    console.log($('#form').contents());




});

    //$('#form').contents().find('body').html('<div> blah </div>');


    function waitUntilConditionIsMet() {
  console.log($('#form').contents().length);

    if ($('#form').contents().length <= 1) {
        setTimeout(
          //waitUntilConditionIsMet(), 
          50000
        );
    } else {
        // add logic for adding jQuery Library
    }
};
//waitUntilConditionIsMet();
