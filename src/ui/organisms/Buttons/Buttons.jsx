import React from 'react'
import Button from '../../atoms/Button/Button'

const getButtons = [
	{
        id: 1,
        symbol: 'AC',
        operator: true
	},
	{
        id: 2,
        symbol: '+/-',
        operator: true
	},
	{
        id: 3,
        symbol: '%',
        operator: true
	},
	{
        id: 4,
        symbol: '/',
        operator: true
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
        symbol: 'x',
        operator: true
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
        symbol: '-',
        operator: true
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
        symbol: '+',
        operator: true
	},
	{
        id: 17,
        symbol: '0'
	},
	{
        id: 18,
        symbol: '.',
        operator: true
	},
	{
		id: 19,
        symbol: '=',
        operator: true
	}
]

const Buttons = props => {
	return getButtons.map((item) => {
		return <Button key={item.id} buttonProp={item} clickButton={props.clickButton}/>
	})
}

export default Buttons