import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';

export default function CreatePartOfSpeech() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        abbreviation: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.posm.parts-of-speech.store'));
    }

    return (
        <AdminLayout activeSlug="parts-of-speech">
            <Head title="Create Part of Speech" />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Create Part of Speech</h1>
                <ActionButton IconNode={ArrowLeft} href={route('admin.posm.parts-of-speech.index')}>
                    Back
                </ActionButton>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Part of Speech Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder='e.g. noun, verb, adjective'
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="abbreviation">Abbreviation</Label>
                                        <Input
                                            id="abbreviation"
                                            placeholder='e.g. n., v., adj.'
                                            value={data.abbreviation}
                                            onChange={(e) =>
                                                setData('abbreviation', e.target.value)
                                            }
                                        />
                                        <InputError message={errors.abbreviation} />
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
                                        className="w-full bg-black text-white hover:bg-black/80 cursor-pointer"
                                    >
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Creating...' : 'Create Part of Speech'}
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
