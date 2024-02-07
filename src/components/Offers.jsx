import { Card, Center, Container, Flex, Group, Image, Pagination, Paper, Space, Stack, Tabs, Text, Title } from '@mantine/core'
import {Carousel} from '@mantine/carousel'
import  { useEffect, useState } from 'react'

const Offers = () => {
    const [offers,setOffers] = useState([]);
    const [activeTab,setActiveTab] = useState("ALL");

    useEffect(()=>{
        const fetchOffers = async () => {
            const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"${activeTab}"}&limit=29`,{
                headers:{
                    "projectID":"f104bi07c490"
                }
            });
            const { data } = await results.json();
            setOffers(data.offers);
            console.log(data);
        }

        fetchOffers();
    },[activeTab])
  return (
    <Container size='xl'>
        <Paper shadow='sm'  withBorder p='lg' radius='lg'>
            <Stack gap='lg'>
                <Title order={2} ta='center'>Offers For You</Title>
                <Tabs variant='pills' defaultValue="ALL" value={activeTab} onChange={setActiveTab} >
                    <Tabs.List grow>
                        <Tabs.Tab value='ALL'>All</Tabs.Tab>
                        <Tabs.Tab value='FLIGHTS'>Flights</Tabs.Tab>
                        <Tabs.Tab value='HOTELS'>Hotels</Tabs.Tab>
                        <Tabs.Tab value='RAILS'>Trains</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value='ALL'>
                        <Carousel
                            my="20"
                            height={200}
                            slideSize="40.333%"
                            slideGap="sm"
                            align="start"
                            
                        >
                        {
                            activeTab === "ALL"  
                            ? 
                            offers.map((e)=>{
                                return (
                                    <Carousel.Slide key={e.id} >
                                        <Card shadow="sm" withBorder radius='md' style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}> 
                                            <Image src={e.newHeroUrl} alt="error" style={{height:150,width:150}} radius="md"/>
                                            <Text>{e.pTl}</Text>
                                        </Card>
                                    </Carousel.Slide>
                                )
                            }) :  (<></>)
                        }
                        </Carousel>
                    </Tabs.Panel>
                    <Tabs.Panel value='FLIGHTS'>
                        <Carousel
                            my="20"
                                height={200}
                                slideSize="40.333%"
                                slideGap="sm"
                                align="start"
                                
                            >
                            {
                                activeTab === "FLIGHTS"  
                                ? 
                                offers.map((e)=>{
                                    return (
                                        <Carousel.Slide key={e.id} >
                                            <Card shadow="sm" withBorder radius='md' style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}> 
                                            <Image src={e.newHeroUrl} alt="error" style={{height:150,width:150}} radius="md"/>
                                            <Text>{e.pTl}</Text>
                                            </Card>
                                        </Carousel.Slide>
                                    )
                                }) :  (<></>)
                            }
                        </Carousel>
                    </Tabs.Panel>
                    <Tabs.Panel value='HOTELS'>
                    <Carousel
                        my="20"
                            height={200}
                            slideSize="40.333%"
                            slideGap="sm"
                            align="start"
                            
                        >
                        {
                            activeTab === "HOTELS"  
                            ? 
                            offers.map((e)=>{
                                return (
                                    <Carousel.Slide key={e.id} >
                                        <Card shadow="sm" withBorder radius='md' style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}> 
                                            <Image src={e.newHeroUrl} alt="error" style={{height:150,width:150}} radius="md"/>
                                            <Text>{e.pTl}</Text>
                                        </Card>
                                    </Carousel.Slide>
                                )
                            }) :  (<></>)
                        }
                        </Carousel>
                    </Tabs.Panel>
                    <Tabs.Panel value='RAILS'>
                    <Carousel
                        my="20"
                            height={200}
                            slideSize="40.333%"
                            slideGap="sm"
                            align="start"
                            
                        >
                        {
                            activeTab === "RAILS"  
                            ? 
                            offers.map((e)=>{
                                return (
                                    <Carousel.Slide key={e.id}>
                                        <Card shadow="sm" withBorder radius='md' style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}> 
                                            <Image src={e.newHeroUrl} alt="error" style={{height:150,width:150}} radius="md"/>
                                            <Text>{e.pTl}</Text>
                                        </Card>
                                    </Carousel.Slide>
                                )
                            }) :  (<></>)
                        }
                        </Carousel>
                    </Tabs.Panel>
                </Tabs>
            </Stack>
        </Paper>
    </Container>
  )
}

export default Offers