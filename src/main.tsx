import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserIdProvider } from './context/UserContext.tsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          <UserIdProvider>
            <App />
          </UserIdProvider>
        </AnimatePresence>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
