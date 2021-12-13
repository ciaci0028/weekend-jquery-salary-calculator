$(document).ready(onReady);

function onReady() {
    // Submit new information upon click
    $('#formDiv').on('submit', submitInfo);
    $(document).on('click', '.button', eliminateEmployee);
}

// Create a global array for pushing to
let employeeList = [];


// Create a global total monthly variable
let totalMonthly = 0;

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

    // Empty the tbody to start it fresh
    $('#employeeTable').empty();

    // Append the objects to the table using HTML formatting

    for (let employee of employeeList) {
        $('#employeeTable').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class='employeeID'>
                        ${employee.identification}
                </td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td>
                    <button class='button' data-employee-id = ${employee.identification} >
                    Eliminate
                </td>
        `)
    }

    // Empty fields after submit
    $('#form input').val('');

    // Add the annual salary to the total monthly
    totalMonthly += employee.annualSalary/12;
    console.log('total monthly', totalMonthly);
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`Total Monthly: $${totalMonthly.toFixed(2)}`);

    // Create conditional that highlights red
    if (totalMonthly > 20000 ) {
        $('#totalMonthly').css({
            'background-color': 'red',
            'color': 'white',
        })
    }
}

function eliminateEmployee() {
    // Finding the annual salary of the to be eliminated employee
    console.log('sibling', $(this).parent().prev().text());

    // Subtract that employee's money from total Monthly
    totalMonthly -= Number($(this).parent().prev().text()) / 12;

    // Remove employee from array
    // Worked with Jacob Larson on this portion
    for (let i=0; i < employeeList.length; i++) {
        if ( $(this).data('employee-id') === employeeList[i].identification ) {
            employeeList.splice(employeeList[i], 1);
        }
    }

    // Remove employee from DOM
    $(this).parents('tr').remove();

    // Updating the total monthly
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`Total Monthly: $${totalMonthly.toFixed(2)}`);   
}