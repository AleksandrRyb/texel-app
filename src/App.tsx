import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { ThemeProvider } from '@hoc/theme-provider';
import Welcome from '@components/welcome/welcome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  );
}

export default App;
