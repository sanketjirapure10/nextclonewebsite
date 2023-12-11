import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navabr";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import ItJustWork from "./HomeAllComponentes/page";
import Banner from "./Banner/Banner";

function Home() {
  return (
    <div className={styles.bannerImage}>
      <Banner />
      {/* <div className={styles.bannerImage1}>
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
      </div> */}

      <ItJustWork />

      {/* <div className={styles.itjustworks}>
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
                <h3 className={styles.itjustworkheading}>Speed, flexibility, and security</h3>

                <p className={styles.itjustworkspara}>
                 Set up ZeroTier in minutes with remote, automated deployment. 
               
                </p>
                <p className={styles.itjustworkspara}>
                Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.
                </p>
                <p className={styles.itjustworkspara}>
                ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.
                </p>

                <div className={`${styles.learnMoreBtn}`}>
                  <Link href="" className={styles.navLinkunderlinelearnMoreBtn}>
                    <div className={styles.navLinklearnMoreBtn}>
                    Get ZeroTier   
                    </div>
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
      </div> */}

      <div className={styles.innovativeteams}>
        <div className={styles.innovativeteamsheading}>
          <h1 className={styles.innovativeteamshead}>
            Used by the world`s most innovative teams
          </h1>
        </div>

        <div className={styles.innovativeteamsshadow}>
          <div className={styles.innovativeteamsrow}>
            <div className={styles.innovativeteamsImg}>
              <Image
                src="/images/User_Icon.webp"
                width={50}
                height={50}
                alt="jhhh"
              />
            </div>
            <div className={styles.innovativeteamsparagraphdiv}>
              <p className={styles.innovativeteamsparagraph}>
                ’’Metropolis deploys computer vision in parking lots & car wash
                facilities across the US, integrating ZeroTier to eliminate theś
                complexity of managing multiple, disparate networks to deliver a
                seamless, groundbreaking and world-class customer experience.’’
              </p>
              <p className={styles.innovativeteamsparagraphcapitales}>
                TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
              </p>
            </div>
          </div>
        </div>

        <div className={styles.innovativeteamsshadow}>
          <div className={styles.innovativeteamsrow}>
            <div className={styles.innovativeteamsImg}>
              <Image
                src="/images/User_Icon.webp"
                width={50}
                height={50}
                alt="jhhh"
              />
            </div>
            <div className={styles.innovativeteamsparagraphdiv}>
              <p className={styles.innovativeteamsparagraph}>
                ’’Metropolis deploys computer vision in parking lots & car wash
                facilities across the US, integrating ZeroTier to eliminate theś
                complexity of managing multiple, disparate networks to deliver a
                seamless, groundbreaking and world-class customer experience.’’
              </p>
              <p className={styles.innovativeteamsparagraphcapitales}>
                TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS
              </p>
            </div>
          </div>
        </div>

        <div className={styles.innovativeteamsshadow}>
          <div className={styles.innovativeteamsrow}>
            <div className={styles.innovativeteamsImg}>
              <Image
                src="/images/User_Icon.webp"
                width={50}
                height={50}
                alt="jhhh"
              />
            </div>
            <div className={styles.innovativeteamsparagraphdiv}>
              <p className={styles.innovativeteamsparagraph}>
                ’’In early product development, we needed a way to easily
                connect our growing IoT product-base to our systems. ZeroTier
                provided an easy, and reliable way to achieve that, and has been
                growing with us.’’
              </p>
              <p className={styles.innovativeteamsparagraphcapitales}>
                PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY
              </p>
            </div>
          </div>
        </div>

        <div className={styles.innovativeteamsshadow}>
          <div className={styles.innovativeteamsrow}>
            <div className={styles.innovativeteamsImg}>
              <Image
                src="/images/User_Icon.webp"
                width={50}
                height={50}
                alt="jhhh"
              />
            </div>
            <div className={styles.innovativeteamsparagraphdiv}>
              <p className={styles.innovativeteamsparagraph}>
                ’’ZeroTier provides a robust and essential backbone for our
                communications stack.’’
              </p>
              <p className={styles.innovativeteamsparagraphcapitales}>
                ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS
              </p>
            </div>
          </div>
        </div>

        <div className={styles.innovativeteamsshadow}>
          <div className={styles.innovativeteamsrow}>
            <div className={styles.innovativeteamsImg}>
              <Image
                src="/images/User_Icon.webp"
                width={50}
                height={50}
                alt="jhhh"
              />
            </div>
            <div className={styles.innovativeteamsparagraphdiv}>
              <p className={styles.innovativeteamsparagraph}>
                ’’Loft Orbital uses ZeroTier to improve interoperability between
                its offices in the United States and France. It connects our
                engineers to key resources quickly and easily, which allows our
                team to focus on making space simple.’’
              </p>
              <p className={styles.innovativeteamsparagraphcapitales}>
                BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  new code  */}

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

      <div className={styles.pricing1}>
        <div className={styles.pricingheading}>
          <h3 className={styles.pricinghead}>
            {" "}
            Secure networks for teams of any size
          </h3>
        </div>
        {/* <div className={styles.pricingheaddivv}> ZeroTier makes networking easy for everyone - anywhere.</vdiv> */}

        <div className={styles.pricingrowmain}>
          <div className={styles.pricingshadow1}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/game_icon.webp"
                  width={150}
                  height={150}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>Individuals</h3>
                {/* <div className={styles.pricingheadpararr1}>
                  For Everyone / ZeroTier Hosted Controller
                </div> */}

                <p className={styles.pricingheadpararr}>
                  {" "}
                  Access your computers, NAS, home automation, IP cameras, ham
                  radios or other devices from anywhere
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Conveniently share files and data, or even play LAN games with
                  others
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Manage secure network access to users of choice{" "}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pricingshadow1}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Cloud_Icon.webp"
                  width={150}
                  height={150}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>IT Teams</h3>
                {/* <div className={styles.pricingheadpararr1}>
                  For Everyone / ZeroTier Hosted Controller
                </div> */}

                <p className={styles.pricingheadpararr}>
                  Simplify your network stack by unifying VPNs, VLANs, and
                  SD-WANs with one solution✖ Business SSO: n/a{" "}
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Build, manage, and observe any number of remote, on premise,
                  or cloud networks with one management interface
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Easily provision remote access for all of your users{" "}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pricingshadow1}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Dev_Ops_Icon.webp"
                  width={150}
                  height={150}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>DevOps</h3>
                {/* <div className={styles.pricingheadpararr1}>
                  For Everyone / ZeroTier Hosted Controller
                </div> */}

                <p className={styles.pricingheadpararr}>
                  Quickly build backplane networks spanning multiple cloud
                  providers
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Save on performance, storage, and bandwidth
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Administrate and debug from anywhere{" "}
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Secure corporate network overlay and failover layer{" "}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pricingshadow1}>
            <div className={styles.pricingrow}>
              <div className={styles.pricingImg}>
                <Image
                  src="/images/Global_Network_Icon.webp"
                  width={150}
                  height={150}
                  alt="jhhh"
                />
              </div>

              <div className={styles.pricingparagraph}>
                <h3 className={styles.pricinghead1}>Embedded</h3>
                {/* <div className={styles.pricingheadpararr1}>
                  For Everyone / ZeroTier Hosted Controller
                </div> */}

                <p className={styles.pricingheadpararr}>
                  Enjoy vastly superior network control and functionality{" "}
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Develop and manage products or services running on their own
                  decentralized networks
                </p>
                <p className={styles.pricingheadpararr}>
                  {" "}
                  Create 4G/5G-capable secure networks for any IoT, edge or
                  embedded device that can operate on 64MB of RAM{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
