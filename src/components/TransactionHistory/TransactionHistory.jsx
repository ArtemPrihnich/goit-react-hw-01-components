
import TransactionHistoryItem from './TransactionHistoryItem'
import transactions from '../data/transactions.json'
import { Table, TableBody, TableHead, TableHeader, TableHeadRow } from "./TransactionHistory.styled"

export default function TransactionHistory() {
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
                < TransactionHistoryItem transactions={transactions} />
            </TableBody>
        </Table>
    )
}
