
import StatisticsTitle from './StatisticsTitle.jsx'
import StatisticsList from './StatisticsList.jsx'
import data from '../../data/data.json'
import { Section } from './Statistics.styled.jsx'

export default function Statistics() {
    return (
        <Section>
            <StatisticsTitle title="Upload stats" stats={data} />
            <StatisticsList stats={data} />
        </Section>
    )
}
