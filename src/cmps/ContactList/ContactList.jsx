

import ContactPreview from '../ContactPreview/ContactPreview.jsx'

import './ContactList.scss'

function ContactList({ conatcts }) {

    return (
        <div>
            <ul className="contact-list table-flex">
                {conatcts.map(contact => {
                    return <ContactPreview contact={contact} key={contact._id} />

                })}
            </ul>
        </div>

    )
}

export default ContactList
