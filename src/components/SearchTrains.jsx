import { Autocomplete, Button, Container, Grid, Group, Paper, Space } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const location = [
  "Secunderabad Junction",
  "Varanasi Junction",
  "Katpadi Junction",
  "Vadodara Junction",
  "Howrah Junction",
  "Chandigarh",
  "Nagpur Junction",
  "Barddhaman Junction",
  "Ahmedabad Junction",
  "Udaipur City",
  "Delhi Junction",
  "Salem Junction",
  "Surat",
  "Coimbatore Junction",
  "Dhanbad Junction",
  "Hubli Junction",
  "Pune Junction",
  "Moradabad Junction",
  "Thrissur",
  "Kanpur Central",
  "Kollam Junction",
  "Vijayawada Junction",
  "Anand Junction",
]

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun"
]

const SearchTrains = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate();
  return (
    <Container size='xl'>
      <Paper shadow='sm' radius="lg" withBorder p="xl">
        <Grid>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
              data={location}
              size='lg'
              value={source}
              onChange={setSource}
              label="From"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>

            <Autocomplete
              data={location}
              size='lg'
              value={destination}
              onChange={setDestination}
              label="To"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
              data={days}
              size='lg'
              value={day}
              onChange={setDay}
              label="Day"
              placeholder="eg. Mon,Tue,Wed.."
            />
          </Grid.Col>
        </Grid>
        <Space h={20} />
        <Group justify='center'>
          <Button color='orange' onClick={() => navigate(`/train/${source}/${destination}/${day}`)}>Search Trains</Button>
        </Group>
      </Paper>

    </Container>
  )
}

export default SearchTrains