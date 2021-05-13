import './App.css';
import ContainerFather from './Components/ContainerFather'

function App() {

  const Colors = [
    "#FF9300",
    "#FFFFFF",
    "#0CFFF4",
    "#C1C1C1"
  ]

  return (
    <div className="App">
      <h1 id="title">
        Weather App Casanova
      </h1>
      <ContainerFather Colors = {Colors}/>
    </div>
  );
}

export default App;
