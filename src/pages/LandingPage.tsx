import BasicLayout from "../layouts/Basic";

const LandingPage = () => {
  return (
    <BasicLayout>
      <div className="text-xl px-72">
        {
          "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city."
        }
      </div>
    </BasicLayout>
  );
};

export default LandingPage;
