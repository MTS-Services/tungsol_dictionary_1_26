import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { Save, ArrowLeft } from 'lucide-react';
import { ActionButton } from '@/components/ui/action-button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    parent_id: number | null;
    created_at: string;
    updated_at: string;
}

interface ParentCategory {
    id: number;
    name: string;
}

interface Props {
    category: Category;
    categories: ParentCategory[];
}

export default function EditCategory({ category, categories }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        description: category.description || '',
        parent_id: category.parent_id?.toString() || '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(route('admin.cm.categories.update', category.id));
    }

    return (
        <AdminLayout activeSlug="category-management">
            <Head title={`Edit Category: ${category.name}`} />

            <CardHeader className="flex items-center flex-row justify-between">
                <h1 className="text-2xl font-bold">Edit Category</h1>
                <ActionButton IconNode={ArrowLeft} href={route('admin.cm.categories.index')}>
                    Back
                </ActionButton>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Category Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Category Name</Label>
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
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData('description', e.target.value)
                                            }
                                            rows={4}
                                        />
                                        <InputError message={errors.description} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="parent_id">Parent Category (Optional)</Label>
                                        <Select
                                            value={data.parent_id || 'none'}
                                            onValueChange={(value) =>
                                                setData('parent_id', value === 'none' ? '' : value)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select parent category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">None</SelectItem>
                                                {categories.map((cat) => (
                                                    <SelectItem key={cat.id} value={cat.id.toString()}>
                                                        {cat.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.parent_id} />
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
                                            Slug
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {category.slug}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Created At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(category.created_at).toLocaleString()}
                                        </p>
                                    </div>

                                    <div>
                                        <Label className="text-sm text-muted-foreground">
                                            Updated At
                                        </Label>
                                        <p className="text-sm font-medium">
                                            {new Date(category.updated_at).toLocaleString()}
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
                                        {processing ? 'Updating...' : 'Update Category'}
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
