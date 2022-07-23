import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";

export default function App() {
  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </ChakraProvider>
    </>
  );
};