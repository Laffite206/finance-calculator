// Отрисовка таблицы
function renderTransactions(data = transactions){

    const table =
        document.getElementById(
            "transactionTable"
        );

    table.innerHTML = "";

    data.forEach(item => {

        table.innerHTML += `
        <tr>
            <td>${item.date}</td>
            <td>
                ${
                    item.type === "income"
                    ? "Доход"
                    : "Расход"
                }
            </td>
            <td>${item.category}</td>
            <td>${item.amount} ₽</td>
            <td>${item.comment}</td>
            <td>
                <button onclick="deleteTransaction(${item.id})">
                    ❌
                </button>
            </td>
        </tr>
        `;
    });
}

// Обновление статистики
function updateStatistics(){

    const stats =
        calculateStatistics(
            transactions
        );

    document.getElementById(
        "incomeTotal"
    ).textContent =
        stats.income + "₽";

    document.getElementById(
        "expenseTotal"
    ).textContent =
        stats.expense + "₽";

    document.getElementById(
        "balance"
    ).textContent =
        stats.balance + "₽";

    document.getElementById(
        "chart"
    ).textContent =
        buildTextChart(transactions);
}
