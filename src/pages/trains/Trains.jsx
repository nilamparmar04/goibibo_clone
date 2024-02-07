import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchTrains from '../../components/SearchTrains';
import { Center, Container, Space, Title } from '@mantine/core';
import OffersTrains from '../../components/OffersTrains';

const Trains = () => {

    const params = useParams();

    useEffect(()=> {
        const fetchTrains = async () => {
            const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${params.from}","destination":"${params.to}"}&day=${params.day}`,{
                headers:{
                    "projectID":"f104bi07c490"
                }
            });
         const { data } = await results.json();
         console.log(data);
        } 
 
        fetchTrains()
     },[])
  return (
    <Container size='xl'>
        <Space h={70}/>
        <SearchTrains/>
        <Space h={70} />
        <Center>
            <Title>Offers</Title>
        </Center>
        <OffersTrains/>
        <Space h={100}/>
    </Container>
  )
}

export default Trains