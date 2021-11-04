import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import { fetchStart, fetchSuccess, fetchError } from '../actions'

const Transactions = ({transactions, isFetching, error, dispatch}) => {
    useEffect(()=> {
        axios.get('https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/historical?start=2021-01-01&end=2021-11-03')
        .then(resp=>{dispatch(fetchSuccess(resp.data)); console.log(resp.data)})
        .catch(err => {console.log(err)})
    }, []);

    return (
        <div> Here are the numbers:  
            {transactions[0].low}, {transactions[0].high}
        </div>
    )
};

const mapStateToProps = state => {
    return({
        transactions: state.transactions,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps)(Transactions);