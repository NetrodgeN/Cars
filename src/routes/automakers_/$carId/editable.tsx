import { createFileRoute } from "@tanstack/react-router";
import { EditableSpecificationPage } from "../../../pages/specification-page/editable-specification-page.tsx";

export const Route = createFileRoute("/automakers_/$carId/editable")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EditableSpecificationPage />;
}
