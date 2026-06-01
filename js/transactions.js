// Добавление новой транзакции
function addTransaction(transaction) {

    // Добавляем объект в массив
    transactions.push(transaction);

    // Сохраняем данные
    saveTransactions();

    // Обновляем таблицу
    renderTransactions();

    // Пересчитываем статистику
    updateStatistics();
}

// Удаление транзакции по id
function deleteTransaction(id) {

    // Подтверждение удаления
    if (!confirm("Удалить транзакцию?")) {
        return;
    }

    // Оставляем все записи кроме удаляемой
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