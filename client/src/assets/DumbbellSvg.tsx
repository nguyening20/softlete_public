import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M18.57 12.86L20 11.43L18.57 10L15 13.57L6.43 5L10 1.43L8.57 0L7.14 1.43L5.71 0L3.57 2.14L2.14 0.71L0.71 2.14L2.14 3.57L0 5.71L1.43 7.14L0 8.57L1.43 10L5 6.43L13.57 15L10 18.57L11.43 20L12.86 18.57L14.29 20L16.43 17.86L17.86 19.29L19.29 17.86L17.86 16.43L20 14.29L18.57 12.86Z" />
</svg>`

interface Props {
    fillColor: string;
}

class DumbbellSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.fillColor} />
        )
    }
}

export default DumbbellSvg