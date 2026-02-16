import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import AdminLayout from "@/layouts/admin-layout";
import { ActionConfig, ColumnConfig, PaginationData } from "@/types/data-table.types";
import { Head, Link, router } from "@inertiajs/react";
import { CheckCircle, Pencil, Trash2, XCircle } from "lucide-react";
import React from "react";

interface WordEnrty {
  id: number;
  word_id: number;
  slpart_of_speech_id: number;
  sort_order: number;
  etymology: string;
  pronunciation_ipa: string;
  word: {
    id: number;
    word: string;
    slug: string;
    language_id: number;
    is_approved: boolean;
    search_count: number;
  };
  partOfSpeech: {
    id: number;
    name: string;
    abbreviation: string;
  };
  created_at: string;
  updated_at: string;
}

interface Props {
  word_entries: WordEnrty[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export default function Index({
  word_entries,
  pagination,
  offset,
  filters,
  search,
  sortBy,
  sortOrder,
}: Props) {
  console.log(word_entries);
  // const {
  //     isLoading,
  //     handleSearch,
  //     handleFilterChange,
  //     handleSort,
  //     handlePerPageChange,
  //     handlePageChange,
  // } = useDataTable();

  // const columns: ColumnConfig<WordEnrty>[] = [
  //     {
  //         key: 'word',
  //         label: 'Word',
  //         sortable: true,
  //         render: (word) => (
  //             <div className="font-medium text-gray-900 dark:text-gray-100">
  //                 {word.word}
  //             </div>
  //         ),
  //     },
  //     {
  //         key: 'language',
  //         label: 'Language',
  //         sortable: false,
  //         render: (word) => (
  //             <div className="text-gray-600 dark:text-gray-400">
  //                 {word.language.name}
  //             </div>
  //         ),
  //     },
  //     {
  //         key: 'is_approved',
  //         label: 'Status',
  //         sortable: true,
  //         render: (word) => (
  //             <Badge variant={word.is_approved ? 'default' : 'secondary'}>
  //                 {word.is_approved ? (
  //                     <><CheckCircle className="h-3 w-3 mr-1" /> Approved</>
  //                 ) : (
  //                     <><XCircle className="h-3 w-3 mr-1" /> Pending</>
  //                 )}
  //             </Badge>
  //         ),
  //     },
  //     {
  //         key: 'search_count',
  //         label: 'Searches',
  //         sortable: true,
  //         render: (word) => (
  //             <div className="text-gray-600 dark:text-gray-400">
  //                 {word.search_count}
  //             </div>
  //         ),
  //     },
  //     {
  //         key: 'created_at',
  //         label: 'Created Date',
  //         sortable: true,
  //         render: (word) => (
  //             <div className="text-gray-600 dark:text-gray-400">
  //                 {new Date(word.created_at).toLocaleDateString()}
  //             </div>
  //         ),
  //     },
  // ];

  // const actions: ActionConfig<Word>[] = [
  //     {
  //         label: 'Edit',
  //         icon: <Pencil className="h-4 w-4" />,
  //         onClick: (word) => {
  //             router.visit(route('admin.wm.words.edit', word?.id));
  //         },
  //     },
  //     {
  //         label: 'Delete',
  //         icon: <Trash2 className="h-4 w-4" />,
  //         onClick: (word) => {
  //             if (confirm(`Are you sure you want to delete ${word.word}?`)) {
  //                 router.delete(route('admin.wm.words.destroy', word?.id));
  //             }
  //         },
  //         variant: 'destructive',
  //     },
  // ];

  return (
    <AdminLayout activeSlug="word-entries-management">
      <Head title="Words" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.wm.words-entries.create")}>
          <Button>Create Word Entry</Button>
        </Link>
      </div>

      {
        /* <div className="mx-auto">
                <DataTable
                    data={word_entries}
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
            </div> */
      }
    </AdminLayout>
  );
}
