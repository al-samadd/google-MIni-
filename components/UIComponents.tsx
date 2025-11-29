import React from 'react';
import { ChevronDown, ChevronUp, Trash2, Plus } from 'lucide-react';

export const SectionHeader = ({ 
  title, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => (
  <div 
    onClick={onToggle}
    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors mb-2 shadow-sm"
  >
    <h3 className="font-semibold text-gray-800">{title}</h3>
    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
  </div>
);

export const InputGroup = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  as = "input"
}: { 
  label: string; 
  value: string; 
  onChange: (e: any) => void; 
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea" | "select";
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {as === "textarea" ? (
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        rows={3}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>
);

export const ToggleSwitch = ({ 
  label, 
  checked, 
  onChange 
}: { 
  label: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void; 
}) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

export const Button = ({ 
  children, 
  onClick, 
  variant = "primary",
  className = ""
}: { 
  children?: React.ReactNode; 
  onClick?: () => void; 
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
    danger: "text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200",
    ghost: "text-gray-600 hover:bg-gray-100"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};