import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // If this is a stagger-children container, animate its children
                    if (entry.target.classList.contains('stagger-children')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animate-in');
                            }, index * 100);
                        });
                    }
                }
            });
        };

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');

        animatedElements.forEach(element => observer.observe(element));

        return () => {
            animatedElements.forEach(element => observer.unobserve(element));
        };
    }, []);
};

export default useScrollAnimation;
