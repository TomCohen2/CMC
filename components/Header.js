import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const styles={
    header: "bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]" ,
    headerWrapper: "flex justify-center h-full max-w-screen-xl mx-auto px-4",
    nav: "flex items-center justify-center gap-[20px]",
    navItem: "relative mr-1 cursor-pointer hover:opacity-0.5",
    badge: "absolute opacity-0.1 top-0 h-1 w-1 right-0 bg-blue-500 text-white rounded-full ring-4", 
    inputContainer: "flex items-center justify-center p-2 rounded bg-[#171924]",
    input: "text-white w-70 outline-none ml-30 bg-transparent",
    navLink: "text-white font-bold mx-[10px]",
}

function Header() {
  return (
    <div className={styles.header}>
        <Image width={"30px"} height={100} src='https://crypto-central.io/library/uploads/CoinMarketCap-Logo-300x300.png'></Image>
   
   
    <div className={styles.headerWrapper} >
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Cryptocurrencies
                </div>
                <div className={styles.badge}></div>
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Exchanges
                </div>
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    NFT
                </div>
                <div className={styles.badge}></div>
            </div>


            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Cryptown
                </div>
                <div className={styles.badge}></div>
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Portfolio
                </div>
            </div>
            
            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Watchlish
                </div>
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Products
                </div>
            </div>

            <div className={styles.navItem}>
                <div className={styles.navLink}>
                    Learn
                </div>
            </div>



        </nav>

        <div className='flex items-center'>
            <ConnectButton/>
            <div className={styles.inputContainer}>
                {/* <Search/> */}
                <Search/>
                <input type='text' placeholder='Search' className={styles.input}/>

            </div>
        </div>
        
    </div>
    </div>
  )
}


export default Header