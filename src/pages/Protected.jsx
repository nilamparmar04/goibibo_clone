import { notifications } from '@mantine/notifications';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("token");
        const showNotification = () => {
            notifications.show({
                title:"We notify you that",
                message:"You need to Login",
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