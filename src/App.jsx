
import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Beauty from "./pages/Beauty";
import Fashion from "./pages/Fashion";
import Gaming from "./pages/Gaming";
import Live from "./pages/Live";
import Movies from "./pages/Movies";
import Music from "./pages/Music";
import New from "./pages/New";
import Podcast from "./pages/Podcast";
import Sport from "./pages/Sport";

import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
  <Route index element={<Home />} />
  <Route path="/beauty"  element={<Beauty />} />
  <Route path="/fashion"  element={<Fashion />} />
  <Route path="/gaming"  element={<Gaming />} />
  <Route path="/live"  element={<Live />} />
  <Route path="/movies"  element={<Movies />} />
  <Route path="/music"  element={<Music />} />
  <Route path="/new"  element={<New />} />
  <Route path="/podcast"  element={<Podcast />} />
  <Route path="/sport"  element={<Sport />} />
  </Route>
))

function App() {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
