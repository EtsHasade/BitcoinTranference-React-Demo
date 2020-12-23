
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ContactList from '../../cmps/ContactList'
import { contactService } from "../../services/contactService.js";
import plusImg from "../../assets/icons for misterBitcoin/plus.svg";
import './ContactPage.scss'

class ContactPage extends Component {
    state = {
        conatcts: null
    }
    async componentDidMount(){
        const conatcts = await contactService.getContacts()
        console.log("🚀 ~ file: ContactList.jsx ~ line 13 ~ ContactList ~ componentDidMount ~ conatcts", conatcts)
        this.setState({conatcts})
    }


    render() {
        return(
            <main className="contact-page flex-g1">
                <div className="btns ">
                <Link to="/contacts/edit" className="btn-label fixed"><img src={plusImg} alt="" className="inline-img"/>Add Contact</Link>
                </div>
               {this.state.conatcts && <ContactList conatcts={this.state.conatcts} />}
            </main>
        )
    }
}

export default ContactPage
