import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await connectToDB()
        const extractAllBlogs = await Blog.find({})
        // get all blogs form db

        if(extractAllBlogs) {
            return NextResponse.json({
                success: true,
                data: extractAllBlogs   // we return data
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong'
            })
        }
    } catch(e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}