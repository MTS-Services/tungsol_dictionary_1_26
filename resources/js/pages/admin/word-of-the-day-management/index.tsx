import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout'
import { word } from '@/routes';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Head, router, Link } from '@inertiajs/react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface WordOfTheDay {
    id: number;
    word: {
        id: number;
        word: string;
    }
    date: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    wordOfTheDays: WordOfTheDay[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

const index = ({ wordOfTheDays, pagination, offset, filters, search, sortBy, sortOrder }: Props) => {
    const {
            isLoading,
            handleSearch,
            handleFilterChange,
            handleSort,
            handlePerPageChange,
            handlePageChange,
        } = useDataTable();

    const columns:ColumnConfig<WordOfTheDay>[] = [
        {
            key: 'word',
            label: 'Word',
            sortable: true,
            render: (row) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {row.word.word}
                </div>
            ),
        },
        {
            key: 'date',
            label: 'Date',
            sortable: true,
            render: (row) => (

                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(row.date).toLocaleDateString()}
                </div>
            ),
        },
    ]

    const actions: ActionConfig<WordOfTheDay>[] = [
        {
            label: 'View',
            icon: <Eye className="h-4 w-4" />,
            onClick: (wordOfTheDay) => {
                router.visit(route('admin.wotdm.word-of-the-day.show', wordOfTheDay?.id));
            },
        },
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (wordOfTheDay) => {
                router.visit(route('admin.wotdm.word-of-the-day.edit', wordOfTheDay?.id));
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (wordOfTheDay) => {
                if (confirm(`Are you sure you want to delete this Word of the Day?`)) {
                    router.delete(route('admin.wotdm.word-of-the-day.destroy', wordOfTheDay?.id));
                }
            },
            variant: 'destructive',
        },
    ]
        

  return (
    <AdminLayout activeSlug="word-of-the-day-management">
            <Head title="Word of the Day" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.wotdm.word-of-the-day.create')}>
                    <Button>Create Word of the Day</Button>
                </Link>
            </div>

            <div className="mx-auto">
                <DataTable
                    data={wordOfTheDays}
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
                    emptyMessage="No word of the day found"
                    searchPlaceholder="Search word of the day..."
                />
            </div>
        </AdminLayout>
  )
}

export default index