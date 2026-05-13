// CRUD operation using Axios

import { useState } from "react";
import api from "../services/api";

export function CRUDOperation() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    function resetState() {
        setError("");
        setResult(null);
    }

    // CREATE
    async function createPost() {

        setLoading(true);
        resetState();

        try {

            const response = await api.post("/posts", {
                title: "React learning",
                body: "POST request example",
                userId: 1,
            });

            console.log("Created post:", response.data);

            setResult({
                action: "POST",
                message: "Post created successfully",
                data: response.data,
            });

        } catch (error) {

            console.error("Error while creating post:", error);

            setError(
                error.message || "Failed to create post"
            );

        } finally {

            setLoading(false);

        }
    }

    // UPDATE
    async function updatePost() {

        setLoading(true);
        resetState();

        try {

            const response = await api.put("/posts/1", {
                id: 1,
                title: "Updated React learning",
                body: "Updated body content",
                userId: 1,
            });

            console.log("Updated post:", response.data);

            setResult({
                action: "PUT",
                message: "Post updated successfully",
                data: response.data,
            });

        } catch (error) {

            console.error("Error while updating post:", error);

            setError(
                error.message || "Failed to update post"
            );

        } finally {

            setLoading(false);

        }
    }

    // DELETE
    async function deletePost() {

        setLoading(true);
        resetState();

        try {

            const response =
                await api.delete("/posts/1");

            console.log("Deleted post:", response.data);

            setResult({
                action: "DELETE",
                message: "Post deleted successfully",
                data: response.data,
            });

        } catch (error) {

            console.error("Error while deleting post:", error);

            setError(
                error.message || "Failed to delete post"
            );

        } finally {

            setLoading(false);

        }
    }

    return (
        <section>

            <h2>CRUD Operations</h2>

            <button onClick={createPost}>
                Create Post
            </button>

            <button onClick={updatePost}>
                Update Post
            </button>

            <button onClick={deletePost}>
                Delete Post
            </button>

            {loading && <p>Loading...</p>}

            {error && (
                <p>Error: {error}</p>
            )}

            {result && (
                <div>
                    <h3>{result.message}</h3>

                    <pre>
                        {JSON.stringify(
                            result.data,
                            null,
                            2
                        )}
                    </pre>
                </div>
            )}

        </section>
    );

    return (
        <section>
            <h2>CRUD Operations</h2>
            <button onClick={createPost} disabled={loading}> Post</button>
            <button onClick={updatePost} disabled={loading}> Put</button>
            <button onClick={deletePost} disabled={loading}> Delete</button>

             {/* Loading UI */}
            {loading && <p>Loading Users...</p>}

            {/* Error UI */}
            {!loading && error && <p>Error: {error}</p>}

            {!loading && !error && result && (
                <div>
                    <h3>{result.action}</h3>
                    <p>{}</p>
                    <pre>
                        {JSON.stringify(
                            result.data,
                            null,
                            2
                        )}
                    </pre>
                </div>
            )}
        </section>
        
    )
}