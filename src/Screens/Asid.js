import React from 'react'

const Asid = () => {
    const openMenu = ()=>{
        document.querySelector(".sidebar").classList.add("open");
      }
      const closeMenu =()=>{
        document.querySelector(".sidebar").classList.remove("open");
      }
  return (
    <aside className="sidebar">
    <h4>shopping catagories</h4>
    <button className="sidebar-close" onClick={closeMenu}>x</button>
        
        <ul>
            <li>
                <a href="index.html">miniskirt</a>
            </li>
            <li>
                <a href="index.html">trousers</a>
            </li>
            <li>
                <a href="index.html">t-shirts</a>
            </li>
            
        </ul>
        

</aside>
    
  )
}

export default Asid
