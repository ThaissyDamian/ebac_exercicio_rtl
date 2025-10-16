import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste <App />', () => {
    it('Deve renderizar corretamente', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });
})