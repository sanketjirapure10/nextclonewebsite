import React from 'react'
import styles from "../page.module.css";
import Navbar from "@/components/Navbar/Navabr";
import Link from "next/link";
// import Image from "next/image";

function Banner() {
  return (
    <div>
        <div className={styles.bannerImage1}>
        <Navbar />

        <div className={styles.headingpararow}>
          <div className={styles.headingpara}>
            <h1 className={styles.headinhome}>
              Securely connect any device, anywhere.
            </h1>
            <p className={styles.headinpara}>
              {" "}
              ZeroTier lets you build modern, secure multi-point virtualized
              networks of almost any type. From robust peer-to-peer networkinz
              to multi-cloud mesh infrastructure, we enable global connectivity
              with the simplicity of a local network.
            </p>

            <div className={`${styles.loginSignup}`}>
              <Link href="" className={styles.navLinkunderline}>
                <div className={styles.navLink22}>Get ZeroTier</div>
              </Link>
              <Link href="" className={styles.navLinkunderline}>
                <div className={styles.navLink11}>Learn more ›</div>
              </Link>
            </div>
          </div>

          <div className={styles.headingpara1}></div>
        </div>

        <div className={styles.headingpararow}>
          <p className={styles.parabanerbottom}>
            🔔 NEW!
            <Link href="" className={styles.navLinkdownloadsebhook}>
              {" "}
              ZeroTier Webhooks{" "}
            </Link>
            - Current Release:
            <Link href="" className={styles.navLinkdownloadsebhook}>
              {" "}
              Download ZeroTier 1.12.2{" "}
            </Link>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Banner

