import PropTypes from 'prop-types'
import StatisticsTitle from './StatisticsTitle.jsx'
import StatisticsList from './StatisticsList.jsx'
import data from '../data/data.json'
import { Section } from './Statistics.styled.jsx'

export default function Statistics() {
    return (
        <Section>
            <StatisticsTitle />
            <StatisticsList stats={data} />
        </Section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        lable: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
}