import { Button, Carousel } from "antd";
import { useRouter } from "next/router.js";
import Title from "./Title.jsx";


const Karussell = () => {
 const router =useRouter()
  return (
    <div
      style={{
        backgroundImage: `url("images/hero-bg.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        backgroundPosition: "center",
        width: "100%",
        paddingTop:"50px"
      }}
    >
      <div  className={`${router.asPath === "/" && "-mt-[88px]"} lg:w-[40vw] md:w-[80vw] w-[90vw]`}>

      <Carousel  autoplay autoplaySpeed={5000} dots dotPosition="bottom">
        <div className="sm:mt-40 pl-40 mt-40 text-white flex justify-start items-center h-[400px] ">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
          <p className="text-sm mt-10 mb-10">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <Button className="btn-primary rounded-xl flex justify-center items-center">Jetzt bestellen</Button>
        </div>
        <div className="sm:mt-40 pl-40 mt-40 text-white flex justify-start items-center h-[400px] ">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
          <p className="text-sm mt-10 mb-10">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <Button className="btn-primary rounded-xl flex justify-center items-center">Jetzt bestellen</Button>
        </div>
        <div className="sm:mt-40 pl-40 mt-40 text-white flex justify-start items-center h-[400px] ">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
          <p className="text-sm mt-10 mb-10">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <Button className="btn-primary rounded-xl flex justify-center items-center">Jetzt bestellen</Button>
        </div>
        
      </Carousel>
      </div>
    </div>
  );
};

export default Karussell;
