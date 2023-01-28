import React from 'react'

export default function Item(props) {
  return (
    <div className={'item'}>
      <img src={"./img/" + props.data.img} onClick={() => props.onShowItem(props.data)} alt=''/>
      <h2>{props.data.title}</h2>
      <p>{props.data.desc}</p>
      <b>{props.data.price}$</b>
      <div className='add-to-cart' onClick={() => props.onAdd(props.data)}>+</div>
    </div>
  )
}
