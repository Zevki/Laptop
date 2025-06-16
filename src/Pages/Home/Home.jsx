import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";

const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div>

      {/* delivery component */}
      <div className="delivery_component w-full min-h-[#150px]">
        <Delivery></Delivery>
      </div>

      {/* brand component  */}
      <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
        <Brand></Brand>
      </div>
    </div>
  );
};

export default Home;
