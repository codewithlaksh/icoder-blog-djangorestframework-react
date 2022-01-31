import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Blogpost from './pages/Blogpost';
import Search from './pages/Search';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  document.title = "Home - iCoder"

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpost/:slug" element={<Blogpost />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact showAlert={showAlert}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
