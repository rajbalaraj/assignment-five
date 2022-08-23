buttons = document.getElementsByClassName('btn');
for (let btn of buttons) {

    btn.addEventListener('click', function (event) {
        let parents = event.target.parentNode;
        let titles = parents.getElementsByClassName('card-title');
        for (let name of titles) {
            addToList(name.innerText, btn);
        }
    })

}
let expense = document.getElementById('input-player-expense');
let manager = document.getElementById('manager-expense');
let coach = document.getElementById('coach-expense');

document.getElementById('calculate-player-btn').addEventListener('click', function () {

    if (getListLength() == 0) {
        alert("Please Select some Player first");

    } else if (checkInputError(expense) == true) {
        expense.value = '';
    } else {
        let listLength = getListLength();
        calculatePlayerExpense(listLength);
    }
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {



    if (checkInputError(manager) == true || checkInputError(coach) == true) {
        if (isNaN(coach.value) || coach.value < 0) coach.value = '';
        if (isNaN(manager.value) || manager.value < 0) manager.value = '';
        manager.value = '';

    } else {
        let listLength = getListLength();
        calculateTotal(listLength);
    }

})