import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <div style={styles.container}>
      <Header />
      <Homepage />
      <Footer />
    </div>
    </>
  )
}

export default App

const styles={
}