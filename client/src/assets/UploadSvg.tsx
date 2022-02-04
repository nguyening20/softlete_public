import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `<svg width="988" height="720" viewBox="0 0 988 720" xmlns="http://www.w3.org/2000/svg">
<path d="M771.989 719.447H612.302H569.301H560.015V505.252H630.067C647.832 505.252 658.33 485.064 647.832 470.529L511.564 281.973C502.883 269.86 484.915 269.86 476.235 281.973L339.966 470.529C329.468 485.064 339.764 505.252 357.731 505.252H427.783V719.447H418.497H375.497H190.373C84.3858 713.592 0 614.469 0 507.069C0 432.979 40.1741 368.378 99.7287 333.453C94.2779 318.715 91.4516 302.969 91.4516 286.415C91.4516 210.71 152.621 149.54 228.326 149.54C244.678 149.54 260.425 152.366 275.162 157.817C318.97 64.9524 413.45 0.552734 523.273 0.552734C665.396 0.754614 782.486 109.568 795.81 248.259C905.027 267.034 988 368.176 988 482.642C988 604.981 892.713 710.968 771.989 719.447Z" />
</svg>`

interface Props {
    fillColor: string
}

class UploadSvg extends React.Component<Props, {}> {
    render() {
        return (
            <SvgXml xml={svg} width='100%' height='100%' fill={this.props.fillColor} />
        )
    }
}

export default UploadSvg