import React from 'react'
import classes from './styles.module.css'

const button = React.memo((props)=>{
    return(
        <div className={[classes.Container, classes[props.theme]].join(" ")}>
            <button>
                {props.label}
            </button>
        </div>
    )
})
export default button