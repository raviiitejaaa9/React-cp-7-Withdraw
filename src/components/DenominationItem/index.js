// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenomination, onWithdraw} = props
  const {id, value} = eachDenomination

  const onClickWithdraw = () => {
    onWithdraw(id)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={onClickWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
