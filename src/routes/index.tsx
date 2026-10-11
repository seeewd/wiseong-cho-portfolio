import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PortfolioPage />;
}
