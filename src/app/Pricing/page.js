import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navabr'
import styles1 from "./Pricing.module.css";
import styles from "../page.module.css";
import React from 'react'
import Link from "next/link";
import Image from "next/image";

function Pricing() {
  return (
    <div className={styles1.bannerImage}>
    <div className={styles1.bannerImage1}>
      <Navbar/>


      <div className={styles.pricing}>
        <div className={styles.pricingheading}>
          <h3 className={styles.pricinghead}>Pricing</h3>

          <div className={styles.pricingdivhead}>
            {" "}
            ZeroTier makes networking easy for everyone - anywhere.
          </div>
        </div>
        {/* <div className={styles.pricingheaddivv}> ZeroTier makes networking easy for everyone - anywhere.</vdiv> */}

        <div className={styles.pricingrowmain}>
          <div className={styles.pricingshadow}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Zero_Tier_Logo_Inverted.webp"
                  width={65}
                  height={65}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>Basic</h3>
                <div className={styles.pricingheadpararr1}>
                  For Everyone / ZeroTier Hosted Controller
                </div>
                <p className={styles.pricingheadpararr}> ✓ 1 Admin</p>
                <p className={styles.pricingheadpararr}>✓ 25 Nodes</p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  ✓ Unlimited Networks
                </p>
                <p className={styles.pricingheadpararr}>✖ Business SSO: n/a </p>
                <p className={styles.pricingheadpararr}> ✓ Community Support</p>
                <p className={styles.pricingheadpararr}> FREE </p>
              </div>

              <div className={`${styles.learnMoreBtn1}`}>
                <Link href="" className={styles.navLinkunderlinelearnMoreBtn1}>
                  <div className={styles.navLinklearnMoreBtn1}>
                    Free Sign Up
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pricingshadow}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Zero_Tier_Logo_Orange.webp"
                  width={65}
                  height={65}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>Professional</h3>
                <div className={styles.pricingheadpararr1}>
                  {" "}
                  Licensed Only For Individuals and Testing{" "}
                </div>
                <p className={styles.pricingheadpararr}>
                  ✓ Admins | $10 USD/mo each{" "}
                </p>
                <p className={styles.pricingheadpararr}>
                  ✓ 25 Node Packs | $5 USD/mo
                </p>
                <p className={styles.pricingheadpararr}>✓ Unlimited Networks</p>
                <p className={styles.pricingheadpararr}>
                  ✓ Business SSO | $5 USD/mo per seat{" "}
                </p>
                <p className={styles.pricingheadpararr}>✓ Community Support </p>
                <p className={styles.pricingheadpararr}>
                  Starting at $5 USD/month{" "}
                </p>
              </div>

              <div className={`${styles.learnMoreBtn2}`}>
                <Link href="" className={styles.navLinkunderlinelearnMoreBtn2}>
                  <div className={styles.navLinklearnMoreBtn2}>Sign Up</div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.pricingshadow}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Zero_Tier_Logo_Blue.webp"
                  width={65}
                  height={65}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>Business</h3>
                <div className={styles.pricingheadpararr1}>
                  {" "}
                  Licensed for Commercial Deployments
                </div>
                <p className={styles.pricingheadpararr}> Use Cases Include:</p>
                <p className={styles.pricingheadpararr}> ∙ IoT/IIoT</p>
                <p className={styles.pricingheadpararr}> ∙ SD-WAN </p>
                <p className={styles.pricingheadpararr}> ∙ VPN</p>
                <p className={styles.pricingheadpararr}>
                  ∙ Remote Monitoring and Management{" "}
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Contact Sales for Pricing{" "}
                </p>
              </div>

              <div className={`${styles.learnMoreBtn3}`}>
                <Link href="" className={styles.navLinkunderlinelearnMoreBtn3}>
                  <div className={styles.navLinklearnMoreBtn3}>
                    Contact Sales
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

   
  </div>
  )
}

export default Pricing
