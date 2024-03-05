import { Button, Drawer, Group, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DrawerForMobile = () => {
    const [opened,{open,close}] = useDisclosure(false);
    const navigate = useNavigate();
  return (
    <div>
        <Drawer offset={8} radius='md' opened={opened} onClose={close} position='right'>
        <Group>
            <Button variant='subtle' color="dark" 
            onClick={()=>navigate("/")}
            >Flights</Button>
            <Button variant='subtle' color="dark" 
            onClick={()=>navigate("/hotels/")}
            >Hotels</Button>
            <Button variant='subtle' color="dark" 
            onClick={()=>navigate("/trains/")}
            >Trains</Button>
            <Button variant='subtle' color="dark"
            onClick={()=>navigate("/buses/")}
            >Bus</Button>
          </Group>
        </Drawer>
    </div>
  )
}

export default DrawerForMobile