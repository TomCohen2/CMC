import React , {useState,useEffect,useCallback} from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context';
import { useContext } from 'react'
import CmcTableRow from './CmcTableRow'

function CmcTable() {

    let { getTopTenCoins,getBtcData } = useContext(CoinMarketContext)
    let [coinData, setCoinData] = useState(null)
  
    useEffect(() => {
      setData()
    }, [])
  
    const setData = useCallback(async () => {
      try {
        let apiResponse = await getTopTenCoins()
        let filteredResponse = []
  
        for (let i = 0; i < apiResponse.length; i++) {
          const element = apiResponse[i]
          if (element.cmc_rank <= 100) filteredResponse.push(element)
        }
  
        setCoinData(filteredResponse)
      } catch (e) {
        console.log(e.message)
      }
    }, [getTopTenCoins])

    console.log(coinData)

  
  return (
    <div>
        <table className="table-auto w-full items-center mt-16 text-white">
            <thead>
                <tr>
                    <th className="px-4 py-2">Rank</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Symbol</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Market Cap</th>
                    <th className="px-4 py-2">Volume</th>
                    <th className="px-4 py-2">Change (24h)</th>
                </tr>
            </thead>
            <tbody className=''>
                {coinData && coinData.map((coin, index) => {
                    return (
                    
                        <CmcTableRow key={index} coin={coin}/>
                    )
                })}
                </tbody>

    </table>
    </div>
  )
}


export default CmcTable