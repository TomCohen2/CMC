
export default function handler(req, res) {

    const apiKey='70895514-38d5-4329-8cf2-8341829c5b00';

    const getData = async () => {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        },
      )
  
      const data = await response.json()
      const btcData=data.data.filter(coin=>coin.symbol==='BTC');
      const tetherData=data.data.filter(coin=>coin.symbol==='USDT');
      const ethData=data.data.filter(coin=>coin.symbol==='ETH');
    //   console.log(btcData);
  
      res.status(200).json({ btcData,tetherData,ethData })
    }
  
    getData()
  }