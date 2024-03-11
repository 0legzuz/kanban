
import { BrowserRouter as Router } from 'react-router-dom'; 

import { GlobalStyle } from './AppStyles';
import { AppRoutes } from '../routes';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  );
};

export default App;
