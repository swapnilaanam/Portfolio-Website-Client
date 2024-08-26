import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryClient, QueryClientProvider } from 'react-query'

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
