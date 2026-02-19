import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface relatedWord {
    id: number;
    word: {
        id: number;
        word: string;
    } | null;
    relatedWord: {
        id: number;
        word: string;
    } | null;
    relation_type: string;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    relatedWord: relatedWord;
}

const show = ({ relatedWord }: PageProps) => {
    return (
        <AdminLayout activeSlug="related-words">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Synonym</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.rwm.related-words.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route(
                            'admin.rwm.related-words.edit',
                            relatedWord.id,
                        )}
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
                                <CardTitle>Related Word Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Word</Label>

                                        <p>{relatedWord.word?.word}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Related Word</Label>

                                        <p>{relatedWord.relatedWord?.word}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Relation Type</Label>

                                        <p>{relatedWord.relation_type}</p>
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
                                            relatedWord.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Updated At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            relatedWord.updated_at,
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
