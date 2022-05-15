import React from 'react'
import Image from 'next/image'
import btc from '../../assets/btc.png'


const styles={
    tableRow: "border-b border-gray-200 mt-4 items-center",

}
function CmcTableRow({coin},props) {
    const { name, symbol, price, percent_change_24h,cmc_rank,coinIcon, percent_change_7d, market_cap, market_cap_rank, total_supply, circulating_supply, max_supply, image, isIncrement, rate } = coin;
  return (
    <tr style={{
        backgroundColor: cmc_rank%2==0 ? '#212430' : '#213432',
        flex: 1,
        textAlign: 'center',
        padding: '10px',
    }}>
    <td className=" px-4 py-2">{cmc_rank}</td>
    <td className=" px-4 py-2">{coin.name}</td>
    <td className=" px-4 py-2">{coin.symbol}</td>
    <td className=" px-4 py-2">{coin.quote.USD.price.toFixed(2)+"$"}</td>
    <td className=" px-4 py-2">{coin.quote.USD.market_cap>10000000 && coin.quote.USD.market_cap<100000000000 ? coin.quote.USD.market_cap.toFixed(2) + " B$" : coin.quote.USD.market_cap.toFixed(2)+" T$"}</td>
    <td className=" px-4 py-2">{coin.quote.USD.volume_24h.toFixed(2) + " B$"}</td>
    <td className=" px-4 py-2" style={{
        color: coin.quote.USD.percent_change_24h>0 ? '#17C784' : '#EA3943',
        fontWeight: 'bold',
    }}>{coin.quote.USD.percent_change_24h>0 ? "+"+coin.quote.USD.percent_change_24h.toFixed(2)+"%" : coin.quote.USD.percent_change_24h.toFixed(2)+"%"}</td>
    {/* }}>{coin.quote.USD.percent_change_24h.toFixed(3)+"%"}</td> */}
    
</tr>
    
  )
}

export default CmcTableRow