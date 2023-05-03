// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {
    amount: 2000,
  }

  onWithdraw = id => {
    const {denominationsList} = this.props
    const {amount} = this.state
    console.log('withdraw event triggered')

    const reqItem = denominationsList.filter(eachItem => eachItem.id === id)

    const reqAmount = reqItem[0].value
    console.log(reqAmount)

    if (reqAmount <= amount) {
      this.setState(prevState => ({amount: prevState.amount - reqAmount}))
    } else {
      this.setState(prevState => ({amount: prevState.amount}))
    }
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const {id, value} = denominationsList

    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-sec">
            <p className="profile"> S </p>
            <h1 className="username"> Sarah Williams </h1>
          </div>
          <div className="bal-sec">
            <p className="bal-head"> Your Balance </p>
            <div className="amount-sec">
              <p className="amount"> {amount} </p>
              <p className="currency-name"> In Rupees </p>
            </div>
          </div>
          <div className="withdraw-sec">
            <p className="withdraw"> Withdraw </p>
            <p className="choose-sum"> CHOOSE SUM (IN RUPEES) </p>
            <ul className="denomination-buttons-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  eachDenomination={eachDenomination}
                  key={eachDenomination.id}
                  onWithdraw={this.onWithdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
