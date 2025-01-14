import {createLazyFileRoute} from '@tanstack/react-router'

function HomeComponent() {
  return (
    <div>
        main
    </div>
  )
}
export const Route = createLazyFileRoute('/')({
    component: HomeComponent,
})
