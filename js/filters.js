// Фильтрация транзакций
function filterTransactions() {

    let result = [...transactions];

    const type =
        document.getElementById("filterType").value;

    const category =
        document.getElementById("filterDate").value;

    const date = 
        document.getElementById("filterDate").value;

    if(type !== "all"){

        result =
            result.filter(
                item => item.type === type
            );
    }

    if(category !== "all"){

        result =
            result.filter(
                item => item.category === category
            );
    }

    if(date){

        result =
            result.filter(
                item => item.date === date
            );
    }

    return result;

}