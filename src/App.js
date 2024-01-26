import "./App.css";
import AgeGroupPriceList from "./Components/AgeGroupPriceList";

function App() {
  const getResult = (result) => {
    console.log(result);
  };
  return (
    <div className="App">
      <AgeGroupPriceList onChange={getResult} />
    </div>
  );
}

export default App;
