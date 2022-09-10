import { List, Item, Lable, Percentage } from './Statistics.styled'
import PropTypes from 'prop-types'

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

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
}