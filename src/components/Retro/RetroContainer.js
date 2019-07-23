import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRetro } from '../../actions/retro'
import Retro from './Retro';
import Loader from '../Loader/Loader';

class RetroContainer extends Component {
    id = this.props.match.params.id
    componentDidMount() {
        this.props.loadRetro(this.id)
    }
    render() {
        return (
            <div className='container'>
                {!this.props.retro &&
                    <Loader />
                }
                {(this.props.retro && this.props.users) &&
                    <div>
                        <div className='description'>
                            <p>{this.props.retro.description}</p>
                            {this.props.users.map(user => user.name + ' ')}
                        </div>
                    </div>
                }
                
                {this.props.cards &&
                    <Retro cards={this.props.cards} />}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const cards = () => {
        
    }
    return {
        retro: state.retro,
        cards: state.retro.cards,
        users: state.retro.users
    }
}
export default connect(mapStateToProps, { loadRetro })(RetroContainer)