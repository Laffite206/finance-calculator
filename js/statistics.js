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

    // Возвращаю объект статистики
    return {
        income,
        expense,
        balance: income - expense
    };
}

// Построение текстовой диаграммы расходов
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

    // Формирование текстовой диаграммы
    for (let category in categories) {

        const amount =
            categories[category];

        const percent =
            amount / total * 100;

        // Минимум один блок для каждой категории
        const bars =
            "█".repeat(
                Math.max(
                    1,
                    Math.round(percent / 5)
                )
            );

        chart +=
            `${category}\n` +
            `${bars} ${percent.toFixed(1)}% (${amount} ₽)\n\n`;
    }

    return chart;
}