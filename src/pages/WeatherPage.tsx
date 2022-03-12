import { LinkButton } from "../components";
import BasicLayout from "../layouts/Basic";

const Th = ({ children }: { children: React.ReactChild }) => {
  return (
    <th className="border-b font-bold p-4 pl-8 pt-0 pb-3 text-left">
      {children}
    </th>
  );
};

const Td = ({ children }: { children: React.ReactChild }) => {
  return (
    <th className="border-b font-medium border-slate-100 p-4 pl-8 text-gray-500 text-left">
      {children}
    </th>
  );
};

const WeatherPage = () => {
  return (
    <BasicLayout>
      <div className="px-96">
        <div>
          <LinkButton label={"Back"} to={"/"} />

          <table className="border-collapse table-auto w-full text-sm font-medium mt-12">
            <thead>
              <tr>
                <Th>{"Date (mm/dd/yyy)"}</Th>
                <Th>{"Temp (F)"}</Th>
                <Th>{"Description"}</Th>
                <Th>{"Main"}</Th>
                <Th>{"Pressure"}</Th>
                <Th>{"Humidity"}</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
              <tr>
                <Td>{"09/01/2020"}</Td>
                <Td>{"75"}</Td>
                <Td>{"Sky is clear"}</Td>
                <Td>{"Clear"}</Td>
                <Td>{"1023.68"}</Td>
                <Td>{"100"}</Td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BasicLayout>
  );
};

export default WeatherPage;
