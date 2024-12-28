import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = ({ icon, title, description, delay }) => {
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="service-item position-relative">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
