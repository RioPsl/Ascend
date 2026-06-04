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
          className="text-[13px] sm:text-[14px] text-gray-900 font-semibold uppercase tracking-widest mb-4 sm:mb-6"
        >
          AscendSystems &bull; Автоматизация и Маркетинг
        </motion.div>

        {/* Big Headline H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(1.75rem,5.5vw,3.8rem)] sm:text-[clamp(2.3rem,4.8vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.03em] text-gray-900 max-w-5xl"
        >
          Дизайн сайтов и
          <br className="hidden sm:block" />
          маркетинговые системы
          <br className="hidden sm:block" />
          <span className="text-[#F26522]">для локального бизнеса</span>
        </motion.h1>

        {/* Brand subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[15px] sm:text-[18px] text-gray-700 font-sans tracking-tight max-w-2xl mt-5 leading-relaxed"
        >
          Создаём конверсионные веб-платформы, настраиваем умные ИИ-агенты, автоматизируем сбор 5★ отзывов и восстанавливаем потерянные лиды с помощью автоответов на пропущенные звонки.
        </motion.p>

        {/* CTA rows and badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          {/* Start Project Trigger */}
          <div className="flex justify-start">
            <RollButton 
              text="Посмотреть решения" 
              onClick={() => handleScroll('about')}
              variant="orange"
            />
          </div>

          {/* Partner Badge */}
          <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/50 transition-all duration-500 max-w-fit pointer-events-auto">
            {/* Live green pulse dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            
            {/* Texts */}
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900 tracking-tight">
              Работаем с теми, кому нужны клиенты
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
