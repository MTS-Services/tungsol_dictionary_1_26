import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    favicon?: boolean;
}

export default function AppLogo({ className, favicon, ...props }: AppLogoProps) {
    return (
        <>
        {
            !favicon ? (
               <img src={'/assets/images/logo.png'} alt={'WordWise Logo'} className={className}/>
            ): (
                <img src={'/assets/images/favicon.png'} alt={'Favicon Logo'} className={className}/>
            )
        }

        </>
    );
}
