import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
			<div className="w-11/12 max-w-4xl h-128 flex rounded-lg shadow-lg">
				<div className="flex-2 flex flex-col items-center justify-center bg-white rounded-l-lg p-8">
					<form className="flex flex-col items-center" onSubmit={handleSubmit}>
						<h1 className="text-4xl mb-6">Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="outline-none border-none w-92 p-4 rounded-lg bg-gray-200 mb-4 text-base"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="outline-none border-none w-92 p-4 rounded-lg bg-gray-200 mb-4 text-base"
						/>
						{error && <div className="w-92 p-4 mb-4 text-base bg-red-500 text-white rounded-md text-center">{error}</div>}
						<button type="submit" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full mt-2">
							Sign In
						</button>
					</form>
				</div>
				<div className="flex-1 flex flex-col items-center justify-center bg-teal-500 rounded-r-lg">
					<h1 className="text-white text-3xl mb-6">New Here?</h1>
					<Link to="/signup">
						<button type="button" className="bg-white text-teal-500 font-bold py-3 px-8 rounded-full">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
