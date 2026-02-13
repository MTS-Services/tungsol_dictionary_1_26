import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    favicon?: boolean;

}

export default function AppLogo({ className, favicon, ...props }: AppLogoProps) {
    return (
        <img
            src={'/assets/images/image 7.png'}
            alt={'WordWise Logo'}
            // Added className here, merging potential props with custom sizes
            className={cn('h-15 w-19', className)}
            {...props}
        />
    );
}
