import React from 'react'
import Button from '../../atoms/Button/Button'

const getButtons = [
    {
        id: 1,
        symbol: 'AC'
    },
    {
        id: 2,
        symbol: '+/-'
    },
    {
        id: 3,
        symbol: '%'
    },
    {
        id: 4,
        symbol: '/'
    },
    {
        id: 5,
        symbol: '7'
    },
    {
        id: 6,
        symbol: '8'
    },
    {
        id: 7,
        symbol: '9'
    },
    {
        id: 8,
        symbol: 'x'
    },
    {
        id: 9,
        symbol: '4'
    },
    {
        id: 10,
        symbol: '5'
    },
    {
        id: 11,
        symbol: '6'
    },
    {
        id: 12,
        symbol: '-'
    },
    {
        id: 13,
        symbol: '1'
    },
    {
        id: 14,
        symbol: '2'
    },
    {
        id: 15,
        symbol: '3'
    },
    {
        id: 16,
        symbol: '+'
    },
    {
        id: 17,
        symbol: '0'
    },
    {
        id: 18,
        symbol: '.'
    },
    {
        id: 19,
        symbol: '='
    }
]

// class Buttons extends React.Component {
//     render() {
//         return this.state.getButtons.map((button) => (
//             <Button key={button.id} symbolProp={button} onClick={this.handleClick} value={this.state.symbol}/>
//         ))
//     }
// }

const Buttons = () => {
    
    // const [buttonItem, setButtonItem] = useState(getButtons)

    return getButtons.map((item) => {
        return <Button key={item.id} buttonProp={item} />
        console.log(item.symbol)
    })
}


export default Buttons