import AppLogo from '@/components/app-logo';
import { NavItem } from '@/components/ui/nav-item';
import { cn } from '@/lib/utils';
import { type NavItemType, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BarChart, BookOpen, LayoutGrid, LogOut, Shield, User, Users, WholeWord } from 'lucide-react';
import * as React from 'react';
// Navigation configuration
const adminNavItems: NavItemType[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutGrid,
        slug: 'dashboard',
    },
    {
        title: 'User Management',
        href: '#',
        icon: Users,
        badge: 2,
        children: [
            {
                title: 'Admins',
                href: route('admin.all'),
                icon: Shield,
                permission: 'manage admins',
                slug: 'admin-admins',
            },
            {
                title: 'Users',
                href: '#',
                icon: User,
            },
        ],
    },
    {
        title: 'Word Management',
        href: '#',
        icon: BookOpen,
        badge: 3,
        children: [
            {
                title: 'Words',
                href: route('admin.wm.words.index'),
                icon: WholeWord,
                permission: 'manage admins',
                slug: 'word-management',
            },
            {
                title: 'Users',
                href: '#',
                icon: User,
            },
        ],
    },
    {
        title: 'Inquiries',
        href: '#',
        icon: BarChart, // Using BarChart as a placeholder, can be changed
        permission: 'view analytics', // Assuming similar permission structure
        slug: 'admin-inquiries',
    },
];

interface AdminSidebarProps {
    isCollapsed: boolean;
    activeSlug?: string | null;
}

export const AdminSidebar = React.memo<AdminSidebarProps>(
    ({ isCollapsed, activeSlug }) => {
        const { url, props } = usePage();
        const currentRoute = url;

        // Extract permissions from auth props
        const userPermissions = React.useMemo(() => {
            const auth = props.auth as SharedData['auth'];
            return (
                auth?.user?.permissions ||
                auth?.user?.all_permissions ||
                auth?.permissions ||
                []
            );
        }, [props.auth]);

        return (
            <aside
                className={cn(
                    'relative hidden h-screen border-r bg-background',
                    'transition-all duration-300 ease-in-out',
                    'flex-col md:flex',
                    isCollapsed ? 'w-16' : 'w-64',
                )}
            >
                {/* Logo Section */}
                <div
                    className={cn(
                        'flex h-16 items-center border-b',
                        isCollapsed ? 'justify-center px-2' : 'px-6',
                    )}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        {isCollapsed ? (
                          <AppLogo className="text-base! bg-btn-primary p-3 rounded-lg" favicon={true} />
                        ) : (
                           <div className='grid grid-cols-3 items-center gap-4'>
                             <AppLogo className="text-base! bg-btn-primary p-3 rounded-lg" favicon={true} />
                             <div className='col-span-2'>
                             <h1 className="text-lg font-semibold text-admin-text-primary">Admin Panel</h1>
                             <p className="text-sm text-admin-text-secondary/70">Dashboard</p>
                            </div> 
                           </div>
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <div className="custom-scrollbar flex-1 overflow-y-auto px-3 py-4">
                    <nav className="space-y-1">
                        {adminNavItems.map((item, index) => (
                            <NavItem
                                key={`${item.title}-${index}`}
                                item={item}
                                isCollapsed={isCollapsed}
                                currentRoute={currentRoute}
                                isActive={activeSlug === item.slug}
                                permissions={userPermissions}
                            />
                        ))}
                    </nav>
                </div>

                {/* Footer Section (Optional) */}
                {!isCollapsed ? (
                    <div className="border-t p-4">
                        <div className="text-center text-xs flex justify-between">
                           <Link
                            className=" w-full cursor-pointer flex items-center justify-start hover:text-admin-text-danger"
                            href="/admin/logout"
                            method="post"
                           
                        
                        >
                            <LogOut className="mr-2 h-4" />
                            Log out
                        </Link>
                        </div>
                    </div>
                ):(
                    <div className="border-t p-4">
                        <div className="text-center text-xs flex justify-between">
                           <Link
                            className=" w-full cursor-pointer flex items-center justify-start hover:text-admin-text-danger"
                            href="/admin/logout"
                            method="post"
                           
                        
                        >
                            <LogOut className="mr-2 h-4" />
                        </Link>
                        </div>
                    </div>
                )}
            </aside>
        );
    },
);

AdminSidebar.displayName = 'AdminSidebar';