import "./SkeletonLoader.css";

function SkeletonLoader(props) {
  const count = props.count || 4;
  return (
    <>
      <div className="skeleton-loader">
        {Array.from({ length: count }, (_, index) => (
          <div key={index} className="skeleton-line"></div>
        ))}
      </div>
    </>
  );
}

export default SkeletonLoader;
