import { createFileRoute } from "@tanstack/react-router";
import { MainPage } from "../../pages";

export const Route = createFileRoute("/automakers/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Таблица автопроизводителей</h2>
      <MainPage />
    </div>
  );
}
