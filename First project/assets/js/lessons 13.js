const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
   
    let sqaure = 0;
    let volume = 0;
    data.shops.forEach(shop => (
        sqaure += shop.width * shop.length));

    volume = sqaure * data.height;
    if(data.budget - (volume * data.moneyPer1m3) >= 0){
            return "Бюджета достаточно";
    }
    else {return "Бюджета не достаточно";}
}

isBudgetEnough(shoppingMallData);