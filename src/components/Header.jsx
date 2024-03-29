import { Avatar, Box, Button, Collapse, Drawer, Flex, Group, HoverCard, Image, Modal, Paper, PasswordInput, Stack, Text, TextInput, Title, Tooltip } from '@mantine/core'
import airplane from './../assets/icons/airplane.png'
import hotel from "./../assets/icons/hotel.png"
import train from "./../assets/icons/train.png"
import bus from "./../assets/icons/bus.png"
import bag from "./../assets/icons/shopping-bag.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { useAuth } from '../store/auth'
import backgroundImg from './../assets/images/curve_img.svg'
import backgroundCircle from '../assets/images/background_circle.svg';
import backgroundBlueCircle from '../assets/images/background_blue_circle.svg';
import backgroundWave from '../assets/images/background_wave.svg';


const Header = () => {
  const locationReact = useLocation();
  const navigate = useNavigate();
  const [openedToggle,{toggle}] = useDisclosure(false);
  const [opened,{open,close}] = useDisclosure(false);
  const [name,setName] = useState("");
  const [emailSignup,setEmailSignup] = useState("");
  const [emailLogin,setEmailLogin] = useState("");
  const [passwordSignup,setPasswordSignup] = useState("");
  const [passwordLogin,setPasswordLogin] = useState("");
  const [loginControl,setLoginContol] = useState(false);
  const { storetokenInLS , isLoggedIn } = useAuth();
  const matches = useMediaQuery('(min-width:800px');


  const register = async () => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "projectID":"f104bi07c490"
      },
      body:JSON.stringify({
        "name":name,
        "email":emailSignup,
        "password":passwordSignup,
        "appType":"bookingportals"
      })
    });
    const data = await result.json();
    console.log(name,emailSignup,passwordSignup)
    storetokenInLS(data.token);
    console.log(data);
    setName("");
    setEmailSignup("");
    setPasswordSignup("");
    location.reload();
  }
  const login = async () => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "projectID":"f104bi07c490"
      },
      body:JSON.stringify({
        "email":emailLogin,
        "password":passwordLogin,
        "appType":"bookingportals"
      })
    });
    const data = await result.json();
    storetokenInLS(data.token);
    console.log(data);
    setEmailLogin("");
    setPasswordLogin("");
    location.reload();
  }
  

  return (
    <>
    <Paper shadow='sm'>
    <Flex justify='space-around' align='center' h="64px">
        <Box>
          <Link to={"/"} style={{textDecoration:'none'}}>
          <Title><span style={{color:'#f57842',fontSize:matches ? 40 : 25}}>go</span><span style={{color:'#0c7ef0',fontSize:matches ? 40 : 25}}>ibibo</span></Title>
          </Link>
        </Box>
        <nav>
          <div className='large_screen_nav'>
          <Group>
            <Button variant='subtle' color="dark" leftSection={<Image src={airplane} height={25} width={25}/>}
            onClick={()=>navigate("/")}
            >Flights</Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={hotel} height={25} width={25}/>}
            onClick={()=>navigate("/hotels/")}
            >Hotels</Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={train} height={25} width={25}/>}
            onClick={()=>navigate("/trains/")}
            >Trains</Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={bus} height={25} width={25}/>}
            onClick={()=>navigate("/buses/")}
            >Bus</Button>
          </Group>
          </div>
          <div className='small_screen_nav'>
          <Group>
            <Button variant='subtle' color="dark" leftSection={<Image src={airplane} height={25} width={25}/>}
            onClick={()=>navigate("/")}
            ></Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={hotel} height={25} width={25}/>}
            onClick={()=>navigate("/hotels/")}
            ></Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={train} height={25} width={25}/>}
            onClick={()=>navigate("/trains/")}
            ></Button>
            <Button variant='subtle' color="dark" leftSection={<Image src={bus} height={25} width={25}/>}
            onClick={()=>navigate("/buses/")}
            ></Button>
          </Group>
          </div>
        </nav>
          <Group>
            <div className='my_trip'>
              <Tooltip label="Access your bookings, easy cancellation, date change and much more">
                <Box>
                  <Group gap={10}>
                      <Box>
                        <Image src={bag} height={20} width={20}/>
                      </Box>
                      <Box>
                        <Text size='xs'>My Trips</Text>
                        <Text fw={600}>Manage Booking</Text>
                      </Box>
                  </Group>
                </Box>
              </Tooltip>
            </div>
        <Box>
          <HoverCard>
            <HoverCard.Target>
            {isLoggedIn ? 
                <Avatar/>
                :
              <Button style={{fontSize:matches ? 10 : 9}} onClick={open} variant='outline' leftSection={<Avatar radius="xl" color='white' size={25} />} radius='md'>LOGIN / SIGNUP</Button>
              }
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Box>
                <Text size='lg' fw={700}>Hey Traveller</Text>
                <Text size='sm'>Get exclusive deals & Manage your trips</Text>
              </Box>
              <Stack>
                {isLoggedIn ? 
                <Button onClick={()=>{navigate("/logout")}}>Logout</Button>
                :
                <Button onClick={open} variant='filled'>Login/Sign Up</Button>
              }
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>
        </Box>
        </Group>
    </Flex>
    <Modal opened={opened} onClose={close} title="Sign Up" centered>
      <Stack>
        <TextInput disabled={loginControl === true ? true : null} value={name} onChange={(e)=>setName(e.target.value)} label="Name" placeholder='eg. Amit' required/>
        <TextInput disabled={loginControl === true ? true : null} value={emailSignup} onChange={(e)=>setEmailSignup(e.target.value)} label="Email" placeholder='you@gmail.com' required/>
        <PasswordInput disabled={loginControl === true ? true : null} value={passwordSignup} onChange={(e)=>setPasswordSignup(e.target.value)} label="Password" placeholder='Your Password' required/>
      <Box>
      <Group justify='space-between'>
        <Box onClick={()=>setLoginContol(!loginControl)}>
          <Text style={{color:'gray',cursor:'pointer'}} onClick={toggle}>Have an account ? <Title component={"span"} order={5}>Login</Title></Text>
        </Box>
        <Button color="orange" onClick={register}>Register</Button>
      </Group>
      </Box>
      </Stack>
      <Collapse in={openedToggle}>
      <Stack>
        <TextInput value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)} label="Email" placeholder='you@gmail.com' required/>
        <PasswordInput value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)} label="Password" placeholder='Your Password' required/>
      <Box>
      <Group justify='space-between'>
        <Button color='orange' onClick={login}>Login</Button>
      </Group>
      </Box>
      </Stack>
      </Collapse>
    </Modal>
    </Paper>
    <Image src={backgroundImg}  style={{position:'absolute',zIndex:'-1',top:10,display:locationReact.pathname === "/" ? 'block' :'none'}}/>
    <Image src={backgroundCircle}  style={{position:'absolute',zIndex:'-1',top:10,display:locationReact.pathname === "/hotels/" ? 'block' :'none'}}/>
    <Image src={backgroundBlueCircle}  style={{position:'absolute',zIndex:'-1',top:10,display:locationReact.pathname === "/buses/" ? 'block' :'none'}}/>
    <Image src={backgroundWave}  style={{position:'absolute',zIndex:'-1',top:10,display:locationReact.pathname === "/trains/" ? 'block' :'none'}}/>
    </>
  )
}

export default Header