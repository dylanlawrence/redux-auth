import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import {worker} from "./mocks/browser"

import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"

let persist = persistStore(store)


import {extendTheme} from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({colors})

worker.start({onUnhandledRequest: 'bypass', quiet: true}).then(() =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <ChakraProvider theme={theme}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </ChakraProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
