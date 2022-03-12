import { DefaultButton } from "../components";
import { BasicLayout } from "../layouts";

const LandingPage = () => {
  return (
    <BasicLayout>
      <div className="text-xl px-96 py-24">
        {
          "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city."
        }
        <div className={"mt-8"}>
          <DefaultButton label={"Login"} />
        </div>
      </div>
    </BasicLayout>
  );
};

export default LandingPage;
