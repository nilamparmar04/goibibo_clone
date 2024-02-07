import { Badge, Box, Button, Container, Flex, Grid, Group, Image, Paper, Space, Stack, Text, Title, } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const HotelSearch = () => {
  const params = useParams();
    console.log(params.location);
    const [hotels,setHotels] = useState([]);
    // const [images,setImages] = useState([]);
    const [page,setPage] = useState(1);


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
        <Grid.Col span={4}>
          <Paper withBorder shadow='sm' p={20}>
            <Title order={3}>Filters</Title>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack>
            {hotels.slice(0,5).map((e) => {
            1
              return (
                <Paper p={20} key={e._id} shadow='sm' withBorder>
                  <Flex gap={20}>
                      <Box>
                        <Image radius="sm" w={200} src={e.images[0]} h={200} />
                        <Space h={10}/>
                          <Flex gap={10} align justify="center">
                          <Image radius="sm" w={30} src={e.images[1]} h={30} />
                          <Image radius="sm" w={"auto"} src={e.images[2]} h={30} />
                          <Image radius="sm" w={"auto"} src={e.images[3]} h={30} />
                          </Flex>
                      </Box>
                      <Box>
                        <Title order={3}>{e.location}</Title>
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
                      </Box>
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