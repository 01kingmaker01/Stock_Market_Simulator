import tw from "twin.macro";
import BottomCon from "../components/BottomCon";
import LeftSideBar from "../components/LeftSideBar";
import MiddleCon from "../components/MiddleCon";
import TopBar from "../components/TopBar";

const Container = tw.div`flex h-screen w-screen`;
const Center = tw.div`flex flex-col h-screen overflow-y-scroll scrollbar-hide  w-[95%]`;

const Dashboard = () => {
  return (
    <Container>
      <LeftSideBar />
      <Center>
        <TopBar />
        <MiddleCon />
        <BottomCon />
      </Center>
    </Container>
  );
};
export default Dashboard;
