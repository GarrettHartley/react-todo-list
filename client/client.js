import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import rootRoute from '../routes';

render(
		<Router history={browserHistory}
		routes={rootRoute}>
		</Router>,
		document.getElementById('app')
)