import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
        <nav className='navbar'>
        <div className="btn-group">
            {
                menuList.map((data)=>{
                    return(
                        <button className="btn-group__item" onClick={()=>filterItem(data)}>{data}</button>
                    )
                })
            }
          
          {/* <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button> */}
        </div>

      </nav>
    </>
  )
}

export default Navbar