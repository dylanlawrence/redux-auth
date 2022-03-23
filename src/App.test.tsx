import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import {PersistGate} from "redux-persist/integration/react"
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./mainTheme";
import {BrowserRouter} from "react-router-dom";
import {persistStore} from "redux-persist";
let persist = persistStore(store)

test('Main Test', () => {
  const { getByText } = render(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <ChakraProvider theme={theme}>
                  <BrowserRouter>
                      <App/>
                  </BrowserRouter>
              </ChakraProvider>
          </PersistGate>
      </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();

});
