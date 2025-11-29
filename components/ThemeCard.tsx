import React from 'react';
import { SiteData } from '../types';
import { PhonePreview } from './PhonePreview';
import { Eye, Check } from 'lucide-react';

interface ThemeCardProps {
  data: SiteData;
  onApply: () => void;
  isActive: boolean;
}

export const ThemeCard = ({ data, onApply, isActive }: ThemeCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
      {/* Preview Header */}
      <div className="bg-gray-100 p-4 flex justify-center items-start pt-8 overflow-hidden relative h-[320px]">
        <div className="relative shadow-2xl rounded-[2.5rem]">
             <PhonePreview data={data} scale={0.45} />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-1 border-t border-gray-100">
        <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">{data.profile.name}</h3>
        <p className="text-gray-500 text-sm mb-5 truncate">{data.profile.title}</p>
        
        <div className="mt-auto grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium text-xs hover:bg-gray-50 transition-colors">
            <Eye size={14} /> Preview-Now
          </button>
          <button 
            onClick={onApply}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition-colors shadow-sm"
          >
            {isActive ? <Check size={14} /> : null}
            {isActive ? 'Applied' : 'Apply Template'}
          </button>
        </div>
      </div>
    </div>
  );
};
