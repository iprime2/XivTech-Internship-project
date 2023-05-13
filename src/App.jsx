import { useState } from 'react'
import './App.scss'
import Collaborate from './components/Collaborate'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu'

const data = [
  {
    id: 1,
    title: 'AI + RPA is what we do',
    content:
      'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience',
    link: 'AI + RPA Automation',
    img: 'https://www.xivtech.io./rp2.jpg',
  },

  {
    id: 2,
    title: 'Make Bolder Choices',
    content: 'Digital focused strategies to realize market-changing ideas',
    link: 'Build Better Apps',
    img: 'https://www.xivtech.io./p1.png',
  },
  {
    id: 3,
    title: 'Innovate with Speed',
    content:
      'Create higher quality software, deliver on customer expectations and business goals',
    link: 'DevOps',
    img: 'https://www.xivtech.io./p2.jpg',
  },

  {
    id: 4,
    title: 'Embrace Cloud',
    content: 'With Cloud-First accelerate innovation and optimize performance',
    link: 'Cloud Services',
    img: 'https://www.xivtech.io./p3.jpg',
  },
]
function App() {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className='app'>
      <Navbar toggleMenu={toggleMenu} />

      {menu && <Menu toggleMenu={toggleMenu} />}

      <div className='app-container'>
        <div className='title'>
          <h3>{'Let' + "' s" + ' Collaborate'}</h3>
        </div>

        <div className='app-collb'>
          {data.map((item) => (
            <Collaborate
              key={item.id}
              title={item.title}
              content={item.content}
              link={item.link}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
