import './index.css'

import App from './App'
import { ContactsProvider } from '@/contexts/useContacts'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ContactsProvider>
            <App />
        </ContactsProvider>
    </React.StrictMode>
)
