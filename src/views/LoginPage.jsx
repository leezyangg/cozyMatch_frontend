import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from '../redux/auth'; // Import setUser from auth.jsx


export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        // renter login 
        if (username === 'renter' && password === 'renter') {
            // Authentication successful
            const userData = {
                name: username,
                usertype: 'Renter', // Replace with the actual user type
            };

            // Dispatch the setUser action to update the user state
            dispatch(setUser(userData));

            // Simulate navigation to the next page
            // Replace '/dashboard' with the desired route
            navigate("/renter");
        } else {
            // Authentication failed
            console.log('Login failed');
        }

        // landlord login 
        if (username === 'landlord' && password === 'landlord') {
            // Authentication successful
            const userData = {
                username,
                usertype: 'Landlord', // Replace with the actual user type
            };

            // Dispatch the setUser action to update the user state
            dispatch({ type: 'auth/setUser', payload: userData });

            // Simulate navigation to the next page
            // Replace '/dashboard' with the desired route
            navigate("/landlord");
        } else {
            // Authentication failed
            console.log('Login failed');
        }

        // Real Part will be used 
        // try {
        //     // Make an API call to authenticate the user
        //     const response = await fetch('/api/login', {
        //         method: 'POST',
        //         body: JSON.stringify({ username, password }),
        //     });

        //     if (response.ok) {
        //         // Authentication successful
        //         const userData = {
        //             username,
        //             usertype: 'Renter', // Replace with the actual user type
        //         };

        //         // Dispatch the setUser action to update the user state
        //         dispatch({ type: 'auth/setUser', payload: userData });
        //     } else {
        //         // Authentication failed
        //         console.log('Login failed');
        //     }
        // } catch (error) {
        //     console.log('Error occurred during login:', error);
        // }
    };

    return (
        <div>
            <div className="flex pl-4 pr-4 pt-12 pb-12 justify-center items-center min-h-full">
                <div>
                    <div>
                        <img
                            className="h-48 m-auto"
                            src="\src\assets\cozy_match_icon.png"
                            alt="CozyMatch"
                        />
                    </div>
                    <h2 className="mt-6 text-gray-900 text-3xl leading-9 font-bold tracking-tight text-center">
                        Sign in to your account
                    </h2>

                    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="username"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}