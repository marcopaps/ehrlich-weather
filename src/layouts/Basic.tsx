import { LogoutButton } from "../components";
import { useIsLoggedIn } from "../hooks";
import logo from "../logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="flex border-b-2 p-4 md:p-8 w-full">
      <div className="flex items-center">
        <img src={logo} className="h-12 w-16" alt="logo" />
        <div className="text-xl md:text-2xl px-4 font-bold">
          Weather Forecast
        </div>
      </div>
      {isLoggedIn && (
        <div className="ml-auto">
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

const HomePage = (props: LayoutProps) => {
  return (
    <main>
      <Navigation />
      <div className="p-8 md:p-12">{props.children}</div>
    </main>
  );
};

export default HomePage;
