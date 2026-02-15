import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';

interface PartOfSpeech {
    id: number;
    name: string;
    abbreviation: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    partOfSpeech: PartOfSpeech;
}

export default function EditPartOfSpeech({ partOfSpeech }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: partOfSpeech.name,
        abbreviation: partOfSpeech.abbreviation,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(route('admin.posm.parts-of-speech.update', partOfSpeech.id));
    }

    return (
        <AdminLayout activeSlug="parts-of-speech">
            <Head title={`Edit Part of Speech: ${partOfSpeech.name}`} />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Edit Part of Speech</h1>
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
                                    <CardTitle>Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Created At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(partOfSpeech.created_at).toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(partOfSpeech.updated_at).toLocaleString()}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-black text-white hover:bg-black/80 cursor-pointer"
                                    >
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Updating...' : 'Update Part of Speech'}
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
