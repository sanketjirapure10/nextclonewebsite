import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

function ItJustWork() {
  return (
    <div>
      <div className={styles.itjustworks}>
        <div className={styles.itjustworksshadow}>
          <div className={styles.itjustworksshadowpaddind}>
            <div className={styles.itjustworksshadowdisplyflex}>
              <div className={styles.itjustworksshadowdisplyflexrowleft}>
                <Image
                  src="/images/itjustwork.webp"
                  width={450}
                  height={450}
                  alt="jhhh"
                />
              </div>

              <div className={styles.itjustworksshadowdisplyflexrowright}>
                <h3 className={styles.itjustworkheading}>It just works </h3>

                <p className={styles.itjustworkspara}>
                  {" "}
                  ZeroTier combines the capabilities of
                  <strong> VPN</strong> and <strong> SD-WAN</strong>,
                  simplifying network management. Enjoy flexibility while
                  avoiding costly hardware vendor lock in.
                </p>

                <div className={`${styles.learnMoreBtn}`}>
                  <Link href="" className={styles.navLinkunderlinelearnMoreBtn}>
                    <div className={styles.navLinklearnMoreBtn}>
                      Learn more ›
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.itjustworksshadowdisplyflex}>
            <div className={styles.rowspeedflexibilityleft}>
              <h3 className={styles.itjustworkheading}>
                Speed, flexibility, and security
              </h3>

              <p className={styles.itjustworkspara}>
                Set up ZeroTier in minutes with remote, automated deployment.
              </p>
              <p className={styles.itjustworkspara}>
                Emulates Layer 2 Ethernet with multipath, multicast, and
                bridging capabilities.
              </p>
              <p className={styles.itjustworkspara}>
                ZeroTier’s zero-trust networking solution provides scalable
                security with 256-bit end-to-end encryption.
              </p>

              <div className={`${styles.learnMoreBtn}`}>
                <Link href="" className={styles.navLinkunderlinelearnMoreBtn}>
                  <div className={styles.navLinklearnMoreBtn}>Get ZeroTier</div>
                </Link>
              </div>
            </div>
            <div className={styles.itjustworksshadowdisplyflexrowleft}>
              <Image
                src="/images/speedflexibility.webp"
                width={500}
                height={500}
                alt="jhhh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItJustWork;
