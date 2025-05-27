import { posts } from "../../constants";

function Writting() {
	return (
		<section id="posts" className="container section">
			<div className="section-title" data-aos="fade-up">
				<h2>Latest Posts</h2>
			</div>

			<div className="row">
				{posts.map((post) => (
					<div className="col-lg-6" key={post.id}>
						<div className="card  mb-3" data-aos="zoom-in" data-aos-delay={post.delay}>
							<div className="card-body">
								<h4 className="title">{post.title}</h4>
								<p className="card-text subtitle">{post.subtitle}</p>
								<a className="btn btn-sm btn-dark" target="_blank" href={post.link}>
									Read
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			<p className="text-center mt-4" data-aos="zoom-in" data-aos-delay="500">
				<a className="btn btn-dark" href="https://medium.com/@yuran.dejesus">
					Read more
				</a>
			</p>
		</section>
	);
}

export default Writting;
