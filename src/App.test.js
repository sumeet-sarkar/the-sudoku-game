import { render, screen } from '@testing-library/react';
import App from './App';
//import Header from './components/header.tsx'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

describe('App', () => {
	test('tests App is rendering', () => {
		const linkElement = render(
			<App />,
		);
		expect(linkElement).toBeTruthy();
  	});
	test('tests App has expected texts', () => {
		render(<App />);	
		expect(screen.getByText(/Your/)).toBeInTheDocument();
	});	
})


// describe('Header', () => {
// 	test('tests Header has expected texts', () => {
// 		render(
// 			<Header />
// 		)

// 		expect(screen.getByText('The Sudoku Game')).toBeInTheDocument()
// 		expect(screen.getByText('Log out')).toBeInTheDocument()
// 	})	
// })
