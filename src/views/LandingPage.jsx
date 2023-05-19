export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to Cozy Match</h1>
            <p>Live Cozy with Cozy Match</p>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id = "search-btn"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}