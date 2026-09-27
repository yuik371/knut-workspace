import React, { useEffect } from 'react';

import './App.css';

const App = () : React.JSX.Element => {
  useEffect(() => {
    // 커서포인터 관련 이벤트
    const cursor = document.querySelector<HTMLElement>('.cursor');
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    // 커서포인터
    <div className="cursor" style={{ 'left': '733px', 'top': '1px' }}></div>
  );
}

export default App;