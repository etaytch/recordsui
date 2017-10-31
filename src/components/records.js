import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/index';

import axios from 'axios';
class Records extends Component {
    
    componentDidMount() {
        this.props.fetchRecords();
    }

    renderRecords() {        
        return _.map(this.props.records, record => {
            return (
                <li className="list-group-item" key={record._id}>
                {record.record} 
                </li>
            );
        });
    }
         
    render() {
            return (
                <div className="title-records">
                    <h2>Records:</h2>
                {this.renderRecords()}
                </div>
            )
    }
}

function mapStateToProps({ records }) {
    return { records }; 
}

export default connect(mapStateToProps, { fetchRecords })(Records);
