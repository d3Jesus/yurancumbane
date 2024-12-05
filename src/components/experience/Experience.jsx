import './experience.css'
import AOS from 'aos'
import { useEffect } from 'react'

function Experience () {
    
    useEffect(() =>{
        AOS.init()
    },[])

    return (
        <section id='experiences' className="section">
            <h3 className="section-title" data-aos="fade-up">Experience</h3>

            <div className="row gy-4">
                <div className="col-lg-4 col-sm-12" data-aos="fade-right" data-aos-delay="100">
                    <h3 className="experience-duration">
                        2020 - 2022
                    </h3>
                </div>
                <div className='col' data-aos="fade-left" data-aos-delay="200">
                        <h2 className='role-company'>
                            Web Full Stack Developer * Database, Lda
                        </h2>
                        <p className="achievements">
                            Committed to delivering effective solutions, I led a team of two technicians
                             in the optimization and maintenance of critical systems. For three months, 
                             I led the first phase of the development of a new management system, 
                             in addition to making refinements in C# code and SQL instructions, 
                             resulting in a significant increase in system performance.
                        </p>
                        <span className="badge tech-stack"> C# </span>
                        <span className="badge tech-stack"> Entity Framework </span>
                        <span className="badge tech-stack"> Asp.Net MVC </span>
                        <span className="badge tech-stack"> SQL Server </span>
                        <span className="badge tech-stack"> Azure DevOps </span>
                        <span className="badge tech-stack"> SQL </span>
                        <span className="badge tech-stack"> JavaScript </span>
                    </div>
            </div>
        </section>
    )
}

export default Experience