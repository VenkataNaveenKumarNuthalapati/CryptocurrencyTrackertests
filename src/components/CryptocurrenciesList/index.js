import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {curencyList} = props
  return (
    <>
      <ul className="ul-container">
        <li className="table-header">
          <span>Coin Type</span>
          <div className="euros">
            <span>USD</span>
            <span>EURO</span>
          </div>
        </li>
        {curencyList.map(eachCurr => (
          <CryptocurrencyItem key={eachCurr.id} eachCurr={eachCurr} />
        ))}
      </ul>
    </>
  )
}

export default CryptocurrenciesList
