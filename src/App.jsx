
import { BrowserRouter as Router } from 'react-router-dom'; 
import { AppRoutes } from '../routes';
import { GlobalStyle } from './AppStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  );
};

export default App;
