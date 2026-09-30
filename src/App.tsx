import React, { useEffect, useRef } from 'react';

import './App.css';

const App = (): React.JSX.Element => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 커서포인터 관련 이벤트
    const cursor = cursorRef.current;
    if (!cursor) return;

    // 커서 마우스 위치 추적
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // 링크/버튼 hover 이벤트 감지
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, .cursor-pointerm .hover-this')) {
        cursor.classList.add('cursor-active');
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, .cursor-pointerm .hover-this')) {
        cursor.classList.add('cursor-active');
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // hover-this 텍스트 패럴랙스 마우스 이동 핸들러
  const handleHoverMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const hoverAnim = item.querySelector('.hover-anim') as HTMLElement | null;
    if (!hoverAnim) return;

    const { nativeEvent } = e;
    const { offsetX, offsetY } = nativeEvent;
    const { offsetWidth, offsetHeight } = item;
    const move = 25;

    const xMove = (offsetX / offsetWidth) * (move * 2) - move;
    const yMove = (offsetY / offsetHeight) * (move * 2) - move;

    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  // hover-this 마우스 이탈 시 위치 초기화 핸들러
  const handleHoverMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const hoverAnim = e.currentTarget.querySelector('.hover-anim') as HTMLElement | null;
    if (hoverAnim) {
      hoverAnim.style.transform = '';
    }
  };

  return (
    <div className="App">
      {/* 커서 포인터 */}
      <div ref={cursorRef} className="cursor" />

      
    </div>
  );
}

export default App;