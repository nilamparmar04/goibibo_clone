import { Center, Container, Grid, Pagination, Paper, Space } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


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
  ""
]

const TrainSearch = () => {
  const params = useParams();
  const [trains,setTrains] = useState([]);

    useEffect(()=> {
        const fetchTrains = async () => {
            const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/train?search={"source":"${params.from}","destination":"${params.to}"}&day=${params.day}`,{
                headers:{
                    "projectID":"f104bi07c490"
                }
            });
         const { data } = await results.json();
         console.log(data);
        } 
 
        fetchTrains()
     },[])
  return (
    <Container>
      <Space h={30}/>
    <Grid>
      <Grid.Col span={4}>
        <Paper>
          FDSFDSFDSFDFD
        </Paper>
      </Grid.Col>
      <Grid.Col span={8}>
        {}
      </Grid.Col>
    </Grid>
    <Space h={30} />
    <Center>
      <Pagination total={20}/>
    </Center>
    <Space h={30}/>
    </Container>
  )
}

export default TrainSearch