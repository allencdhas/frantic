import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src="/frantic.png" alt="Logo" width={100} height={50} />
      </div>
      <div  className={styles.navList}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="#Services" className={styles.navLink}>Services</Link>
      <Link href="#Contact" className={styles.navLink}>Contact</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
