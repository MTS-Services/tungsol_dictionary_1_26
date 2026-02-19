import { ActionButton } from '@/components/ui/action-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface Word {
    id: number;
    word: string;
}

interface Props {
    words: Word[];
}

export default function CreateWordOfTheDay({ words }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        word_id: '',
        date: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.wotdm.word-of-the-day.store'));
    }


    return (
        <AdminLayout activeSlug="word-of-the-day-management">
            <Head title="Create Word of the Day" />

            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Create Word of the Day</h1>
                <ActionButton
                    IconNode={ArrowLeft}
                    href={route('admin.wotdm.word-of-the-day.index')}
                >
                    Back
                </ActionButton>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Word Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="word_id">Word</Label>
                                        <Select
                                            value={data.word_id}
                                            onValueChange={(value) =>
                                                setData('word_id', value)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select word" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {words.map((word) => (
                                                    <SelectItem
                                                        key={word.id}
                                                        value={word.id.toString()}
                                                    >
                                                        {word.word}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.word_id} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="date">Date</Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData('date', e.target.value)
                                            }
                                        />
                                        <InputError message={errors.date} />
                                    </div>



                                    
                                
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Action</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full cursor-pointer bg-black text-white hover:bg-black/80"
                                    >
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing
                                            ? 'Creating...'
                                            : 'Create Word of the Day'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </CardContent>
        </AdminLayout>
    );
}
