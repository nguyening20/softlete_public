import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
<path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02V6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0V0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19V3.19Z"/>
</svg>`

interface Props {
    fillColor: string;
}

class PencilSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.fillColor} />
        )
    }
}

export default PencilSvg