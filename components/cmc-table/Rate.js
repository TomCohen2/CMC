import React from 'react'
import ChevronUp from '../../assets/svg/chevronUp.js'
import ChevronDown from '../../assets/svg/chevronDown.js'

const styles={
    rate: "rate flex items-center font-semibold",
    red:'ml-2 text-red-500',
    green:'ml-2 text-green-500',

}

function Rate({isIncrement,rate}) {
  return (
    <div className={styles.rate}>
        {isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill='#EA3943' />}
        <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

export default Rate