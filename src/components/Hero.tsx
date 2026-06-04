import { motion } from 'motion/react';
import Navbar from './Navbar';
import HeroShader from './HeroShader';
import RollButton from './RollButton';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between bg-[#EFEFEF]"
    >
      {/* Absolute Full Screen Shader */}
      <HeroShader />

      {/* Navigation Layer */}
      <div className="z-20 relative w-full">
        <Navbar />
      </div>

      {/* Spacer pushing content to the bottom */}
      <div className="flex-1" />

      {/* Hero Content Section */}
      <div className="z-20 relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-24 pt-16 flex flex-col justify-end select-none">
        
        {/* Small studio label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[13px] sm:text-[14px] text-gray-900 font-medium uppercase tracking-widest mb-5 sm:mb-7"
        >
          Студия AscendSystems
        </motion.div>

        {/* Big Headline H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-5xl"
        >
          Мы создаем цифровой опыт
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          для брендов, готовых доминировать
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          в своей категории в сети.
        </motion.h1>

        {/* CTA rows and badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          {/* Start Project Trigger */}
          <div className="flex justify-start">
            <RollButton 
              text="Начать проект" 
              onClick={() => handleScroll('case-studies')}
              variant="orange"
            />
          </div>

          {/* Partner Badge */}
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/50 transition-all duration-500 max-w-fit pointer-events-auto">
            {/* Compass / Starburst Inline SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100" 
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E] shrink-0"
            >
              <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
            </svg>
            
            {/* Texts */}
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 tracking-tight">
              Сертифицированный партнер
            </span>

            {/* Dark badge "Featured" */}
            <span className="text-[9.5px] sm:text-[10px] bg-gray-900 text-white font-mono px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
              Избранное
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
