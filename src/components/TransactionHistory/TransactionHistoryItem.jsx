import { Table, TableBody, TableBodyData, TableBodyRow, TableHead, TableHeader, TableHeadRow } from "./TransactionHistory.styled"

export default function TransactionHistoryItem({ transactions }) {
    return (
        <Table>
            <TableHead>
                <TableHeadRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableHeadRow>
            </TableHead>

            <TableBody>
                {transactions.map(transaction => {
                    return (<TableBodyRow transaction={transaction} key={transaction.id}>
                        <TableBodyData>{transaction.type}</TableBodyData>
                        <TableBodyData>{transaction.amount}</TableBodyData>
                        <TableBodyData>{transaction.currency}</TableBodyData>
                    </TableBodyRow>)
                })}
            </TableBody>
        </Table>
    )
}