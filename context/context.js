import { createContext, useState, useEffect } from 'react'


export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => { 


    const getTopTenCoins = async () => {
        try {
          const res = await fetch('/api/getTop10')
          const data = await res.json()
          return data.data.data
        } catch (e) {
          console.log(e.message)
        }
      }

      const getTrendingData = async () => {
        try {
          const res = await fetch('/api/getTrendingData')
          const data = await res.json()
          return data
        } catch (e) {
          console.log(e.message)
        }
      }

    return(
        <CoinMarketContext.Provider value={{
            getTopTenCoins
            ,getTrendingData
        }}>{children}</CoinMarketContext.Provider>

    )
}