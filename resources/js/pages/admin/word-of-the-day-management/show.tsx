import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/layouts/admin-layout';
import { ArrowLeft, Edit } from 'lucide-react';

interface WordOfTheDay {
    id: number;
    date: string;
    word: {
        id: number;
        word: string;
        slug: string;
        language: {
            id: number;
            name: string;
        };
    };
    created_at: string;
    updated_at: string;
}

interface Props {
    wordOfTheDay: WordOfTheDay;
}

const show = ({ wordOfTheDay }: Props) => {
    return (
        <AdminLayout activeSlug="word-of-the-day-management">
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Detail Word of the Day</h1>
                <div className="flex gap-2">
                    <ActionButton
                        IconNode={ArrowLeft}
                        href={route('admin.wotdm.word-of-the-day.index')}
                    >
                        Back
                    </ActionButton>
                    <ActionButton
                        IconNode={Edit}
                        href={route(
                            'admin.wotdm.word-of-the-day.edit',
                            wordOfTheDay?.id,
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
                                <CardTitle>Word Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Word</Label>

                                        <p>{wordOfTheDay.word?.word}</p>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Date</Label>

                                        <p>
                                            {new Date(
                                                wordOfTheDay.date,
                                            ).toLocaleDateString()}
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
                                <Card className="p-4">
                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Created At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(
                                                wordOfTheDay.created_at,
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
                                                wordOfTheDay.updated_at,
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
