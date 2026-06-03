// Добавление новой транзакции
function addTransaction(transaction) {

    // Добавляю объект в массив
    transactions.push(transaction);

    // Сохраняю данные
    saveTransactions();

    // Обновляю таблицу
    renderTransactions();

    // Пересчитываю статистику
    updateStatistics();
}

// Удаление транзакции по id
function deleteTransaction(id) {

    // Подтверждение удаления
    if (!confirm("Удалить транзакцию?")) {
        return;
    }

    // Оставляю все записи кроме удаляемой
    transactions =
        transactions.filter(
            item => item.id !== id
        );

    saveTransactions();
    renderTransactions();
    updateStatistics();

    showMessage(
        "Транзакция удалена",
        "success"
    );
}