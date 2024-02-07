import { Autocomplete, Button, Container, Grid, Group, Paper, Space, TextInput } from '@mantine/core';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBuses = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate();
  return (
    <Container size='xl'>
      <Paper shadow='sm' radius="lg" withBorder p="xl">
        <Grid>
          <Grid.Col span={4}>
            <Autocomplete
              size='lg'
              variant='filled'
              value={source}
              onChange={(e) => setSource(e.target.value)}
              label="From"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={4}>

            <Autocomplete
              size='lg'
              variant='filled'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              label="To"
              placeholder="Enter city"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Autocomplete
              size='lg'
              variant='filled'
              value={day}
              onChange={(e) => setDay(e.target.value)}
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