export const initialState = {
    cart:[ 
        // {
        // id:"125541",
        // title:'anything',
        // image:"../assets/banner.png",
        // price:15,
        // rateing:4,
        // },
        // {
        // id:"1541",
        // title:'aything',
        // image:"../assets/banner.png",
        // price:1,
        // rateing:4,
        // },
        // {
        // id:"141",
        // title:'aythig',
        // image:"../assets/banner.png",
        // price:1,

        // rateing:4,
        // },
],
    
};

const Reducer = (state,action) => {
    console.log(action);
    switch (action.key) {
        case 'ADD_TO_CART':
            // LOGIC FOR ADDIN
        return {cart:[...state.cart,action.item]}
            case 'REMOVE_FROM_CART':
                {  state.cart.pop(action.item)}
            return {cart:[...state.cart]}
          

    
        default:

            return state;
            break;
 
    }
}
export const Remove=(state,action)=>{
    const nextCart = state.cart.filter(
        item => item.id!== action.item
    )
    state.cart = nextCart
}



export default Reducer;