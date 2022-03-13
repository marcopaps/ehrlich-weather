import { AppRoutes } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const domain = process.env.REACT_APP_AUTH0_CLIENT_DOMAIN || "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
