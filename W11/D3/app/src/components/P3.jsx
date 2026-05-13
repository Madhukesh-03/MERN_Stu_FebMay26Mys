import  { useEffect, useState } from "react";
import api from "../services/api";

export function AxiosLifecycle() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        loadPosts(controller.signal);

        return () => {
            controller.abort();
        };

    }, []);

    async function loadPosts(signal) {

        setLoading(true);

        try {

            const response = await api.get(
                "/posts",
                { signal }
            );

            setPosts(response.data.slice(0, 5));

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    }

    return (
        <section>

            <h2>Axios Lifecycle</h2>

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {posts.map(post => (
                <article key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </article>
            ))}

        </section>
    );
}