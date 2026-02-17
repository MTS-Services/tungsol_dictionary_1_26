import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout'
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Head, Link, router } from '@inertiajs/react'
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react'

interface Article {
    id: number;
    title: string;
    slug: string;
    body: string;
    excerpt: string;
    category: string;
    author_id: number;
    is_published: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    author: {
        id: number;
        name: string;
    }
}

interface Props {
    articles: Article[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
}

export default function Index({articles, pagination, offset, filters, search, sortBy, sortOrder}: Props) {
  const {
      isLoading,
      handleSearch,
      handleFilterChange,
      handleSort,
      handlePerPageChange,
      handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Article>[] = [
      {
          key: "title",
          label: "Title",
          sortable: true,
          render: (article) => (
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {article.title}
            </div>
          ),
        },
        {
          key: "category",
          label: "Category",
          sortable: true,
          render: (article) => (
            <div className="text-gray-600 dark:text-gray-400">
              {article.category}
            </div>
          ),
        },
        {
            key: "author",
            label: "Author",
            sortable: true,
            render: (article) => (
              <div className="text-gray-600 dark:text-gray-400">
                {article.author.name}
              </div>
            ),
        },
        {
            key: "is_published",
            label: "Published",
            sortable: true,
            render: (article) => (
              <div className="text-gray-600 dark:text-gray-400">
                {article.is_published ? 'Yes' : 'No'}
              </div>
            ),
        },
        {
          key: "published_at",
          label: "Published Date",
          sortable: true,
          render: (article) => (
            <div className="text-gray-600 dark:text-gray-400">
              {article.published_at ? new Date(article.published_at).toLocaleDateString() : 'N/A'}
            </div>
          ),
        },
        {
          key: "created_at",
          label: "Created Date",
          sortable: true,
          render: (article) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(article.created_at).toLocaleDateString()}
            </div>
          ),
        },
        {
          key: "updated_at",
          label: "Updated Date",
          sortable: true,
          render: (article) => (
            <div className="text-gray-600 dark:text-gray-400">
              {new Date(article.updated_at).toLocaleDateString()}
            </div>
          ),
        }
      ];

    const actions: ActionConfig<Article>[] = [
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (article) => {
        router.visit(route("admin.am.articles.edit", article.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (article) => {
        if (confirm(`Are you sure you want to delete article "${article.title}"?`)) {
          router.delete(route("admin.am.articles.destroy", article.id));
        }
      },
      variant: "destructive",
    },
  ];
  return (
     <AdminLayout activeSlug="articles">
      <Head title="Articles" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.am.articles.create")}>
          <Button>Create Article</Button>
        </Link>
      </div>
     <div className="mx-auto">
        <DataTable
          data={articles}
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
          emptyMessage="No articles found"
          searchPlaceholder="Search articles..."
        />
      </div>
    </AdminLayout>
  )
}
