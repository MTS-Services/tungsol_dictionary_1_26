import React from 'react';
import { Head, router, Link } from '@inertiajs/react';
import { Pencil, Trash2, CheckCircle, XCircle, Eye } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Word {
    id: number;
    word: string;
    slug: string;
    language_id: number;
    is_approved: boolean;
    search_count: number;
    language: {
        id: number;
        name: string;
        code: string;
    };
    created_at: string;
    updated_at: string;
}

interface Props {
    words: Word[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function Index({
    words,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: Props) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Word>[] = [
        {
            key: 'word',
            label: 'Word',
            sortable: true,
            render: (word) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {word.word}
                </div>
            ),
        },
        {
            key: 'language',
            label: 'Language',
            sortable: false,
            render: (word) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {word.language.name}
                </div>
            ),
        },
        {
            key: 'is_approved',
            label: 'Status',
            sortable: true,
            render: (word) => (
                <Badge variant={word.is_approved ? 'default' : 'secondary'}>
                    {word.is_approved ? (
                        <><CheckCircle className="h-3 w-3 mr-1" /> Approved</>
                    ) : (
                        <><XCircle className="h-3 w-3 mr-1" /> Pending</>
                    )}
                </Badge>
            ),
        },
        {
            key: 'search_count',
            label: 'Searches',
            sortable: true,
            render: (word) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {word.search_count}
                </div>
            ),
        },
        {
            key: 'created_at',
            label: 'Created Date',
            sortable: true,
            render: (word) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(word.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Word>[] = [
        {
            label: 'View',
            icon: <Eye className="h-4 w-4" />,
            onClick: (word) => {
                router.visit(route('admin.wm.words.show', word?.id));
            },
        },
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (word) => {
                router.visit(route('admin.wm.words.edit', word?.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (word) => {
                if (confirm(`Are you sure you want to delete ${word.word}?`)) {
                    router.delete(route('admin.wm.words.destroy', word?.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="word-management">
            <Head title="Words" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.wm.words.create')}>
                    <Button>Create Word</Button>
                </Link>
            </div>

            <div className="mx-auto">
                <DataTable
                    data={words}
                    columns={columns}
                    pagination={pagination}
                    offset={offset}
                    showNumbering={true}
                    actions={actions}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onSort={handleSort}
                    onPerPageChange={handlePerPageChange}
                    onPageChange={handlePageChange}
                    searchValue={search}
                    filterValues={filters}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    isLoading={isLoading}
                    emptyMessage="No words found"
                    searchPlaceholder="Search words..."
                />
            </div>
        </AdminLayout>
    );
}
