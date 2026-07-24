import { useState, useRef } from 'react';
import ProgressBar from './ProgressBar';

function AccordionCategory({ icon, title, items, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span className="accordion-title">
          <span className="accordion-icon">{icon}</span>
          {title}
        </span>
        <span className="accordion-arrow">▾</span>
      </button>

      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : '0px',
        }}
      >
        <div className="accordion-inner">
          {items.map((item, i) => (
            <ProgressBar key={i} name={item.name} percentage={item.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionCategory;