import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import HealthIcon from "./../../Assets/img/about/BehavioralIcon.webp";
import Slider from "react-slick";
import "./../../Assets/CSS/scriptpak.css"

const NextArrow = ({ onClick }) => (
  <div className="pk-arrow next" onClick={onClick}>
    <FaCaretRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="pk-arrow prev" onClick={onClick}>
    <FaCaretLeft />
  </div>
);

const ScriptCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
     responsive: [
    {
      breakpoint: 1440, // large desktop
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 1200, // medium desktop
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 1024, // tablets landscape
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 760, // tablets portrait
      settings: { slidesToShow: 1, arrows: false, dots: true }
    },
    {
      breakpoint: 500, // large mobile
      settings: { slidesToShow: 1, arrows: false, dots: true }
    },
    {
      breakpoint: 430, // iPhone 14 Pro Max & similar
      settings: { slidesToShow: 1, arrows: false, dots: true }
    },
    {
      breakpoint: 360, // very small mobile
      settings: { slidesToShow: 1, arrows: false, dots: true, autoplaySpeed: 2000 }
    }
  ],
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 768, settings: { slidesToShow: 1 } },
    // ],
  };

  const services = [
    {
      icon: HealthIcon,
      percetage:"50",
      title: "Of the 2 billion prescriptions filled yearly, in the United States, about 50% are taken incorrectly.",
      desc: "National Council for Patient Information and Education"
    },
    {
      icon: HealthIcon,
       percetage:"67",
      title: "Only one-third of patients take all of their medicines, while the remaining 67% don't take any or only fill some of their prescriptions.",
      desc: "Hayes, R.B.NCPIE Prescription Month, October 1989"
    }
  ];

  return (
    <section className="pk-services-section">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div className="pk-service-card" key={index}>
            <div className="pk-grid">
              <div className="pk-left">
                <p className="pk-percent">{service.percetage}%</p>
              </div>
              <div className="pk-right">
                <div className="slide-content">
                  <h2>
                    {service.title}
                  </h2>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ScriptCarousel;
