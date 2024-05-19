import "./App.css";
import { Provider } from "react-redux";
import StoreData from "./redux/store";
import CakeComponent from "./components/CakeContainer";

function App() {
  return (
    <Provider store={StoreData}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
