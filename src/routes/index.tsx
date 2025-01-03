import { createFileRoute } from '@tanstack/react-router'
import {MainPage} from "../pages";

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div>
        <MainPage />
      <h3>Welcome Home!</h3>
    </div>
  )
}
