import React from 'react'
import classes from './styles.module.css'
import Logo from '../../assets/desktop/logo.svg'
import Icon from '../../assets/mobile/icon-hamburger.svg'
import Close from '../../assets/mobile/icon-cross.svg'
import {Button} from '../../components'

class Header extends React.Component{
    state={
        menu: window.screen.width<=720?false:true
    }
    handleResize=()=>{
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
            this.setState({
                menu: window.screen.width<=720?false:true
            })
        },100)
    }
    componentDidMount(){
        window.addEventListener("resize",this.handleResize)
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize)
    }
    toggleMenu=()=>{
        this.setState({
            menu: !this.state.menu
        })
    }
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Logo}>
                    <img src={Logo}/>
                </div>
                <div className={classes.Icon} 
                    onClick={this.toggleMenu}
                >
                    {this.state.menu?
                        <img src={Close}/>
                        :
                        <img src={Icon}/>
                    }
                    
                </div>
                <div style={{display: this.state.menu?"block":"none"}}>
                    <div className={classes.Navigation}>
                        <div className={classes.Links}>
                            <ul>
                                <li>About</li>
                                <li>Service</li>
                                <li>Projects</li>
                            </ul>
                        </div>
                        <div className={classes.Btn}>
                            <Button
                                theme="btn2"
                                label="Schedule a call"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header