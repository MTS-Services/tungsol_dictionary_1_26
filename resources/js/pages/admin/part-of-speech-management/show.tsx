import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface Props {
    partOfSpeech: {
        id: string;
        name: string;
        abbreviation: string;
        created_at: string;
        updated_at: string;
    };
}

interface PageProps {
    partOfSpeech: Props['partOfSpeech'];
}

export default function show({ partOfSpeech }: PageProps) {
    return (
        <AdminLayout>
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Part of Speech</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.posm.parts-of-speech.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route(
                            'admin.posm.parts-of-speech.edit',
                            partOfSpeech?.id,
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
                                <CardTitle>
                                    Part of Speech Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="code">Name</Label>

                                    <p>{partOfSpeech.name}</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Abbreviation</Label>

                                    <p>{partOfSpeech.abbreviation}</p>
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
                                            partOfSpeech.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Updated At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            partOfSpeech.updated_at,
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
}
