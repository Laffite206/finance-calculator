// Фильтрация транзакций
function filterTransactions() {

    // Копия массива
    let result = [...transactions];

    // Получаем выбранные значения
    const type =
        document.getElementById("filterType").value;

    const category =
        document.getElementById("filterCategory").value;

    const filterDate =
        document.getElementById("filterDate").value;

    // Фильтр по типу
    if (type !== "all") {

        result = result.filter(
            item => item.type === type
        );
    }

    // Фильтр по категории
    if (category !== "all") {

        result = result.filter(
            item => item.category === category
        );
    }

    // Фильтр по дате
    if (filterDate) {

        result = result.filter(
            item => item.date === filterDate
        );
    }

    return result;
}