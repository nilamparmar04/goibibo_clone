import { Autocomplete, Button, Container, Grid, Group, Paper, Space } from '@mantine/core';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const data = [
  "Mumbai, Maharashtra",
  "Delhi, National Capital Territory of Delhi",
  "Bangalore, Karnataka",
  "Kolkata, West Bengal",
  "Chennai, Tamil Nadu",
  "Hyderabad, Telangana",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Surat, Gujarat",
  "Jaipur, Rajasthan",
  "Lucknow, Uttar Pradesh",
  "Nagpur, Maharashtra",
  "Thane, Maharashtra",
  "Bhopal, Madhya Pradesh",
  "Visakhapatnam, Andhra Pradesh",
  "Patna, Bihar",
  "Vadodara, Gujarat",
  "Ludhiana, Punjab",
  "Agra, Uttar Pradesh",
  "Nashik, Maharashtra",
  "Faridabad, Haryana"
]

const SearchBuses = () => {
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
              size='lg'
              data={data}
              value={source}
              onChange={setSource}
              label="From"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>

            <Autocomplete
              size='lg'
              data={data}
              value={destination}
              onChange={setDestination}
              label="To"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
              size='lg'
              data={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}
              value={day}
              onChange={setDay}
              label="Day"
              placeholder="eg. Mon,Tue,Wed.."
            />
          </Grid.Col>
        </Grid>
        <Space h={20} />
        <Group justify='center'>
          <Button color='orange' onClick={() => navigate(`/bus/${source}/${destination}/${day}`)}>Search Buses</Button>
        </Group>
      </Paper>

    </Container>
  );
}

export default SearchBuses