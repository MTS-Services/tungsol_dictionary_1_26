import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout'
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react'
import { Eye, Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface Antonym {
    id: number;
    definition_id: number;
    antonym_word_id: number;
    relevance_score: number;
    created_at: string;
    updated_at: string;
    definition:{
        id: number;
        definition: string;
    };
    antonymWord:{
        id: number;
        word: string;
    }
}
interface Props {
    antonyms: Antonym[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}
export default function Index({antonyms,pagination,offset,filters,search,sortBy,sortOrder}:Props) {
  console.log(antonyms);
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<Antonym>[] = [
      {
          key: "antonym_word_id",  
          label: "Antonym Word",
          sortable: true,
          render: (antonym) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {antonym.antonym_word.word}
            </div>
          ),
        },
        {
          key: "definition_id",  
          label: "Definition",
          sortable: true,
          render: (antonym) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {antonym.definition.definition}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (antonym) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(antonym.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (antonym) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(antonym.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Antonym>[] = [
      {
        label: "Show",
        icon: <Eye className="h-4 w-4" />,
        onClick: (antonym) => {
          router.visit(route("admin.am.antonyms.show", antonym.id));
        },
      },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (antonym) => {
        router.visit(route("admin.am.antonyms.edit", antonym.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (antonym) => {
        if (confirm(`Are you sure you want to delete ${antonym.id}?`)) {
          router.delete(route("admin.am.antonyms.destroy", antonym.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
     <AdminLayout activeSlug="antonyms">
      <Head title="Antonyms" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.am.antonyms.create")}>
          <Button>Create Antonym</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={antonyms}   
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
          emptyMessage="No antonyms found"
          searchPlaceholder="Search antonyms..."
        />
      </div>
    </AdminLayout>
  )
}
