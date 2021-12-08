import Head from "next/Head";
import { MainComponent } from "../Components/MainComponent";
import Recorders from "../Components/Recorder";
const Home = () => {
  return (
    <>
      <div>
        {/* <MainComponent /> */}
        <Recorders />
      </div>
    </>
  );
};

export default Home;
