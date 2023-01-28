import React, { useState } from 'react'

export default function Categories(props) {
  const [categories, setCategories] = useState([{
    key:'all',
    name:'Все'
  },
  {
    key:'chairs',
    name:'Стулья'
  },
  {
    key:'tables',
    name:'Столы'
  },
  {
    key:'sofa',
    name:'Диваны'
  },
  {
    key:'light',
    name:'Свет'
  }
])


  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  )
}
