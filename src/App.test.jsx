import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './AuthContext';

test('renders Healthcare made easy slogan', () => {
  window.history.pushState({}, 'Home', '/Capstone-Project/');
  render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  const sloganElement = screen.getByText(/Healthcare made easy\./i);
  expect(sloganElement).toBeInTheDocument();
});
