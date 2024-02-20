import { Container, Image, Space, Title } from '@mantine/core'
import Offers from '../../components/Offers'
import SearchFlights from '../../components/SearchFlights'
import backgroundImg from './../../assets/images/curve_img.svg';

const Home = () => {
  return (
    <Container size='xl'>
        <Space h="20"/>
        <Title ta='center' c='white' order={3}>Book Domestic and International Flight Tickets</Title>
        <Space h="20"/>
        <SearchFlights/>
        <Space h="50"/>
        <Offers/>
        <Space h="50" />
    </Container>
  )
}

export default Home