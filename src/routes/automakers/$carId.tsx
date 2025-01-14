import { createFileRoute } from "@tanstack/react-router";
import { SpecificationPage } from "../../pages/specification-page/specification-page.tsx";

export const Route = createFileRoute("/automakers/$carId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { carId } = Route.useParams();
  console.log("carId", carId);
  return <SpecificationPage />;
}
