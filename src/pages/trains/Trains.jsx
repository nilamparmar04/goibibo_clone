import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchTrains from '../../components/SearchTrains';
import { Center, Container, Space, Title } from '@mantine/core';
import OffersTrains from '../../components/OffersTrains';

const Trains = () => {

  return (
    <Container size='xl'>
        <Space h={30}/>
        <Title ta='center' c='white' >Train Ticket Booking</Title>
        <Space h={30}/>
        <SearchTrains/>
        <Space h={90} />
        <Center>
            <Title>Offers</Title>
        </Center>
        <OffersTrains/>
        <Space h={100}/>
    </Container>
  )
}

export default Trains