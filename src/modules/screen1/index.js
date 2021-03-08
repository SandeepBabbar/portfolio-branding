import React from 'react'
import classes from './styles.module.css'
import {Button} from '../../components'
import Image from '../../assets/mobile/image-hero.jpg'

class Screen1 extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Image}>
                    <img src={Image}/>
                </div>
                <div className={classes.Content}>
                    <h1> Branding &amp; <br/> website design agency</h1>
                    <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                    <Button
                        theme="btn1"
                        label="Learn More"
                    />
                </div>
            </div>
        )
    }
}

export default Screen1