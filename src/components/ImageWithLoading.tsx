import { useState } from "react";
import Image from 'next/image';

interface ImageWithLoadingProps {
    src: string;
    alt: string;
}

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loader border-t-transparent border-solid border-white animate-spin rounded-full border-4 h-8 w-8"></div>
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className={`transition-transform duration-500 transform group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-100'}`}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    );
};