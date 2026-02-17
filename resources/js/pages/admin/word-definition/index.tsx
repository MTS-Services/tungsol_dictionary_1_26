import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import AdminLayout from "@/layouts/admin-layout";
import { ActionConfig, ColumnConfig, PaginationData } from "@/types/data-table.types";
import { Head, Link, router } from "@inertiajs/react";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

interface WordDefinition {
  id: number;
  word_entry_id: number;
  definition: string;
  sort_order: number;
  register: string;
  domain: string;
  usage_note: string;
  word_entry: {
    id: number;
  };
  created_at: string;
  updated_at: string;
}

interface Props {
  word_definitions: WordDefinition[];   // ✅ fixed
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export default function Index({
  word_definitions,
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


  const columns: ColumnConfig<WordDefinition>[] = [
    {
      key: "definition",  
      label: "Definition",
      sortable: true,
      render: (wordDefinition) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {wordDefinition.definition}
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Created Date",
      sortable: true,
      render: (wordDefinition) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(wordDefinition.created_at).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: "updated_at",
      label: "Updated Date",
      sortable: true,
      render: (wordDefinition) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(wordDefinition.updated_at).toLocaleDateString()}
        </div>
      ),
    }
  ];


  const actions: ActionConfig<WordDefinition>[] = [
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (wordDefinition) => {
        router.visit(route("admin.wm.definitions.edit", wordDefinition.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (wordDefinition) => {
        if (confirm(`Are you sure you want to delete ${wordDefinition.id}?`)) {
          router.delete(route("admin.wm.definitions.destroy", wordDefinition.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
    <AdminLayout activeSlug="word-definition-management">
      <Head title="Word Definitions" />   

      <div className="flex justify-end mb-6">
        <Link href={route("admin.wm.definitions.create")}>
          <Button>Create Word Definition</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={word_definitions}   
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
          emptyMessage="No word definitions found"
          searchPlaceholder="Search definitions..."
        />
      </div>
    </AdminLayout>
  );
}
