import {CounterProvicer} from "./CounterContext";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Index from "./Index";
import Second from "./Second";

function App() {

  return (
      <CounterProvicer>
          <Router>
              <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/:id" element={<Second />} />
              </Routes>
          </Router>
      </CounterProvicer>

  )
}

export default App
