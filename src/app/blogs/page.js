import BlogOverview from "../components/blog-overview"

async function fetchListOfBlogs() {
    try {
        const res = await fetch('http://localhost:3000/api/get-blogs', {
            method: 'GET',
            // cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await res.json();
        console.log(result);
        console.log(result.data)

        return result?.data;
    } catch (e) {
        console.error('Error fetching blogs:', e);
        throw new Error('Failed to fetch blogs');
    }
}


async function Blogs() {
    const blogList = await fetchListOfBlogs()
    console.log(blogList);

    return (
        <BlogOverview />
    )
}

export default Blogs