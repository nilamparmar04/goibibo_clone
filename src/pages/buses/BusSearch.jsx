import { Container, Grid, Pagination, Paper, Space } from '@mantine/core';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BusSearch = () => {
  const params = useParams();
  useEffect(()=> {
    const fetchBuses = async () => {
     const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${params.from}","destination":"${params.to}"}&day=${params.day}`,{
         headers:{
             "projectID":"f104bi07c490"
         }
     });
     const data = await results.json();
     console.log(data);
    } 

    fetchBuses()
 },[])
  return (
    <Container>
      <Space h={30} />
        <Grid>
          <Grid.Col span={4}>
            <Paper>
              fdsfdsfdsfsdfd
            </Paper>
          </Grid.Col>
          <Grid.Col span={8}>
            <Paper>fdsfdsfdsfsdfdsf</Paper>
          </Grid.Col>
        </Grid>
      <Space h={30} />
      <Pagination total={20}/>
      <Space h={30}/>
    </Container>
  )
}

export default BusSearch