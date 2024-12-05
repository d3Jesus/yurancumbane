import './writting.css'

function Writting() {
    return (
        <section id='writting' className="section">
            <h3 className="section-title" data-aos="fade-up">Latest Posts</h3>

            <div id='cards' className='row gy-3'>
                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="100">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='title'>Autenticação Social com Supabase</h4>
                            <p className='card-text subtitle'>Simplifique o login do seu app com Google, Facebook e outros provedores.</p>
                            <a className='link' target='_blank' href='https://medium.com/@yuran.dejesus/autentica%C3%A7%C3%A3o-social-com-supabase-44d049df8680'>
                                Read
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="200">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='title'>Blazor Server: Globalização e Localização</h4>
                            <p className='card-text subtitle'>Implementando Globalização e Localização em Blazor Server em .NET 8</p>
                            <a className='link' target='_blank' href='https://medium.com/@yuran.dejesus/blazor-server-globaliza%C3%A7%C3%A3o-e-localiza%C3%A7%C3%A3o-6941cb9cd711'>
                                Read
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="300">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='title'>Modos de renderização do Blazor</h4>
                            <p className='card-text subtitle'>Escolha o melhor modo para sua aplicação Blazor</p>
                            <a className='link' target='_blank' href='https://medium.com/@yuran.dejesus/modos-de-renderiza%C3%A7%C3%A3o-do-blazor-729be81878c8'>
                                Read
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-12' data-aos="zoom-in" data-aos-delay="400">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='title'>Ars-Imaginis: Gerador de imagens alimentado por IA</h4>
                            <p className='card-text subtitle'>Meu primeiro projecto usando IA</p>
                            <a className='link' target='_blank' href='https://medium.com/@yuran.dejesus/ars-imaginis-gerador-de-imagens-alimentado-por-ia-2a1a3918b72e'>
                                Read
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <p className='text-center' data-aos="zoom-in" data-aos-delay="500">
                <a className='link' href='https://medium.com/@yuran.dejesus'>
                    Read more
                </a>
            </p>
        </section>
    )
}

export default Writting