import { ArrowRight } from 'lucide-react';

interface RollButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'dark' | 'orange';
}

export default function RollButton({ text, onClick, variant = 'dark' }: RollButtonProps) {
  const isOrange = variant === 'orange';
  
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-between gap-3 text-[13px] sm:text-[14px] font-medium rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-10 sm:h-11 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1 select-none active:scale-[0.98] outline-none focus-visible:ring-1 focus-visible:ring-[#F26522]
        ${isOrange 
          ? 'bg-[#F26522] hover:bg-[#e05a1a] text-white shadow-sm hover:shadow-md' 
          : 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md'
        }`}
    >
      {/* Text roll container */}
      <div className="relative overflow-hidden h-[20px] leading-[20px]">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="block h-[20px] font-medium tracking-tight text-left">{text}</span>
          <span className="block h-[20px] font-medium tracking-tight text-white/95 text-left">{text}</span>
        </div>
      </div>
      
      {/* Arrow icon in a white circle */}
      <div 
        className={`rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${isOrange 
            ? 'w-7 h-7 sm:w-8 sm:h-8 bg-white text-[#F26522]' 
            : 'w-6 h-6 bg-white text-gray-900'
          }`}
      >
        <ArrowRight 
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" 
        />
      </div>
    </button>
  );
}
