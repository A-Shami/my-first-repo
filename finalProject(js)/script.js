const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];
const tax = 1.20;

const getPrices = (taxBoolean) => {
    dishData.forEach((d) => {
        let finalPrice = taxBoolean ? d.price * tax : d.price;
        console.log(`Dish: ${d.name} Price: $${finalPrice}`);
    });
};

const getDiscount = (taxBoolean, guests) => {
    if (typeof(guests) !== 'number' || guests < 1 || guests > 29) {
        console.log('The second argument must be a number between 1 and 29');
        return;
    }
    getPrices(taxBoolean);
    const discount = guests < 5 ? 5 : 10;
    console.log(`Discount is: $${discount}`);
};

getDiscount(true, 2);
getDiscount(false, 10);
