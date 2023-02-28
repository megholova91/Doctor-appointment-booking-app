import { memo } from 'react';

const Loader = memo(() => (
  <div className="spinner-border spinner-border-sm text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
));

export default Loader;
