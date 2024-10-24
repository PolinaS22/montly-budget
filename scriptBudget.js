const btnCalculate = document.querySelector("#btn");
btnCalculate.addEventListener("click", calculate);
function calculate(e) {
    e.preventDefault(); 
    let totalExpenses = 0;
    const income = document.querySelector("#balance").value;
    const expenses = document.querySelectorAll('.inputExpenses');
    

    for (let i = 0; i < expenses.length; i++) {
        if(expenses[i].value === '') {
            Swal.fire({
                icon: 'error',
                title: 'Please, fill all the inputs!',
                text: 'If there is no value, set 0'     
            })
            return false;
        } else {
            totalExpenses += +expenses[i].value; 
        }
    }
    const savings = document.querySelector("#save").value;

    let totalSavings = income * savings;
    let totalMonies = income - totalSavings - totalExpenses;

    document.querySelector("#totalBalance").textContent = "$ " + income;
    document.querySelector("#totalSavings").textContent = "$ " + totalSavings;
    document.querySelector("#totalExpenses").textContent = "$ " + totalExpenses;
    document.querySelector("#totalMonies").textContent = "$ " + totalMonies;
}



// or
// const btnCalculate = document.querySelector("#btn");

// btnCalculate.addEventListener("click", calculate);


// function calculate(e) {
//     e.preventDefault();

//     const income = document.querySelector("#balance").value;
//     const savings = document.querySelector("#save").value;
//     const rent = document.querySelector("#rent").value;
//     const gas = document.querySelector("#gas").value;
//     const water = document.querySelector("#water").value;
//     const vehicle = document.querySelector("#vehicle").value;
//     const insurance = document.querySelector("#insurance").value;
//     const food = document.querySelector("#food").value;
//     const shopping = document.querySelector("#shopping").value;
//     const fun = document.querySelector("#fun").value;
//     const taxes = document.querySelector("#taxes").value;
//     const other = document.querySelector("#other").value;

//     let totalSavings = income * savings;
//     let totalExpenses = Number(rent) + Number(gas) + Number(water) + Number(vehicle) + Number(insurance) + Number(food) + Number(shopping) + Number(fun) + Number(taxes) + Number(other);
//     let totalMonies = income - totalSavings - totalExpenses;

//     document.querySelector("#totalBalance").textContent = "$ " + income;
//     document.querySelector("#totalSavings").textContent = "$ " + totalSavings;
//     document.querySelector("#totalExpenses").textContent = "$ " + totalExpenses;
//     document.querySelector("#totalMonies").textContent = "$ " + totalMonies;
// }