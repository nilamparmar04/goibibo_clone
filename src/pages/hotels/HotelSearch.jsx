import { Badge, Box, Button, Container, Flex, Grid, Group, Image, Paper, RangeSlider, Rating, SimpleGrid, Slider, Space, Stack, Text, Title, } from '@mantine/core';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";



const marks = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];


const HotelSearch = () => {
  const params = useParams();
    console.log(params.location);
    const [hotels,setHotels] = useState([]);
    const [page,setPage] = useState(1);
    // const [valuePrice, setValuePrice] = useState([2400, 2450]);
    const [valueRating, setValueRating] = useState(4);


  useEffect(()=> {
    const fetchHotels = async () => {
     const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${params.location}"}&filter={"rating":"${valueRating}"}&limit=5&page=${page}`,{
         headers:{
             "projectID":"f104bi07c490"
         }
     });
     const { data } = await results.json();
     console.log(data);
     setHotels(data.hotels);
    } 

    fetchHotels()
 },[page, params.location, valueRating])
  return <>
  (
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
                <Text fw={600}>Ratings</Text>
                <Space h={30} />
                <Slider
                  value={valueRating}
                  onChange={setValueRating}
                  defaultValue={3}
                  min={1}
                  max={5}
                  label={(val) => marks.find((mark) => mark.value === val).label}
                  step={1}
                  marks={marks}
                  styles={{ markLabel: { display: 'none' } }}
                />
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
  </>
}

export default HotelSearch