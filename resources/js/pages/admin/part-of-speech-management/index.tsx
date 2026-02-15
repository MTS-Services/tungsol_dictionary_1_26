import React from 'react';
import { Head, router, Link } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Button } from '@/components/ui/button';

interface PartOfSpeech {
    id: number;
    name: string;
    abbreviation: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    partsOfSpeech: PartOfSpeech[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function Index({
    partsOfSpeech,
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

    const columns: ColumnConfig<PartOfSpeech>[] = [
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (pos) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {pos.name}
                </div>
            ),
        },
        {
            key: 'abbreviation',
            label: 'Abbreviation',
            sortable: true,
            render: (pos) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {pos.abbreviation}
                </div>
            ),
        },
        {
            key: 'created_at',
            label: 'Created Date',
            sortable: true,
            render: (pos) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(pos.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<PartOfSpeech>[] = [
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (pos) => {
                router.visit(route('admin.posm.parts-of-speech.edit', pos?.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (pos) => {
                if (confirm(`Are you sure you want to delete ${pos.name}?`)) {
                    router.delete(route('admin.posm.parts-of-speech.destroy', pos?.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="parts-of-speech">
            <Head title="Parts of Speech" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.posm.parts-of-speech.create')}>
                    <Button>Create Part of Speech</Button>
                </Link>
            </div>

            <div className="mx-auto">
                <DataTable
                    data={partsOfSpeech}
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
                    emptyMessage="No parts of speech found"
                    searchPlaceholder="Search parts of speech..."
                />
            </div>
        </AdminLayout>
    );
}
