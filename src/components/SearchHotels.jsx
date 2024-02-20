import { Autocomplete, Button, Container, Flex, Grid, Paper, Space, TextInput, rem } from '@mantine/core'
import { DateInput } from '@mantine/dates';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  "Mumbai",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Lucknow",
  "Agra",
  "Chandigarh",
  "Surat",
  "Varanasi",
  "Amritsar",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Udiapur"
];

const Search = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [valueCheckIn, setValueCheckIn] = useState(null)
  const [valueCheckOut, setValueCheckOut] = useState(null)
  return (
    <Container size='xl'>
        <Grid>
          <Grid.Col span={6}>
      <Paper shadow='sm' radius="lg" withBorder p="xl">

          <Flex direction="column" gap={rem(20)}>
            <Autocomplete
              data={data}
              size='xl'
              value={location}
              onChange={setLocation}
              placeholder="Enter City You Want To Stay"
              />

            <Flex justify='center' gap='lg'>
              <DateInput size='xl'
                label="Check-in"
                defaultValue={new Date()}
                />
              <DateInput size='xl'
                label="Check-out"
                defaultValue={new Date()}
                
                />
            </Flex>
            <Button color='orange' onClick={() => navigate(`/hotel/${location}`)}>Search Hotels</Button>
          </Flex>
          <Space h={20} />
      </Paper>
                </Grid.Col>
        </Grid>

    </Container>
  )
}

export default Search