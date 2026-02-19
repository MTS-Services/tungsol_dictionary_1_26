import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface Synonym {
    id: number;

    definition: {
        id: number;
        definition: string;
    };
    synonym_word: {
        id: number;
        word: string;
    };
    relevance_score: number;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    synonym: Synonym;
}

const Show = ({ synonym }: PageProps) => {
    return (
        <AdminLayout activeSlug="synonyms">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Synonym</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.sm.synonyms.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route('admin.sm.synonyms.edit', synonym.id)}
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
                                <CardTitle>Synonym Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="code">
                                        Word Definition
                                    </Label>

                                    <p>{synonym.definition?.definition}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="code">
                                        Synonym Word
                                    </Label>

                                    <p>{synonym.synonym_word?.word}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="code">
                                        Relevance Score
                                    </Label>

                                    <p>{synonym.relevance_score}</p>
                                </div>
                                
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
                                            synonym.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Updated At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            synonym.updated_at,
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

export default Show;
