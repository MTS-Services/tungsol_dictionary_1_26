import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';

export default function CreateLanguage() {
    const { data, setData, post, processing, errors } = useForm({
        code: '',
        name: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.lm.languages.store'));
    }

    return (
        <AdminLayout activeSlug="language-management">
            <Head title="Create Language" />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Create Language</h1>
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
                                            placeholder='e.g. en, fr, es'
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
                                            placeholder='e.g. English, French, Spanish'
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
                                    <CardTitle>Action</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-black text-white hover:bg-black/80 cursor-pointer"
                                    >
                                        <Save className="mr-2 h-4 w-4" />
                                        {processing ? 'Creating...' : 'Create Language'}
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
