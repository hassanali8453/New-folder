import Image from "next/image";
import HomeImage from "@/Components/utils/assets/images/HomePagePhoto.png"

const HomePage = () => {
    return (
      <div className="min-h-screen">
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <Image 
            src={HomeImage} 
            alt="Restaurant Hero Image" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="z-10">
            <h1 className="text-5xl font-eduFont font-bold leading-tight">
              Savor the Flavors of Authentic Cuisine
            </h1>
            <p className="mt-4 font-normal text-2xl">
              Experience exquisite dishes, crafted with passion and served with love.
            </p>
            <button className="mt-6 px-8 py-3 font-myriad bg-green-600 hover:bg-green-700 rounded-lg text-2xl transition">
              Order Now
            </button>
          </div>
        </section>
      </div>
    );
  }
  
  export default HomePage;

