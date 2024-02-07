import { Text, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("token");
        const showNotification = () => {
            notifications.show({
                title:<Title order={2}>We Notify You That</Title>,
                message:<Title c='dark' order={1}>You Need To Login</Title>,
            })
        }
        if(!login){
            navigate("/");
            showNotification();
        }


    })
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected