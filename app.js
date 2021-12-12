

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
                <td>${employee.identification}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td>
                    <button class='button'>
                    Eliminate
                </td>
        `)
    }

    // Empty fields after submit
    $('#firstName').val('');
    $('#lastName').val('');
    $('#identification').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    // Add the annual salary to the total monthly
    totalMonthly += employee.annualSalary/12;
    console.log('total monthly', totalMonthly);
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`Total Monthly: $${totalMonthly}`);

    // Create conditional that highlights red
    if (totalMonthly > 20000 ) {
        $('#totalMonthly').css({
            'background-color': 'red',
        })
    }
}

function eliminateEmployee() {
    $(this).parents('tr').remove();
    totalMonthly
    $('#totalMonthly').empty();
}