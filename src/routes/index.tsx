import { Route, Routes as Switch } from "react-router-dom"
import { Company } from "../pages/Company"
import { Home } from "../pages/Home"
import { Number } from "../pages/Number"

export const Routes: React.FC = ({ }) => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/company/:id" element={<Company />} />
      <Route path="/number/:id" element={<Number />} />
    </Switch>
  )
}
