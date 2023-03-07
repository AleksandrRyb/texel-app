import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { ThemeProvider } from '@hoc/theme-provider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>Hello World</div>
    </ThemeProvider>
  );
};

export default App;
