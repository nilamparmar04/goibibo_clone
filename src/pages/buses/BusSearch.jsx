import { Box, Button, Card, Container, Flex, Grid, Paper, RangeSlider, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const BusSearch = () => {
  const navigate = useNavigate();
  const params = useParams();
  const from = params.from.split(",")[0];
  const to = params.to.split(",")[0];
  const [buses, setBuses] = useState([]);
  const [valueFare, setValueFare] = useState([100, 2550]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBuses = async () => {
      const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${from}","destination":"${to}"}&day=${params.day}&filter={"fare":{"$lte":${valueFare[1]},"$gte":${valueFare[0]}}}&limit=5&page=${page}`, {
        headers: {
          "projectID": "f104bi07c490"
        }
      });
      const { data } = await results.json();
      setBuses(data.buses);
    }

    fetchBuses()
  }, [from, to, params.to, params.from, params.day, page, valueFare]);



  const bookBus = async (id) => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "projectID":"f104bi07c490",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        "bookingType" : "bus",
          "bookingDetails" : {
          "busId" : `${id}`,
          "startDate" : "2023-10-09T10:03:53.554+00:00",
          "endDate" : "2023-10-09T10:03:53.554+00:00" 
          }
        })
      })
      navigate("/buses",{replace:true})
    const data = await result.json();
    console.log(data);
    notifications.show({
      title:<Title fw={300} c="gray">Your Bus Name is </Title>,
      message:(
        <>
          <Title fw={500} c='dark'>{data.booking.bus.name}</Title>
          <Title fw={500} order={3}>Your Arival Time is {data.booking.bus.arrivalTime}</Title>
        </>
      )
    })
 }
  return <>
  {from !== to ? (
    <Container>
      <Space h={30} />
      <Grid>
        <Grid.Col span={4}>
          <Paper shadow='sm' p={15}>
            <Stack gap={20}>
              <Box>
                <Title order={3}>Filters</Title>
              </Box>
              <Box>
                <Text fw={600}>Price</Text>
                <Space h={30} />
                <RangeSlider defaultValue={[650, 1000]} max={2050} min={100}  labelAlwaysOn value={valueFare} onChange={setValueFare} />
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Flex direction='column' gap='lg'>
            {buses.map((e) => {
              return (
                <Paper shadow='sm' key={e._id} p='md'>
                  <Stack>
                    <Title ta='center' fw={500}>{e.name}</Title>
                    <Flex justify='space-around' align='center'>
                      <Flex direction='column' align='center' component={Card} p='xl' withBorder shadow='none'>
                        <Title order={4}>{e.source.split(",")[0]}</Title>
                        <Title order={3}>{e.arrivalTime}</Title>
                      </Flex> 
                      <Flex direction='column' align='center' component={Card}  p='xl' withBorder shadow='none'>
                        <Title order={4}>{e.destination.split(",")[0]}</Title>
                        <Title order={3}>{e.departureTime}</Title>
                      </Flex>
                    </Flex>
                    <Button bg='orange' onClick={() => bookBus(e._id)}>Book</Button>
                  </Stack>
                </Paper>
              )
            })}
          </Flex>
        </Grid.Col>
      </Grid>
      <Space h={30} />
      <Flex justify='space-between'>
        <Button disabled={page === 1} variant='transparent' onClick={() => setPage(page-1)}>Prev</Button>
        <Button disabled={page === 2} variant='transparent' onClick={() => setPage(page+1)}>Next</Button>
      </Flex>
      <Space h={30} />
    </Container>
    )
    :(
      <Navigate to='*' />
    )
  }
  </>
}

export default BusSearch