import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <>
          <img src={'/assets/images/image 7.png'} alt={'WordWise Logo'} />
        </>
    );
}