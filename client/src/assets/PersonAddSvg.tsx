import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg  viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5V2H17V5H14V7H17V10H19V7H22V5H19ZM8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM14.39 10.56C12.71 9.7 10.53 9 8 9C5.47 9 3.29 9.7 1.61 10.56C0.61 11.07 0 12.1 0 13.22V16H16V13.22C16 12.1 15.39 11.07 14.39 10.56ZM14 14H2V13.22C2 12.84 2.2 12.5 2.52 12.34C3.71 11.73 5.63 11 8 11C10.37 11 12.29 11.73 13.48 12.34C13.8 12.5 14 12.84 14 13.22V14Z" />
</svg>`

interface Props {
    strokeColor: string
}

class PersonAddSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.strokeColor} />
        )
    }
}

export default PersonAddSvg;