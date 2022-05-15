import type { NextPage } from 'next'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCtable from '../components/cmc-table/CmcTable'


const Home: NextPage = () => {


  return (
    <div className="min-h-screen">
     {/*Header*/}
      <Header />
     <Trending/>
     <CMCtable/>
    </div>
  )
}

export default Home
