import {RouterProvider} from "react-router";
import './App.css'
import routes from "@/pages/routes";

function App() {

  return (
        <RouterProvider router={routes} />
  )
}

export default App
