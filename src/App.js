import React, { useState } from "react";
import Form from "./components/Form/Form";
import ProductList from "./components/List/ProductList";
import Cart from "./components/Form/Cart";
import CartContext from "./components/context/CartContext";

function App() {
  const [datalist, setdatalist] = useState([]);
  const [iscartopen,setiscartopen] = useState(false)
  const [cartitems,setcartitems] = useState([])
  


  const getdata = (data) => {
    setdatalist((prevdata) => [...prevdata, data]);
    
  };

  const cartopen= (e)=>{
    e.preventDefault()
    setiscartopen(true)
  }
  const add1tocart = (selecteditem) => {
      selecteditem.Amount = selecteditem.Amount + 1
      setcartitems((prevdata)=>[...prevdata,selecteditem])
    
  }
  const add2tocart = (selecteditem) => {
    selecteditem.Amount = selecteditem.Amount + 2
    setcartitems((prevdata)=>[...prevdata,selecteditem])
  }
  const add3tocart = (selecteditem) => {
    selecteditem.Amount = selecteditem.Amount + 3
    setcartitems((prevdata)=>[...prevdata,selecteditem])
  }
    
  return (
    <CartContext.Provider value={{items:cartitems}}>
     {iscartopen && <Cart/>}
      <Form onsubmit={getdata} iscartopen={cartopen}/>
      <ProductList list={datalist} onBuy1={add1tocart} onBuy2={add2tocart} onBuy3={add3tocart} />
    </CartContext.Provider>
  );
}

export default App;
