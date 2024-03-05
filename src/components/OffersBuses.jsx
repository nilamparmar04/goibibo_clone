import { Carousel } from '@mantine/carousel';
import { Card, Container, Image, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react'



const OffersBuses = () => {
    const [offers, setOffers] = useState([]);
    const matches = useMediaQuery('(min-width:500px');

    useEffect(() => {
        const fetchOffers = async () => {
            const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/offers?limit=50`, {
                headers: {
                    "projectID": "f104bi07c490"
                }
            });
            const { data } = await results.json();
            setOffers(data.offers);
            console.log(data);
        }

        fetchOffers();
    }, [])
    return (
        <Container size='xl'>
            <Carousel my="20"
                height={200}
                slideSize="40.333%"
                slideGap="sm"
                align="start"
                orientation={matches ? "horizontal" : 'vertical'}
            >
                {
                    offers.map((e) => {
                        return (
                            <Carousel.Slide key={e._id}>
                                <Card shadow="sm" withBorder radius='md' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                                    <Image src={e.newHeroUrl} alt="error" style={{ height: 150, width: 150 }} radius="md" />
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

export default OffersBuses