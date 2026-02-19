import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig } from '@/types/data-table.types';
import { Head, router } from '@inertiajs/react';
import { Eye, Trash2 } from 'lucide-react';

interface Contact {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    contactUs: Contact[];
    pagination: any;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

const truncateText = (text: string, length: number = 80) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};

const Index = ({
    contactUs,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: Props) => {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Contact>[] = [
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (contact) => (
                <div className="font-medium text-gray-900 dark:text-gray-100">
                    {contact.name}
                </div>
            ),
        },
        {
            key: 'email',
            label: 'Email',
            sortable: true,
            render: (contact) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {contact.email}
                </div>
            ),
        },
        {
            key: 'subject',
            label: 'Subject',
            sortable: true,
            render: (contact) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {contact.subject}
                </div>
            ),
        },
        {
            key: 'message',
            label: 'Message',
            sortable: false,
            render: (contact) => (
                <div className="max-w-xs text-gray-600 dark:text-gray-400">
                    {truncateText(contact.message, 80)}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Contact>[] = [
        {
            icon: <Eye className="h-4 w-4" />,
            label: 'View',
            onClick: (contact) => {
                router.visit(route('admin.cu.contact-us.show', contact.id));
            },
        },
        {
            icon: <Trash2 className="h-4 w-4" />,
            label: 'Delete',
            onClick: (contact) => {
                if (confirm('Are you sure you want to delete this contact?')) {
                    router.delete(
                        route('admin.cu.contact-us.destroy', contact.id),
                    );
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="admin-inquiries">
            <Head title="Contact Us" />
            <div className="mx-auto">
                <DataTable
                    data={contactUs}
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
                    emptyMessage="No contact us found"
                    searchPlaceholder="Search contact us by name, email..."
                />
            </div>
        </AdminLayout>
    );
};

export default Index;
