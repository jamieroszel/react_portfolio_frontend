import { useState, useEffect} from "react";

function Projects(props) {
    // create state to hold 'about' data
    const [projects, setProjects] = useState(null);

    // create function to make api call
    const getProjectsData = async () => {
        // make API call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into js object
        const data = await response.json();
        // set the projects state to the data
        setProjects(data)
    }

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <a href={project.git}>
                <button>GitHub</button>
            </a>
            <a href={project.live}>
                <button>Live Site</button>
            </a>
        </div>
    )

    // if data arrives return the result of loaded, if not, an h1 that says loading
    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;