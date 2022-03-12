import Button from "../components/Button";

interface LayoutProps {
  children: React.ReactNode;
}

interface NavigationProps {
  isLoggedIn: boolean;
}
const Navigation = (props: NavigationProps) => {
  return (
    <div className="border-b-2 py-8 px-24 flex w-full">
      <div className="text-2xl">Weather Forecast</div>
      {props.isLoggedIn && (
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
      <Navigation isLoggedIn={true} />
      <div className="py-8 px-24">{props.children}</div>
    </main>
  );
};

export default HomePage;
