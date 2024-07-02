'use client';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from 'react';

function AddNewBlog({ openBlogDialog, setOpenBlogDialog, loading, blogFormData, setBlogFormData, handleSaveBlogData, initialBlogFormData }) {
    return (
        <>
            <div>
                <Button onClick={() => setOpenBlogDialog(true)}>Add new blog</Button>
            </div>
            <div>
                blog list section
            </div>
            <Dialog open={openBlogDialog} 
            onOpenChange={() => {setOpenBlogDialog(false), setBlogFormData(initialBlogFormData)}}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add new blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                name="title"
                                placeholder="Enter blog title"
                                value={blogFormData.title}
                                onChange={ev => setBlogFormData({
                                    ...blogFormData,
                                    title: ev.target.value
                                })}
                                id="title"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                name="description"
                                placeholder="Enter blog description"
                                value={blogFormData.description}
                                onChange={ev => setBlogFormData({
                                    ...blogFormData,
                                    description: ev.target.value
                                })}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSaveBlogData} type="button" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default AddNewBlog;
