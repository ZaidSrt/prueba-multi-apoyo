

export default function Load({ size = 40 }) {

  return (
    <div className='content-spinner'>
      <svg className="spinner" viewBox="0 0 50 50" width={`${size}px`} height={`${size}px`}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="#71d44c"></circle>
      </svg>
    </div>
  );
}