import AdminLayout from "@/layouts/admin-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useEffect } from "react";
import { toast } from "sonner";

interface Author {
    id: number;
    name: string;
    email: string;
}

interface Word {
    id: number;
    word: string;
}

interface Props {
    authors: Author[];
    words: Word[];
}

export default function Create({ authors, words }: Props) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        title: "",
        body: "",
        excerpt: "",
        category: "",
        author_id: "",
        is_published: false,
        published_at: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.am.articles.store"), {
            onSuccess: () => {
                toast.success("Article created successfully.");
                reset();
            },
            onError: () => {
                toast.error("Failed to create article. Please check the form for errors.");
            },
        });
    };

    return (
        <AdminLayout activeSlug="articles">
            <Head title="Create Article" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Create Article</h1>
                <Link href={route("admin.am.articles.index")}>
                    <Button>Back to Articles</Button>
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="mt-1"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>
                <div>
                    <Label htmlFor="body">Body</Label>
                    <Textarea
                        id="body"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className="mt-1"
                        rows={10}
                    />
                    {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body}</p>}
                </div>
                <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                        id="excerpt"
                        value={data.excerpt}
                        onChange={(e) => setData("excerpt", e.target.value)}
                        className="mt-1"
                        rows={3}
                    />
                    {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
                </div>
                <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                        id="category"
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                        className="mt-1"
                    />
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
                <div>
                    <Label htmlFor="author_id">Author</Label>
                    <Select
                        onValueChange={(value) => setData("author_id", value)}
                        value={data.author_id}
                    >
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select an author" />
                        </SelectTrigger>
                        <SelectContent>
                            {authors.map((author) => (
                                <SelectItem key={author.id} value={String(author.id)}>
                                    {author.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.author_id && <p className="text-red-500 text-sm mt-1">{errors.author_id}</p>}
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="is_published"
                        checked={data.is_published}
                        onCheckedChange={(checked) => setData("is_published", Boolean(checked))}
                    />
                    <Label htmlFor="is_published">Is Published?</Label>
                    {errors.is_published && <p className="text-red-500 text-sm mt-1">{errors.is_published}</p>}
                </div>
                <div>
                    <Label htmlFor="published_at">Published At</Label>
                    <Input
                        id="published_at"
                        type="datetime-local"
                        value={data.published_at}
                        onChange={(e) => setData("published_at", e.target.value)}
                        className="mt-1"
                    />
                    {errors.published_at && <p className="text-red-500 text-sm mt-1">{errors.published_at}</p>}
                </div>
                <Button type="submit" disabled={processing}>
                    {processing ? "Creating..." : "Create Article"}
                </Button>
            </form>
        </AdminLayout>
    );
}
