import { AppRoutes } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
