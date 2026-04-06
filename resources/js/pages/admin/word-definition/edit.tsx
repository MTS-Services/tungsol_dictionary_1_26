import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FileUpload from '@/components/ui/file-upload';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { Head, InfiniteScroll, router, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

interface WordEntry {
    id: number;
    word: {
        word: string;
    };
}

interface PaginationWords {
    data: WordEntry[];
}

interface Props {
    definition: any;
    word_entries: PaginationWords;
}
export default function Create({ definition, word_entries }: Props) {
    const [search, setSearch] = useState('');
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Clear previous timeout
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        }

        // Debounce search request
        searchTimeoutRef.current = setTimeout(() => {
            // Reset the infinite scroll when search changes
            router.get(
                route('admin.wm.definitions.edit', definition.id),
                { search: search },
                {
                    preserveState: true,
                    preserveScroll: true,
                    replace: true,
                    only: ['word_entries'],
                    reset: ['word_entries'], // Reset infinite scroll data when search changes
                },
            );
        }, 300);

        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, [search, definition.id]);

    const { data, setData, post, processing, errors } = useForm({
        word_entry_id: definition.word_entry_id,
        definition: definition.definition,
        register: definition.register,
        domain: definition.domain,
        region: definition.region,
        usage_note: definition.usage_note,
        video_url: definition.video_url,
        delete_existing_image: false,
        image: null as File | null,
        _method: 'PUT',
    });

    const existingFile = useMemo(() => {
        if (!definition.image_url) {
            return [] as any[];
        }
        const name = definition.image?.split('/').pop() || 'image';
        return [
            {
                id: definition.id,
                url: definition.image_url,
                name,
                mime_type: 'image/*',
                path: definition.image_url,
            },
        ];
    }, [definition]);

    const [existingImage, setExistingImage] = useState<any[]>(existingFile);

    function handleSubmit(e: React.FormEvent) {
        post(route('admin.wm.definitions.update', definition.id), {
            onSuccess: () => {
                toast.success('Definition Updated Successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
        e.preventDefault();
    }

    return (
        <AdminLayout activeSlug="languages">
            <Head title="Edit Definition" />
            <CardHeader className="flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Edit Definition</h1>
                <ActionButton
                    IconNode={ArrowLeft}
                    href={route('admin.wm.definitions.index')}
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
                                    <CardTitle>Definition Create</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Word Entry</Label>
                                        <Select
                                            value={String(data.word_entry_id)}
                                            onValueChange={(value) =>
                                                setData(
                                                    'word_entry_id',
                                                    Number(value),
                                                )
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select word" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <div className="p-2">
                                                    <Input
                                                        placeholder="Search words..."
                                                        className="mb-2"
                                                        value={search}
                                                        onChange={(e) =>
                                                            setSearch(
                                                                e.target.value,
                                                            )
                                                        }
                                                        autoFocus
                                                    />
                                                </div>

                                                <InfiniteScroll data="word_entries">
                                                    {word_entries.data.map(
                                                        (item) => (
                                                            <SelectItem
                                                                key={item.id}
                                                                value={String(
                                                                    item.id,
                                                                )}
                                                            >
                                                                {item.word.word}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </InfiniteScroll>
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.word_entry_id}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Difinition</Label>
                                        <Textarea
                                            placeholder="Word Definition"
                                            value={data.definition}
                                            onChange={(e) =>
                                                setData(
                                                    'definition',
                                                    e.target.value,
                                                )
                                            }
                                        ></Textarea>
                                        <InputError
                                            message={errors.definition}
                                        />
                                    </div>

                                    {/* <div className="grid gap-2">
                                        <Label
                                            htmlFor="video_url"
                                            className="p"
                                        >
                                            Youtube Video URL
                                        </Label>
                                        <Input
                                            id="video_url"
                                            placeholder="Youtube Video URL"
                                            value={data.video_url}
                                            onChange={(e) =>
                                                setData(
                                                    'video_url',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.video_url}
                                        />
                                    </div> */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="image">Image</Label>
                                        <FileUpload
                                            onChange={(file) =>
                                                setData(
                                                    'image',
                                                    file as File | null,
                                                )
                                            }
                                            multiple={false}
                                            accept="image/*"
                                            existingFiles={existingImage}
                                            onRemoveExisting={() => {
                                                setExistingImage([]);
                                                setData('image', null);
                                                setData(
                                                    'delete_existing_image',
                                                    true,
                                                );
                                            }}
                                        />
                                        <InputError message={errors.image} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="register">
                                            Register
                                        </Label>
                                        <Input
                                            id="register"
                                            placeholder="Register"
                                            value={data.register}
                                            onChange={(e) =>
                                                setData(
                                                    'register',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError message={errors.register} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Domain</Label>
                                        <Input
                                            id="name"
                                            placeholder="Domain"
                                            value={data.domain}
                                            onChange={(e) =>
                                                setData(
                                                    'domain',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError message={errors.domain} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Region</Label>
                                        <Input
                                            id="name"
                                            placeholder="Region"
                                            value={data.region}
                                            onChange={(e) =>
                                                setData(
                                                    'region',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError message={errors.region} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Usege Note</Label>
                                        <Input
                                            id="name"
                                            placeholder="Usage Note"
                                            value={data.usage_note}
                                            onChange={(e) =>
                                                setData(
                                                    'usage_note',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.usage_note}
                                        />
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
                                            ? 'Updating...'
                                            : 'Update Definition'}
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
