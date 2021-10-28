import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Contact = () => {
    const { actions } = useContext(Context);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        let consulta = actions.getPosts('https://jsonplaceholder.typicode.com/posts');
        consulta.then((response) => {
            console.log(response);
            return response.json();
        })
            .then(data => {
                console.log(data)
                setPosts(data);
            });
        console.log(consulta);
    }, []);

    return (
        <h1>Contact</h1>
    )
}

export default Contact;