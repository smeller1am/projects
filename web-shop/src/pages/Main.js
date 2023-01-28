import React from "react";
import { useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Items from "../components/Items";
import ShowFullItem from "../components/ShowFullItem";

export default function Main() {
    const [item, setItem] = useState([
      {id: 1,
      title:'Стул сeрый',
      img: 'chair.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
      category: 'chairs',
      price: '49.99'
      },
      {id: 2,
        title:'Стол',
        img: 'table.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        category: 'tables',
        price: '149.00'
      },
      {id: 3,
        title:'Диван',
        img: 'sofa.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        category: 'sofa',
        price: '549.99'
      },
      {id: 4,
        title:'Лампа',
        img: 'led.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        category: 'light',
        price: '25.00'
      },
      {id: 5,
        title:'Стул красный',
        img: 'chair2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        category: 'chairs',
        price: '60.00'
      },
      {id: 6,
        title:'Стол',
        img: 'table2.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        category: 'tables',
        price: '210.00'
      }
    ])
    const [orders, setOrders] = useState([])
    const [currentItems, setCurrentItems] = useState(item)
    const [showFullItem, setShowFullItem] = useState(false)
    const [fullItem, setFullItem] = useState({})
    const deleteOrder = (id) => {
      console.log(orders)
      setOrders(orders.filter(el => el.id !== id))
    }
  
    const onShowItem = (item) => {
      setFullItem(item)
      setShowFullItem(!showFullItem)
    }
  
    const chooseCategory = (category) => {
      if(category === 'all') {
        setCurrentItems(item)
        return
      }
      setCurrentItems(item.filter(el => el.category === category))
    }
    
    const addToOrder = (item) => {
      let isInArray = false
      orders.forEach(el => {
        if(el.id === item.id)
        isInArray = true
      })
      if(!isInArray)
        setOrders([...orders, item])
    }
  
    return (
      
     <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>
      {showFullItem && <ShowFullItem setShowFullItem={setShowFullItem} onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
      <Footer/>
     </div>
    );
}
