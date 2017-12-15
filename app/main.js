import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import coreReducer from './reducers';
import App from './containers/App';
import {getInitialState} from './reducers'
import Details from "./components/Details";

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
	link: new HttpLink({
		uri: "http://localhost:9001/graphql",
		credentials: 'same-origin',
	}),
	cache: new InMemoryCache(),
	queryDeduplication: true
})

const loggerMiddleware = createLogger({
	stateTransformer: state => state.toJS()
});

//get config from server
const config = window.INITIAL_CONFIG
const serverState = {
	api: config.apiEndpoint
}
delete window.INITIAL_CONFIG

const store = createStore(coreReducer, getInitialState(serverState), applyMiddleware(thunk, loggerMiddleware))


ReactDOM.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Route exact path="/" component={App} />
					<Route exact path="/details/:id" component={Details} />
				</div>
			</Router>
		</ApolloProvider>
	</Provider>,
	document.getElementById('root'));
