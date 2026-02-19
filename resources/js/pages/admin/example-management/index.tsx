import Admin from "@/actions/App/Http/Controllers/Admin";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/layouts/admin-layout";
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Head, Link, router } from "@inertiajs/react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";

interface Example {
  id: number;
  sentence: string;
  source: string;
  author: string;
  year: string;
  definition_id: number;
  created_at: string;
  updated_at: string;
}
interface Props {
  examples: Example[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}
export default function Index({
  examples,
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

  const columns: ColumnConfig<Example>[] = [
    {
      key: "definition_id",
      label: "Definition",
      sortable: true,
      render: (example) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {example.definition_id}
        </div>
      ),
    },
    {
      key: "sentence",
      label: "Sentence",
      sortable: true,
      render: (example) => (
        <div className="text-gray-600 dark:text-gray-400">
          {example.sentence}
        </div>
      ),
    },
    {
      key: "source",
      label: "Source",
      sortable: true,
      render: (example) => (
        <div className="text-gray-600 dark:text-gray-400">
          {example.source}
        </div>
      ),
    },
    {
      key: "author",
      label: "Author",
      sortable: true,
      render: (example) => (
        <div className="text-gray-600 dark:text-gray-400">
          {example.author}
        </div>
      ),
    },
    {
      key: "year",
      label: "Year",
      sortable: true,
      render: (example) => (
        <div className="text-gray-600 dark:text-gray-400">
          {example.year}
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Created Date",
      sortable: true,
      render: (example) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(example.created_at).toLocaleDateString()}
        </div>
      ),
    },
  ];

  const actions: ActionConfig<Example>[] = [
    {
      label: "View",
      icon: <Eye className="h-4 w-4" />,
      onClick: (example) => {
        router.visit(route("admin.em.examples.show", example?.id));
      },
    },
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (example) => {
        router.visit(route("admin.em.examples.edit", example?.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (example) => {
        if (confirm(`Are you sure you want to delete ${example.sentence}?`)) {
          router.delete(route("admin.em.examples.destroy", example?.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
    <AdminLayout activeSlug="examples">
      <Head title="Examples" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.em.examples.create")}>
          <Button>Create Example</Button>
        </Link>
      </div>

      <div className="mx-auto">
        <DataTable
          data={examples}
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
          emptyMessage="No Examples found"
          searchPlaceholder="Search examples by sentence, source..."
        />
      </div>
    </AdminLayout>
  );
}
