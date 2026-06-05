
$(document).ready(function () {

    console.log('--- jQuery ready ---');

    //yourFunction();

});

const delay = ms => new Promise(res => setTimeout(res, ms));

const yourFunction = async () => {
    await delay(5000);
    var body = $('#form').contents().find('body');

    console.log($('#form').contents().find('body').find('.cp-form-creator-results-controls').length);

    // .cp-form-creator-results-controls
    if ($('#form').contents().find('body').find('.cp-form-creator-results-controls').length < 1) {
        yourFunction();
        console.log("--- wait ---");
    } else {
        console.log("--- iFrame loaded ---");
    }
};



