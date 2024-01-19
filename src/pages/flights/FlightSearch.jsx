import { Box, Button, Center, Collapse, Container, Flex, Grid,  Pagination, Paper, RangeSlider, SimpleGrid, Space, Stack, Table, Text, Title, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const elements = [
  { type:"ADULT" , check: "15 Kgs (1 piece only)", cabin: "7 Kgs (1 piece only)" },
];



const FlightSearch = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.type}>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.check}</Table.Td>
      <Table.Td>{element.cabin}</Table.Td>
    </Table.Tr>
  ));
  const [opened,{toggle}] = useDisclosure();
  const params = useParams();
  const [valuePrice,setValuePrice] = useState([2400,2450]);
  const [valueDuration,setValueDuration] = useState([2,5]);
  console.log(valueDuration)
  console.log(valuePrice)
  const [flights,setFlights] = useState([]);
  useEffect(()=> {
    const fetchFlights = async () => {
     const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${params.from}","destination":"${params.to}"}&day=${params.day}`,{
         headers:{
             "projectID":"f104bi07c490"
         }
     });
     const {data} = await results.json();
     console.log(data);
     setFlights(data.flights);
    } 
    fetchFlights()
 },[])
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
              <Space h={10}/>
              <SimpleGrid cols={2}>
                <Button variant='light'>Before 6AM</Button>
                <Button variant='light'>6AM - 12PM</Button>
                <Button variant='light'>12PM - 6PM</Button>
                <Button variant='light'>After 6AM</Button>
              </SimpleGrid>
            </Box>
            <Box>
            <Text fw={600}>Stops</Text>
            <Space h={14}/>
            <SimpleGrid cols={2}>
              <Button variant='light'>Direct</Button>
              <Button variant='light'>1-Stop</Button>
              <Button variant='light'>2+ Stops</Button>
            </SimpleGrid>
            </Box>
            <Box>
              <Text fw={600}>Price</Text>
              <Space h={30}/>
              <RangeSlider defaultValue={[2450,2400]} max={2450} min={2400} labelAlwaysOn value={valuePrice} onChange={setValuePrice} />
            </Box>
            <Box>
              <Text fw={600}>Onward Duration</Text>
              <Space h={30}/>
              <RangeSlider defaultValue={[1,7]} max={7} min={0} labelAlwaysOn value={valueDuration} onChange={setValueDuration} />
            </Box>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8}>
            <Stack>
              {
                flights.map((e)=> {
                  const currency = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'INR',
                });
                  return  (
                    <Paper key={e._id} shadow='sm' p={rem(40)}>
                      <Flex gap={20} justify="space-around" align="center">
                        <Stack justify='center' align='center'>
                          <Text size='xl'>{e.source}</Text>
                          <Title>{e.arrivalTime}</Title>
                        </Stack>
                        <Stack justify='center' align='center'>
                          <Text size='xl'>{e.destination}</Text>
                          <Title>{e.departureTime}</Title>
                        </Stack>
                        <Box>
                          <Text size='lg' fw={700}>{currency.format(e.ticketPrice)}</Text>
                        </Box>
                        <Stack>
                          <Button color='orange'>Book</Button>
                          <Button onClick={toggle}>Flight Details</Button>
                        </Stack>
                      </Flex>
                          <Collapse in={opened} p={10}>
                            <Center>
                            <Text >Available Seats : {e.availableSeats}</Text>
                            </Center>
                            <Table>
                              <Table.Thead>
                                <Table.Tr>
                                  <Table.Th>Baggage Type</Table.Th>
                                  <Table.Th>Check-In</Table.Th>
                                  <Table.Th>Cabin</Table.Th>
                                </Table.Tr>
                              </Table.Thead>
                              <Table.Tbody>{rows}</Table.Tbody>
                            </Table>
                          </Collapse>
                    </Paper>
                  )
                })
              }
            </Stack>
        </Grid.Col>
      </Grid>
      <Space h={30} />
      <Center>
        <Pagination total={20}/>
      </Center>
      <Space h={30}/>
    </Container>
  )
}

export default FlightSearch