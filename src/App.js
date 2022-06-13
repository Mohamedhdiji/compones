import logo from "./logo.svg";
import "./App.css";
import { NaveBars } from "./NaveBars";
import "bootstrap/dist/css/bootstrap.min.css";
import MainVedio from "./MainVedio";
import PlayListe from "./PlayListe";

function App() {
  return (
    <div className="App">
      <NaveBars />
      <div className="row">
        <div className="col-8">
          <MainVedio />
        </div>
        <div class="col-4">
          <PlayListe />
        </div>
      </div>
    </div>
  );
}

export default App;
