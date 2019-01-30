import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap'
import { increaseCounter, decreastCounter, reset } from '../redux/actions/counterButtonActions'

class CounterButton extends Component {

    render() {

        return (

            
                <ButtonGroup>
                    <Button color="primary" onClick={this.props.increaseCounter}>+1</Button>
                    <Button color="warning" onClick={this.props.reset}>reset</Button>
                    <Button color="danger" onClick={this.props.decreastCounter}>-1</Button>
                </ButtonGroup>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreastCounter: () => dispatch(decreastCounter()),
        reset: () => dispatch(reset())
    }
}

export default connect(null, mapDispatchToProps)(CounterButton);