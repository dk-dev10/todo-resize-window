import { useRef, useEffect } from 'react';

import './style.css';

const TextareaAutosize = ({ value, onChange, ...restProps }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleChange = (event) => {
    adjustTextareaHeight();
    if (onChange) {
      onChange(event);
    }
  };

  return <textarea
    className='textareaAutoResize'
    ref={textareaRef}
    value={value}
    onChange={handleChange}
    {...restProps}
  />;
};

export default TextareaAutosize;
