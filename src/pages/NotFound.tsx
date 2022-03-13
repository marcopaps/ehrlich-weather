import { DefaultLink } from "../components";
import { BasicLayout } from "../layouts";

const LandingPage = () => {
  return (
    <BasicLayout>
      <div className="flex flex-col text-xl py-12 justify-center items-center">
        <div className="my-8">{"Page cannot be found"}</div>
        <DefaultLink to={"/"} label={"Back to home page"} />
      </div>
    </BasicLayout>
  );
};

export default LandingPage;
