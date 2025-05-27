import { services } from "../../constants";
import ServiceItem from "./ServiceItem";
import "./services.css";

const Services = () => {
  return (
    <main className="bg-gray">
      <section id="services" className="container services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
        </div>

        <div className="row gy-4">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
