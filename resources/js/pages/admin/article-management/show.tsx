import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface Article {
    id: string;
    title: string;
    slug: string;
    body: string;
    excerpt: string;
    category: string;
    author: {
        id: string;
        name: string;
    } | null;
    word: {
        id: string;
        word: string;
    } | null;
    is_published: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    article: Article;
}

const show = ({ article }: PageProps) => {
    return (
        <AdminLayout activeSlug="article-management">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Article</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.am.articles.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route('admin.am.articles.edit', article?.id)}
                    >
                        Edit
                    </ActionButton>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle> Article Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>

                                        <p>{article.title}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="body">Body</Label>

                                        <p>{article.body}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="excerpt">Excerpt</Label>

                                        <p>{article.excerpt}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Excerpt</Label>

                                        <p>{article.excerpt}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Category</Label>

                                        <p>{article.category}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Author</Label>

                                        <p>{article.author?.name}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Word</Label>

                                        <p>{article.word?.word}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Is Published</Label>

                                        <p>{article.is_published ? 'Yes' : 'No'}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="slug">Published At</Label>

                                        <p>
                                            {new Date(
                                                article.published_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </Card>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Created At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            article.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Updated At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            article.updated_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </AdminLayout>
    );
};

export default show;
