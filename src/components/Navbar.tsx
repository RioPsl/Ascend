import { useState, useEffect } from 'react';
import { Clock, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import RollButton from './RollButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  // Ekaterinburg Live Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('ru-RU', {
          timeZone: 'Asia/Yekaterinburg',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setTimeStr(formatter.format(now));
      } catch (e) {
        // Fallback
        const now = new Date();
        const hrs = String((now.getUTCHours() + 5) % 24).padStart(2, '0');
        const mins = String(now.getUTCMinutes()).padStart(2, '0');
        setTimeStr(`${hrs}:${mins}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 z-40">
      {/* Pill Navbar */}
      <nav id="navbar" className="bg-white rounded-full p-1.5 sm:p-2 shadow-sm border border-gray-100 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 pl-1">
          {/* Logo */}
          <div 
            onClick={() => handleScroll('hero')}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#F26522] transition-colors duration-500"
          >
            <span className="text-white text-[11px] sm:text-[12px] font-bold tracking-wider">AS</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => handleScroll('case-studies')}
              className="text-[14px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-300 cursor-pointer"
            >
              Проекты
            </button>
            <button 
              onClick={() => handleScroll('about')}
              className="text-[14px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-300 cursor-pointer"
            >
              Студия
            </button>
            <button 
              onClick={() => handleScroll('journal')}
              className="text-[14px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-300 cursor-pointer"
            >
              Журнал
            </button>
            <button 
              onClick={() => handleScroll('connect')}
              className="text-[14px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-300 cursor-pointer"
            >
              Контакты
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Status (hidden below lg) */}
          <span className="hidden lg:inline text-[13px] font-medium text-gray-500 tracking-tight">
            Принимаем проекты на 1 кв. 2026
          </span>

          {/* Clock (hidden below md) */}
          <div className="hidden md:flex items-center gap-1.5 bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-100/80">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[13px] font-mono text-gray-600">
              {timeStr ? `${timeStr} в Екатеринбурге` : 'Загрузка...'}
            </span>
          </div>

          {/* CTA (hidden below md) */}
          <div className="hidden md:block">
            <RollButton 
              text="Забронировать звонок" 
              onClick={() => handleScroll('connect')}
              variant="dark"
            />
          </div>

          {/* Mobile Menu Toggle (md:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-800 transition-colors duration-300 mr-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-3 left-3 right-3 bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-6"
            >
              {/* Header inside bottom sheet */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">AscendSystems</span>
                </div>
                {/* Clock inside bottom sheet */}
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-[12px] font-mono text-gray-600">
                  <Clock className="w-3 h-3" />
                  <span>{timeStr ? `${timeStr} ЕКБ` : '--:--'}</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4 py-2">
                <button
                  onClick={() => handleScroll('case-studies')}
                  className="text-left text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-200 outline-none"
                >
                  Проекты
                </button>
                <button
                  onClick={() => handleScroll('about')}
                  className="text-left text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-200 outline-none"
                >
                  Студия
                </button>
                <button
                  onClick={() => handleScroll('journal')}
                  className="text-left text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-200 outline-none"
                >
                  Журнал
                </button>
                <button
                  onClick={() => handleScroll('connect')}
                  className="text-left text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors duration-200 outline-none"
                >
                  Контакты
                </button>
              </div>

              {/* Action Inside bottom sheet */}
              <div className="pt-2 flex flex-col gap-3">
                <p className="text-[13px] text-gray-500">Принимаем заказы на разработку и дизайн.</p>
                <div className="flex justify-start">
                  <RollButton 
                    text="Начать проект" 
                    onClick={() => handleScroll('connect')} 
                    variant="orange" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
