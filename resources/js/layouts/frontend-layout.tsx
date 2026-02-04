import * as React from 'react';

import { FrontendFooter } from '@/layouts/partials/frontend/footer';
import {FrontendHeader} from './partials/frontend/header';
import { useAppearance } from '@/hooks/Appearance';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
        const {appearance, updateAppearance} = useAppearance();
    
        React.useEffect(() => {
            if(appearance != 'light') updateAppearance('light');
        }, [appearance, updateAppearance]);
    return (
        <div className="flex min-h-screen flex-col">
            <FrontendHeader/>
            <main className="flex flex-1 flex-col">{children}</main>
            <FrontendFooter />
        </div>
    );
}
