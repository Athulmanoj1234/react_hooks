"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Todos from './components/Todos';

const queryClient = new QueryClient();

const page = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    )
}

export default page
