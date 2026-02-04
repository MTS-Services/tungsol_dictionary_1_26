import * as React from 'react';
import { type ReactNode } from 'react';

import { Toaster } from "@/components/ui/sonner"
import { type BreadcrumbItem } from '@/types';
import { useAppearance } from '@/hooks/Appearance';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children }: AppLayoutProps) {
    const {appearance, updateAppearance} = useAppearance();

    React.useEffect(() => {
        if(appearance != 'light') updateAppearance('light');
    }, [appearance, updateAppearance]);

    return (
        <div className="flex min-h-screen">
            <main>{children}</main>
            <Toaster position="top-right" richColors />
            {/* <UserSidebar isCollapsed={isCollapsed} />
            <div className="flex flex-1 flex-col">
                <UserHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <main className="flex-1 p-6">{children}</main>
                <UserFooter />
            </div> */}
        </div>
    );
}