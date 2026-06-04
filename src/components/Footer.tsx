import { useState, FormEvent } from 'react';
import { Send, Check, ArrowUp, Instagram, Github, Mail } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import RollButton from './RollButton';

export default function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setContact('');
      setMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white select-none relative overflow-hidden">
      {/* Decorative vector flare */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F26522] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff5f03] opacity-[0.08] rounded-full blur-[100px] pointer-events-none" />

      {/* --- JOURNAL SECTION --- */}
      <section id="journal" className="border-b border-gray-800 pt-20 pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 flex items-center justify-center text-[11px] sm:text-[12px] font-semibold font-mono">
              3
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-300">
              Наш журнал и статьи
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-12 text-white">
            Инсайты, тренды и мысли
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Journal Arc 1 */}
            <div className="group flex flex-col justify-between p-6 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-gray-700/80 transition-all duration-300 h-64 cursor-pointer">
              <div>
                <span className="text-[11px] font-mono text-[#E8704E] uppercase tracking-wider">Май 2026</span>
                <h4 className="text-[16px] sm:text-[18px] font-medium text-white group-hover:text-[#F26522] transition-colors duration-300 mt-2.5 leading-snug">
                  Тренды веб-анимации на 2026 год: плавность, глубина и новые WebGL шейдеры
                </h4>
              </div>
              <p className="text-[13px] text-gray-400">Читать статью в 3 минуты →</p>
            </div>

            {/* Journal Arc 2 */}
            <div className="group flex flex-col justify-between p-6 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-gray-700/80 transition-all duration-300 h-64 cursor-pointer">
              <div>
                <span className="text-[11px] font-mono text-[#E8704E] uppercase tracking-wider">Апрель 2026</span>
                <h4 className="text-[16px] sm:text-[18px] font-medium text-white group-hover:text-[#F26522] transition-colors duration-300 mt-2.5 leading-snug">
                  Как стратегия проектирования UX увеличивает конверсию сайтов в сегменте премиум
                </h4>
              </div>
              <p className="text-[13px] text-gray-400">Читать статью в 5 минут →</p>
            </div>

            {/* Journal Arc 3 */}
            <div className="group flex flex-col justify-between p-6 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-gray-700/80 transition-all duration-300 h-64 cursor-pointer">
              <div>
                <span className="text-[11px] font-mono text-[#E8704E] uppercase tracking-wider">Март 2026</span>
                <h4 className="text-[16px] sm:text-[18px] font-medium text-white group-hover:text-[#F26522] transition-colors duration-300 mt-2.5 leading-snug">
                  Разработка айдентики для международных систем: опыт студии AscendSystems
                </h4>
              </div>
              <p className="text-[13px] text-gray-400">Читать статью в 4 минуты →</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONNECT SECTION --- */}
      <section id="connect" className="pt-20 pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-900 flex items-center justify-center text-[11px] sm:text-[12px] font-semibold font-mono">
              4
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-700 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-300">
              Свяжитесь с нами
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 sm:gap-16">
            
            {/* Left Texts info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                  Готовы поднять ваш бизнес на новый уровень?
                </h3>
                <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed max-w-md">
                  Опишите вашу задачу или заполните форму, и наш ведущий стратег свяжется с вами в течение 2 часов.
                </p>
              </div>

              {/* Contacts info */}
              <div className="mt-10 sm:mt-12 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#E8704E]" />
                  <a href="mailto:hello@ascendsystems.ru" className="text-[15px] text-gray-300 hover:text-white transition-colors duration-200">
                    hello@ascendsystems.ru
                  </a>
                </div>
                <p className="text-[13px] font-sans text-gray-500">
                  AscendSystems Ltd. &copy; 2026. Все права защищены.
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-gray-800/30 border border-gray-800/80 p-6 sm:p-8 rounded-2xl relative">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Input name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Как вас зовут *</label>
                      <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Марк Аврелий" 
                        className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-[#F26522] focus:bg-gray-800/60 transition-all duration-300"
                      />
                    </div>

                    {/* Input contact */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Telegram / Telegram-Ник / Email *</label>
                      <input 
                        type="text" 
                        required 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="@username или hello@mail.com" 
                        className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-[#F26522] focus:bg-gray-800/60 transition-all duration-300"
                      />
                    </div>

                    {/* Input details */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Опишите вашу задачу (необязательно)</label>
                      <textarea 
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Разработка корпоративного сайта с 3D-анимациями..." 
                        className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-4 py-3 text-white text-[14px] outline-none focus:border-[#F26522] focus:bg-gray-800/60 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Row */}
                    <div className="mt-2 flex justify-start">
                      <RollButton text="Отправить заявку" variant="orange" />
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#F26522]/20 text-[#F26522] flex items-center justify-center mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-white">Заявка успешно отправлена!</span>
                    <p className="text-sm text-gray-400 mt-2 max-w-xs">
                      Спасибо, {name}! Мы изучим ваш запрос и напишем вам в ближайшее время.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Footer Credits line */}
          <div className="mt-16 sm:mt-24 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-gray-500 font-mono">
              Designed & Coded by AscendSystems &bull; 2026
            </span>

            {/* Socials & Scroll Top */}
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#F26522] transition-colors duration-200">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-[#F26522] transition-colors duration-200">
                <Github className="w-[18px] h-[18px]" />
              </a>
              <button 
                onClick={scrollToTop} 
                className="w-9 h-9 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
