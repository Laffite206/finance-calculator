// Расчёт статистики
function calculateStatistics(data) {

    // Общая сумма доходов
    const income =
        data
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    // Общая сумма расходов
    const expense =
        data
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    // Возвращаем объект статистики
    return {
        income,
        expense,
        balance: income - expense
    };
}

// Построение текстового графика расходов
function buildTextChart(data) {

    const categories = {};

    // Группировка расходов по категориям
    data
        .filter(t => t.type === "expense")
        .forEach(t => {

            categories[t.category] =
                (categories[t.category] || 0)
                + t.amount;
        });

    // Общая сумма расходов
    const total =
        Object.values(categories)
        .reduce((a, b) => a + b, 0);

    if (total === 0) {
        return "Нет расходов";
    }

    let chart = "";

    // Формирование текстового графика
    for (let category in categories) {

        const percent =
            (
                categories[category] /
                total *
                100
            ).toFixed(1);

        const bars =
            "█".repeat(
                Math.round(percent / 5)
            );

        chart +=
            `${category}\n${bars} ${percent}% (${categories[category]} ₽)\n\n`;
    }

    return chart;
}