import styles from './PostSkeleton.module.css';

const PostSkeleton = () => {
  return (
    <div className={styles.skeletonsContainer}> 
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