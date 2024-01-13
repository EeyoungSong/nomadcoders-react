import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Hello from "./routes/Hello";

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/hello" element={<Hello />}></Route>
      </Routes>
    </Router>
  </div>
    )
  }

export default App;
