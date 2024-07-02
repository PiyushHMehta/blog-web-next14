import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewBlogSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
});

export async function POST(req) {
    try {
        await connectToDB();

        const extractBlogData = await req.json();
        const { title, description } = extractBlogData;

        const { error } = AddNewBlogSchema.validate({ title, description });
        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            }, { status: 400 });
        }

        const newlyCreatedBlog = await Blog.create(extractBlogData);
        if (newlyCreatedBlog) {
            return NextResponse.json({
                success: true,
                message: 'Blog added successfully'
            }, { status: 201 });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong, please try again'
            }, { status: 500 });
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong, please try again'
        }, { status: 500 });
    }
}
