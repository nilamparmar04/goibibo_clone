import SearchBuses from '../../components/SearchBuses';
import { Center, Container, Space, Title } from '@mantine/core';
import OffersBuses from '../../components/OffersBuses';

const Buses = () => {
  return (
    <Container size='xl'>
      <Space h={70}/> 
      <SearchBuses/>
      <Space h={70}/>
      <Center>
        <Title>Offers</Title>
      </Center> 
      <OffersBuses/>
      <Space h={100} />
    </Container>
  )
}

export default Buses