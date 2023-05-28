export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to Cozy Match</h1>
            <p>Live Cozy with Cozy Match</p>
            <div>
                <form onSubmit>
                    <input
                        type="text"
                        id="search-btn"
                        placeholder="Enter location"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

        </div>
    )
}