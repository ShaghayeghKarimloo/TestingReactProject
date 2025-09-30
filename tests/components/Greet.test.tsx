import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';



describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name = "Shaghayegh" />)

        const headings = screen.getByRole('heading');
        expect(headings).toBeInTheDocument()
        expect(headings).toHaveTextContent(/shaghayegh/i)
        
    });

        it('should render login button when name is not provided', () => {
        render(<Greet />)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
        
    });
})