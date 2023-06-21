import { NextPage } from "next";
import Footer from "~/components/footer";
import Nav from "../components/nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />

      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-100">
          <img className="opacity-50 flex h-screen" src={'https://www.kirkerholidays.com/media/image-cache/71f8e2eb-33dd-4cda-bbca-e0ed12169097/1920-765-1-2392-1250/1479983794-shutterstock_319406804ejpg.jpg'} alt="" />
        </div>
        <div className="hero-content text-center text-neutral-content flex">
        <div className="card card-compact w-96 bg-white shadow-xl flex-5 ">
            <figure><img src="https://greenmarmot.com/images/capsules/2_Kapselhotel.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Capsules</h2>
              <p>Climb in to your own cosy and private capsule</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          </div>
          <div className="flex-5 mx-auto ">
            <h1 className="mb-5 text-5xl font-bold text-gray-100">Green Marmot</h1>
            <p className="mb-5 text-white font-mono">The smart city sleep-over</p>
            <br />
            {/* <a href="#" className="mt-8 bg-accent hover:bg-success text-white font-bold py-4 px-8 rounded-full">Book Now</a> */}
          </div>
        
        </div>
      </div>

      <Footer />
    </>

  );
};

export default Home;