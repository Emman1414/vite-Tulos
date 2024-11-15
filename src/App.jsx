import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
