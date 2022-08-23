function getFloat(value) {

    let m = parseFloat(value).toFixed(2);
    return parseFloat(m);

}

function calculatePlayerExpense(listLength) {
    let playerExpense = document.getElementById('player-expense');
    let expense = document.getElementById('input-player-expense');
    playerExpense.innerText = (listLength * getFloat(expense.value)).toFixed(2);

    return listLength * getFloat(expense.value);


}

function calculateTotal(listLength) {
    let playerExpense = document.getElementById('player-expense');
    //let expense = document.getElementById('input-player-expense');
    let manager = document.getElementById('manager-expense');
    let coach = document.getElementById('coach-expense');
    // playerExpense.innerText = listLength * parseInt(expense.value);
    let sum = getFloat(playerExpense.innerText) + getFloat(manager.value) + getFloat(coach.value);
    document.getElementById('total').innerText = sum.toFixed(2);



}

function getListLength() {
    let playerList = document.getElementById('player-list');
    let listLength = playerList.childNodes.length - 1;
    return listLength;
}

function addToList(playerName, btn) {
    const list = document.createElement('li');
    list.innerText = playerName;
    list.style.paddingTop = '20px';
    list.style.borderBottom = '1px solid gray';
    let playerList = document.getElementById('player-list');
    let listLength = playerList.childNodes.length;

    if (listLength > 5) {
        alert('You can\'t add more than 5 player');
        btn.removeAttribute('disabled');

    } else {
        document.getElementById('list-msg').style.display = 'none';
        playerList.append(list);
        btn.setAttribute('disabled', '');
        btn.style.background = "#ddd";
        btn.style.color = "#151515";
        btn.style.fontWeight = 'bold';
        btn.innerText = "Player Selected";


    }

}

function checkInputError(inputID) {

    if (isNaN(inputID.value) || inputID.value < 0 || inputID.value.trim().length == 0) {
        alert("Insert a Valid Positive Number");

        return true;

    }

}