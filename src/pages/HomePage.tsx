import { Button, SearchBox } from "../components";
import BasicLayout from "../layouts/Basic";

const HomePage = () => {
  return (
    <BasicLayout>
      <div className="block text-center">
        <div className="text-xl">John Smith</div>
        <div className="text-lg my-4">https://github.com/smithjohn</div>
        <div className="my-16 block">
          <SearchBox placeholder="City" />
          <Button label="Display weather" />
        </div>
      </div>
    </BasicLayout>
  );
};

export default HomePage;
