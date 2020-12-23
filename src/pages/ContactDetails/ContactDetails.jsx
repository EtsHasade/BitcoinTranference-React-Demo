
import React, { Component } from 'react'
import TransferFunds from '../../cmps/TransferFunds/index.js'
import Movement from '../../cmps/Movement/Movement.jsx'
import { contactService } from '../../services/contactService.js'
import { userService } from '../../services/userService.js'

import './ContactDetails.scss'

class ContactDetails extends Component {
    state = {
        contact: null,
        movements: []
    }
    componentDidMount() {
        this.loadContact()

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    movemenetsFromCurrUser = () => {
        if (!this.state.contact) return []
        console.log("🚀 ~ file: ContactDetails.jsx ~ line 26 ~ ContactDetails ~ getmovemenetsFromCurrUser ~ this.state.contact", this.state.contact)

        const user = userService.getCurrUser()
        console.log("🚀 ~ file: ContactDetails.getmovemenetsFromCurrUser ~ user", user)
        let movements = JSON.parse(JSON.stringify(user.moves.filter(move => move.to === this.state.contact._id))) || []

        movements = movements.map(move => {
            move.to = this.state.contact.name
            return move
        })
        this.setState({ movements }, () => {
            console.log(this.state.movements);
        })
    }

    loadContact = async () => {
        console.log('details', this.props);
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact }, () => {
            console.log("🚀 ~ file: ContactDetails.jsx ~ line 15 ~ ContactDetails ~ componentDidMount ~ contact", this.state)
            this.movemenetsFromCurrUser()
        })
    }

    onBack = () => {
        this.props.history.push('/contacts')
    }

    editContact = () => {
        this.props.history.push('/contacts/edit/' + this.state.contact._id)
    }

    recoredMove = (move) => {
        const user = userService.getCurrUser()
        user.moves.push(move)
        userService.updateUser(user)
        this.movemenetsFromCurrUser()
    }

    render() {
        if (!this.state.contact) return <div></div>
        return (
            <main className="conact-details flex column justify-start ">
                <div className="btns flex ">
                    <button className="btn-label mr10" onClick={this.onBack}>Back</button>
                    <button className="btn-label mr10" onClick={this.editContact}>Edit contsct</button>

                </div>
                <div className="flex center">
                    <img className="avatar" src={this.state.contact.imgUrl} alt="" />
                </div>
                <div className="flex center">
                    <h1 className="mg0">{this.state.contact.name}</h1>
                </div>
                <div className="flex wrap center mb10">
                    <h4 className="table-cell mg0 mr10">
                        Email: {this.state.contact.email}
                    </h4> |
                    <h4 className="table-cell mg0 ml10">
                       Phone: {this.state.contact.phone}
                    </h4>
                </div>
                <TransferFunds contact={this.state.contact} onUpdateUserMove={(move) => { this.recoredMove(move) }} />
                <Movement movements={this.state.movements} directionFrom={true} />

            </main>
        )
    }
}

export default ContactDetails
