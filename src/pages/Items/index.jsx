import React from 'react'

import { connect } from 'react-redux'

import * as actions from './behaviours'

export class Items extends React.Component {
    componentDidMount() {
        this.props.getItems()
    }
    render () {
        return (
            <div>
                <h1>Items page</h1>
                <hr/>
                {
                    this.props.list && this.props.list.map(i => (
                        <div key={i.get('id')}>{i.get('label')}</div>
                    ))
                }
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        list: state.items.get('list')
    }
}

export default connect(mapStateToProps, actions)(Items)