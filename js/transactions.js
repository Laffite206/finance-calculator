// Добавление транзакции
function addTransaction(transactions) {

    transactions.push(transaction);

    saveTransactions();

    renderTransactions();

    updateStatistics();
}

//Удаление транзакции
function deleteTransaction(id) {
    if (!confirm("Удалить транзакцию?")) {
        return;
    }

    transactions =
        transactions.filter(
            item => item.id !== id
        );

        saveTransactions();

        renderTransactions();

        updateStatistics();
}