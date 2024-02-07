import { Container, Space } from '@mantine/core'
import Offers from '../../components/Offers'
import SearchFlights from '../../components/SearchFlights'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <Container size='xl'>
        <Space h="150"/>
        <SearchFlights/>
        <Space h="100"/>
        <Offers/>
        <Space h="150" />
    </Container>
  )
}

export default Home