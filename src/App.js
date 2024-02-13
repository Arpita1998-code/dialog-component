import './App.css';
import OpensimpleDialog from "./components/OpensimpleDialog";
import OpenalertDialog from "./components/OpenalertDialog";
import SlidealertDialog from "./components/SlidealertDialog";
import OpenformDialog from "./components/OpenformDialog";

function App() {

  return (
    <div>
      <OpensimpleDialog/>
      <OpenalertDialog/> <br/>
      <SlidealertDialog/><br/>
      <OpenformDialog/>
    </div>
  );
}

export default App;
