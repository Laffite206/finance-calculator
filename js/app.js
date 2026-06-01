// Главный массив транзакций
let transactions = [];

// Категории доходов
const incomeCategories = [
    "Зарплата",
    "Премия",
    "Подработка",
    "Подарок",
    "Инвестиции",
    "Другие"
];

// Категории расходов
const expenseCategories = [
    "Еда",
    "Транспорт",
    "Жильё",
    "Развлечения",
    "Здоровье",
    "Другие"
];

// Обновление списка категорий
function updateCategories() {

    const type =
        document.getElementById("type").value;

    const categorySelect =
        document.getElementById("category");

    categorySelect.innerHTML = "";

    const categories =
        type === "income"
            ? incomeCategories
            : expenseCategories;

    categories.forEach(category => {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.appendChild(option);
    });
}

// Смена категорий при выборе типа
document
    .getElementById("type")
    .addEventListener(
        "change",
        updateCategories
    );

// Загрузка данных
loadTransactions();

// Заполняем категории
updateCategories();

// Отрисовка данных
renderTransactions();

// Подсчёт статистики
updateStatistics();

// Добавление транзакции
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

        // Возвращаем правильные категории
        updateCategories();
    });

// Применение фильтра
document
    .getElementById("applyFilters")
    .addEventListener("click", function(event){

        event.preventDefault();

        const filtered =
            filterTransactions();

        renderTransactions(filtered);
    });