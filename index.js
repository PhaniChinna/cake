const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_CERAM = "BUY_CERAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyCream() {
  return {
    type: BUY_CERAM,
    info: "first redux action",
  };
}

const initialCakeState = {
  numOfCakes: 30,
};

const initialCreamState = {
  numOfCreams: 20,
};

const reducerCake = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      break;
    default:
      return state;
      break;
  }
};

const reducerCream = (state = initialCreamState, action) => {
  switch (action.type) {
    case BUY_CERAM:
      return {
        ...state,
        numOfCreams: state.numOfCreams - 1,
      };
      break;
    default:
      return state;
      break;
  }
};

const rootReducers = combineReducers({
  cake: reducerCake,
  iceCream: reducerCream,
});

const Store = createStore(rootReducers, applyMiddleware(logger));

console.log("Initial State", Store.getState());
const unSubscribe = Store.subscribe(() => {});

Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyCake());

Store.dispatch(buyCream());
Store.dispatch(buyCream());
Store.dispatch(buyCream());

unSubscribe();
