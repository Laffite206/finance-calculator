//Подсчёт статистики
function calculateStatistics(data){

    const income =
        data
        .filter(t => t.type === "expense")
        .reduce((sum,t) => sum + t.amount,0);

    const expense =
        data
        .filter(t => t.type === "expense")
        .reduce((sum,t) => sum + t.amount,0);

    return {
        income,
        expense,
        balance: income - expense
    };
}

//Текстовый график
function buildTextChart(data){

    const categories = {};

    data
    .filter(t => t.type === "expense")
    .forEach(t => {

        categories[t.category] =
            (categories[t.category] || 0)
            + t.amount;
 });

    const total =
        Object.values(categories)
        .reduce((a,b)=>a+b,0);

    if(total === 0){
        return "Нет расходов";
    }

    let chart = "";

    for(let category in categories){

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
            `${category}: ${bars} ${percent}%\n`;
    }

    return chart;
}