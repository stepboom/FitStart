import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Textfeild = styled.input`
    border: 1px solid #C4C3C3;
    border-radius: 6px;

    padding: 2px 16px 4px 16px;
    background-color: #F9FAFC;

    font-family: ${font('primary')};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 16px;
    color: #202020;
    
    outline: none;

    &::placeholder {
        color: rgba(84, 84, 84, 0.2);
    }

    &:focus {
        border: 2px solid #F05939;
        box-sizing: border-box;
        box-shadow: 0px 0px 4px #F05939;
        border-radius: 6px;
    }
`

export default Textfeild;

