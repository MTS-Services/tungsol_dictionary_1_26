import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Language {
    id: number;
    name: string;
    code: string;
}

interface Category {
    id: number;
    name: string;
}

interface Props {
    languages: Language[];
    categories: Category[];
}

export default function CreateWord({ languages, categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        word: '',
        language_id: '',
        is_approved: false,
        category_ids: [] as number[],
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.wm.words.store'));
    }

    const toggleCategory = (categoryId: number) => {
        const current = data.category_ids;
        if (current.includes(categoryId)) {
            setData('category_ids', current.filter(id => id !== categoryId));
        } else {
            setData('category_ids', [...current, categoryId]);
        }
    };

    return (
        <AdminLayout activeSlug="word-management">
            <Head title="Create Word" />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Create Word</h1>
                <ActionButton IconNode={ArrowLeft} href={route('admin.wm.words.index')}>
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
                                        <Label htmlFor="word">Word</Label>
                                        <Input
                                            id="word"
                                            placeholder="e.g. dictionary"
                                            value={data.word}
                                            onChange={(e) => setData('word', e.target.value)}
                                        />
                                        <InputError message={errors.word} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="language_id">Language</Label>
                                        <Select
                                            value={data.language_id}
                                            onValueChange={(value) => setData('language_id', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {languages.map((language) => (
                                                    <SelectItem key={language.id} value={language.id.toString()}>
                                                        {language.name} ({language.code})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.language_id} />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="is_approved"
                                            checked={data.is_approved}
                                            onCheckedChange={(checked) => setData('is_approved', checked as boolean)}
                                        />
                                        <Label htmlFor="is_approved" className="cursor-pointer">
                                            Approved
                                        </Label>
                                    </div>

                                    {categories.length > 0 && (
                                        <div className="grid gap-2">
                                            <Label>Categories</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {categories.map((category) => (
                                                    <div key={category.id} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`category-${category.id}`}
                                                            checked={data.category_ids.includes(category.id)}
                                                            onCheckedChange={() => toggleCategory(category.id)}
                                                        />
                                                        <Label htmlFor={`category-${category.id}`} className="cursor-pointer">
                                                            {category.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
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
                                        {processing ? 'Creating...' : 'Create Word'}
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
