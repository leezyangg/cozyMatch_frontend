export default function LoginPage() {
    return (
        <div>
            <div className="login--header">
                <div className="login--word">
                    <div>
                        <img
                            className="h-5"
                            src="\src\assets\cozy_match_icon.png"
                            alt="CozyMatch"
                        />
                    </div>
                    <h2 className="login--title">
                Sign in to your account
            </h2>

            <form className="login--form" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="login--form--div">
                    <div className="login--input--field">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="login--form--email"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="login--input--field">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="login--form--password"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="login--form--button"
                    >
                        <span className="login--button--text">
                        </span>
                        Login
                    </button>
                </div>
            </form>
                </div>
            </div>
        </div>
    )
}