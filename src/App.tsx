import { ThemeProvider } from '@hoc/theme-provider';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>Hello World</div>
    </ThemeProvider>
  );
};

export default App;
