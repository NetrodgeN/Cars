import {createLazyFileRoute} from '@tanstack/react-router'
import {MainPage} from "../pages";

function HomeComponent() {
  return (
    <div>
        <h3>Таблица автопроизводителей</h3>
        <MainPage />
    </div>
  )
}
export const Route = createLazyFileRoute('/')({
    component: HomeComponent,
})
