import React, { Component } from 'react'
import { connect } from 'react-redux'

import './counter.css'
import CounterButton from './counterButton'


class Counter extends Component {

    render() {

        return (

            <div>
                <div className="resultAndButton">
                    <h3 id="result" > <b> {this.props.counter} </b></h3>
                    <br />
                    <CounterButton />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

export default connect(mapStateToProps)(Counter);