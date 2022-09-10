import { Title } from "./Statistics.styled"
import PropTypes from 'prop-types'

export default function StatisticsTitle({ title }) {
    return (
        title && <Title>{title}</Title>
    )
}

StatisticsTitle.propTypes = {
    title: PropTypes.string.isRequired,
}