
// ----------------------------------------------------------------------------------// 

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
  
      res.status(200).json({ data })
    }
  
    getData()
  }