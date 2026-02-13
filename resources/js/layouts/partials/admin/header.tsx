import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useInitials } from '@/hooks/use-initials';
import { type BreadcrumbItem, type SharedData, type NavItemType } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronsLeft, ChevronsRight, Search, BellIcon, X, } from 'lucide-react';
import * as React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn, toUrl } from '@/lib/utils';
import { Icon } from '@/components/icon';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import { useActiveUrl } from '@/hooks/use-active-url';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Separator } from '@radix-ui/react-separator';
import { AdminMenuContent } from '@/components/admin-menu-content';

interface AdminHeaderProps {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    pageTitle?: string
}

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AdminHeader({ isCollapsed, setIsCollapsed, pageTitle }: AdminHeaderProps) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();
    const page = usePage<SharedData>();
    const { urlIsActive } = useActiveUrl();


    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-all ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
          
            <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </Button>

            {
                pageTitle &&
                (
                <div className='flex gap-3'>
                    <Link href={route('admin.dashboard')}>   <X /></Link>
                    <p className='text-admin-text-primary font-bold font-arial'> {pageTitle}</p>
                </div>
                )
            }
            <div className="ml-auto flex items-center space-x-2">
                <div className="relative flex items-center space-x-1">
                 
                    <Separator orientation="vertical"/>
              
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex gap-3'>
                         <div>
                            <h2 className='text-admin-text-primary text-sm font-normal font-arial text-end'>Test</h2>
                            <p className='text-admin-text-secondary/70 text-xs font-arial font-normal text-end'>Administrator</p>
                         </div>
                        <Button
                            variant="ghost"
                            className="size-10 rounded-full p-1"
                        >
                         
                            <Avatar className="size-8 overflow-hidden rounded-full">
                                <AvatarImage
                                    src={'/'}
                                    alt={auth.admin.name}
                                />
                                <AvatarFallback className="rounded-lg bg-admin-bg-hover ">
                                    {getInitials(auth.admin.name)}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                       
                        </div>
                      
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <AdminMenuContent admin={auth.admin} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </header>
    );
}