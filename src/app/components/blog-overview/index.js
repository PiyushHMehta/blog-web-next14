'use client';

import AddNewBlog from "@/components/add-new-blog";
import { useState } from "react";

const initialBlogFormData = {
    title: '',
    description: ''
};

function BlogOverview() {
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

    async function handleSaveBlogData() {
        setLoading(true);
        try {
            const res = await fetch('/api/add-blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogFormData)
            });

            const data = await res.json();
            console.log(data);

            if (data.success) {
                setBlogFormData(initialBlogFormData);
                setOpenBlogDialog(false);
            } else {
                // handle validation errors or other issues
                console.error(data.message);
            }
        } catch (e) {
            console.error('Error saving blog data:', e);
        } finally {
            setLoading(false);
        }
    }



    return (
        <div className="min-h-screen py-6 px-8 flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600">
            <AddNewBlog
                openBlogDialog={openBlogDialog}
                setOpenBlogDialog={setOpenBlogDialog}
                loading={loading}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
                initialBlogFormData = {initialBlogFormData}
                handleSaveBlogData={handleSaveBlogData}
            />
        </div>
    );
}

export default BlogOverview;
