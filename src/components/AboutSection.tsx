import { motion } from 'motion/react';
import RollButton from './RollButton';

export default function AboutSection() {
  const smallImageUrl = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85";
  const largeImageUrl = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85";

  return (
    <section 
      id="about" 
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8 select-none">
          {/* Numbered circle */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold font-mono">
            1
          </div>
          {/* Pill label */}
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-800">
            Представляем AscendSystems
          </span>
        </div>

        {/* Heading h2 */}
        <h2 className="px-5 sm:px-8 lg:px-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28">
          Дизайн на основе стратегии, приносящий
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          результаты в цифровой среде и за её пределами.
        </h2>

        {/* Content Area - MOBILE / TABLET (lg:hidden) */}
        <div className="lg:hidden px-5 sm:px-8 flex flex-col gap-8">
          <div className="max-w-2xl">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
              С помощью глубоких исследований, креативного мышления и постоянных итераций мы помогаем растущим брендам полностью раскрыть их цифровой потенциал.
            </p>
            <div className="flex justify-start">
              <RollButton text="О нашей студии" variant="orange" />
            </div>
          </div>

          {/* Two images container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
            <div className="sm:w-[45%] rounded-xl overflow-hidden aspect-[438/346] shadow-sm border border-gray-100">
              <img 
                src={smallImageUrl} 
                alt="Процесс разработки в AscendSystems" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:w-[55%] rounded-xl overflow-hidden aspect-[900/600] shadow-sm border border-gray-100">
              <img 
                src={largeImageUrl} 
                alt="Креативное пространство и дизайн" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Content Area - DESKTOP (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12 select-none">
          {/* Left Column (Small image) */}
          <div className="self-end rounded-2xl overflow-hidden aspect-[438/346] shadow-sm border border-gray-100/50">
            <motion.img 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              src={smallImageUrl} 
              alt="AscendSystems - Креативное решение" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Center Column (Paragraph + Button) */}
          <div className="self-start flex flex-col items-start pl-4 xl:pl-8">
            <p className="text-[15.5px] xl:text-[17px] leading-[1.65] text-gray-900 font-medium mb-8">
              Благодаря исследованиям, креативу
              <br />
              и постоянному совершенствованию,
              <br />
              мы помогаем брендам раскрыть
              <br />
              их максимальный цифровой потенциал.
            </p>
            <RollButton text="О нашей студии" variant="orange" />
          </div>

          {/* Right Column (Large image) */}
          <div className="self-end rounded-2xl overflow-hidden aspect-[3/2] shadow-md border border-gray-100/50">
            <motion.img 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              src={largeImageUrl} 
              alt="Студия дизайна и технологий" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
