import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    favicon?: boolean;

}

export default function AppLogo({ className, favicon, ...props }: AppLogoProps) {
    return (
        <img
            src={'/assets/images/logo.svg'}
                  
            alt={'Site Logo'}
            // Added className here, merging potential props with custom sizes
            className={cn('w-30 h-20', className)}
            {...props}
        />
    );
}
