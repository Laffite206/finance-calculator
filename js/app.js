let transactions = [];

loadTransactions();

renderTransactions();

updateStatistics();

document
.getElementById("transactionForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const amount =
        Number(
            document.getElementById("amount").value
        );

    if(amount <= 0 || isNaN(amount)){

        showMessage(
            "Ошибка: введите корректную сумму",
            "error"
        );

        return;
    }

    const transaction = {

        id: Date.now(),

        amount,

        type:
            document.getElementById("type").value,

        category:
            document.getElementById("category").value,

        date:
            document.getElementById("date").value ||
            new Date()
            .toISOString()
            .split("T")[0],

        comment:
            document.getElementById("comment").value

    };

    addTransaction(transaction);

    showMessage(
        "Транзакция добавлена",
        "success"
    );

    this.reset();
});

document
.getElementById("applyFilters")
.addEventListener("click", function(event){

    event.preventDefault();

    const filtered =
        filterTransactions();

    renderTransactions(filtered);
});