import './App.module.less';

import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PrimaryLayOut from './layouts/primaryLayout';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PrimaryLayOut />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
