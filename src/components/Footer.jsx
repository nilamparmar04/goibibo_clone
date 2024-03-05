import { Box, Container, Grid, Paper, Stack, Text, Title, useMantineTheme } from '@mantine/core'

const Footer = () => {
  const theme = useMantineTheme();
  console.log(theme.breakpoints);
  return (
    <footer>
    <Paper p="xl" >
    <Container>
      <Grid classNames='footer_data'>
        <Grid.Col span={{sm:6,lg:3}}>
          <Stack gap={20}>
            <Box>
              <Title style={{textTransform:'uppercase'}} order={4}>Our Products</Title>
            </Box>
            <Stack gap={2}>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Domestic Hotels</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>International Hotels</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Domestic Flights</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Internationl Flights</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Multi-City Flights</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Couple Friendly Hotels</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Nearby Getaways</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Bus Booking</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Cab Booking</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{sm:6,lg:3}}>
          <Stack gap={20}>
            <Box>
              <Title style={{textTransform:'uppercase'}} order={4}>about us</Title>
            </Box>
            <Stack gap={2}>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>About Us</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Investor Relations</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Management</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Terms of Services</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>User Agreement</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Privacy</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Careers</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Youtube Channel</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Customer Support</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{sm:6,lg:3}}>
          <Stack gap={20}>
            <Box>
              <Title style={{textTransform:'uppercase'}} order={4}>Travel Essentials</Title>
            </Box>
            <Stack gap={2}>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>PNR Status</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Offers</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Airline Routes</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Train Running Status</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{sm:6,lg:3}}>
          <Stack gap={20}>
            <Box>
              <Title style={{textTransform:'uppercase'}} order={4}>More Links</Title>
            </Box>
            <Stack gap={2}>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Cheap Flights</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Hotels Near Me</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>My Bookings</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Cancellation</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>My Account</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Wallet</Text>
              <Text size='sm' style={{color:'gray',cursor:"pointer"}}>Advertise with Us</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
    </Paper>
    </footer>
  )
}

export default Footer