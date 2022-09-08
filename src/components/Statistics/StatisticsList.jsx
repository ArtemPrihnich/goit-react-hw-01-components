import { List, Item, Lable, Percentage } from './Statistics.styled'

export default function StatisticsList({ stats }) {
    return (
        <List>
            {stats.map(data => (
                <Item key={data.id}>
                    <Lable>{data.label}</Lable>
                    <Percentage>{data.percentage}%</Percentage>
                </Item>
            ))}
        </List>
    )
}
