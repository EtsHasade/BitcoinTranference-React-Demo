
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons for misterBitcoin/logo4.svg';
import './AppHeader.scss'

class AppHeader extends Component {

    render() {
        return (
            <header className="app-header flex wrap space-between align-center">
                <div className="flex wrap space-between align-center">

                <NavLink className="mg0" to="/" ><img src={logo} className="logo mg0" alt="logo" /></NavLink>
                <h1 className="mg0">Bitcoin Transference</h1>
                </div>
                <nav>
                    <NavLink activeClassName="active" to="/" >Home</NavLink>
                    <NavLink activeClassName="active" to="/contacts" >Contacts</NavLink>
                </nav>
            </header>
        )
    }
}

export default AppHeader
