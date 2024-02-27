import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Home = () => {
  return (
    <>
    
   <NavBar />
        <main>
<Outlet />
</main>
    </>
  )
}

export default Home