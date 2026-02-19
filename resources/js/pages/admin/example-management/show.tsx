import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface WordExample {
    id: number;
    definition: {
        id: number;
        definition: string;
    } | null;
    sentence: string;
    source: string;
    author: string;
    year: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    example: WordExample;
}

const show = ({ example }: Props) => {
    return (
        <AdminLayout activeSlug="examples">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Word Example</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.em.examples.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route('admin.em.examples.edit', example?.id)}
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
                                <CardTitle>Word Example Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">
                                            Word Definition
                                        </Label>

                                        <p>{example.definition?.definition}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Sentence</Label>

                                        <p>{example.sentence}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Source</Label>

                                        <p>{example.source}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Author</Label>

                                        <p>{example.author}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Year</Label>

                                        <p>{example.year}</p>
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
                                <Card className="p-4">
                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Created At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(
                                                example.created_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </Card>

                                <Card className="p-4">
                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(
                                                example.updated_at,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </Card>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </AdminLayout>
    );
};

export default show;
