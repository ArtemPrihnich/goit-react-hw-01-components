import { TableBodyData, TableBodyRow } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'

export default function TransactionHistoryItem({ transactions }) {
    return (
        <>
            {transactions.map(transaction => {
                return (<TableBodyRow transaction={transaction} key={transaction.id}>
                    <TableBodyData>{transaction.type}</TableBodyData>
                    <TableBodyData>{transaction.amount}</TableBodyData>
                    <TableBodyData>{transaction.currency}</TableBodyData>
                </TableBodyRow>)
            })}
        </>
    )
}

TransactionHistoryItem.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })),
}