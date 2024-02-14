import { Box, Button, Container, Divider, Flex, Grid, Paper, RangeSlider, Space, Stack, Text, Title, rem } from '@mantine/core'
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';




const TrainSearch = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [trains, setTrains] = useState([]);
  const from = params.from.split(" ")[0];
  const to = params.to.split(" ")[0];
  const [page, setPage] = useState(1);
  const [valueFare, setValueFare] = useState([100, 2550]);

  useEffect(() => {
    const fetchTrains = async () => {
      const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${from}","destination":"${to}"}&day=${params.day}&filter={"fare":{"$lte":${valueFare[1]},"$gte":${valueFare[0]}}}&limit=10&page=${page}`, {
        headers: {
          "projectID": "f104bi07c490"
        }
      });
      const { data } = await results.json();
      setTrains(data.trains);    
      console.log(data.trains);
    }

    fetchTrains();
  }, [from, page, params.day, to, valueFare]);


  const bookTrain = async (id) => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "projectID":"f104bi07c490",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        "bookingType" : "train",
          "bookingDetails" : {
          "trainId" : `${id}`,
          "startDate" : "2023-10-09T10:03:53.554+00:00",
          "endDate" : "2023-10-09T10:03:53.554+00:00" 
          }
        })
      })
      navigate("/trains",{replace:true})
    const data = await result.json();
    console.log(data);
    notifications.show({
      title:<Title fw={300} c="gray">Your Train Name is </Title>,
      message:(
        <>
          <Title fw={500} c='dark'>{data.booking.train.trainName}</Title>
          <Title fw={500} order={3}>Your Arival Time is {data.booking.train.arrivalTime}</Title>
        </>
      )
    })
 }
  return <>
  {from !== to ?
  (
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
                <Text fw={600}>Fare</Text>
                <Space h={30} />
                <RangeSlider defaultValue={[650, 1000]} max={2050} min={100} labelAlwaysOn value={valueFare} onChange={setValueFare} />
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
          <Flex direction='column' gap='lg'>
            {trains.map((e) => {
              return (
                <Paper shadow='sm' key={e._id} p='md'>
                  <Stack>
                    <Title ta='center' fw={500}>{e.trainName}</Title>
                    <Flex justify='space-around' align='center'>
                      <Flex direction='column' align='center'>
                        <Title order={4}>{e.source}</Title>
                        <Title order={3}>{e.arrivalTime}</Title>
                      </Flex>
                      <Divider w={rem(40)} />
                      <Flex direction='column' align='center'>
                        <Title order={4}>{e.destination}</Title>
                        <Title order={3}>{e.departureTime}</Title>
                      </Flex>
                    </Flex>
                    <Button bg='orange' onClick={()=>bookTrain(e._id)}>Book</Button>
                  </Stack>
                </Paper>
              )
            })}
          </Flex>
        </Grid.Col>
      </Grid>
      <Space h={30} />
      <Flex justify='space-between'>
        <Button disabled={page === 1} variant='subtle' onClick={() => setPage(page - 1)}>Prev</Button>
        <Button disabled={page === 5} variant='subtle' onClick={() => setPage(page + 1)}>Next</Button>
      </Flex>
      <Space h={30} />
    </Container>
  ): (
    <Navigate to='*' />
  )}
  </>
}

export default TrainSearch