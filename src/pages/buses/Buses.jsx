import SearchBuses from '../../components/SearchBuses';
import { Center, Container, Space, Title } from '@mantine/core';
import OffersBuses from '../../components/OffersBuses';

const Buses = () => {
  return (
    <Container>
      <Space h={30}/> 
      <SearchBuses/>
      <Space h={30}/>
      <Center>
        <Title>Offers</Title>
      </Center> 
      <OffersBuses/>
    </Container>
  )
}

export default Buses