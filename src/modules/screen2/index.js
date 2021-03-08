import React from 'react'
import classes from './styles.module.css'
import Image from '../../assets/desktop/image-strategic.jpg'
import ImageTablet from '../../assets/tablet/image-strategic.jpg'
import ImagePhone from '../../assets/mobile/image-strategic.jpg'
import Tild from '../../assets/desktop/bg-pattern-wave-red.svg'
import {Button} from '../../components'

class Screen2 extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Image}>
                    <picture>
                        <source media="(max-width: 720px)" srcset={ImagePhone}/>
                        <source media="(max-width: 1024px)" srcset={ImageTablet}/>
                        <img src={Image}/>
                    </picture>
                </div>
                <div className={classes.Content}>
                    <div className={classes.Tild}>
                        <img src={Tild}/>
                    </div>
                    <h1><span className={classes.Highlight}>Design</span> is strategic.</h1>
                    <p>
                        “A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”
                    </p>
                    <Button
                        theme="btn3"
                        label="Schedule a Call"
                    />
                </div>
            </div>
        )
    }
}

export default Screen2