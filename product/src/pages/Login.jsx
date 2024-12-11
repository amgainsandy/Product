import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Successful!");
        console.log("Login Data:", formData);
    };

    return(
        <div className="max-w-md max auto mt-10 items-center">
            <h2 className="text-2xl font-bold mb-4 ">Login</h2>
                <form onSubmit={handleSubmit} className="bg-blue-400 p-6 rounded shadow">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full mb-4 p-2 border rounded hover:underline"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full mb-4 p-2 border rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">
                        Login
                    </button>
                </form>
        </div>
    );

};
export default Login;

