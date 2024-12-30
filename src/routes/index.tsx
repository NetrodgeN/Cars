import { createFileRoute } from '@tanstack/react-router'
import App from "../App.tsx";

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div>
        <App />
      <h3>Welcome Home!</h3>
    </div>
  )
}
