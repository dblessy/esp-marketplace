import axios from "axios";
import React, { useState } from "react";
import Search from "../components/Search";
import "../public/styles/buyerPage.css";
import { Navbar, NavbarBrand } from "reactstrap";
import dummyItems from "../items";
import ItemCard from "../components/ItemCard";
import { useEffect } from "react";

export default function BuyerPage() {
  const [items, setItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    axios.get("/item")
      .then((res) => {
        let data = res.data;
        setItems(data)
      })
      .catch((err) => {});
      getUserItems()
  },[likedItems]);

const getUserItems = () =>{
  axios.get("/favitem?userId=Tom")
    .then(res=>{
        let data = res.data[0];
        //data has fitemId array and userID
        setLikedItems(data.fitemId)
    })
    .catch(err=>console.log(err))
}

  function create(item) {
    let isLiked = likedItems.filter(i => i == item.itemId).length > 0 ? true : false
    
    return (
      <ItemCard
        key={item.itemId}
        id={item.itemId}
        price={item.price}
        name={item.name}
        condition={item.condition}
        filename={item.filename}
        ph={item.ph}
        address={item.address}
        isLiked={isLiked}
      />
    );
  }
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <span className="brandname">ESP Marketplace</span>
          <span>
            <a href="/favorites">Favorites</a>
          </span>
        </NavbarBrand>
      </Navbar>
      <Search />
      {items.map(create)}
    </>
  );
}
