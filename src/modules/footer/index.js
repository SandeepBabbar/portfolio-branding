import React from 'react'
import classes from './styles.module.css'
import {Button} from '../../components'
import Tild from '../../assets/desktop/bg-pattern-wave-red.svg'

class Footer extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Tild}>
                    <img src={Tild}/>
                </div>
                <h2>Let's build something great together.</h2>
                <Button
                    theme="btn1"
                    label="Schedule a Call"
                />
            </div>
        )
    }
}

export default Footer