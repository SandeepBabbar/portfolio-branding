import React from 'react'
import classes from './styles.module.css'
import Image1 from '../../assets/desktop/image-slide-1.jpg'
import Image1Tablet from '../../assets/tablet/image-slide-1.jpg'
import Image1Mobile from '../../assets/mobile/image-slide-1.jpg'
import Image2 from '../../assets/desktop/image-slide-2.jpg'
import Image2Tablet from '../../assets/tablet/image-slide-2.jpg'
import Image2Mobile from '../../assets/mobile/image-slide-2.jpg'
import Image3 from '../../assets/desktop/image-slide-3.jpg'
import Image3Tablet from '../../assets/tablet/image-slide-3.jpg'
import Image3Mobile from '../../assets/mobile/image-slide-3.jpg'
import Next from '../../assets/desktop/icon-arrow-next.svg'
import Previous from '../../assets/desktop/icon-arrow-previous.svg'
import Tild from '../../assets/desktop/bg-pattern-wavy-white.svg'

class Screen4 extends React.Component{
    state={
        counter:1
    }
    onPrevious=()=>{
        let counter=this.state.counter
        if(counter>1){
            counter -=1
        }
        this.setState({
            counter: counter
        })
    }
    onNext=()=>{
        let counter=this.state.counter
        if(counter<3){
            counter +=1
        }
        this.setState({
            counter: counter
        })
    }
    render(){
        let image, heading, caption, desc
        
        switch(this.state.counter){
            case 1: image= <picture>
                        <source media="(max-width: 720px)" srcset={Image1Mobile}/>
                        <source media="(max-width: 1300px)" srcset={Image1Tablet}/>
                        <img src={Image1}/>
                    </picture>
                    heading="Brand naming & guidelines"
                    caption="Lean Product Roadmap"
                    desc= "2019 Project"
                    break
            case 2: image=<picture>
                        <source media="(max-width: 720px)" srcset={Image2Mobile}/>
                        <source media="(max-width: 1300px)" srcset={Image2Tablet}/>
                        <img src={Image2}/>
                    </picture> 
                    heading="Brand identity & merchandise"
                    caption="New Majestic Hotel"
                    desc= "2018 Project"
                    break
            case 3: image=<picture>
                        <source media="(max-width: 720px)" srcset={Image3Mobile}/>
                        <source media="(max-width: 1300px)" srcset={Image3Tablet}/>
                        <img src={Image3}/>
                    </picture>
                    heading="Brand identity & web design"
                    caption="Crypto Dashboard"
                    desc= "2016 Project"
                    break
            default: image= <picture>
                        <source media="(max-width: 720px)" srcset={Image1Mobile}/>
                        <source media="(max-width: 1300px)" srcset={Image1Tablet}/>
                        <img src={Image1}/>
                    </picture>
                    heading="Brand naming & guidelines"
                    caption="Lean Product Roadmap"
                    desc= "2019 Project"
        }
        return(
            <div className={classes.Container}>
                <div className={classes.ControlContainer}>
                    <div className={classes.Control}>
                        <div className={classes.Heading}>
                            <h2>{heading}</h2>
                            <img src={Tild}/>
                        </div>
                        <div className={classes.Btn}>
                            <div className={classes.Previous}
                                onClick={this.onPrevious}
                            >
                                <img src={Previous}/>
                            </div>
                            <div className={classes.Next} 
                                onClick={this.onNext}
                            >
                                <img src={Next}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Image}>
                    <div className={classes.Shadow}/>
                    {image}
                    <div className={classes.Description}>
                        <h3>{caption}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Screen4