import React from 'react';
import './LayoutPair.css';

interface LayoutPairProps {
    children: React.ReactNode;
    imageUrl: string;
    useExpander?: boolean;
    tourLabel?: string;
}

function LayoutPair({
    children,
    imageUrl,
    useExpander = true,
    tourLabel = 'Take a guided tour 👀',
}: LayoutPairProps) {
    const videoContent = (
        <div className="video-wrapper">
            <iframe
                src={imageUrl}
                allowFullScreen
                allow="fullscreen"
            />
        </div>
    );

    return (
        <div className="layout-pair-container">
            <div className="layout-pair-markdown">{children}</div>
            <div className="image">
                {useExpander ? (
                    <details>
                        <summary>{tourLabel}</summary>
                        {videoContent}
                    </details>
                ) : (
                    videoContent
                )}
            </div>
        </div>
    );
}

export default LayoutPair;