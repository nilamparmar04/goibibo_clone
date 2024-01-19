import { Space } from '@mantine/core'
import Offers from '../../components/Offers'
import SearchFlights from '../../components/SearchFlights'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div >
        <Space h="30"/>
        <SearchFlights/>
        <Space h="30"/>
        <Offers/>
        <Space h="30" />
    </div>
  )
}

export default Home