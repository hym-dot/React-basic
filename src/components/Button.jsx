import React from 'react'

// const Button = (props) => {
//     return (
//         <button style={{color:props.color}}>
//             {props.text}:
//             {props.color}
//         </button>
//     )
// }

const Button = ({text, color='gray',children=null}) => {

    const onClickButton = () => {
        console.log(text)
    }
    return (
        <button style={{color:color}} onClick={onClickButton}>
            {text.toUpperCase()}-
            {color}
            {children}
        </button>
        )

    }

export default Button