import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log("Befofre: ", data);
			const url = "http://localhost:4000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
				<div className="flex-1 flex flex-col items-center justify-center bg-teal-500 rounded-l-lg">
					<h1 className="text-white text-3xl mb-6">Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="bg-white text-teal-500 font-bold py-3 px-8 rounded-full">
							Sign in
						</button>
					</Link>
				</div>
				<div className="flex-2 flex flex-col items-center justify-center bg-white rounded-r-lg p-8">
					<form className="flex flex-col items-center" onSubmit={handleSubmit}>
						<h1 className="text-4xl mb-6">Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="outline-none border-none w-92 p-4 rounded-lg bg-gray-200 mb-4 text-base"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="outline-none border-none w-92 p-4 rounded-lg bg-gray-200 mb-4 text-base"
						/>
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
						<button type="submit" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full mt-2" onClick={handleSubmit}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
