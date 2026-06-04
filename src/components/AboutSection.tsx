import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneMissed, 
  Star, 
  MapPin, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  MessageSquare, 
  ThumbsDown, 
  ArrowRight,
  TrendingUp,
  Sliders,
  Globe
} from 'lucide-react';
import RollButton from './RollButton';

interface SystemItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: any;
  bulletPoints: string[];
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>('missed-call');
  
  // States for Missed Call Simulator
  const [phoneState, setPhoneState] = useState<'idle' | 'calling' | 'missed' | 'texted'>('idle');
  const [progressTimer, setProgressTimer] = useState<number>(0);

  // States for Review Collector Simulator
  const [ratingInput, setRatingInput] = useState<number | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>('');

  // Auto phone text-back simulator control
  useEffect(() => {
    let interval: any;
    if (phoneState === 'calling') {
      const start = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        if (elapsed >= 3500) {
          setPhoneState('missed');
          clearInterval(interval);
        }
      }, 100);
    } else if (phoneState === 'missed') {
      // Transition to sending text message automatically after 1.5 seconds
      const timeout = setTimeout(() => {
        setPhoneState('texted');
      }, 1800);
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(interval);
  }, [phoneState]);

  const systems: SystemItem[] = [
    {
      id: 'missed-call',
      num: '01',
      title: 'Ответный текст на пропущенный звонок',
      shortDesc: 'Мгновенный SMS/WhatsApp автоответ перехватывает горячего клиента.',
      description: 'Если вы заняты работой и пропускаете входящий звонок, система автоматически отправляет клиенту персонализированное текстовое сообщение за 2 секунды. Клиент не уходит к конкурентам.',
      icon: PhoneMissed,
      bulletPoints: [
        'Предупреждает уход к конкурентам, пока вы заняты',
        'Интеграция с СРМ, Телеграмом и WhatsApp',
        'Возможность предложить мгновенный бонус за ожидание (например, скидку 10%)'
      ]
    },
    {
      id: 'reviews',
      num: '02',
      title: 'Сбор 5-звёздочных отзывов',
      shortDesc: 'Автоматический фильтр репутации на Яндекс.Картах, Google и 2GIS.',
      description: 'Превратите довольных клиентов в поток положительных отзывов. Наша система запрашивает оценку качества: довольные сразу перенаправляются на Яндекс.Карты, а недовольные отправляют приватный отзыв лично владельцу.',
      icon: Star,
      bulletPoints: [
        'Исключает случайные негативные рейтинги в публичном доступе',
        'Помогает быстро подняться на верхние строчки локальных каталогов',
        'Растёт доверие новых клиентов без платной рекламы'
      ]
    },
    {
      id: 'websites',
      num: '03',
      title: 'Функциональный сайт',
      shortDesc: 'Чистый, лаконичный дизайн, разработанный под задачи конверсии.',
      description: 'Мы не делаем перегруженные сайты-визитки. Мы проектируем легкие, стильные посадочные страницы, оптимизированные для захвата контактов на мобильных устройствах.',
      icon: Globe,
      bulletPoints: [
        'Адаптивность 100% под мобильный трафик',
        'Высокая скорость загрузки по тестам Google PageSpeed',
        'Встроенные интеграции с мессенджерами и лид-формами'
      ]
    },
    {
      id: 'local-seo',
      num: '04',
      title: 'Карты и Локальное SEO',
      shortDesc: 'Доминирование в результатах поиска "рядом со мной" под ключ.',
      description: 'Оптимизируем ваши филиалы в Яндексе, Google и 2GIS так, чтобы вы занимали топовые позиции при поиске ваших услуг в городе.',
      icon: MapPin,
      bulletPoints: [
        'Вывод карточки на первые места на картах за счёт SEO-факторов',
        'Генерация целевых прокладываний маршрутов и звонков',
        'Мониторинг позиций конкурентов в реальном времени'
      ]
    }
  ];

  const handleScrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="bg-white pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden relative select-none"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Step Badge */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold font-mono">
            1
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-800">
            Системы, которые реально работают
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.15]">
            Хватит терять клиентов. <br className="hidden sm:block" />
            Внедрите простые автосистемы и локальный маркетинг.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 mt-4 max-w-2xl leading-relaxed">
            Мы не просто запускаем рекламу. Мы строим комплексные инструменты, которые автоматически задействуют теплые лиды, собирают положительную репутацию со всех карт и помогают локальному бизнесу выделиться.
          </p>
        </div>

        {/* Split Grid: Offerings on the Left, Dynamic Simulator on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_470px] xl:grid-cols-[1fr_510px] gap-10 lg:gap-14 items-start">
          
          {/* Left Column: List of items */}
          <div className="flex flex-col gap-3">
            {systems.map((sys) => {
              const IconComp = sys.icon;
              const isActive = activeTab === sys.id;
              
              return (
                <div
                  key={sys.id}
                  onClick={() => {
                    setActiveTab(sys.id);
                    // Reset simulator states on tab switch
                    if (sys.id === 'missed-call') {
                      setPhoneState('idle');
                    } else if (sys.id === 'reviews') {
                      setRatingInput(null);
                      setFeedbackSent(false);
                      setFeedbackText('');
                    }
                  }}
                  className={`group p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-gray-50/80 border-[#F26522]/40 shadow-[0_4px_20px_-4px_rgba(242,101,34,0.06)]' 
                      : 'bg-transparent border-gray-100 hover:border-gray-200 hover:bg-gray-50/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon frame */}
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive ? 'bg-[#F26522] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex-1">
                      {/* Number and Title */}
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-[19px] font-semibold text-gray-900 tracking-tight">
                          {sys.title}
                        </h3>
                        <span className="text-xs font-mono text-gray-400 font-semibold">{sys.num}</span>
                      </div>

                      <p className="text-[13.5px] sm:text-[14.5px] text-gray-600 mt-1.5 leading-relaxed">
                        {sys.shortDesc}
                      </p>

                      {/* Expanded data if active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-gray-100"
                          >
                            <p className="text-[13.5px] sm:text-[14px] text-gray-500 leading-relaxed mb-4">
                              {sys.description}
                            </p>

                            <ul className="flex flex-col gap-2.5">
                              {sys.bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px] text-gray-700">
                                  <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA for Section */}
            <div className="mt-6 flex flex-wrap gap-4 items-center pl-2">
              <RollButton 
                text="Обсудить внедрение систем" 
                onClick={handleScrollToConnect}
                variant="orange"
              />
              <span className="text-[12.5px] text-gray-500 font-mono">
                &bull; Окупаемость системы всего за 1-2 новых клиентов
              </span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Simulator Box */}
          <div className="sticky top-28 bg-gray-50 border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] min-h-[480px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#F26522]" />
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Интерактивный симулятор</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-600 font-semibold tracking-tight">ONLINE ТЕСТ</span>
                </div>
              </div>

              {/* TAB 1 CONTENT: MISSED CALL TEXTBACK SIMULATION */}
              {activeTab === 'missed-call' && (
                <div className="flex flex-col items-center">
                  <p className="text-[12.5px] sm:text-[13px] text-center text-gray-500 mb-6 bg-white py-1.5 px-3 rounded-full border border-gray-100 shadow-sm">
                    Узнайте, как бизнес спасает лиды с авто-SMS:
                  </p>

                  {/* Smartphone Frame */}
                  <div className="w-[230px] h-[340px] bg-gray-900 rounded-[32px] p-2.5 shadow-xl border-4 border-gray-800 relative flex flex-col overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gray-950 rounded-full z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-800" />
                    </div>

                    {/* Display */}
                    <div className="flex-1 bg-gray-950 rounded-[22px] p-3 pt-5 flex flex-col justify-between text-white relative">
                      
                      {phoneState === 'idle' && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                          <Smartphone className="w-8 h-8 text-white/45 mb-4 animate-bounce" />
                          <span className="text-xs text-gray-400">Симуляция звонка от клиента</span>
                          <button
                            onClick={() => setPhoneState('calling')}
                            className="mt-5 w-full bg-[#F26522] hover:bg-[#ff7233] text-white text-[12px] font-semibold py-2 px-3 rounded-full transition-colors duration-200 shadow-md transform hover:scale-102"
                          >
                            Позвонить в компанию
                          </button>
                        </div>
                      )}

                      {phoneState === 'calling' && (
                        <div className="flex-1 flex flex-col items-center justify-between py-4 text-center">
                          <div className="mt-4">
                            <span className="text-[10px] font-mono text-gray-400 block uppercase tracking-widest">Входящий вызов</span>
                            <span className="text-[14px] font-semibold block mt-1">+7 (900) 123-**-**</span>
                          </div>

                          <div className="w-12 h-12 rounded-full border-2 border-[#F26522] flex items-center justify-center animate-pulse">
                            <PhoneMissed className="w-5 h-5 text-red-500 animate-[spin_2s_linear_infinite]" />
                          </div>

                          <span className="text-[10px] text-gray-400 italic">Звоним... Владелец занят услугой</span>

                          <button
                            onClick={() => setPhoneState('missed')}
                            className="w-full bg-red-600 hover:bg-red-700 text-white text-[11px] font-medium py-1.5 px-3 rounded-full transition-all duration-200"
                          >
                            Имитировать сброс/пропуск
                          </button>
                        </div>
                      )}

                      {phoneState === 'missed' && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-red-400">
                          <PhoneMissed className="w-8 h-8 mb-3" />
                          <span className="text-[12px] font-semibold">Пропущенный звонок</span>
                          <span className="text-[10px] text-gray-500 mt-1 block">Запуск триггера автоответа...</span>
                          
                          {/* Sending message notification bubble */}
                          <div className="mt-4 w-full bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-left text-[10px] text-gray-400 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-[#F26522] animate-ping shrink-0" />
                            <span>Генерация SMS через API за 1.2с...</span>
                          </div>
                        </div>
                      )}

                      {phoneState === 'texted' && (
                        <div className="flex-1 flex flex-col justify-between py-1.5">
                          {/* Fake Header of SMS app */}
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                            <span className="text-[9px] font-mono text-[#F26522]">SMS &bull; AscendSystems</span>
                            <span className="text-[8px] text-gray-500">Сейчас</span>
                          </div>

                          {/* Message Bubble container */}
                          <div className="flex-1 flex flex-col justify-end gap-2 text-left">
                            <div className="bg-white/10 text-white rounded-2xl rounded-bl-none p-2.5 text-[10.5px] leading-[1.4] max-w-[90%] self-start relative">
                              <span>Привет! Извините, что пропустили звонок. Мы сейчас заняты в боксе или на процедуре. 🚗 Дарим <b>индивидуальный бонус</b> за ожидание! Чем можем помочь?</span>
                            </div>
                            
                            <div className="text-[9px] text-emerald-400 self-start px-1 select-none font-semibold flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>Лид сохранён в CRM!</span>
                            </div>
                          </div>

                          <button
                            onClick={() => setPhoneState('idle')}
                            className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white text-[10.5px] py-1.5 rounded-full transition-all duration-200"
                          >
                            Тестировать ещё раз
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2 CONTENT: REVIEWS ROTATOR SIMULATION */}
              {activeTab === 'reviews' && (
                <div className="flex flex-col items-center">
                  <p className="text-[12.5px] sm:text-[13px] text-center text-gray-500 mb-6 bg-white py-1.5 px-3 rounded-full border border-gray-100 shadow-sm">
                    Кликните звёзды, чтобы проверить логику фильтра негатива:
                  </p>

                  <div className="flex items-center gap-2 mb-8 scale-110">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => {
                          setRatingInput(star);
                          setFeedbackSent(false);
                        }}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <Star 
                          className={`w-7 h-7 ${(ratingInput !== null && star <= ratingInput) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                        />
                      </button>
                    ))}
                  </div>

                  <div className="w-full min-h-[170px] bg-white rounded-xl border border-gray-200/80 p-4 relative overflow-hidden flex flex-col justify-center">
                    
                    {ratingInput === null && (
                      <div className="text-center py-6">
                        <span className="text-xs text-gray-400 italic block">Оцените качество работы, чтобы увидеть, за счёт чего средняя оценка клиентов на картах всегда 5★ ⭐</span>
                      </div>
                    )}

                    {ratingInput !== null && ratingInput >= 4 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-left"
                      >
                        <div className="flex items-center gap-2 text-emerald-600 mb-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[12px] font-bold uppercase tracking-tight font-mono">Фильтр: Положительная оценка (5★)</span>
                        </div>
                        <p className="text-[12.5px] text-gray-600 leading-relaxed">
                          Пользователь доволен! Система автоматически направляет его на публичную страницу вашего бизнеса на <b>Яндекс.Картах</b> или <b>Google Maps</b>.
                        </p>
                        
                        <div className="mt-4 bg-gray-50 border border-gray-200 p-2.5 rounded-lg flex items-center justify-between text-[11px] font-mono text-gray-600">
                          <span>Внешняя ссылка на Карты активирована</span>
                          <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase text-[9px]">SEO УСПЕХ</span>
                        </div>
                      </motion.div>
                    )}

                    {ratingInput !== null && ratingInput <= 3 && (
                      <div className="text-left">
                        {feedbackSent ? (
                          <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="text-center py-4"
                          >
                            <span className="text-xs text-[#F26522] font-semibold block">Ваш отзыв успешно ушел владельцу!</span>
                            <p className="text-[12px] text-gray-500 mt-1.5 max-w-xs mx-auto">
                              Публичный рейтинг детейлинга, автосервиса или салона на картах остался в безопасности на уровне 5★, а владелец оперативно решит возникший вопрос.
                            </p>
                            <button
                              onClick={() => {
                                setRatingInput(null);
                                setFeedbackSent(false);
                                setFeedbackText('');
                              }}
                              className="mt-3.5 text-[11px] text-gray-500 hover:text-gray-900 border-b border-dashed border-gray-400"
                            >
                              Сбросить симулятор
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-2"
                          >
                            <div className="flex items-center gap-2 text-rose-500">
                              <ThumbsDown className="w-4 h-4" />
                              <span className="text-[11px] font-bold uppercase tracking-tight font-mono">Фильтр: Внутренний негативный отзыв</span>
                            </div>
                            <p className="text-[11.5px] text-gray-500 leading-snug">
                              Пользователь недоволен ({ratingInput}★). Чтобы не портить публичный рейтинг на картах, система открывает закрытую форму прямой связи с директором:
                            </p>

                            <form 
                              onSubmit={(e) => {
                                e.preventDefault();
                                setFeedbackSent(true);
                              }}
                              className="flex gap-2 mt-1.5"
                            >
                              <input 
                                type="text"
                                required
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                placeholder="Что пошло не так? Ваш суп остыл..."
                                className="flex-1 text-[11.5px] px-2.5 py-1.5 border border-gray-300 rounded-lg outline-none bg-gray-50 focus:border-[#F26522] transition-colors"
                              />
                              <button 
                                type="submit"
                                className="bg-[#F26522] text-white hover:bg-orange-600 px-3 rounded-lg text-[11px] font-medium transition-colors"
                              >
                                Отправить
                              </button>
                            </form>
                          </motion.div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              )}

              {/* TAB 3 CONTENT: WEBSITES DETAILED INFO */}
              {activeTab === 'websites' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-4 text-left"
                >
                  <p className="text-[13px] text-gray-600 leading-relaxed bg-white/70 p-3.5 rounded-xl border border-gray-100">
                    Наши сайты &mdash; это не просто "красивая картинка". Каждый пиксель и заголовок проектируется по методике целевой конверсии <b>Ascend Conversion Framework</b>:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-gray-200/50">
                      <span className="text-[#F26522] text-[16px] font-bold block">100%</span>
                      <span className="text-[11px] text-gray-500 block leading-tight mt-0.5">Mobile-first верстка и адаптация под смартфоны</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200/50">
                      <span className="text-[#F26522] text-[16px] font-bold block">&lt; 0.8 сек</span>
                      <span className="text-[11px] text-gray-500 block leading-tight mt-0.5">Мгновенный отклик и загрузка всех медиа-элементов</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200/50">
                      <span className="text-[#F26522] text-[16px] font-bold block">Яндекс</span>
                      <span className="text-[11px] text-gray-500 block leading-tight mt-0.5">Интегрированная Яндекс-аналитика готовых целей</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200/50">
                      <span className="text-[#F26522] text-[16px] font-bold block">CRM API</span>
                      <span className="text-[11px] text-gray-500 block leading-tight mt-0.5">Лиды уходят прямо в вашу учетную CRM или TG</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4 CONTENT: LOCAL SEO MOCK STATUS */}
              {activeTab === 'local-seo' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="flex flex-col text-left gap-4"
                >
                  <span className="text-xs text-gray-400 italic text-center block">Как локальные бизнесы растут на картах:</span>

                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-gray-500 border-b border-gray-100 pb-2">
                      <span>Позиция на Яндекс.Картах</span>
                      <span className="text-[#F26522] font-bold">ТОП 1-3</span>
                    </div>

                    {/* Chart simulation / data points */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11.5px] text-gray-600 font-medium">1. Ваша компания 🏆</span>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-20 bg-[#F26522] rounded-full" />
                          <span className="text-[11px] font-mono font-bold text-gray-900">4.9 ★ (340 отз)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 opacity-50">
                        <span className="text-[11.5px] text-gray-500">2. Конкурент А</span>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-12 bg-gray-300 rounded-full" />
                          <span className="text-[11px] font-mono">4.1 ★ (82 отз)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 opacity-30">
                        <span className="text-[11.5px] text-gray-500">3. Конкурент Б</span>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-8 bg-gray-300 rounded-full" />
                          <span className="text-[11px] font-mono">3.8 ★ (24 отз)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg text-[11.5px] text-gray-700 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#F26522] shrink-0" />
                    <span><b>Локальное SEO:</b> 80% людей выбирают первые три компании на картах. И мы выводим вас туда.</span>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Simulated action row footer */}
            <div className="mt-8 pt-4 border-t border-gray-100 text-center flex justify-between items-center text-[11.5px] text-gray-400 font-mono">
              <span>Системный стенд Ascendv1.4</span>
              <span className="text-gray-900 font-medium cursor-pointer hover:text-[#F26522] flex items-center gap-1" onClick={handleScrollToConnect}>
                Заказать подключение <ArrowRight className="w-3" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
