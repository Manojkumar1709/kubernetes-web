import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Cloud from './pages/Cloud';
import Install from './pages/Install'
import Commands from './pages/Commands';
import Controller from './pages/Controller';
import Name from './pages/Name';
import Kubeadm from './pages/Kubeadm';

function App() {
  return (
    <>
      <Router>
        <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <Sidebar />
        </aside>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cloud-kubernetes' element={<Cloud/>}/>
          <Route path='/install-kubernetes' element={<Install/>}/>
          <Route path='/install-kubeadm' element={<Kubeadm/>}/>
          <Route path='/kubernetes-commands' element={<Commands/>}/>
          <Route path='/kubernetes-controllers' element={<Controller/>}/>
          <Route path='/kubernetes-namespace' element={<Name/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
