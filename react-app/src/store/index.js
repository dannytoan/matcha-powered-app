import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import productsReducer from './products';
import reviewsReducer from './reviews';
import shoppingBagReducer from './shoppingBag';
import orderHistoryReducer from './orderHistory';
import orderItemReducer from './orderItems';

const rootReducer = combineReducers({
  session,
  products: productsReducer,
  reviews: reviewsReducer,
  shoppingBag: shoppingBagReducer,
  orderHistory: orderHistoryReducer,
  orderItems: orderItemReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
