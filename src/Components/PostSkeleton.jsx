import styles from './PostSkeleton.module.css';

const PostSkeleton = ({ noPadding = false }) => {
  return (
    <div className={`${styles.skeletonsContainer} ${noPadding ? styles.noPadding : ''}`}> 
        <div className={styles.postSkeleton}>
        <div className={styles.skeletonSubreddit}></div>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonMeta}></div>
        <div className={styles.skeletonBar}></div>
        <div className={styles.skeletonComments}></div>
        </div>
    </div>
  );
};

export default PostSkeleton;