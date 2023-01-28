import React from 'react'

export default function ShowFullItem(props) {
  return (
    <div className='full-item' onClick={() => props.setShowFullItem(false)}>
      <div>
        <img src={"./img/" + props.item.img} onClick={() => props.onShowItem(props.item)} alt=''/>
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}$</b>
        <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
      </div>
    </div>
  )
}
