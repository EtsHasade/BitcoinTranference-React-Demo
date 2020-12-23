
import React, { Component } from 'react'
import { contactService } from '../../services/contactService';
import uploadImg from '../../assets/icons for misterBitcoin/upload.svg'
import deleteImg from '../../assets/icons for misterBitcoin/delete.svg'

import './ContactEdit.scss'

class ContactEdit extends Component {

    state = {
        contact: null
    }
    async componentDidMount() {
        console.log('edit', this.props);
        const id = this.props.match.params.id
        const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
        this.setState({ contact }, () => {
            console.log("🚀 ~ file: ContactDetails.jsx ~ line 15 ~ ContactDetails ~ componentDidMount ~ contact", this.state)
        })

    }

    handelChange = ({ target }) => {
        const { name: filde, value } = target
        this.setState(prevState => ({ contact: { ...prevState.contact, [filde]: value } }), () => {
            console.log("🚀 ~ file: ContactEdit.jsx ~ line 16 ~ ContactEdit ~ this.setState ~ this.state", this.state)
        })
    }
    uploadImg = (ev) => {
        ((ev, onImageLoadFunc) => {
            const reader = new FileReader();
            reader.onload = function (event) {
                // var img = new Image();
                //  img.src = event.target.result;
                onImageLoadFunc(reader)
                console.log("🚀 ~ file: ContactEdit.jsx ~ line 35 ~ ContactEdit ~ reader", reader.result)
            }
            reader.readAsDataURL(ev.target.files[0]);

        })(ev, (reader) => {
            this.setState(prevState => ({ contact: { ...prevState.contact, imgUrl: reader.result } }), () => {
                console.log("🚀 ~ file: ContactEdit.jsx ~ line 38 ~ ContactEdit ~ uploadImg ~ this.state", this.state)
            })
        })

    }

    saveContact = async (ev) => {
        ev.preventDefault()
        console.log(this.state.contact);

        await contactService.saveContact({ ...this.state.contact })
        this.props.history.goBack()
    }
    removeContact = () => {
        contactService.removeContact(this.state.contact._id)
        this.props.history.goBack()
    }

    onBack = (ev) => {
        ev.preventDefault()
        this.props.history.goBack()
    }

    render() {
        if (!this.state.contact) return <div></div>
        const { name, email, phone, imgUrl, _id } = this.state.contact
        return (
            <form className="contact-edit simple-form" onSubmit={this.saveContact}>
                <h3>Edit Contact</h3>
                <div className="flex wrap">
                    <img src={imgUrl} alt="" className="avatar" />
                    <label className="btn-label hover-pointer flex center text-center">
                        <img src={uploadImg} alt="" className="inline-img" />
                    Upload image
                    <input type="file" name="imgUrl" onChange={this.uploadImg} hidden />
                    </label>
                </div>
                <label>
                    Conatact Name
                    <input type="text" name="name" value={name} onChange={this.handelChange} />
                </label>
                <label>
                    Conatact Email
                    <input type="text" name="email" value={email} onChange={this.handelChange} />
                </label>
                <label>
                    Conatact Phone
                    <input type="text" name="phone" value={phone} onChange={this.handelChange} />
                </label>
                <div className="flex space-between">
                    <button className="btn-label mr10" onClick={this.onBack}>Back</button>
                    {_id && <button onClick={this.removeContact} className="btn-label"><img src={deleteImg} alt="" className="inline-img" />Delete contact</button>}
                    <button className="btn-label">Save</button>
                </div>
            </form >
        )
    }
}

export default ContactEdit
