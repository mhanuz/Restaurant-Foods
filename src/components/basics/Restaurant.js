import React from 'react'
import './style.css'
import Menu from './menuApi'
import { useState } from 'react'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(Menu.map((curElem)=>{
    return curElem.category
}
)),"all",
]


const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)
    const filterItem =(category)=>{
        if(category==='all'){
          setMenuData(Menu)
          return setMenuData;
        }
        const update = Menu.filter((curElem)=>{
          return curElem.category === category
        })
        setMenuData(update)
    }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />  
    </>
  )
}
export default Restaurant;


