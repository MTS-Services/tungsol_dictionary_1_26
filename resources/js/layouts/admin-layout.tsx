import * as React from 'react';
import { AdminSidebar } from '@/layouts/partials/admin/sidebar';
import { AdminHeader } from '@/layouts/partials/admin/header';
import { AdminFooter } from './partials/admin/footer';
import { useAppearance } from '@/hooks/Appearance';


interface AdminLayoutProps {
    children: React.ReactNode;
    activeSlug?: string | null;
    pageTitle?: string;
}

export default function AdminLayout({ children, activeSlug, pageTitle }: AdminLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(() => {
        // Persist sidebar state in localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('admin-sidebar-collapsed');
            return saved ? JSON.parse(saved) : false;
        }
        return false;
    });

    const {appearance, updateAppearance} = useAppearance();

    React.useEffect(() => {
        if(appearance != 'light') updateAppearance('light');
    }, [appearance, updateAppearance]);

    // Save sidebar state to localStorage
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('admin-sidebar-collapsed', JSON.stringify(isCollapsed));
        }
    }, [isCollapsed]);

    React.useEffect(() => {
        // document.getElementsByTagName('html')[0].classList.remove('dark');
        
    })
    
    return (
        <div className="relative flex h-full max-h-screen min-h-screen bg-background">
            <AdminSidebar isCollapsed={isCollapsed} activeSlug={activeSlug} />
            <div className="flex flex-1 flex-col overflow-hidden">
                <AdminHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} pageTitle={pageTitle} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-6">
                    {children}
                </main>
            
                {/* <AdminFooter /> */}
            </div>
        </div>
    );
}