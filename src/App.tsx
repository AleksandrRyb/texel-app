import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { ThemeProvider } from './hoc/theme-provider';
import FormPage from './pages/form-page';
import './App.css';

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <FormPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
