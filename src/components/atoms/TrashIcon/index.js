import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
&:hover {
  cursor:pointer;
  fill: ${props => props.color};
  fill-opacity:1;
}
`

export default class TrashIcon extends React.Component {

    constructor(props) {
        super(props)
    }

  render() {
    return (
        <SVG fill="#202020" fillOpacity="0.2" color={this.props.color} width={this.props.width} height={this.props.height} viewBox="0 0 32 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-6089 -2815)">
        <g id="Vector">
        <use href="#path0_fill" transform="translate(6091.31 2825.47)" />
        </g>
        <g id="Vector">
        <use href="#path1_fill" transform="translate(6089 2815)"/>
        </g>
        </g>
        <defs>
        <path id="path0_fill" d="M 1.44049 30.4556C 1.48895 31.6146 2.44122 32.5292 3.59929 32.5292L 23.7705 32.5292C 24.9286 32.5292 25.8809 31.6146 25.9293 30.4556L 27.3698 2.44151e-07L -7.69828e-08 2.44151e-07L 1.44049 30.4556ZM 18.2479 7.56463C 18.2479 7.07935 18.6408 6.68575 19.1255 6.68575L 20.5292 6.68575C 21.0137 6.68575 21.4069 7.07924 21.4069 7.56463L 21.4069 24.9646C 21.4069 25.45 21.014 25.8435 20.5292 25.8435L 19.1255 25.8435C 18.641 25.8435 18.2479 25.4502 18.2479 24.9646L 18.2479 7.56463ZM 12.1055 7.56463C 12.1055 7.07935 12.4984 6.68575 12.9831 6.68575L 14.3868 6.68575C 14.8712 6.68575 15.2643 7.07924 15.2643 7.56463L 15.2643 24.9646C 15.2643 25.45 14.8715 25.8435 14.3868 25.8435L 12.9831 25.8435C 12.4985 25.8435 12.1055 25.4502 12.1055 24.9646L 12.1055 7.56463ZM 5.96294 7.56463C 5.96294 7.07935 6.35583 6.68575 6.84048 6.68575L 8.24429 6.68575C 8.72884 6.68575 9.12183 7.07924 9.12183 7.56463L 9.12183 24.9646C 9.12183 25.45 8.72894 25.8435 8.24429 25.8435L 6.84048 25.8435C 6.35594 25.8435 5.96294 25.4502 5.96294 24.9646L 5.96294 7.56463Z"/>
        <path id="path1_fill" d="M 30.6441 2.21514L 21.3384 2.21514L 21.3384 0.453177C 21.3384 0.202956 21.1359 0 20.886 0L 11.114 0C 10.8642 0 10.6617 0.202956 10.6617 0.453177L 10.6617 2.21504L 1.35588 2.21504C 0.606994 2.21504 -1.21889e-07 2.82306 -1.21889e-07 3.5731L -1.21889e-07 7.83927L 32 7.83927L 32 3.5732C 32 2.82317 31.393 2.21514 30.6441 2.21514Z"/>
        </defs>
        </SVG>
        
        
    )
  }

}