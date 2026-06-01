// Главный массив
let transactions = [];

// Загрузка данных
loadTransactions();

// Отображение данных
renderTransactions();

// Подсчёт статистики
updateStatistics();

// Добавление транзакции
document
.getElementById("transactionForm")
.addEventListener("submit",function(event){

    event.preventDefault();

    const amount =
        Number(
            document.getElementById("amount").value
        );

    if(amount <= 0){

        showMessage(
            "Введите корректную сумму",
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
            document.getElementById("date").value,

        comment:
            document.getElementById("comment").value
    };

    addTransaction(transaction);
});

showMessage(
    "Транзакция добавлена",
    "success"
);

this.reset();