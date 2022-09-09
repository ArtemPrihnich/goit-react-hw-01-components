
export default function backgroundColorPicker() {
    return (
        (props => {
            switch (props.transaction.type) {
                case 'invoice':
                    return `${props.theme.colors.yellow}`;
                case 'payment':
                    return `${props.theme.colors.red}`;
                case 'withdrawal':
                    return `${props.theme.colors.pink}`;
                case 'deposit':
                    return `${props.theme.colors.green}`;
                default:
                    return `${props.theme.colors.lightgray}`;
            }
        }))
}