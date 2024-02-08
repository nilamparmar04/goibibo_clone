import { Box, Button, Center, Collapse, Container, Flex, Grid, Paper, RangeSlider, SimpleGrid, Space, Stack, Table, Text, Title, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const elements = [
  { type: "ADULT", check: "15 Kgs (1 piece only)", cabin: "7 Kgs (1 piece only)" },
];



const FlightSearch = () => {
  const paperRef = useRef();
  const params = useParams();
  const from = params.from.split(' ')[1].replace(/([()])/g, '');
  const to = params.to.split(' ')[1].replace(/([()])/g, '')
  const navigate = useNavigate();
  const rows = elements.map((element) => (
    <Table.Tr key={element.type}>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.check}</Table.Td>
      <Table.Td>{element.cabin}</Table.Td>
    </Table.Tr>
  ));
  const [opened, { toggle }] = useDisclosure();
  const [valuePrice, setValuePrice] = useState([2400, 2450]);
  const [valueDuration, setValueDuration] = useState([2, 5]);
  console.log(valueDuration)
  console.log(valuePrice)
  const [flights, setFlights] = useState([]);
  const [page,setPage] = useState(1);
  
  useEffect(() => {
    const fetchFlights = async () => {
      const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${from}","destination":"${to}"}&day=${params.day}&limit=10&page=${page}`, {
        headers: {
          "projectID": "f104bi07c490"
        }
      });
      const { data } = await results.json();
      console.log(data)
      setFlights(data.flights);
    }
    fetchFlights()
  }, [from, page, params.day, params.from, params.to, to])

  const bookFlight = async (id) => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/booking",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "projectID":"f104bi07c490",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({
        "bookingType" : "flight",
          "bookingDetails" : {
          "flightId" : `${id}`,
          "startDate" : "2023-10-09T10:03:53.554+00:00",
          "endDate" : "2023-10-09T10:03:53.554+00:00" 
          }
        })
      })
      navigate("/",{replace:true})
    const data = await result.json();
    notifications.show({
      title:<Title fw={300} c="gray">We Notify You That</Title>,
      message:(
        <Title c="dark" fw={500}>{data.message}</Title>
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
          <>
          <Stack >
            {
              flights.map((e) => {
                const currency = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'INR',
                });

                return (
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
                        <Button color='orange' onClick={()=>bookFlight(e._id)}>Book</Button>
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
            </>
        </Grid.Col>
      </Grid>
      <Space h={30} />
      <Flex justify='space-between'>
        <Button disabled={page === 1} variant='transparent' onClick={() => setPage(page-1)}>Prev</Button>
        <Button disabled={page === 2} variant='transparent' onClick={() => setPage(page+1)}>Next</Button>
      </Flex>
      <Space h={30} />
    </Container>
  ): (
    <Navigate to="*" />
    )}
  </>
}

export default FlightSearch