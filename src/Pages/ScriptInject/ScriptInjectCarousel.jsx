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

const ScriptInjectCarousel = () => {
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
      breakpoint: 768, // tablets portrait
      settings: { slidesToShow: 1, arrows: false, dots: true}
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
      percetage : "3",
      title:"About 8.5 million American adults live with bipolar disorder or schizophrenia.",
      desc:"Report of the APhA Stakeholder Conference on Improving Patient Access to Injectable Medications,” Jann B. Skelton, Journal of the American Pharmacists Association, July-August 2017. "
    },
    {
      icon: HealthIcon,
      percetage:"60",
      title: "Up to 60% of people with bipolar disorder may not take medications as prescribed.", 
      desc: "“Medication Adherence in Schizophrenia: Factors Influencing Adherence and Consequences of Nonadherence, A Systematic Literature Review,” Kyoko Higashi, Therapeutic Advances in Psychopharmacology, August 2013. "
    },
    {
      icon: HealthIcon,
       percetage:"74",
      title: "One study found that 74% of people experiencing schizophrenia discontinued medications within 18 months.",
      desc: "“Medication Adherence in Schizophrenia: Factors Influencing Adherence and Consequences of Nonadherence, A Systematic Literature Review,” Kyoko Higashi, Therapeutic Advances in Psychopharmacology, August 2013. "
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

export default ScriptInjectCarousel;
