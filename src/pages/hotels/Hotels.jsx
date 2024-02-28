import { Center, Container, Space, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchHotels from '../../components/SearchHotels';
import OffersHotels from '../../components/OffersHotels';

const Hotels = () => {
    const params = useParams();
    console.log(params.location);

    useEffect(()=> {
       const fetchHotels = async () => {
        const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${params.location}"}&limit=30`,{
            headers:{
                "projectID":"f104bi07c490"
            }
        });
        const data = await results.json();
        console.log(data);
       } 

       fetchHotels()
    },[])
  return (
    <Container size='xl'>
      <Space h={70} />
      <Container>
      <Title c="white" order={2}>Book Hotels & Homestays</Title>
      </Container>
      <Space h={50} />
      <SearchHotels/>
      <Space h={70}/>
      <Center>
        <Title>Offers</Title>
      </Center>
      <OffersHotels/>
      <Space h={100} />
    </Container>
  )
}

export default Hotels