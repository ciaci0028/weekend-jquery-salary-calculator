

$(document).ready(onReady);

function onReady() {
    // Submit new information upon click
    $('#formDiv').on('submit', submitInfo);
}

// Create a global array for pushing to
let employeeList = [];

function submitInfo (event) {

    // Need to insert preventDefault to get my page to not refresh
    event.preventDefault();

    // Creating variables for the functions in the input fields
    // so I can utilize them later
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let identification = Number($('#identification').val());
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Number($('#annualSalary').val()) ;

    // Now I must take the input variables and put them into an object
    let employee = {
        firstName: firstName,
        lastName: lastName,
        identification: identification,
        jobTitle: jobTitle,
        annualSalary: annualSalary,
    }
    
    console.log('this is the employee', employee)

    employeeList.push(employee);

    console.log('employee list', employeeList);
}