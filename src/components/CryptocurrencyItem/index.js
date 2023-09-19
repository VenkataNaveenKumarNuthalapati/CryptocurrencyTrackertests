import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurr} = props
  const {currencyLogo, euroValue, usdValue, currencyName} = eachCurr

  return (
    <li className="curr-list">
      <div className="logo-container">
        <img className="image" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="euro">
        <p>{euroValue}</p>
        <p>{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
