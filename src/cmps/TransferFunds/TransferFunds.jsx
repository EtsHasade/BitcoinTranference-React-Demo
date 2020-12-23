
import { useState } from 'react'
import './TransferFunds.scss'

const MoveBitcoin = ({ contact, onUpdateUserMove }) => {
    const [amount, setAmount] = useState(1)
    console.log("🚀 ~ file: TransferFunds.jsx ~ line 7 ~ MoveBitcoin ~ amount", amount)


    return (
        <form className="transfer-form flex wrap center" onSubmit={(ev) => {
            ev.preventDefault()
            onUpdateUserMove({
                    to: contact._id,
                    amount: amount,
                    time: Date.now()
                })
                }}>
            <label className="mg5 flex wrap center">
                <span className="mr10 center">
                Amount:
                </span>
                <input type="number" value={amount} onChange={({target}) => setAmount(target.value)} min="0"/>
            </label>
            <button className="mg5">Transfer Bitcon to {contact.name}</button>
        </form>

    )
}

export default MoveBitcoin
