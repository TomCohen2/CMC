import React from 'react'
import Image from 'next/image'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'
import Rate from './cmc-table/Rate';

const styles={
    TrendingCard: "bg-white rounded-lg shadow-lg p-4 w-[390px] bg-gray-700",
    TrendingCardWrapper: "flex items-center justify-between",
    number: 'mr-2 text-gray-400 text-sm font-bold', 
    symbol: 'mr-2 text-gray-400 text-sm font-bold',
    arrow:'flex items-center',
    trendingCardRow: `flex items-center mt-4 justify-between text-[0.93rem]`,
  

}

const TrendingCardRow = ({data}) => {
    const { number, icon, name, symbol, isIncrement, rate } = data;
  return (
    <div className={styles.trendingCardRow}>
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='' src={icon} width={20} height={20} />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}


function TrendingCard({title,icon,trendingData}) {
  return (
    <div className={styles.TrendingCard}>
        <div className={styles.TrendingCardWrapper}>
            <div className='flex justify-start w-[200px]'>
            <Image  width={'20px'} height={'20px'} src={icon}></Image>
            <h3 className="text-sm font-bold ml-2">{title}</h3>
            </div>
            <a className='cursor-pointer text-blue-600 text-sm font-semibold'>More&gt;</a>
        </div>
        <hr className='mt-1 opacity-25'/>

        {trendingData.map((data,index)=>{
            return <TrendingCardRow key={index} data={data}/>
        })}
        
    </div>
  )
}

export default TrendingCard