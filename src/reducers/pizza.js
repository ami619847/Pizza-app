import ADD_BASE from '../actions/pizza';
import ADD_SAUCE from '../actions/pizza';
import ADD_TOPPING from '../actions/pizza';
import ADD_DELIVERY from '../actions/pizza';

const initialState = {
  base: '',
  sauce: '',
  toppings: [],
  delivery: false,
  total: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'ADD_BASE':
    // console.log(state)
    if (state.base) {
      state.total = state.total - state.base.basePrice
      state.base = {}
    }
      return {
        ...state,
        base: state.base = action.payload,
        total: state.total = state.total + action.payload.basePrice
      }

    case 'ADD_SAUCE':
      // console.log(state)
      if (state.sauce) {
        state.total = state.total - state.sauce.saucePrice
        state.sauce = {}
      }
      return {
        ...state,
        sauce: state.sauce = action.payload,
        total: state.total = state.total + action.payload.saucePrice
      }

    case 'ADD_TOPPING':
      return {
        ...state,
        toppings: action.payload,
        total: state.total = state.total + 0.5
      }

    case 'ADD_DELIVERY':
      // console.log(state)
      if (state.delivery) {
        state.total = state.total - state.total*0.1
        state.delivery = {}
      }
      return {
        ...state,
        delivery: state.delivery = true,
        total: state.total = state.total + state.total*0.1
      }

    default:
      return state
  }
}

export default reducer
