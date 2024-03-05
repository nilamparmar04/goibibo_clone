import { Autocomplete, Button, Container, Grid, Group, Paper, Space } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  "Mumbai (BOM)",
  "Pune (PNQ)",
  "Jaipur (JAI)",
  "Ahmedabad (AMD)",
  "Delhi (DEL)",
  "Kolkata (CCU)",
  "Chennai (MAA)",
  "Bengaluru (BLR)",
  "Hyderabad (HYD)",
  "Lucknow (LKO)",
  "Chandigarh (IXC)",
  "Surat (STV)",
  "Amritsar (ATQ)",
  "Nagpur (NAG)",
  "Goa (GOI)",
  "Guwahati (GAU)",
  "Kochi (COK)",
  "Bhubaneswar (BBI)",
  "Coimbatore (IXC)",
  "Mangalore (IXE)",
  "Thiruvananthapuram (TRV)",
  "Vododara (BDQ)",
  "Madurai (IXM)",
  "Patna (PAT)",
  "Leh (IXL)",
  "Dehradun (DED)",
  "Agartala (IXA)",
  "Gaya (GAY)",
  "Raipur (RPR)",
  "Jammu (IXJ)"
];

const SearchFlights = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [day, setDay] = useState('');
  const navigate = useNavigate();
  return (
    <Container size='xl'>
      <Paper shadow='sm' radius="lg" withBorder p="xl">
        <Grid classNames='footer_data'>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
            size='xl'
              data={data}
              value={source}
              onChange={setSource}
              label="From"
              placeholder="Enter city or airport"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
            size='xl'
              data={data}
              value={destination}
              onChange={setDestination}
              label="To"
              placeholder="Enter city or airport"
            />
          </Grid.Col>
          <Grid.Col span={{sm:12,md:4}}>
            <Autocomplete
            size='xl'
              data={['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"]}
              value={day}
              onChange={setDay}
              label="Day"
              placeholder="eg. Mon,Tue,Wed.."
            />
          </Grid.Col>
        </Grid>
        <Space h={20} />
        <Group justify='center'>
          <Button size='lg' color='orange' onClick={() => navigate(`/flight/${source}/${destination}/${day}`)}>Search Flights</Button>
        </Group>
      </Paper>

    </Container>
  )
}

export default SearchFlights