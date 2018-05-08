import React from 'react'
import {shallow} from 'enzyme'
import {mount} from 'enzyme'

import TicTacToe, {Square} from './TicTacToe'

describe('tictactoe', () => {
    it('', () => {
        const wrapper = shallow(<TicTacToe/>)
        const squares = wrapper.find(Square)
        expect(squares).toHaveLength(9)
    })
})

describe('tictactoe', () => {
    it('should change square value on click', () => {
        const wrapper = mount(<TicTacToe/>)
        const square = wrapper.find(Square).at(0)
        square.find('button').simulate('click')
        wrapper.update()
        expect(square.text()).toBe('X')
    })
})



describe('tictactoe', () => {
    it('should flipp square value on click', () => {
        const wrapper = mount(<TicTacToe/>)
        const firstSquare = wrapper.find(Square).at(0)
        firstSquare.find('button').simulate('click')
        wrapper.update()

        const secondSquare = wrapper.find(Square).at(1)
        secondSquare.find('button').simulate('click')
        wrapper.update()

        expect(secondSquare.text()).toBe('O')
    })
})

