import { Box, Button, Center, Container, Divider, Flex, Grid, Pagination, Paper, RangeSlider, SimpleGrid, Space, Stack, Text, Title, rem } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';




const TrainSearch = () => {
  const params = useParams();
  const [trains, setTrains] = useState([]);
  const from = params.from.split(" ")[0];
  const to = params.to.split(" ")[0];
  const [page, setPage] = useState(1);
  const [valuePrice, setValuePrice] = useState([2400, 2450]);
  const [valueDuration, setValueDuration] = useState([2, 5]);

  useEffect(() => {
    const fetchTrains = async () => {
      const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${from}","destination":"${to}"}&day=${params.day}`, {
        headers: {
          "projectID": "f104bi07c490"
        }
      });
      const { data } = await results.json();
      setTrains(data.trains);
      console.log(data.trains)
    }

    fetchTrains();
  }, [])
  return (
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
                    <Flex >
                    </Flex>
                  </Stack>
                </Paper>
              )
            })}
          </Flex>
        </Grid.Col>
      </Grid>
      <Space h={30} />
      <Flex justify='space-between'>
        <Button variant='subtle'>Prev</Button>
        <Button variant='subtle'>Next</Button>
      </Flex>
      <Space h={30} />
    </Container>
  )
}

export default TrainSearch