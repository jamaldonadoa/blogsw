import { useContext } from "react";
import { Context } from "../store/appContext";

const About = () => {
    const { store } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About</h1>
                        <ul className="list-group" style={{ width: '600px', margin: 'auto'}}>
                            {
                                !!store.users &&
                                store.users.map((user) => {
                                    return <li className="list-group-item list-group-item-action" key={user.id}>
                                       <span className="text-danger">{user.name}</span> / {user.email} / {user.phone}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;