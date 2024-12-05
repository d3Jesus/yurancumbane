import './project.css'

function Project() {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <section id='projects' className="section">
            <h3 className="section-title" data-aos="fade-up">Recent Projects</h3>

            <div className='row gy-3'>
                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="100">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src='./yurancumbane.PNG' className='img-fluid' alt='yuran cumbane portfolio image' />
                                </div>
                                <div className='col-8'>
                                    <h4 className='title'>yurancumbane</h4>
                                    <p className='card-text subtitle'>A personal portfolio that highlights my skills, showcase projects demonstrating how I can contribute to the success of your bussiness or project. </p>
                                    <span className="badge"> Vite + ReactJs </span>
                                    <span className="badge"> Bootstrap </span>
                                    <span className="badge"> Figma </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12'data-aos="zoom-in" data-aos-delay="200">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4 text-white">
                                    <img src={BASE_URL + "/cashWhiz_dashboard.PNG"} className='img-fluid' alt='cashwhiz image' />
                                </div>
                                <div className='col-8'>
                                    <h4 className='title'>CashWhiz</h4>
                                    <p className='card-text subtitle'>A finance system designedto efficiently manage and control expenses with a user-friendly, streamlined approach.</p>
                                    <span className="badge"> Blazor </span>
                                    <span className="badge"> Supabase </span>
                                    <span className="badge"> Chart.Js </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12'data-aos="zoom-in" data-aos-delay="300">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4 text-white">
                                    <img src={BASE_URL + "/vino.PNG"} className='img-fluid' alt='vino image' />
                                </div>
                                <div className='col-8'>
                                    <h4 className='title'>Vino</h4>
                                    <p className='card-text subtitle'>An inventory management system designed to help bussinesses in efficiently track, manage, and control their product stock and operations. </p>
                                    <span className="badge"> Blazor </span>
                                    <span className="badge"> EF Core </span>
                                    <span className="badge"> MySQL </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="400">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4 text-white">
                                    <img src={BASE_URL + "/cover.PNG"} className='img-fluid' alt='AuthenticationWithSupabase image' />
                                </div>
                                <div className='col-8'>
                                    <h4 className='title'>AuthenticationWithSupabase</h4>
                                    <p className='card-text subtitle'>A demonstration ilustrating how to authenticate a Blazor Server application using Supabase for secure user authentication and access management. </p>
                                    <span className="badge"> Blazor </span>
                                    <span className="badge"> Supabase </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-center' data-aos="zoom-in" data-aos-delay="500">
                <a className='link' href='https://github.com/d3Jesus'>
                    View more
                </a>
            </p>
        </section>
    )
}

export default Project