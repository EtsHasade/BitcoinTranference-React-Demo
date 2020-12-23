
import { Link } from 'react-router-dom'
import './ContactPreview.scss'

function ContactPreview({ contact }) {
    return (
        <Link to={"/contacts/details/" + contact._id} className="contactPreview table-line hover-pointer">

            <img className="avatar" src={contact.imgUrl} alt="" />

            <h3 className="table-cell">
                {contact.name}
            </h3>
            {/* <h4 className="table-cell">
                {contact.email}
            </h4>
            <h4 className="table-cell">
                {contact.phone}
            </h4> */}
        </Link>
    )

}

export default ContactPreview
