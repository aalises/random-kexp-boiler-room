import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main'

import './index.css'
import 'tachyons/css/tachyons.min.css'

ReactDOM.render(<Main />, document.getElementById('root'));

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
