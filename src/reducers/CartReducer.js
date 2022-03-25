const initialState = {
    reduxBugado: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            // let products = [...state.products]
            // let id = action.payload.data.id

            // let index = products.findIndex(item => item.id === id)
            // if (index > -1) {
            //     products[index].qt += action.payload.orderCount
            // } else {
            //     products.push({
            //         ...action.payload.data,
            //         qt: action.payload.orderCount
            //     })
            // }

            console.log(state)

            break;

        default:
            return state;
    }

    return state;
}