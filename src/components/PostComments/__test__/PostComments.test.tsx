import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from '..'

describe('Teste de inserção de comentários', () => {
    test('Deve inserir dois comentários na lista', () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');

    fireEvent.change(input, { target: { value: 'Comentário 1' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Comentário 2' } });
    fireEvent.click(button);

    const comments = screen.getAllByTestId('comment-item');
    expect(comments).toHaveLength(2);
    expect(comments[0].textContent).toBe('Comentário 1');
    expect(comments[1].textContent).toBe('Comentário 2');
    });
});
