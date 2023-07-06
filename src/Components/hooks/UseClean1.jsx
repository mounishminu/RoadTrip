import React, { useEffect, useState } from "react";

function Cleanup2() {
    const [posts, setPosts] = useState(0);

    useEffect(() => {
        let isCancelled = false;
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    setPosts(data);
                    console.log(data);
                }
            });

        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <div>
            {posts.length > 0 &&
                posts.map((post) => {
                    return (
                        <div>
                            <p key={post.id} >{post.title}</p>
                        </div>
                    );
                })}
        </div>
    );
}
export default Cleanup2;
