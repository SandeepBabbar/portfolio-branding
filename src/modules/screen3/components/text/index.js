import React from 'react'
import classes from './styles.module.css'

const text = React.memo((props)=>{
    return(
        <div className={classes.Container}>
            <div className={classes.Number}>{props.number}</div>
            <h3 className={classes.Heading}>{props.heading}</h3>
            <div className={classes.Content}>{props.content}</div>
        </div>
    )
})

export default text
