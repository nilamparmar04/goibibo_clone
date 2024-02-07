import { Badge, Box, Button, Container, Flex, Grid, Group, Image, Paper, RangeSlider, Rating, SimpleGrid, Space, Stack, Text, Title, } from '@mantine/core';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";

const HotelSearch = () => {
  const params = useParams();
    console.log(params.location);
    const [hotels,setHotels] = useState([]);
    const [page,setPage] = useState(1);
    const [valuePrice, setValuePrice] = useState([2400, 2450]);
    const [valueDuration, setValueDuration] = useState([2, 5]);


  useEffect(()=> {
    const fetchHotels = async () => {
     const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${params.location}"}&limit=5&page=${page}`,{
         headers:{
             "projectID":"f104bi07c490"
         }
     });
     const { data } = await results.json();
     console.log(data);
     setHotels(data.hotels);
    } 

    fetchHotels()
 },[page, params.location])
  return (
    <Container>
      <Space h={30}/>
      <Grid>
        <Grid.Col span={5}>
        <Paper shadow='sm' p={15}>
            <Stack gap={20}>
              <Box>
                <Title order={3}>Filters</Title>
              </Box>
              <Box>
                <Text fw={600}>Departure</Text>
                <Space h={10} />
                <SimpleGrid cols={2}>
                  <Button variant='light'>Before 6AM</Button>
                  <Button variant='light'>6AM - 12PM</Button>
                  <Button variant='light'>12PM - 6PM</Button>
                  <Button variant='light'>After 6AM</Button>
                </SimpleGrid>
              </Box>
              <Box>
                <Text fw={600}>Stops</Text>
                <Space h={14} />
                <SimpleGrid cols={2}>
                  <Button variant='light'>Direct</Button>
                  <Button variant='light'>1-Stop</Button>
                  <Button variant='light'>2+ Stops</Button>
                </SimpleGrid>
              </Box>
              <Box>
                <Text fw={600}>Price</Text>
                <Space h={30} />
                <RangeSlider defaultValue={[2450, 2400]} max={2450} min={2400} labelAlwaysOn value={valuePrice} onChange={setValuePrice} />
              </Box>
              <Box>
                <Text fw={600}>Onward Duration</Text>
                <Space h={30} />
                <RangeSlider defaultValue={[1, 7]} max={7} min={0} labelAlwaysOn value={valueDuration} onChange={setValueDuration} />
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={7}>
          <Stack>
            {hotels.slice(0,5).map((e) => {
            1
              return (
                <Paper p={20} key={e._id} c='dark' shadow='sm' withBorder component={Link} to={`/hotels/${e._id}`}>
                  <Flex gap={20}>
                      <Box>
                        <Image radius="sm" w={200} src={e.images[0]} h={200} />
                      </Box>
                      <Stack  gap='sm'>
                        <Title order={3}>{e.name}</Title>
                        <Text><IoLocationOutline /> {e.location}</Text>
                        <Rating value={e.rating} />
                        <Text>This property offers:</Text>
                          <Group gap={5}>
                         {e.amenities.map((item)=>{
                           return (
                             <Badge radius='sm' variant='outline' key={item}>
                              {item}
                            </Badge>
                          )
                        })}
                        </Group>
                      </Stack>
                      <Box>
                      </Box>
                  </Flex>
                </Paper>
              )
            })}
          </Stack>
        </Grid.Col>
      </Grid>
      <Space h={30}/>
      <Flex justify='space-between'>
        <Button disabled={page === 1} variant='outline' onClick={()=>setPage(page-1)}>Prev</Button>
        <Button disabled={page === 6} variant='outline' onClick={()=>setPage(page+1)}>Next</Button>
      </Flex>
      <Space h={30}/>
    </Container>
  )
}

export default HotelSearch