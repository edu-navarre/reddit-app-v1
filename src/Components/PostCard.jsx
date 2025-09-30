import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const PostCard = ({ id, title, subreddit, author, preview, media }) => {
  const imageUrl = preview?.images?.[0]?.source?.url?.replace(/&amp;/g, '&');
  const videoUrl = media?.reddit_video?.fallback_url;

  const mediaRef = useRef(null);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const el = mediaRef.current;
    if (el) {
      const checkDimensions = () => {
        const width = el.videoWidth || el.naturalWidth;
        const height = el.videoHeight || el.naturalHeight;
        if (width && height) {
          setIsPortrait(height > width);
        }
      };
      el.addEventListener('loadedmetadata', checkDimensions);
      el.addEventListener('load', checkDimensions); // for images
      return () => {
        el.removeEventListener('loadedmetadata', checkDimensions);
        el.removeEventListener('load', checkDimensions);
      };
    }
  }, [imageUrl, videoUrl]);

  return (
    <div className="post-card"
    style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '20px',
        padding: 'var(--space-sm)',
        marginBottom: 'var(--space-md)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        maxWidth: '50%',
        marginTop: 'var(--space-sm)',
      }}
    >
      <p>r/{subreddit} • Posted by u/{author}</p>
      <h3><Link to={`/post/${id}`}>{title}</Link></h3>

      {videoUrl ? (
        isPortrait ? (
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            borderRadius: '20px',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'var(--space-sm)',
            padding: '0',
          }}>
            <video
              ref={mediaRef}
              controls
              src={videoUrl}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        ) : (
          <video
            ref={mediaRef}
            controls
            src={videoUrl}
            style={{
              width: '100%',
              borderRadius: '20px',
              marginTop: 'var(--space-sm)',
            }}
          />
        )
      ) : imageUrl ? (
        isPortrait ? (
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            borderRadius: '20px',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 'var(--space-sm)',
            padding: '0',
          }}>
            <img
              ref={mediaRef}
              src={imageUrl}
              alt="Post Thumbnail"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        ) : (
          <img
            ref={mediaRef}
            src={imageUrl}
            alt="Post Thumbnail"
            style={{
              width: '100%',
              borderRadius: '20px',
              marginTop: 'var(--space-sm)',
            }}
          />
        )
      ) : null}
    </div>
  );
};


export default PostCard;