import React from 'react'
import './HomePage.scss';
import { userService } from '../../services/userService.js'
import { bitcoinService } from '../../services/bitcoinService.js'
import { withRouter } from 'react-router-dom';

export default class _HomePage extends React.Component {
    state = {
        user: userService.getCurrUser(),
        bitcoinRate: 0,
    }
    async componentDidMount() {
        this.setState({ bitcoinRate: await bitcoinService.bitcoinRate() }, () => {
            console.log(this.state.bitcoinRate);
        })
    }

    render() {
        return (
            <main className="home-page flex wrap">
                 <div className="global-info-bar flex column text-center align-center wrap">
                    <h1>Hello {this.state.user.name}</h1>
                    <h3>Ease transfer Bitcoin to your contacts</h3>
                    <button className="mb10" onClick={()=>{this.props.history.push('/contacts')}}>Select a Bitcoin transfer contact</button>
                    
                    <h3>Your digital wallet</h3>
                    <h4>You have ₿{this.state.user.coins}</h4>
                    {this.state.bitcoinRate &&
                     <h4>Bitcoin rate: ${this.state.bitcoinRate.toLocaleString()}</h4>}
                  
                </div>
            </main>
        )
    }
}

export const HomePage = withRouter(_HomePage)
