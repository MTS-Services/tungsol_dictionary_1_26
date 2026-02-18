import React from 'react';
import { Head, router, Link } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Button } from '@/components/ui/button';

interface Language {
    id: number;
    code: string;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    languages: Language[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function Index({
    languages,
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

    const columns: ColumnConfig<Language>[] = [
        {
            key: 'code',
            label: 'Code',
            sortable: true,
            render: (language) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {language.code}
                </div>
            ),
        },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (language) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {language.name}
                </div>
            ),
        },
        {
            key: 'created_at',
            label: 'Created Date',
            sortable: true,
            render: (language) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(language.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Language>[] = [
        {
            label: 'Show',
            icon: <Eye className="h-4 w-4" />,
            onClick: (language) => {
                router.visit(route('admin.lm.languages.show', language?.id));
            },
        },
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (language) => {
                router.visit(route('admin.lm.languages.edit', language?.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (language) => {
                if (confirm(`Are you sure you want to delete ${language.name}?`)) {
                    router.delete(route('admin.lm.languages.destroy', language?.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="languages">
            <Head title="Languages" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.lm.languages.create')}>
                    <Button>Create Language</Button>
                </Link>
            </div>

            <div className="mx-auto">
                <DataTable
                    data={languages}
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
                    emptyMessage="No languages found"
                    searchPlaceholder="Search languages by name, code..."
                />
            </div>
        </AdminLayout>
    );
}
