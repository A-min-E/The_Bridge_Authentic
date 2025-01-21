import React, {useRef} from "react";
import navCSS from "./../Nav/Nav.module.css";


function Nav(){

    const menu = useRef()

    const menuHandler = ()=>{
        menu.current.classList.toggle(navCSS.showNav);
    }

    return (
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#" >
                    <span>The Bridge</span>
                </a>
            </div>
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Classes</a></li>
                <li><a href="#">Our Accomodation</a></li>
                <li><a href="#">Our Trips</a></li>
                <li><a href="#">Kid's Activities</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Q & A</a></li>
            </ul>
            <div className={navCSS.Nav_btns}>
                <button >Contact Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>

        </div>

    )
}

 export default Nav