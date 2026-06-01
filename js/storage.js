// Сохранение данных в localStorage
function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// Загрузка данных из localStorage
function loadTransactions() {

    const data =
        localStorage.getItem("transactions");

    transactions =
        data
            ? JSON.parse(data)
            : [];
}