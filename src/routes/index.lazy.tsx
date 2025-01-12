import {createLazyFileRoute} from '@tanstack/react-router'
import {MainPage} from "../pages";

function HomeComponent() {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Таблица автопроизводителей</h2>
        <MainPage />
    </div>
  )
}
export const Route = createLazyFileRoute('/')({
    component: HomeComponent,
})
