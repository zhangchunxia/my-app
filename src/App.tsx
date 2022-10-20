import './App.module.less';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PrimaryLayOut from './layouts/primaryLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrimaryLayOut />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
