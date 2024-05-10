import React from 'react';

const ArrowTop = props => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    window.history.replaceState({}, '', window.location.pathname);
  };

  return (
    <div
      className="arrow__container arrow__container--top" 
      style={props.isScrollTresholdCrossed 
        ? { animation: 'moveInRightArrowTop 1s ease 1.5s forwards' }
        : (!props.isScrollTresholdCrossed && props.isTresholdCrossedFirstTime)
        ? { animation: 'hideArrowTop 1s ease' } : {}}>
      <div
        onClick={scrollToTop}
        className="arrow__container-link arrow__container-link--top">
        <span className="arrow arrow--top"></span>
        <span className="arrow__title arrow__title--top">{props.pageName}</span>
      </div>
    </div>
  );
};

export default ArrowTop;