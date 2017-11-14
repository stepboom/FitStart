// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import styled, { css } from 'styled-components'
import { font } from 'styled-theme'
import { Textfeild,Tooltip, ErrorIcon, CorrectIcon} from 'components'

const Warper = styled.div`
    margin: 0 8px 0 0;
`
const Select = styled.select`
    width: ${props => props.width};
    height: ${props => props.height};

    font-family: ${font('primary')};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    color: #202020;

    background-color: #F9FAFC;
    border: 1px solid #C4C3C3;
    box-sizing: border-box;
    border-radius: 6px;

    padding: 2px 16px 4px 16px;
    margin: 8px 0 0 0;

    outline: none;

     &:focus {
        width: ${props => props.width};
        height: ${props => props.height};

        border: 2px solid ${props => props.color};
        box-shadow: 0px 0px 4px ${props => props.color};
        border-radius: 6px; 
    }
`

const Option = styled.option`
    color: #545454;
`


class DropdownMenu extends React.Component {
    constructor(props) {
    super(props)
  }

    render() {
        return(
            <Warper>
                <Select width={this.props.width} height= {this.props.height}>
                    <Option value="ps">pleast select ...</Option>
                    {this.props.menu.map(item => (
                        <Option value="{item}">{item}</Option>
                    ))}
                </Select>
            </Warper>
        )
    }
}

export default DropdownMenu