import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout'
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react'
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface RelatedWord {
    id: number;
    word_id: number;
    related_word_id: number;
    relation_type: string;
    created_at: string;
    updated_at: string;
    word:{
        id: number;
        word: string;
    };
    relatedWord:{
        id: number;
        word: string;
    }
}
interface Props {
    relatedWords: RelatedWord[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}
export default function Index({relatedWords,pagination,offset,filters,search,sortBy,sortOrder}:Props) {
  console.log(relatedWords);
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

     const columns: ColumnConfig<RelatedWord>[] = [
      {
          key: "word_id",  
          label: "Word",
          sortable: true,
          render: (relatedWord) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {relatedWord.word.word}
            </div>
          ),
        },
      {
          key: "related_word_id",  
          label: "Related Word",
          sortable: true,
          render: (relatedWord) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {relatedWord.related_word.word}
            </div>
          ),
        },
        {
          key: "relation_type",
          label: "Relation Type",
          sortable: true,
          render: (relatedWord) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {relatedWord.relation_type}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (relatedWord) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(relatedWord.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (relatedWord) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(relatedWord.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<RelatedWord>[] = [
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (relatedWord) => {
        router.visit(route("admin.rwm.related-words.edit", relatedWord.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (relatedWord) => {
        if (confirm(`Are you sure you want to delete ${relatedWord.id}?`)) {
          router.delete(route("admin.rwm.related-words.destroy", relatedWord.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
     <AdminLayout activeSlug="related-words">
      <Head title="Related Words" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.rwm.related-words.create")}>
          <Button>Create Related Word</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={relatedWords}   
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
          emptyMessage="No related words found"
          searchPlaceholder="Search related words..."
        />
      </div>
    </AdminLayout>
  )
}
