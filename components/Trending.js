import React from 'react'
import { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate'
import eth from '../assets/eth.png'
import TrendingCard from './TrendingCard'
import { CoinMarketContext } from '../context/context';
import { useContext,useEffect,useCallback } from 'react'


const styles={
    trendingWrapper: "mx-auto max-w-screen-2xl",
    h1: "text-white text-2xl font-bold",
    top: "flex flex-row justify-between items-center",
    flexCenter: "flex justify-around items-center",
}

function Trending() {
    const [checked, setChecked] = useState(false);
    const [btcTrendingData, setBtcTrendingData] = useState(null);
   const [btc24hChange, setBtc24hChange] = useState(null);
   const [tether24hChange, setTether24hChange] = useState(null);
    const [eth24hChange, setEth24hChange] = useState(null);

    let { getTrendingData,getTopTenCoins } = useContext(CoinMarketContext);


    useEffect(() => {
        setData();
    } , [])


    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTrendingData()
            // console.log(apiResponse.btcData[0].quote.USD.percent_change_24h.toFixed(2))
            setBtc24hChange(apiResponse.btcData[0].quote.USD.percent_change_24h.toFixed(2))
            setTether24hChange(apiResponse.tetherData[0].quote.USD.percent_change_24h.toFixed(2))
            setEth24hChange(apiResponse.ethData[0].quote.USD.percent_change_24h.toFixed(2))
        } catch (e) {
            console.log(e.message)
        }
    }, [getTrendingData])

    let trendingData=[];


        trendingData = [{
            number:1,
            symbol:"BTC",
            name:"Bitcoin",
            icon:btc,
            isIncrement: btc24hChange>0 ? true : false,
            rate:btc24hChange ? btc24hChange+"%"  : "Loading...",
        },
    {
        number:2,
        symbol:"USDT",
        name:"Tether",
        icon:usdt,
        isIncrement: tether24hChange>0 ? true : false,
        rate:tether24hChange ? tether24hChange+"%" : "Loading...",
    
    },
    {
        number:3,
        symbol:"ETH",
        name:"Ethereum",
        icon:eth,
        isIncrement: eth24hChange>0 ? true : false,
        rate:eth24hChange ? eth24hChange+"%"  : "Loading...",
    }]



    
  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>
                    Today Cryptocurrencies Prices 
                    </h1>
                    <div className='flex'>
                        <p className='text-gray-400'>Highlights  &nbsp;</p>
                        <ReactSwitch checked={checked} onChange={() => setChecked(!checked)}/>
                    </div>
                
            </div>
            <br/>
            <div className="flex">
                <p>The global crypto market cap is $1.74T &nbsp; </p>
                <span> <Rate isIncrement={true} rate='0.53%' /> </span>
                <p> &nbsp; decrease over the last day. <span className="underline">Read More</span> </p>
            </div>
            <br/>
            {trendingData && <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} trendingData={trendingData}/>
               < TrendingCard title='Biggest Gainers' icon={gainers} trendingData={trendingData}/>
               < TrendingCard title='Recently Added' icon={recent} trendingData={trendingData}/>
                
            </div>}
        </div>
    </div>
  )
}

export default Trending