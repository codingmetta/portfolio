import ProjectCard from "./main/ProjectCard.jsx";
import data from "../../public/projects-data";
import Contact from "./main/Contact.jsx";

export default function Main() {

    const projects = data.map(item => {
        return (
            <ProjectCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                img={item.mockImg}
                githubExists={item.githubExists}
                githubLink={item.githubLink}
                applinkExists={item.applinkExists}
                appLink={item.appLink}
                react={item.useReact}
                css={item.useCss}
                flowbite={item.useFlowbite}
                firebase={item.useFirebase}
                tailwind={item.useTailwind}
                mongodb={item.useMongoDB}
                express={item.useExpress}
                js={item.useJS}
                cplusplus={item.useC}
                qt={item.useQt}
                hyper={item.useHTML}
                php={item.usePHP}
                sql={item.useSQL}
                bootstrap={item.useBootstrap}
                wordpress={item.useWordpress}
            />
        )
    })

    return (
        <main className="main-layout">
            <Contact />

            <section className="projects-layout">
                {projects}
            </section>
        </main>
    );
}


