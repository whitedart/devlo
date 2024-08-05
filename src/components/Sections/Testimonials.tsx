import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {SectionId, testimonial} from '../../data/data';
import type {Testimonial} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {testimonials} = testimonial;

  // const resolveSrc = useMemo(() => {
  //   if (!imageSrc) return undefined;
  //   return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  // }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8 bg-neutral-900',
          parallaxEnabled && 'bg-fixed',
        )}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div
            className="flex flex-col items-center p-6 shadow-lg gap-y-6 rounded-xl bg-gray-800/60"
            style={{backgroundColor: 'black'}}>
            <div
              className="flex w-full overflow-x-auto no-scrollbar touch-pan-x snap-x snap-mandatory gap-x-6 scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
  ({testimonial: {text, name, image, href}, isActive}) => (
    <div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
        isActive ? 'opacity-100' : 'opacity-0',
      )}>
      {image ? (
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
          <QuoteIcon className="absolute w-4 h-4 text-white -left-2 -top-2 stroke-black" />
          <img className="w-full h-full rounded-full" src={image} />
        </div>
      ) : (
        <QuoteIcon className="w-5 h-5 text-white shrink-0 sm:h-8 sm:w-8" />
      )}
      <div className="flex flex-col gap-y-4">
        <p className="italic font-medium prose-sm prose text-white sm:prose-base">{text}</p>
        <a
          className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg"
          href={href}
          style={{color: 'rgba(249, 115, 22, 1) !important', cursor: 'pointer'}}
          target="_blank">
          <p style={{color: 'rgba(249, 115, 22, 1) !important', cursor: 'pointer'}}>-- {name}</p>
        </a>
      </div>
    </div>
  ),
);

export default Testimonials;
