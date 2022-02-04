import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
<path d="M14 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V4L14 0ZM16 16H2V2H13.17L16 4.83V16ZM9 9C7.34 9 6 10.34 6 12C6 13.66 7.34 15 9 15C10.66 15 12 13.66 12 12C12 10.34 10.66 9 9 9ZM3 3H12V7H3V3Z" />
</svg>`

interface Props {
    strokeColor: string;
}

class SaveSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.strokeColor} />
        )
    }
}

export default SaveSvg