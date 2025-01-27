import { useSprings, animated, SpringConfig } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: Partial<React.CSSProperties>;
    animationTo?: Partial<React.CSSProperties>;
    easing?: SpringConfig['easing'];
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
    onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
    text = '',
    className = '',
    delay = 50,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = (t: number) => t,
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
}) => {
    const letters = text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next: (props: Partial<React.CSSProperties>) => Promise<void>) => {
                      await next(animationTo);
                      animatedCount.current += 1;
                      if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                          onLetterAnimationComplete();
                      }
                  }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline ${className}`}
            style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
        >
            {letters.map((letter, index) => (
                <animated.span
                    key={index}
                    style={springs[index] as Partial<React.CSSProperties>}
                    className="inline-block transform transition-opacity will-change-transform"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </animated.span>
            ))}
        </p>
    );
};

export default SplitText;
