import { render, screen } from '@testing-library/react'

import Header from '.'

describe('Header component', () => {
    it('should render correctly', () => {
        render(<Header />)
        expect(screen.getByText('Meus contatos')).toBeInTheDocument()
        expect(true).toBeTruthy()
    })
})
