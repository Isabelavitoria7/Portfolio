import { Metadata } from "next"
import { ChevronDown, Link, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: "Home: Portfólio",
  description:"Portfólio Isabela Vitória",
  openGraph:{
    title: 'Portfólio Isabela Vitória',
    description: 'Veja meu portfólio e projetos!',
    // images: ['https://s3-alpha.figma.com/hub/file/6260980578/b5d2e8be-3b86-483f-9691-7230d327d28a-cover.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index:true,
      follow:true
    }
  }
}

export default function Home(){
  return(
    <main className="bg-black">
          <div className="flex flex-col md:flex-row md:p-12">
            <div className="flex flex-col p-5 text-left" id="sobre">
              <h1 className = "text-4xl mt-2">"Hello, World!" Meu nome é <span className="text-[#9f63b7]">Isabela Vitória</span></h1>
              <p className="text-1xl w-[90%] md:w-[60%] mt-8">Cursando 5° período de Engenharia da computação na UEMG-Divinópolis, tenho conhecimentos em algorítimos e estrutura de dados e noções das principais tecnologias utilizadas para desenvolvimento Web. Busco experiência para aprimorar e desenvolver essas habilidades e colaborar em um projeto real.</p>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Isabelavitoria7" target="_blank">
                  <img src="/img/github.svg" alt="GitHub" className="w-8 h-8"/>
                </a>
                <a href="https://www.linkedin.com/in/isabelavitoria7/" target="_blank">
                  <img src="/img/linked.svg" alt="LinkedIn" className="w-8 h-8"/>
                </a>
                <a href="https://wa.me/5537991225273" target="_blank">
                <img src="/img/whatsapp.svg" alt="WhatsApp" className="w-8 h-8"/>
                </a>
              </div>
              <ChevronDown className="text-9xl hidden md:block mt-20"/>
            </div>
            <div>
              <img src="/img/perfil.png" alt="perfil-img" className="md:w-[600px] lg:w-[700px]"/>
            </div>
          </div>

          <div className="flex flex-col p-2 md:p-6">
            <h1 className="text-4xl" id="projetos">Projetos</h1>
            <div className="cards grid grid-cols-1 md:grid-cols-3 gap-6 p-5 mt-3">
              <div className="container-card mt-2 border rounded-lg p-1">
                <div className="container-img">
                  <img src="/img/gym-lp.jpg" alt="lp-img" />
                </div>
                <h2 className="mt-3">Landing page para academia 🦾</h2>
                <div className="flex items-center gap-2 mt-3 p-1">
                  <Link />
                  <a
                    href="https://isabelavitoria7.github.io/Gym-Landing-Page/"
                    target="_blank"
                    className="text-[#9f63b7] hover:underline"
                  >
                    Link para visualização
                  </a>
                  
                </div>

                <div className="flex items-center gap-2 mt-3 p-1">
                  <Github />
                  <a
                    href="https://github.com/Isabelavitoria7/Gym-Landing-Page"
                    target="_blank"
                    className="text-[#9f63b7] hover:underline"
                  >
                    Link do repositório
                  </a>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <img src="/img/html.svg" alt="HTML" className="w-6 h-6" />
                  <img src="/img/css.svg" alt="CSS" className="w-6 h-6" />
                  <img src="/img/js.svg" alt="JavaScript" className="w-6 h-6" />
                </div>
              </div>

              <div className="container-card mt-2 border rounded-lg p-1">
                <div className="container-img">
                  <img src="/img/blue.jpg" alt="lp-img" />
                </div>
                <h2 className="mt-3">Landing page para e-commerce 💻</h2>
                <div className="flex items-center gap-2 mt-3 p-1">
                  <Link />
                  <a
                    href="https://isabelavitoria7.github.io/Ecommerce-BLUESTORY/"
                    target="_blank"
                    className="text-[#9f63b7] hover:underline"
                  >
                    Link para visualização
                  </a>
                  
                </div>

                <div className="flex items-center gap-2 mt-3 p-1">
                  <Github />
                  <a
                    href="https://github.com/Isabelavitoria7/Ecommerce-BLUESTORY"
                    target="_blank"
                    className="text-[#9f63b7] hover:underline"
                  >
                    Link do repositório
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <img src="/img/html.svg" alt="HTML" className="w-6 h-6" />
                  <img src="/img/css.svg" alt="CSS" className="w-6 h-6" />
                  <img src="/img/js.svg" alt="JavaScript" className="w-6 h-6" />
                </div>
              </div>

              <div className="container-card mt-2 border rounded-lg p-1">
                <div className="container-img">
                  <img src="/img/caecomp.jpg" alt="lp-img" />
                </div>
                <h2 className="mt-3 p-1">Página em Desenvolvimento para centro acadêmico de engenharia da computação - UEMG ⚙️</h2>
                <div className="flex items-center gap-2 mt-3 p-1">
                  <Link />
                  <a
                    href="https://caecomp.vercel.app/"
                    target="_blank"
                    className="text-[#9f63b7] hover:underline"
                  >
                    Link para visualização
                  </a>
                  
                </div>

                <div className="flex items-center gap-2 mt-3 p-1">
                  <Github />
                  <a
                    href=""
                    target="_blank"
                    className="text-[gray] hover:underline"
                  >
                    Link do repositório
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <img src="/img/html.svg" alt="HTML" className="w-6 h-6" />
                  <img src="/img/css.svg" alt="CSS" className="w-6 h-6" />
                  <img src="/img/js.svg" alt="JavaScript" className="w-6 h-6" />
                  <img src="/img/bootstrap.svg" alt="bootstrap" className="w-6 h-6 bg-white"/>
                </div>
              </div>

            </div>
          </div>


          <h1 className="mt-6 text-center p-3">Este Portfólio foi desenvolvido com Nextjs + Tailwind CSS.</h1>
          
    </main>
    
  )
}