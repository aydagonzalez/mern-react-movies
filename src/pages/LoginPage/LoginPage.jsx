import { useState } from "react";
import "./LoginPage.css"

export default function LoginPage({ addUser }) {
    //This updates use state from App page
    const [updateUser, setUpdateUser] = useState({
        username: "",
        password: "",
    })

    function handleChange(evt) {
        const { name, value } = evt.target;
        console.log (name ,value)
        setUpdateUser({...updateUser, [name]: value });  //This what even.target.name is supposed to be (name field on the field on the input)
    }

    console.log ("update USER:", updateUser)
    function handleNewUser(evt) {
        evt.preventDefault();
        addUser(updateUser);
        setUpdateUser({ username: "", password: "" });
    }

    return (
        <>
            <h1>Login Page</h1>
            <form className="LoginPage" onSubmit={handleNewUser}>
                <label htmlFor="username">Username: </label>
                <input
                    name="username"
                    type="text"
                    value={updateUser.username} // value starts within Use state
                    onChange={handleChange}
                    placeholder="username"
                    required
                />
                <input
                    name="password"
                    type="text"
                    value={updateUser.password}
                    onChange={handleChange}
                    placeholder="password"
                    required
                />
                <button>Submit User</button>
            </form>
        </>
    )
}