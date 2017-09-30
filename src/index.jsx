import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app/App.jsx';

import './index.scss';

ReactDOM.render(
		<AppContainer>
	      <App />
	    </AppContainer>, 
	    document.getElementById('main')
    );

if (module.hot) {
  // Renders App every time a change in code happens.
  module.hot.accept('./components/app/App.jsx', renderApp);
}