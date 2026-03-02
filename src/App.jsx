import Checkout from "./Pages/Checkout"
import Layout from "./Pages/Layout"
import { Route, Routes } from "react-router-dom"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </>
  )
}

export default App