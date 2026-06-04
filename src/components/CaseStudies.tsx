import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const videoNarrativ = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4";
  const videoLuminar = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4";

  return (
    <section 
      id="case-studies" 
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 select-none">
          {/* Numbered circle */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold font-mono">
            2
          </div>
          {/* Pill label */}
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-800">
            Рекомендуемые кейсы
          </span>
        </div>

        {/* Heading h2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16">
          Наши проекты
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Card 1 - Narrativ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Video container */}
            <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer shadow-sm border border-gray-100/10">
              <video 
                src={videoNarrativ}
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              
              {/* Expandable Hover button: white circle */}
              <div 
                className="absolute bottom-4 left-4 h-9 w-9 bg-white text-gray-900 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-[148px] shadow-md border border-white/20 select-none overflow-hidden"
              >
                {/* Text showing on hover */}
                <span className="absolute left-4 text-[13px] font-semibold tracking-tight text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
                  Подробнее
                </span>
                
                {/* Two arc path SVG for Lucide link icon */}
                <div className="absolute right-2.5 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-45">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-[14px] h-[14px] text-gray-900"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex flex-col">
              <span className="text-[15px] sm:text-[16px] font-bold text-gray-950 order-1">
                Детейлинг «Carbon» &mdash; ИИ-агенты и автоответы
              </span>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1.5 order-2">
                Внедрение автоответчика и CRM-интеграции для перехвата звонков во внерабочее время. Спасены 42 клиента на услуги комплексного детейлинга. Инвестиция окупилась в первый день благодаря 1 посетителю на нанесение керамики.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Luminar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Video container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer shadow-sm border border-gray-100/10">
              <video 
                src={videoLuminar}
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              
              {/* Expandable Hover button: dark circle */}
              <div 
                className="absolute bottom-4 left-4 h-9 w-9 bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-[168px] shadow-md border border-gray-800 select-none overflow-hidden"
              >
                {/* Text showing on hover */}
                <span className="absolute left-4 text-[13px] font-medium tracking-tight text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
                  Смотреть кейс
                </span>
                
                {/* Arrow icon */}
                <div className="absolute right-2.5 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-45">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex flex-col">
              <span className="text-[15px] sm:text-[16px] font-bold text-gray-950 order-1">
                Автосервис «МагнитАвто» &mdash; Локальное SEO и Репутация
              </span>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1.5 order-2">
                Запуск автосбора отзывов через QR и CRM-триггеры. Выход в ТОП-3 на Яндекс.Картах в Магнитогорске. Приток новых обращений на диагностику и ремонт вырос на 45% за счёт рейтинга 4.9★. Окупилось за первый заезд на замену ГРМ.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
