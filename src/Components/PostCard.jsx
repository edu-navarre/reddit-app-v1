import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import commentsIcon from '../Assets/Comment-11.svg';
import styles from './PostCard.module.css';

const PostCard = ({ id, title, subreddit, author, preview, media, num_comments }) => {
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
    <div className={styles.postCard}>
      <p className={styles.subredditTag}>r/{subreddit}</p>
      <h3 className={styles.postTitle}>
        <Link className={styles.postLink} to={`/post/${id}`}>{title}</Link>
      </h3>

      {videoUrl ? (
        isPortrait ? (
          <div className={styles.portraitContainer}>
            <video className= {styles.portraitMedia} ref={mediaRef} controls src={videoUrl}/>
          </div>
          ) : (
            <video className={styles.landscapeMedia} ref={mediaRef} controls src={videoUrl}/>
          )
      ) : imageUrl ? (
        isPortrait ? (
          <div className={styles.portraitContainer}>
            <img className={styles.portraitMedia} ref={mediaRef} src={imageUrl} alt="Post Thumbnail"/>
          </div>
          ) : (
            <img className={styles.landscapeMedia} ref={mediaRef} src={imageUrl} alt="Post Thumbnail"/>
          )
      ) : null}

      <p className={styles.postAuthor}>Posted by u/{author}</p>
      
      
      <a className={styles.commentContainer} href={`/post/${id}`}>
        <img src={commentsIcon} alt="Eddit Logo" style={{ paddingLeft: '0.5rem', width:'20px' }} />
        <p style={{padding: '0.5rem', margin: '0', fontSize: 'var(--font-size-sm)'}}>
          {num_comments} {num_comments === 1 ? 'comment' : 'comments'}
        </p>
      </a>
    </div>
  );
};


export default PostCard;