import Button from "../components/Button";
import { useIsLoggedIn } from "../hooks";
interface LayoutProps {
  children: React.ReactNode;
}

const Navigation = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className="border-b-2 py-8 px-24 flex w-full">
      <div className="text-2xl">Weather Forecast</div>
      {isLoggedIn && (
        <div className="ml-auto">
          <Button label={"Logout"} />
        </div>
      )}
    </div>
  );
};

const HomePage = (props: LayoutProps) => {
  return (
    <main>
      <Navigation />
      <div className="py-8 px-24">{props.children}</div>
    </main>
  );
};

export default HomePage;
