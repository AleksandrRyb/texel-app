import { ThemeProvider } from '@hoc/theme-provider';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import './App.css';

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div>Hello World</div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
