import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout'
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react'
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface Synonym {
    id: number;
    definition_id: number;
    synonym_word_id: number;
    relevance_score: number;
    created_at: string;
    updated_at: string;
    definition:{
        id: number;
        definition: string;
    };
    synonymWord:{
        id: number;
        word: string;
    }
}
interface Props {
    synonyms: Synonym[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}
export default function Index({synonyms,pagination,offset,filters,search,sortBy,sortOrder}:Props) {
  console.log(synonyms);
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<Synonym>[] = [
      {
          key: "synonym_word_id",  
          label: "Synonym Word",
          sortable: true,
          render: (synonym) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {synonym.synonym_word.word}
            </div>
          ),
        },
        {
          key: "definition_id",  
          label: "Definition",
          sortable: true,
          render: (synonym) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {synonym.definition.definition}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (synonym) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(synonym.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (synonym) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(synonym.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Synonym>[] = [
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (synonym) => {
        router.visit(route("admin.sm.synonyms.edit", synonym.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (synonym) => {
        if (confirm(`Are you sure you want to delete ${synonym.id}?`)) {
          router.delete(route("admin.sm.synonyms.destroy", synonym.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
     <AdminLayout activeSlug="synonyms">
      <Head title="Synonyms" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.sm.synonyms.create")}>
          <Button>Create Synonym</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={synonyms}   
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
          emptyMessage="No synonyms found"
          searchPlaceholder="Search synonyms..."
        />
      </div>
    </AdminLayout>
  )
}
