import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    curencyList: [],
  }

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    let curencyList = await response.json()
    curencyList = curencyList.map(each => ({
      currencyLogo: each.currency_logo,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      currencyName: each.currency_name,
      id: each.id,
    }))

    this.setState({isLoading: false, curencyList})
  }

  render() {
    const {isLoading, curencyList} = this.state
    console.log(isLoading, curencyList)
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="body-container">
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList curencyList={curencyList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
