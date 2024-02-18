import React ,{useState} from 'react'
import styles from "./Header.module.scss";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineCloseSquare} from "react-icons/ai";

const Header = () => {

    const[menuOpen,setMenuOpen]=useState(false);
    const menuToggler=()=>setMenuOpen(p=>!p);

  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
            <div>
                <span className={styles.logo}>easyBank</span>
            </div>
            <div>
                <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`]:{}}`}>
                    <a className={styles.nav_item} href={"/"}>Home</a>
                    <a className={styles.nav_item} href={"/"}>About Us</a>
                    <a className={styles.nav_item} href={"/"}>Contact</a>
                    <a className={styles.nav_item} href={"/"}>Blog</a>
                    <a className={styles.nav_item} href={"/"}>Careers</a>
                    <div className={styles.nav_button_container}>
                        <Button/>
                    </div>
                </nav>
            </div>
            <div>
                <div className={styles.header_button_container}>
                <Button/>

                </div>
                <div className={styles.header_toggler} onClick = {menuToggler}>
                    {!menuOpen ? <BiMenuAltRight/> : <AiOutlineCloseSquare/>}
                </div>
            </div>
        </div>
    </div>
  )
};


const Button=()=>{
    return <button className={styles.button}>Request Invite</button>;
}

export default Header