import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './header.tsx'

describe('Header', () => {
	test('tests Header has expected texts', () => {
		render(
			<Header />
		)

		expect(screen.getByText('The Sudoku Game')).toBeInTheDocument()
		expect(screen.getByText('Log out')).toBeInTheDocument()
	})	
})
