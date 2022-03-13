import { LoginButton } from "../components";
import { BasicLayout } from "../layouts";

const LandingPage = () => {
  return (
    <BasicLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 text-xl py-12">
        <div></div>
        <div>
          <div>
            {
              "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city."
            }
          </div>
          <div className={"mt-8"}>
            <LoginButton />
          </div>
        </div>
        <div></div>
      </div>
    </BasicLayout>
  );
};

export default LandingPage;
