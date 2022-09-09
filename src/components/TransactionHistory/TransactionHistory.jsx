import PropTypes from 'prop-types'
import TransactionHistoryItem from './TransactionHistoryItem'
import transactions from '../data/transactions.json'

export default function TransactionHistory() {
    return (
        <TransactionHistoryItem transactions={transactions} />
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })),
}