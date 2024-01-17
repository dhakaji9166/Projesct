function calculateChange() {
    var billAmount = parseFloat(document.getElementById("input1").value);
    var cashAmount = parseFloat(document.getElementById("input2").value);

    if (isNaN(billAmount) || isNaN(cashAmount) || billAmount <= 0 || cashAmount < billAmount) {
        alert("Please enter valid amounts.");
        return;
    }

    var changeAmount = cashAmount - billAmount;

    var note500 = Math.floor(changeAmount / 500);
    changeAmount %= 500;

    var note100 = Math.floor(changeAmount / 100);
    changeAmount %= 100;

    var note50 = Math.floor(changeAmount / 50);
    changeAmount %= 50;

    var note20 = Math.floor(changeAmount / 20);
    changeAmount %= 20;

    var note10 = Math.floor(changeAmount / 10);
    changeAmount %= 10;

    var note5 = Math.floor(changeAmount / 5);
    changeAmount %= 5;

    var note1 = Math.floor(changeAmount);

    document.getElementById("value1").innerText = note500;
    document.getElementById("value2").innerText = note100;
    document.getElementById("value3").innerText = note50;
    document.getElementById("value4").innerText = note20;
    document.getElementById("value5").innerText = note10;
    document.getElementById("value6").innerText = note5;
    document.getElementById("value7").innerText = note1;
}