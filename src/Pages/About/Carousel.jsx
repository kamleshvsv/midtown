import React from "react";
import Slider from "react-slick";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./../../Assets/CSS/about.css";
import HealthIcon from "./../../Assets/img/about/BehavioralIcon.webp"
import HIVIcon from "./../../Assets/img/about/SpecialtyIcon.webp"
import CareIcon from "./../../Assets/img/about/LongTermIcon.webp"
import AdditonalCare from "./../../Assets/img/about/AddictionIcon.webp"
import OtherIcon from "./../../Assets/img/about/340BIcon.webp"

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaCaretRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaCaretLeft />
  </div>
);

const ServicesCarousel = () => {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3, // default desktop view (3 cards)
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: { slidesToShow: 2, arrows: false, dots: true }
    },
    {
      breakpoint: 767, // mobile
      settings: { slidesToShow: 1, arrows: false, dots: true }
    }
  ]
};



  const services = [
    {
      icon: HealthIcon,
      title: "Behavioral Health",
      desc: "In addition to providing organized oral medications in blister packs and clozapine lab monitoring, we coordinate and schedule injections to be administered at the pharmacy, home or clinic.",
    },
    {
      icon: HIVIcon,
      title: "HIV/AIDS",
      desc: "We work closely with prescribers and nurses to help clients stay compliant with the right regimen and monitor side effects. ",
    },
    {
      icon: CareIcon,
      title: "Long-Term Care",
      desc: "We provide multi-dose blister packs, free delivery and eMARs to simplify medication management. ",
    },
    
    {
      icon: AdditonalCare,
      title: "Addiction Care",
      desc: "Confidential, medication assistance for those experiencing substance abuse.",
    },
    
    {
      icon: OtherIcon,
      title: "340B",
      desc: "We contract with local FQHCs to better manage access to medications.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">
        Our focused specialized pharmacy services
      </h2>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-circle"><img src={service.icon} /></div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ServicesCarousel;
