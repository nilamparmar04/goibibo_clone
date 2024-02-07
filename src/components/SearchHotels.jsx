import { Autocomplete, Button, Container, Flex, Paper, Space, TextInput, rem } from '@mantine/core'
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
  return (
    <Container>
      <Paper shadow='sm' radius="lg" withBorder p="xl">
        <Flex direction="column" gap={rem(20)} >
          <Autocomplete
            data={data}
            size='lg'
            variant='filled'
            label="Enter the City"
            value={location}
            onChange={setLocation}
            placeholder="Enter City You Want To Stay"
          />
          <Button color='orange' onClick={() => navigate(`/hotel/${location}`)}>Search Hotels</Button>
        </Flex>
        <Space h={20} />
      </Paper>

    </Container>
  )
}

export default Search