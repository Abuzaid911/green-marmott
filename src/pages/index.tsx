import { type NextPage } from "next";
import Nav from "../components/Nav"


const Home: NextPage = () => {

  return (
    <>

    <Nav/>


      {/* <header className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to Green Marmot</h1>
          <p className="mt-4 text-lg">Experience luxury at its finest</p>
          <div>
            <br/> <br/>
          </div>
          <a href="#" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full">Book Now</a>
        </div>
      </header> */}


      {/* <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Featured Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img src="room1.jpg" alt="Room 1" className="w-full mb-4 rounded-lg"/>
                <h3 className="text-xl font-bold">Deluxe Room</h3>
                <p className="mt-2 text-gray-600">Starting from $200 per night</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img src="room2.jpg" alt="Room 2" className="w-full mb-4 rounded-lg"/>
                <h3 className="text-xl font-bold">Executive Suite</h3>
                <p className="mt-2 text-gray-600">Starting from $300 per night</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img src="room3.jpg" alt="Room 3" className="w-full mb-4 rounded-lg"/>
                <h3 className="text-xl font-bold">Penthouse</h3>
                <p className="mt-2 text-gray-600">Starting from $500 per night</p>
            </div>
          </div>
        </div>
      </section> */}

{/* 
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Hotel Name. All rights reserved.</p>
        </div>
      </footer> */}

      </>

  );
};

export default Home;