import { Carousel } from '@mantine/carousel';
import { Card, Container, Image, Text } from '@mantine/core';
import { useEffect, useState } from 'react'



const OffersTrains = () => {
    const [offers,setOffers] = useState([]);

    useEffect(()=>{
        const fetchOffers = async () => {
            const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=50`,{
                headers:{
                    "projectID":"f104bi07c490"
                }
            });
            const { data } = await results.json();
            setOffers(data.offers);
            console.log(data);
        }

        fetchOffers();
    },[])
  return (
    <Container>
        <Carousel
        my="20"
            height={200}
            slideSize="40.333%"
            slideGap="sm"
            align="start"  
        >
        {
            offers.map((e)=>{
                return (
                    <Carousel.Slide key={e.id}>
                        <Card shadow="sm" withBorder radius='md' style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}> 
                            <Image src={e.newHeroUrl} alt="error" style={{height:150,width:150}} radius="md"/>
                            <Text>{e.pTl}</Text>
                        </Card>
                    </Carousel.Slide>
                )
            }) 
        }
        </Carousel>
    </Container>
  )
}

export default OffersTrains