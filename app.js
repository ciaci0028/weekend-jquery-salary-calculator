

$(document).ready(onReady);

function onReady() {
    // Submit new information upon click
    $('#submitButton').on('click', submitInfo);
}

function submitInfo () {

    // Creating variables for the functions in the input fields
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let identification = $('#identification').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();

    // Now I must take the input variables 
    
}