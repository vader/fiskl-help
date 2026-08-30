import React, {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
    byId,
    captionsUrl,
    humanDuration,
    posterUrl,
    videoUrl,
    type VideoMeta,
} from '@site/src/data/videos';
import styles from './styles.module.css';

interface VideoEmbedProps {
    /** Key into src/data/videos.ts. The only required prop. */
    id: string;
    /** Override the registry title, for a page that needs different wording. */
    title?: string;
    /** Show the transcript expander. Defaults to true when a transcript exists. */
    showTranscript?: boolean;
    /** Emit VideoObject JSON-LD. Pass false on the hub so the doc page stays canonical. */
    schema?: boolean;
    className?: string;
}

const PlayBadge = () => (
    <span className={styles.playBadge} aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
            <path d="M8 5v14l11-7z" />
        </svg>
    </span>
);

/**
 * Renders a help video by registry id.
 *
 * Click-to-load: nothing but a poster loads with the page, so a page can carry
 * several videos without a performance cost. The pre-click UI is identical for
 * self-hosted and YouTube videos, which is what lets the provider change in the
 * registry without any visible difference on the page.
 */
export default function VideoEmbed({
    id,
    title,
    showTranscript,
    schema = true,
    className,
}: VideoEmbedProps): React.ReactElement {
    const [playing, setPlaying] = useState(false);
    // A poster that 404s must fall back to the generated card, never a broken
    // image icon — the CDN may lag behind a registry entry.
    const [posterFailed, setPosterFailed] = useState(false);
    const {i18n} = useDocusaurusContext();
    const meta: VideoMeta | undefined = byId(id);

    if (!meta) {
        // Visible rather than silent: a typo'd id should be obvious in review,
        // but must not break the build for everyone else.
        return (
            <div className={styles.missing}>
                Video <code>{id}</code> is not in the registry
                (<code>src/data/videos.ts</code>).
            </div>
        );
    }

    const heading = title ?? meta.title;
    const poster = posterUrl(meta);
    const captions = captionsUrl(meta);
    const isYouTube = meta.provider === 'youtube';
    const videoLang = meta.lang ?? 'en';
    const showLangNote = i18n.currentLocale !== videoLang;
    const withTranscript = (showTranscript ?? true) && Boolean(meta.transcript);

    // Built from registry data, so it stays correct through a provider switch.
    // thumbnailUrl and uploadDate are the two fields Google requires.
    const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: heading,
        description: meta.description,
        thumbnailUrl: poster,
        uploadDate: meta.uploadDate,
        duration: meta.duration,
        contentUrl: isYouTube ? undefined : videoUrl(meta),
        embedUrl: isYouTube
            ? `https://www.youtube-nocookie.com/embed/${meta.youtubeId}`
            : undefined,
        transcript: meta.transcript,
        inLanguage: videoLang,
        publisher: {
            '@type': 'Organization',
            name: 'Fiskl',
        },
    });

    const player = isYouTube ? (
        <iframe
            src={`https://www.youtube-nocookie.com/embed/${meta.youtubeId}?autoplay=1&rel=0`}
            title={heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    ) : (
        <video controls autoPlay preload="metadata" poster={poster} playsInline>
            <source src={videoUrl(meta)} type="video/mp4" />
            {captions && (
                <track
                    kind="captions"
                    src={captions}
                    srcLang={videoLang}
                    label="English"
                    default
                />
            )}
        </video>
    );

    return (
        <div className={[styles.container, className].filter(Boolean).join(' ')} id={`video-${meta.id}`}>
            {schema ? (
                // Inline rather than in <head>: JSON-LD is valid anywhere in the
                // document, and this avoids depending on react-helmet-async's
                // types, which are not resolvable in this project.
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: jsonLd}}
                />
            ) : null}

            {showLangNote && (
                <p className={styles.langNote}>This video is in English.</p>
            )}

            <div className={styles.frame}>
                {playing ? (
                    player
                ) : (
                    <button
                        type="button"
                        className={styles.facade}
                        onClick={() => setPlaying(true)}
                        aria-label={`Play video: ${heading}`}
                    >
                        {poster && !posterFailed ? (
                            <img
                                className={styles.posterImage}
                                src={poster}
                                alt=""
                                loading="lazy"
                                onError={() => setPosterFailed(true)}
                            />
                        ) : (
                            <span className={styles.generatedPoster}>
                                <span className={styles.generatedTitle}>{heading}</span>
                                <span className={styles.generatedMeta}>
                                    {humanDuration(meta.duration)}
                                </span>
                            </span>
                        )}
                        <PlayBadge />
                    </button>
                )}
            </div>

            <p className={styles.caption}>
                {heading} · {humanDuration(meta.duration)}
            </p>

            {withTranscript && (
                <details className={styles.transcript}>
                    <summary>Read the transcript</summary>
                    <div className={styles.transcriptBody}>{meta.transcript}</div>
                </details>
            )}
        </div>
    );
}
