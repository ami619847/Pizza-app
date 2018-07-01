import ADD_BASE from '../actions/pizza';
import ADD_SAUCE from '../actions/pizza';
import ADD_TOPPING from '../actions/pizza';
// import ADD_DELIVERY from '../actions/pizza';

const initialState = {
  base: '',
  sauce: '',
  // topping: [],
  // topping1: '',
  // topping2: '',
  // topping3: '',
  delivery: '',
  total: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'ADD_BASE':
      return {
        ...state,
        base: state.base = action.payload.base,
        total: state.total = state.total + action.payload.basePrice
      }

    case 'ADD_SAUCE':
      return {
        ...state,
        sauce: state.sauce = action.payload.sauce,
        total: state.total = state.total + action.payload.saucePrice
      }

    case 'ADD_TOPPING':
      return {
        ...state,
        toppings: action.payload,
        total: state.total = state.total + 0.5
      }

    case 'ADD_DELIVERY':
      return {
        ...state,
        delivery: state.delivery = action.payload,
        total: state.total = state.total + state.total*0.1
      }

    default:
      return state
  }
}

export default reducer
