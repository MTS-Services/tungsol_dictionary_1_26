import { router } from '@inertiajs/react';
import { useState, useCallback } from 'react';

interface UseDataTableProps {
    preserveState?: boolean;
    preserveScroll?: boolean;
    only?: string[];
}

export function useDataTable(options: UseDataTableProps = {}) {
    const {
        preserveState = true,
        preserveScroll = true,
        only,
    } = options;

    const [isLoading, setIsLoading] = useState(false);

    const navigateWithParams = useCallback(
        (params: Record<string, string>) => {
            setIsLoading(true);

            const currentRoute = route().current();
            if (!currentRoute) return;

            const requestOptions: Parameters<typeof router.get>[2] = {
                preserveState,
                preserveScroll,
                onFinish: () => setIsLoading(false),
            };

            if (only && only.length > 0) {
                requestOptions.only = only;
            }

            router.get(
                route(currentRoute),
                params,
                requestOptions
            );
        },
        [preserveState, preserveScroll, only]
    );

    const handleSearch = useCallback(
        (search: string) => {
            const params = new URLSearchParams(window.location.search);

            if (search) {
                params.set('search', search);
            } else {
                params.delete('search');
            }

            params.set('page', '1'); // Reset to first page on search

            navigateWithParams(Object.fromEntries(params));
        },
        [navigateWithParams]
    );

    const handleFilterChange = useCallback(
        (filters: Record<string, unknown>) => {
            const params = new URLSearchParams(window.location.search);

            // Remove old filter params
            for (const key of Array.from(params.keys())) {
                if (key.startsWith('filters[')) {
                    params.delete(key);
                }
            }

            // Add new filter params
            Object.entries(filters).forEach(([key, value]) => {
                if (value) {
                    params.set(`filters[${key}]`, String(value));
                }
            });

            params.set('page', '1'); // Reset to first page on filter change

            navigateWithParams(Object.fromEntries(params));
        },
        [navigateWithParams]
    );

    const handleSort = useCallback(
        (sortBy: string, sortOrder: 'asc' | 'desc') => {
            const params = new URLSearchParams(window.location.search);

            params.set('sort_by', sortBy);
            params.set('sort_order', sortOrder);

            navigateWithParams(Object.fromEntries(params));
        },
        [navigateWithParams]
    );

    const handlePerPageChange = useCallback(
        (perPage: number) => {
            const params = new URLSearchParams(window.location.search);

            params.set('per_page', String(perPage));
            params.set('page', '1'); // Reset to first page on per page change

            navigateWithParams(Object.fromEntries(params));
        },
        [navigateWithParams]
    );

    const handlePageChange = useCallback(
        (page: number) => {
            const params = new URLSearchParams(window.location.search);

            params.set('page', String(page));

            navigateWithParams(Object.fromEntries(params));
        },
        [navigateWithParams]
    );

    return {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    };
}