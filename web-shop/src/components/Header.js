import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summ = 0
  props.orders.forEach(el =>summ += Number.parseFloat(el.price))

  return (
    <div>
      {console.log(props.orders)}
      {props.orders.map(el => (
        <Order key={el.id} onDelete={props.onDelete}  item={el}/>
      
      ))}
      <p className='summ'>Сумма: {new Intl.NumberFormat().format(summ)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Товары</li>
          <li>Про нас</li>
          
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
           <div className='shop-cart'>
              {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
           </div>
        )}
      
      </div>
      <div className='presentation'></div>
    </header>
  )
}
