import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import { worker } from "./mocks/browser"

import { persistStore } from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"
let persist = persistStore(store)

worker.start({quiet: true}).then(() =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                <ChakraProvider>
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
