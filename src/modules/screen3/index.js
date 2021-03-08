import React from 'react'
import classes from './styles.module.css'
import {Text} from './components'

class Screen3 extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.SubContainer}>
                    <h2 className={classes.Heading}>
                        Our approach for creating a winning brand
                    </h2>
                </div>
                <div className={classes.Content}>
                    <Text
                        number="01"
                        heading="Brand Strategy"
                        content="Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key."
                    />
                    <Text
                        number="02"
                        heading="Brand Design"
                        content="Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively."
                    />
                    <Text
                        number="03"
                        heading="Web Design"
                        content="A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues."
                    />
                </div>
            </div>
        )
    }
}

export default Screen3