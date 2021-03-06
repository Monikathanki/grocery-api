function makeListsArray() {
    return [
        {
            id: "1",
            category: "Vegetables",
            name: "Cabbage",
            note: "Store name",
            price: "2.05",
            weight: "2 ",
            start_date: "2020-01-03T00:00:00.000Z",
            completed_date: "2020-04-03T00:00:00.000Z",
            checked: false,
            // category_id: 1,
            user_id: 2,
        },
        {
            id: "2",
            category: "Grain",
            name: "Maize",
            note: "next week new deal",
            price: "5.05",
            weight: "3",
            start_date: "2020-01-03T00:00:00.000Z",
            completed_date: "2020-04-03T00:00:00.000Z",
            checked: false,
            // category_id: 2,
            user_id: 1,
        },
        {
            id: "3",
            category: "Fruits",
            name: "Pineapple",
            note: "next week new deal",
            price: "5.05",
            weight: "2 ",
            start_date: "2020-01-03T00:00:00.000Z",
            completed_date: "2020-04-03T00:00:00.000Z",
            checked: false,
            // category_id: 3,
            user_id: 2,
        },
        {
            id: "4",
            category: "Frozen",
            name: "Frozen Strawberries",
            note: "next week new deal",
            price: "5.05",
            weight: "3 ",
            start_date: "2020-01-03T00:00:00.000Z",
            completed_date: "2020-04-03T00:00:00.000Z",
            checked: true,
            // category_id: 4,
            user_id: 2,
        },
        {
            id: "5",
            category: "Miscellaneous",
            name: "Toilet Paper",
            note: "next week new deal",
            price: "5.05",
            weight: "1 ",
            start_date: "2020-01-03T00:00:00.000Z",
            completed_date: "2020-04-03T00:00:00.000Z",
            checked: true,
            // category_id: 5,
            user_id: 3,
        },
    ];
}

module.exports = {
    makeListsArray,
};
