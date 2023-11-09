import React, {useState} from 'react';

const cartData = [
  {
    id: 1,
    name: 'shoes',
    cost: 20,
    count: 2
  },
  {
    id: 2,
    name: 'socks',
    cost: 1,
    count: 3
  },
  {
    id: 3,
    name: 'bottle',
    cost: 2,
    count: 1
  },
  {
    id: 4,
    name: 'pen',
    cost: 1,
    count: 4
  },
]

let cartTotal = 0;

export default function DynamicCart() {
  const [cart, setCart] = useState(cartData);

  function updateProductQuantity(itemId, action) {
    if (action === 'addToCart') {
      setCart(
        cart.map(item => item.id === itemId ? {...item, count: item.count + 1} : item)
      )
    }
    else{
      setCart(
        cart.map(item => item.id === itemId && item.count > 0 ? {...item, count: item.count - 1} : item)
      )
    }
  }

  cartTotal = cart.reduce((acc, curr) => {
    acc = acc + curr.cost * curr.count
    return acc
  }, 0)

  
  return (<>
  {cart.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span> <span>(Rs. {item.cost})</span> <span><button onClick={() => updateProductQuantity(item.id, 'removeFromCart')}>-</button> {item.count} <button onClick={() => updateProductQuantity(item.id, 'addToCart')}>+</button></span>
    </div>
  ))}
  {cartTotal > 0 && <strong>Total - Rs. {cartTotal}</strong>}
  </>);
}
