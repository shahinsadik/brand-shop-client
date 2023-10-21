import {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div className="-z-50" 
            data-aos="fade-zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" 
            >
        <img
          className="w-full "
          src="https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/300230656_213039227715716_269826414746236093_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nx3va96JKI0AX-wWvCJ&_nc_ht=scontent.frjh3-1.fna&oh=00_AfCCiEjvfF6iIXf9lLTnYnyCa2bQGOa5xf-CzFExMB3s4Q&oe=6538A6D5"
          alt=""
        />
      </div>
        </div>
    );
};

export default Banner;