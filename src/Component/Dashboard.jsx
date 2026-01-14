import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigator = useNavigate();
    useEffect(() => {
        const fetchProfile = async () => {
            // Retrieve the token from storage
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No authorization token found. Please log in.');
                setLoading(false);
                navigator("/login")
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/account/', {
                    method: 'GET', // GET is default, but explicit for clarity
                    headers: {
                        'Content-Type': 'application/json',
                        // Add the Authorization header with the Bearer token
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    // Handle unauthorized or other errors (e.g., token expired)
                    throw new Error('Failed to fetch profile. Unauthorized or server error.');
                }

                const data = await response.json();
                setProfile(data);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();

    }, [])

    if (loading) {
        return <div>Loading profile...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div>
                <h1>User Profile</h1>
                <p>Name: {profile.firstname}</p>
                <p>lastname: {profile.lastname}</p>
                <p>Email: {profile.email}</p>
                <p>Image:{profile.userimage}</p>
                {/* Render other profile details */}
            </div>
        </>
    )
}