import React from 'react';
import { Head, router, Link } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Button } from '@/components/ui/button';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    parent_id: number | null;
    parent?: {
        id: number;
        name: string;
    } | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    categories: Category[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function Index({
    categories,
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

    const columns: ColumnConfig<Category>[] = [
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (category) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {category.name}
                </div>
            ),
        },
        {
            key: 'parent',
            label: 'Parent Category',
            sortable: false,
            render: (category) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {category.parent?.name || '-'}
                </div>
            ),
        },
        {
            key: 'description',
            label: 'Description',
            sortable: false,
            render: (category) => (
                <div className="text-gray-600 dark:text-gray-400 truncate max-w-xs">
                    {category.description || '-'}
                </div>
            ),
        },
        {
            key: 'created_at',
            label: 'Created Date',
            sortable: true,
            render: (category) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(category.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Category>[] = [
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (category) => {
                router.visit(route('admin.cm.categories.edit', category?.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (category) => {
                if (confirm(`Are you sure you want to delete ${category.name}?`)) {
                    router.delete(route('admin.cm.categories.destroy', category?.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="categories">
            <Head title="Categories" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.cm.categories.create')}>
                    <Button>Create Category</Button>
                </Link>
            </div>

            <div className="mx-auto">
                <DataTable
                    data={categories}
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
                    emptyMessage="No categories found"
                    searchPlaceholder="Search categories..."
                />
            </div>
        </AdminLayout>
    );
}
