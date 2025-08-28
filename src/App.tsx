import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Resources from './pages/Resources'
import Membership from './pages/Membership'
import PaymentSuccess from './pages/Payment/Success'
import PaymentFail from './pages/Payment/Fail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/fail" element={<PaymentFail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App