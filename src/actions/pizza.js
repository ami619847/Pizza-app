export const ADD_BASE = 'ADD_BASE';
export const ADD_SAUCE = 'ADD_SAUCE';
export const ADD_TOPPING = 'ADD_TOPPING';
// export const ADD_DELIVERY = 'ADD_DELIVERY';

export function addBase(base) {
  return {
    type:'ADD_BASE',
    payload: base
  }
}

export function addSauce(sauce) {
  return {
    type:'ADD_SAUCE',
    payload: sauce
  }
}

export function addTopping(toppings) {
  return {
    type:'ADD_TOPPING',
    payload: toppings
  }
}

export function addDelivery(delivery) {
  return {
    type:'ADD_DELIVERY',
    payload: delivery
  }
}
