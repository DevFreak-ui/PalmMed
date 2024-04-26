import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/index.tsx"
import {Provider} from "react-redux"
import store from "./redux/store.ts"
import "./index.css";
import { SnackbarProvider } from "notistack"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <SnackbarProvider>
         <AppRoutes />
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
