// React Router Dom
import { Outlet, useLoaderData } from 'react-router-dom'

// assets
import wave from '../assets/wave.svg'

// components
import Nav from '../components/Nav'

// helper functions
import { fetchData } from '../helpers'

// loader
export const mainLoader = () => {
  const userName = fetchData('userName')
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()
  return (
    <div className='layout'>
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt='' />
    </div>
  )
}

export default Main
