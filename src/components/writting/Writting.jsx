import "./writting.css";
import { posts } from "../../constants";

function Writting() {
  return (
    <section id="posts" className="section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Latest Posts</h2>
      </div>

      <div id="cards" className="row gy-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-lg-6 col-md-12"
            data-aos="zoom-in"
            data-aos-delay={post.delay}
          >
            <div className="card">
              <div className="card-body">
                <h4 className="title">{post.title}</h4>
                <p className="card-text subtitle">{post.subtitle}</p>
                <a className="link" target="_blank" href={post.link}>
                  Read
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center" data-aos="zoom-in" data-aos-delay="500">
        <a className="link" href="https://medium.com/@yuran.dejesus">
          Read more
        </a>
      </p>
    </section>
  );
}

export default Writting;
