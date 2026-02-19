import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface WordEntry {
    id: number;
    word: {
        id: number;
        word: string;
    } | null;
    part_of_speech_id: {
        id: number;
        name: string;
    } | null;

    etymology: string;
    pronunciation_ipa: string;
    pronunciation_audio: string | null;
    syllables: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    wordEntry: WordEntry;
}

const show = ({ wordEntry }: Props) => {
    return (
        <AdminLayout activeSlug="word-entries-management">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Word Entry</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.wm.words-entries.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route(
                            'admin.wm.words-entries.edit',
                            wordEntry?.id,
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
                                <CardTitle>Word Entry Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Word</Label>

                                        <p>{wordEntry.word?.word}</p>
                                    </div>
                                </Card>
                                
                                <Card className="p-4">
                                <div className="grid gap-2">

                                    <Label htmlFor="name">Part of Speech</Label>

                                    <p>{wordEntry.part_of_speech_id?.name}</p>
                                </div>
                                </Card>
                                
                                <Card className="p-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Etymology</Label>

                                    <p>{wordEntry.etymology}</p>
                                </div>
                                </Card>
                                
                                <Card className="p-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">
                                        Pronunciation IPA
                                    </Label>

                                    <p>{wordEntry.pronunciation_ipa}</p>
                                </div>
                                </Card>
                                
                                <Card className="p-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Syllables</Label>

                                    <p>{wordEntry.syllables}</p>
                                </div>
                                </Card>
                                
                                <Card className="p-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Syllables</Label>

                                    <div className="font-medium text-gray-900 dark:text-gray-100">
                                        <audio
                                            src={wordEntry.pronunciation_audio || ''}
                                            controls
                                        ></audio>
                                    </div>
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
                                            wordEntry.created_at,
                                        ).toLocaleString()}
                                    </p>
                                </div>

                                <div>
                                    <Label className="text-sm text-muted-foreground">
                                        Updated At
                                    </Label>
                                    <p className="text-sm font-medium">
                                        {new Date(
                                            wordEntry.updated_at,
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
