// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import styled, { css } from 'styled-components'
import { Logo, LinkStyle, LinkStyle2, Textfield, SearchIcon, Label, MenuItem } from 'components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom'
import auth from '../../../auth'

const Wrapper = styled.div`
    background: ${props => props.color};
    position: fixed;
    top: 0;
    width: calc(100vw - 15px);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`
const WrapperSide = styled.div`
    width: 15vw;
    display: flex;

`

const WrapperInner = styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
`

const Div = styled.div`
    margin: ${props => props.margin};
`

const Block = styled.a`
    width: 100%;
    height: 60px;
    /* background-color: #780000; */
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor:pointer;
        background-color: rgba(32, 32, 32, 0.5);
    }
`

class Topbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search:'',
            open: false,
        };
    }
    
    Search = e => {
        location.reload();
        // this.props.history.push({pathname: '/search/service', search: "?keyword=" + this.state.search})
    }

    changeSearch = e => {
        this.setState({search : e.target.value})
    }

    onLogout = e => {
        auth.logout()
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        var username = auth.isLoggedIn() ? auth.getUser().username : '';
        return(
            <MuiThemeProvider>
          <Wrapper color={this.props.color}>
                <WrapperSide>
                    <Div margin="4.5px 5px 0 22px">
                        <LinkStyle to= "/" style={{opacity: "1"}}> <Logo color="#F9FAFC" width="91.5px" height="39px"/> </LinkStyle>
                    </Div>
                </WrapperSide>
                <WrapperInner>
                    <Div>
                        <Textfield onChange={this.changeSearch} placeholder="อยากฝึกฝนร่างกายเกี่ยวกับ... / อยากฝึกกับ..." width="45vw" height="32px" color="#F9FAFC"/>
                    </Div>
                    <Link onClick={this.Search} to= {'/search/service?keyword=' + this.state.search} style={{textDecoration: "none"}}>
                        <SearchIcon opacity="1" color="#F9FAFC"/>
                    </Link>
                    {auth.isLoggedIn() && auth.isTrainer() && <Div>
                        <LinkStyle to="/createservice" size="30px" style={{color: "#FFF", opacity: "1", marginLeft: "32px"}}>สร้างบริการ</LinkStyle>
                    </Div>}
                </WrapperInner>
                <WrapperSide style={{justifyContent: "center", borderLeft: "1px solid #F9FAFC"}}>
                    {auth.isLoggedIn() ? 
                    <Block onClick={this.handleToggle}>
                        <Label size="16px" weight="bolder" color= "#F9FAFC">แถบเมนูหลัก</Label>
                    </Block>
                    :
                    <Block>
                        <LinkStyle to="/login" size="30px" style={{color: "#FFF", opacity: "1"}}>เข้าสู่ระบบ</LinkStyle>
                    </Block>
                    }
                    <Drawer 
                        docked={false} 
                        width={350} 
                        openSecondary={true} 
                        open={this.state.open} 
                        onRequestChange={(open) => this.setState({open})} 
                        containerStyle={{backgroundColor: "rgba(249, 250, 252, 0.8)", display: "flex", flexDirection: "column"}}
                        overlayStyle={{backgroundColor: "rgba(32, 32, 32, 0.9)"}}

                    >
                        <Div style={{display: "flex", alignItems: "center", height: "100px"}}>
                            <a onClick={this.handleToggle}><Label style={{margin: "auto 16px auto 16px"}} hover colorhover={this.props.color} size="32px" weight="bold" color="#a9a9a9"> X </Label></a>
                            <Label size="16px" weight="bolder" color= "#a9a9a9">แถบเมนูหลัก</Label>
                        </Div>
                        <LinkStyle2 color="rgba(32, 32, 32, 0.8)" to={"/users/" + username}>
                            <a onClick={this.handleToggle}><MenuItem text="ภาพรวมของคุณ"/></a>
                        </LinkStyle2>
                        <LinkStyle2 color="rgba(32, 32, 32, 0.8)" to="/edit">
                            <a onClick={this.handleToggle}><MenuItem text="แก้ไขข้อมูลส่วนตัว"/></a>
                        </LinkStyle2>
                        <LinkStyle2 color="rgba(32, 32, 32, 0.8)" to="/listofservices">
                            <a onClick={this.handleToggle}><MenuItem text="รายการบริการ"/></a>
                        </LinkStyle2>
                        <Div style={{height:"100%", display:"flex", flexDirection: "column", justifyContent: "flex-end"}} margin="0">
                            <a onClick={this.handleToggle}><LinkStyle2 onClick={auth.logout} color="rgba(32, 32, 32, 0.8)" to="/">
                                <MenuItem text="ออกจากระบบ" linkto="/listofservices"/>
                            </LinkStyle2></a>
                        </Div>
                    </Drawer>
                    
                </WrapperSide>
                
          </Wrapper>
          </MuiThemeProvider>
        )
    }
}


export default Topbar
