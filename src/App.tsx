import {RouterProvider} from "react-router";
import routes from "./pages/Routes.tsx";
import './App.css'

function App() {

  return (
        <RouterProvider router={routes} />
  )
}

export default App
