

import './Movement.scss'

const Movement = ({ movements, directionFrom }) => {   
console.log("🚀 ~ file: Movement.jsx ~ line 6 ~ Movement ~ movements", movements)

     return (
        <div className="table-flex">
            Movements:
            {(!movements.length && <div>There are no movements yet</div>) ||
            movements.map(move => {
                return (
                    <div key={move.time}>
                        <div>{directionFrom? 'From: You' : 'To: ' + (move.toName) }</div>
                        <div>Amount: ₿{move.amount}</div>
                        <div>Time: {new Date(move.time).toLocaleDateString()} - {new Date(move.time).toLocaleTimeString()}</div>
                    </div>
                )
                
            })}
        </div>

    )

}

export default Movement
