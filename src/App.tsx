import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Resources from './pages/Resources'
import Membership from './pages/Membership'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App