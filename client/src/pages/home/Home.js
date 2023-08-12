import About from '../../components/about/About'
import Benefit from '../../components/benefit/Benefit'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="sections">
        <Header />
        <About />
        <Benefit />
        <Faq />
        <Footer />
      </div>
    </div>
  )
}

export default Home
