import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import AdminLayout from "@/layouts/admin-layout";
import { ActionConfig, ColumnConfig, PaginationData } from "@/types/data-table.types";
import { Head, Link, router } from "@inertiajs/react";
import { CheckCircle, Pencil, Trash2, XCircle } from "lucide-react";
import React from "react";

interface WordEntry {
  id: number;
  word_id: number;
  part_of_speech_id: number;
  sort_order: number;
  etymology: string;
  pronunciation_ipa: string;
  audio_url: string;
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
  word_entries: WordEntry[];
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
  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  const columns: ColumnConfig<WordEntry>[] = [
    {
      key: "id",
      label: "Word",
      sortable: true,
      render: (wordEntry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {wordEntry.word.word}
        </div>
      ),
    },{
      key: "id",
      label: "Part of Speech",
      sortable: true,
      render: (wordEntry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {wordEntry.part_of_speech.name}
        </div>
      ),
    },{
      key: "etymology",
      label: "Etymology",
      sortable: true,
      render: (wordEntry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {wordEntry.etymology}
        </div>
      ),
    },{
      key: "syllables",
      label: "syllables",
      sortable: true,
      render: (wordEntry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {wordEntry.syllables}
        </div>
      ),
    },
    {
      key: "pronunciation_audio",
      label: "Pronunciation",
      sortable: false,
      render: (wordEntry) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          <audio src={wordEntry.audio_url} controls></audio>
        </div>
      ),
    },
    {
      key: "created_at",
      label: "Created Date",
      sortable: true,
      render: (wordEntry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(wordEntry.created_at).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: "updated_at",
      label: "Updated Date",
      sortable: true,
      render: (wordEntry) => (
        <div className="text-gray-600 dark:text-gray-400">
          {new Date(wordEntry.updated_at).toLocaleDateString()}
        </div>
      ),
    }
  ];

  const actions: ActionConfig<WordEntry>[] = [
    {
      label: "Edit",
      icon: <Pencil className="h-4 w-4" />,
      onClick: (wordEntry) => {
        router.visit(route("admin.wm.words-entries.edit", wordEntry?.id));
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (wordEntry) => {
        if (confirm(`Are you sure you want to delete ${wordEntry.id}?`)) {
          router.delete(route("admin.wm.words.destroy", wordEntry?.id));
        }
      },
      variant: "destructive",
    },
  ];

  return (
    <AdminLayout activeSlug="word-entries-management">
      <Head title="Words" />

      <div className="flex justify-end mb-6">
        <Link href={route("admin.wm.words-entries.create")}>
          <Button>Create Word Entry</Button>
        </Link>
      </div>

      <div className="mx-auto">
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
          emptyMessage="No word entries found"
          searchPlaceholder="Search entries..."
        />
      </div>
    </AdminLayout>
  );
}