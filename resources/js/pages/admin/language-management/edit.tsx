import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';

interface Language {
    id: number;
    code: string;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    language: Language;
}

export default function EditLanguage({ language }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        code: language.code,
        name: language.name,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(route('admin.lm.languages.update', language.id));
    }

    return (
        <AdminLayout activeSlug="language-management">
            <Head title={`Edit Language: ${language.name}`} />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Edit Language</h1>
                <ActionButton IconNode={ArrowLeft} href={route('admin.lm.languages.index')}>
                    Back
                </ActionButton>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Language Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Language Code</Label>
                                        <Input
                                            id="code"
                                            value={data.code}
                                            onChange={(e) =>
                                                setData('code', e.target.value)
                                            }
                                        />
                                        <InputError message={errors.code} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Language Name</Label>
                                        <Input
                                            id="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />
                                        <InputError message={errors.name} />
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
                                            {new Date(language.created_at).toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(language.updated_at).toLocaleString()}
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
                                        {processing ? 'Updating...' : 'Update Language'}
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
