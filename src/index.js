import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const title = 'Caculator';

ReactDOM.render(
<App/>,
  document.getElementById('app')
);

module.hot.accept();
