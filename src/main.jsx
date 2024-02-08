import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {MantineProvider} from '@mantine/core';
import './index.css'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

import {AuthProvider} from './store/auth.jsx';
import { Notifications } from '@mantine/notifications';


ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <Notifications/>
      <AuthProvider>
        <App/>
      </AuthProvider>
  </MantineProvider>,
)
