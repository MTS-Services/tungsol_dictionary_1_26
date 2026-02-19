import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface WordDefinition {
    id: number;
    wordEntry: {
        id: number;
        word: string;
    } | null;
    definition: string;
    register: string;
    domain: string;
    region: string;
    usage_note: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    wordDefinition: WordDefinition;
}

const show = ({ wordDefinition }: Props) => {
    return (
        <AdminLayout activeSlug="word-definition-management">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Word Definition</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.wm.definitions.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route('admin.wm.definitions.edit', wordDefinition?.id)}
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
                                <CardTitle>Word Definition Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="code">Word Definition</Label>

                                    <p>{wordDefinition.wordEntry?.word}</p>
                                </div>
                                </Card>

                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="name">Definition</Label>

                                    <p>{wordDefinition.definition}</p>
                                </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="name">Registered</Label>

                                    <p>{wordDefinition.register}</p>
                                </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="name">
                                        domain
                                    </Label>

                                    <p>{wordDefinition.domain}</p>
                                </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="name">region</Label>

                                    <p>{wordDefinition.region}</p>
                                </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                    <Label htmlFor="name">Usage Note</Label>

                                    <p>{wordDefinition.usage_note}</p>
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
                                                wordDefinition.created_at,
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
                                                wordDefinition.updated_at,
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
