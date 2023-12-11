"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

function Navbar() {

    // // State to track the menu visibility
    // const [menuVisible, setMenuVisible] = useState(false);

    // // Function to toggle menu visibility
    // const toggleMenu = () => {
    //   setMenuVisible(!menuVisible);
    // };
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuVisible(!mobileMenuVisible);
    };
  
  
  return (
    <div className={styles.navbar}>



      <Link href="/" className={styles.navLinkunderline}>
        <div className={styles.logoddd}>
          <Image
            src="/images/Zero_Tier_Logo_Orange.webp"
            width={30}
            height={24}
            alt="Logo"
          />
          ZEROTIER
        </div>
      </Link>


        {/* Button to toggle menu on smaller screens */}
        {/* <button className={styles.menuButton} onClick={toggleMenu}>
        Menu
      </button> */}
       {/* Mobile Menu Button */}
       {/* <div className={styles.menuButton} onClick={toggleMobileMenu}>
        ☰
      </div> */}

      <div className={mobileMenuVisible ? `${styles.nanmenu} ${styles.showMenu}` : styles.nanmenu}>
      {/* <div className={`${styles.nanmenu} ${menuVisible ? styles.showMenu : ""}`}> */}
      {/* <div className={styles.nanmenu}> */}
        <Link href="/Features" className={styles.navLinkunderline}>
          <div className={styles.navLink}>Features</div>
        </Link>
        <Link href="/Pricing" className={styles.navLinkunderline}>
          <div className={styles.navLink}>Pricing</div>
        </Link>
        <Link href="/Download" className={styles.navLinkunderline}>
          <div className={styles.navLink}>Download</div>
        </Link>

        <div className={styles.dropdown}>
          <Link href="" className={styles.navLinkunderline}>
            <div className={styles.navLink}>Company</div>
          </Link>
          <div className={styles.dropdownContent}>
            <Link href="/Contact" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Contact</div>
            </Link>
            <Link href="/About" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>About Us</div>
            </Link>
            <Link href="/Careers" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Careers</div>
            </Link>
            <Link href="/Blog" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Blog</div>
            </Link>
            <Link href="/Mediakit" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Media Kit</div>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="" className={styles.navLinkunderline}>
            <div className={styles.navLink}>Support</div>
          </Link>
          <div className={styles.dropdownContent}>
            <Link href="/Documentation" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Documentation</div>
            </Link>
            <Link href="/Knowledge-base" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Knowledge Base</div>
            </Link>
            <Link href="/Community" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Community</div>
            </Link>
            <Link href="/Getting-started" className={styles.navLinkunderline1}>
              <div className={styles.navLinksubdropdown}>Getting Started</div>
            </Link>
          </div>
        </div>



      </div>

      <div className={`${styles.loginSignup}`}>
        <Link href="/Login" className={styles.navLinkunderline}>
          <div className={styles.navLink11}>Login</div>
        </Link>
        <Link href="/Signup" className={styles.navLinkunderline}>
          <div className={styles.navLink22}>Sign Up</div>
        </Link>
      </div>

      <div className={styles.menuButton} onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
