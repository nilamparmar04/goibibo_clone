import {  Box, Button, Container, Flex,  Grid,  Image, Paper, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Carousel } from '@mantine/carousel';
import { CiLocationOn } from "react-icons/ci";
import { notifications } from '@mantine/notifications';


const HotelDetails = () => {
  const navigate = useNavigate();
    const params = useParams();
    const [hotel,setHotel] = useState({});
    const [room,setRoom] = useState([]);
    const [images,setImages] = useState([]);
    useEffect(() => {
        const fetchHotel = async () => {
         const result = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${params.id}`,{
             headers:{
                "projectID":"f104bi07c490"
             }
         });
          const {data} = await result.json();
          console.log(data);
          setHotel(data);
          setImages(data.images);
          setRoom(data.rooms)
        } 
 
        fetchHotel(); 
     },[])


     const bookHotel = async (id) => {
        const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            "projectID":"f104bi07c490",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          },
          body:JSON.stringify({
            "bookingType" : "hotel",
              "bookingDetails" : {
              "hotelId" : `${id}`,
              "startDate" : "2023-10-09T10:03:53.554+00:00",
              "endDate" : "2023-10-09T10:03:53.554+00:00" 
              }
          })
        })
        const data = await result.json();
        notifications.show({
          title:<Title fw={300} c="gray">We Notify You That</Title>,
          message:(
            <Title c="dark" fw={500}>{data.message}</Title>
          )
        })

        navigate("/hotels")
     }



  return (
    <Container>
      <Space h={30} />
      <Stack>
        <Grid gap={30}>
          <Grid.Col span={12}>
          <Image radius='sm' src={images[0]}  h={300} />
          </Grid.Col>
          <Grid.Col span={12}>
          <Carousel withIndicators slideGap='sm' align='start' loop>
            <Carousel.Slide>
          <Image radius='sm' src={images[1]} width={300} height={300}/>
            </Carousel.Slide>
            <Carousel.Slide>
          <Image radius='sm' src={images[2]} width={300} height={300} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image radius='sm' src={images[3]} width={300} height={300} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image radius='sm' src={images[4]} width={300} height={300} />
            </Carousel.Slide>
          </Carousel>
          </Grid.Col>
        </Grid>
        <Flex justify='space-between' px='xl' align='center'>
          <Stack>
            <Title fw={600}>{hotel.name}</Title>
            <Text c='blue'><CiLocationOn /> {hotel.location}</Text>
          </Stack>
          <Button bg="orange" size='lg' onClick={()=>bookHotel(hotel._id)}>Book</Button>
        </Flex>
      </Stack>
      <Space h={30} />
      <SimpleGrid cols={2} spacing='lg'>
        {room.map((e) => {
          return (
            <Paper key={e._id} shadow='sm' withBorder p='lg'>
              <Stack>
              <Title order={3} fw={500}>{e.bedDetail}</Title>
              <Box>
              <Text fw={500} >Price: {e.price}</Text>
              <Text fw={500}>Room Type: {e.roomType}</Text>
              </Box>
              </Stack>
            </Paper>
          )
        })}
      </SimpleGrid>
      <Space h={30}/>
    </Container>
  )
}

export default HotelDetails