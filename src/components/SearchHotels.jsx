import { Button, Container, Flex, Paper, Space, TextInput, rem } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {
  const [location,setLocation] = useState("");
  const navigate = useNavigate();
return (
  <Container>
  <Paper shadow='sm' radius="lg" withBorder p="xl">
          <Flex direction="column" gap={rem(20)} >
                <TextInput
                  label="Enter the City"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                  placeholder="Enter City You Want To Stay"
                />
                <Button color='orange' onClick={()=>navigate(`/hotel/${location}`)}>Search Hotels</Button>
          </Flex>
          <Space h={20}/>
  </Paper>

</Container>
)
}

export default Search