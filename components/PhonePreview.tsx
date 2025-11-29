
import React from 'react';
import { SiteData } from '../types';
import { 
  Phone, Mail, MapPin, Globe, Share2, Facebook, Instagram, Linkedin, 
  Twitter, Youtube, Download, Clock, ExternalLink, Star
} from 'lucide-react';

interface PreviewProps {
  data: SiteData;
  scale?: number;
}

const SocialIcon = ({ platform, className }: { platform: string, className?: string }) => {
  const style = `w-5 h-5 ${className}`;
  switch (platform) {
    case 'facebook': return <Facebook className={style} />;
    case 'instagram': return <Instagram className={style} />;
    case 'linkedin': return <Linkedin className={style} />;
    case 'twitter': return <Twitter className={style} />;
    case 'youtube': return <Youtube className={style} />;
    case 'whatsapp': return <div className={`font-bold text-xs ${className}`}>WA</div>;
    default: return <Globe className={style} />;
  }
};

const ButtonIcon = ({ type, className }: { type: string, className?: string }) => {
  const style = `w-4 h-4 ${className}`;
  switch (type) {
    case 'phone': return <Phone className={style} />;
    case 'email': return <Mail className={style} />;
    case 'whatsapp': return <div className={`font-bold text-xs ${className}`}>WA</div>; 
    case 'map': return <MapPin className={style} />;
    default: return <ExternalLink className={style} />;
  }
};

export const PhonePreview: React.FC<PreviewProps> = ({ data, scale = 1 }) => {
  // Theme Configurations
  const getThemeStyles = () => {
    switch (data.theme) {
      case 'mobile': // Black & Yellow
        return {
          wrapper: 'bg-black',
          bg: 'bg-[#050505]',
          font: 'font-sans',
          headerOverlay: 'bg-gradient-to-t from-[#050505] to-transparent',
          profileContainer: 'mt-[-80px]',
          avatarStyle: 'border-4 border-yellow-500',
          titleColor: 'text-yellow-500 uppercase tracking-widest',
          subtitleColor: 'text-white',
          locationColor: 'text-gray-400',
          bioContainer: 'bg-transparent text-gray-300 text-center italic',
          socialBtn: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-full',
          actionBtn: 'bg-transparent border border-gray-800 text-yellow-500 hover:border-yellow-500 rounded-lg',
          card: 'bg-[#0a0a0a] border border-gray-800 rounded-lg',
          cardTitle: 'text-yellow-500 uppercase tracking-wider border-b border-gray-800 pb-2 mb-3',
          cardText: 'text-gray-300',
          accent: 'bg-yellow-500 text-black',
          sectionTitle: 'text-white uppercase font-bold text-center mb-4 tracking-widest border-b-2 border-yellow-500 inline-block mx-auto pb-1',
          iconColor: 'text-yellow-500',
          priceTag: 'text-yellow-500 font-bold'
        };
      case 'wedding': // Beige & Gold
        return {
          wrapper: 'bg-[#f4f1ea]',
          bg: 'bg-[#f4f1ea]',
          font: 'font-serif',
          headerOverlay: 'bg-black/20',
          profileContainer: 'mt-[-60px]',
          avatarStyle: 'border-4 border-[#d4af37]',
          titleColor: 'text-[#2c2c2c] uppercase tracking-[0.2em]',
          subtitleColor: 'text-[#d4af37] tracking-widest font-medium',
          locationColor: 'text-[#666]',
          bioContainer: 'text-[#444] text-center font-light leading-relaxed italic',
          socialBtn: 'bg-[#2c2c2c] text-white rounded-full hover:bg-[#d4af37]',
          actionBtn: 'bg-white border border-[#d4af37] text-[#2c2c2c] rounded-none hover:bg-[#f9f7f2]',
          card: 'bg-white border border-[#e5e5e5] rounded-sm',
          cardTitle: 'text-[#2c2c2c] uppercase tracking-wide mb-1 font-normal',
          cardText: 'text-[#666] font-light',
          accent: 'bg-[#d4af37] text-white',
          sectionTitle: 'text-[#2c2c2c] uppercase tracking-[0.15em] text-center mb-6 font-normal',
          iconColor: 'text-[#d4af37]',
          priceTag: 'bg-[#d4af37] text-white px-2 py-0.5 text-xs'
        };
      case 'travel': // Clean White & Green
        return {
          wrapper: 'bg-gray-100',
          bg: 'bg-white',
          font: 'font-sans',
          headerOverlay: 'bg-gradient-to-t from-white to-transparent',
          profileContainer: 'mt-[-50px]',
          avatarStyle: 'rounded-2xl border-4 border-white shadow-md',
          titleColor: 'text-blue-900 font-bold',
          subtitleColor: 'text-orange-500 font-medium',
          locationColor: 'text-gray-500',
          bioContainer: 'text-gray-600 text-center text-sm',
          socialBtn: 'bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100',
          actionBtn: 'bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg font-medium',
          card: 'bg-gray-50 border border-gray-100 rounded-xl',
          cardTitle: 'text-blue-900 font-bold',
          cardText: 'text-gray-600 text-sm',
          accent: 'bg-green-600 text-white',
          sectionTitle: 'text-blue-900 font-bold text-xl mb-4 border-l-4 border-orange-500 pl-3',
          iconColor: 'text-green-600',
          priceTag: 'text-blue-900 font-bold text-lg'
        };
      case 'developer': // Dark & Teal
        return {
          wrapper: 'bg-[#0f172a]',
          bg: 'bg-[#0f172a]',
          font: 'font-sans',
          headerOverlay: 'bg-gradient-to-b from-transparent to-[#0f172a]',
          profileContainer: 'mt-[-40px]',
          avatarStyle: 'rounded-xl border-2 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]',
          titleColor: 'text-white font-bold tracking-tight',
          subtitleColor: 'text-teal-400 font-medium',
          locationColor: 'text-slate-400',
          bioContainer: 'bg-[#1e293b] p-3 rounded-lg text-slate-300 text-sm border-l-2 border-teal-500',
          socialBtn: 'bg-[#1e293b] text-teal-400 rounded-md hover:bg-[#334155] border border-slate-700',
          actionBtn: 'bg-[#1e293b] border border-slate-700 text-white rounded-lg hover:border-teal-500 transition-colors',
          card: 'bg-[#1e293b] border border-slate-700 rounded-lg',
          cardTitle: 'text-white font-semibold',
          cardText: 'text-slate-400 text-sm',
          accent: 'bg-teal-500 text-black',
          sectionTitle: 'text-white font-bold text-lg mb-4 flex items-center gap-2 border-l-4 border-teal-500 pl-3',
          iconColor: 'text-teal-400',
          priceTag: 'text-white font-mono'
        };
      case 'bakery': // Pastel Pink/Yellow
        return {
          wrapper: 'bg-[#fffdf5]',
          bg: 'bg-[#fffdf5]',
          font: 'font-sans', // Use a rounded sans if possible via generic
          headerOverlay: 'hidden',
          profileContainer: 'mt-[-50px]',
          avatarStyle: 'rounded-full border-[6px] border-white shadow-sm',
          titleColor: 'text-[#8b4513] font-bold text-2xl font-serif',
          subtitleColor: 'text-[#eab308] font-medium tracking-wide',
          locationColor: 'text-[#a16207]',
          bioContainer: 'text-[#8b4513] text-center font-medium bg-orange-50 p-4 rounded-xl border border-orange-100',
          socialBtn: 'bg-[#ffedd5] text-[#c2410c] rounded-full hover:bg-[#fed7aa]',
          actionBtn: 'bg-[#fff7ed] border-2 border-[#fdba74] text-[#9a3412] rounded-full font-bold shadow-sm',
          card: 'bg-white border-2 border-dashed border-[#fdba74] rounded-2xl',
          cardTitle: 'text-[#9a3412] font-bold',
          cardText: 'text-[#7c2d12] text-sm',
          accent: 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md',
          sectionTitle: 'text-[#8b4513] font-bold text-xl text-center mb-5 bg-[#ffedd5] inline-block px-6 py-1 rounded-full mx-auto',
          iconColor: 'text-[#f97316]',
          priceTag: 'bg-[#f472b6] text-white px-3 py-1 rounded-full font-bold text-sm shadow-sm'
        };
      default:
        return {
          wrapper: 'bg-gray-100',
          bg: 'bg-white',
          font: 'font-sans',
          headerOverlay: 'bg-black/10',
          profileContainer: 'mt-16',
          avatarStyle: 'rounded-full border-4 border-white',
          titleColor: 'text-gray-900 font-bold',
          subtitleColor: 'text-blue-600',
          locationColor: 'text-gray-500',
          bioContainer: 'text-gray-600',
          socialBtn: 'bg-gray-100 text-gray-600 rounded-full',
          actionBtn: 'bg-white border border-gray-200 text-gray-700 rounded-lg',
          card: 'bg-white border border-gray-100 rounded-lg',
          cardTitle: 'text-gray-900 font-bold',
          cardText: 'text-gray-600',
          accent: 'bg-blue-600 text-white',
          sectionTitle: 'text-gray-900 font-bold uppercase text-sm tracking-wider mb-3',
          iconColor: 'text-blue-600',
          priceTag: 'bg-blue-600 text-white px-2 py-1 rounded'
        };
    }
  };

  const theme = getThemeStyles();
  
  // Calculate scaling dimensions
  // Original size: 370 x 750
  const originalWidth = 370;
  const originalHeight = 750;
  
  const containerStyle: React.CSSProperties = scale !== 1 ? {
    width: `${originalWidth * scale}px`,
    height: `${originalHeight * scale}px`,
    overflow: 'hidden',
    position: 'relative'
  } : {};

  const contentStyle: React.CSSProperties = scale !== 1 ? {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${originalWidth}px`,
    height: `${originalHeight}px`,
    position: 'absolute',
    top: 0,
    left: 0
  } : {};

  const Content = () => (
    <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[750px] w-[370px] shadow-xl ${theme.wrapper}`}>
      {/* Device Hardware Buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className={`rounded-[2rem] overflow-hidden w-full h-full ${theme.bg} ${theme.font} overflow-y-auto no-scrollbar scroll-smooth`}>
        
        {/* Banner Area */}
        <div className="w-full relative">
          <div className={`h-40 w-full bg-cover bg-center ${data.theme === 'bakery' ? 'h-48 rounded-b-[3rem]' : ''}`} style={{ backgroundImage: `url(${data.profile.bannerUrl})` }}>
            <div className={`absolute inset-0 ${theme.headerOverlay} ${data.theme === 'bakery' ? 'rounded-b-[3rem]' : ''}`}></div>
          </div>
        </div>

        {/* Profile Section */}
        <div className={`px-5 relative z-10 flex flex-col items-center mb-6 ${theme.profileContainer}`}>
          <div className={`p-1 bg-transparent shadow-none`}>
            <img 
              src={data.profile.avatarUrl} 
              alt="Profile" 
              className={`w-28 h-28 object-cover bg-white ${theme.avatarStyle}`}
            />
          </div>
          
          <div className="mt-3 space-y-1 text-center w-full">
            <h1 className={`text-2xl ${theme.titleColor}`}>{data.profile.name}</h1>
            <p className={`text-sm ${theme.subtitleColor}`}>{data.profile.title}</p>
            {data.profile.location && (
              <div className={`flex items-center justify-center gap-1 mt-1 text-xs ${theme.locationColor}`}>
                <MapPin className="w-3 h-3" />
                <span>{data.profile.location}</span>
              </div>
            )}
          </div>

          {/* Bio */}
          {data.profile.bio && (
             <div className={`mt-4 w-full ${theme.bioContainer}`}>
               {data.profile.bio}
             </div>
          )}

          {/* Social Icons */}
          {data.socials.length > 0 && (
            <div className="flex gap-3 mt-5 flex-wrap justify-center">
              {data.socials.map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 transition-all hover:scale-110 shadow-sm flex items-center justify-center ${theme.socialBtn}`}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="px-5 space-y-6 pb-24">
          
          {/* Action Buttons */}
          {data.buttons.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {data.buttons.map((btn) => (
                <a
                  key={btn.id}
                  href={btn.type === 'phone' ? `tel:${btn.value}` : btn.type === 'email' ? `mailto:${btn.value}` : btn.value}
                  className={`flex items-center justify-center gap-2 py-3 px-2 shadow-sm border text-sm transition-transform active:scale-95 ${theme.actionBtn}`}
                >
                  <ButtonIcon type={btn.type} className={theme.iconColor} />
                  <span>{btn.label}</span>
                </a>
              ))}
            </div>
          )}

          {/* Services */}
          {data.services.length > 0 && (
            <div className={`${data.theme === 'bakery' ? 'text-center' : ''}`}>
              <div className={theme.sectionTitle}>
                {data.theme === 'bakery' ? 'Our Sweet Treats' : data.theme === 'wedding' ? 'Our Services' : data.theme === 'mobile' ? 'Services' : data.theme === 'developer' ? 'My Services' : 'Packages'}
              </div>
              <div className="space-y-3">
                {data.services.map((service) => (
                  <div key={service.id} className={`flex gap-4 p-4 shadow-sm group ${theme.card} ${data.theme === 'bakery' ? 'flex-col items-center text-center' : ''}`}>
                    {service.imageUrl && (
                      <img src={service.imageUrl} className={`w-20 h-20 object-cover bg-gray-200 shrink-0 ${data.theme === 'mobile' ? 'rounded-md' : data.theme === 'bakery' ? 'rounded-full w-24 h-24 border-4 border-white shadow-md -mt-10' : 'rounded-md'}`} alt="" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className={`text-base ${theme.cardTitle}`}>{service.title}</h3>
                      <p className={`text-xs mb-2 line-clamp-2 ${theme.cardText}`}>{service.description}</p>
                      {service.price && (
                        <div className={`self-start ${data.theme === 'bakery' ? 'mx-auto' : ''} ${theme.priceTag}`}>
                           {service.price}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Google Business Reviews */}
          {data.googleReviews?.enabled && data.googleReviews.reviews.length > 0 && (
            <div className={`${data.theme === 'bakery' ? 'text-center' : ''}`}>
               <div className={theme.sectionTitle}>What People Say</div>
               <div className="space-y-3">
                 {data.googleReviews.reviews.map((review) => (
                   <div key={review.id} className={`p-4 shadow-sm ${theme.card}`}>
                      <div className="flex items-center gap-2 mb-2">
                         <img src={review.avatarUrl} alt="" className="w-8 h-8 rounded-full bg-gray-200" />
                         <div className="flex-1">
                            <h4 className={`text-xs font-bold ${theme.titleColor}`}>{review.author}</h4>
                            <span className={`text-[10px] ${theme.locationColor}`}>{review.date}</span>
                         </div>
                         <div className="flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-bold text-gray-700">{review.rating.toFixed(1)}</span>
                         </div>
                      </div>
                      <p className={`text-xs italic leading-relaxed ${theme.cardText}`}>"{review.text}"</p>
                   </div>
                 ))}
                 {data.googleReviews.businessUrl && (
                    <a href={data.googleReviews.businessUrl} target="_blank" className={`block w-full text-center text-xs py-2 underline opacity-70 hover:opacity-100 ${theme.subtitleColor}`}>
                       View all reviews on Google
                    </a>
                 )}
               </div>
            </div>
          )}

           {/* Gallery */}
           {data.gallery.length > 0 && (
            <div className={`${data.theme === 'bakery' ? 'text-center' : ''}`}>
              <div className={theme.sectionTitle}>Gallery</div>
              <div className="grid grid-cols-3 gap-2">
                {data.gallery.map((img, idx) => (
                  <div key={idx} className={`aspect-square overflow-hidden bg-gray-100 ${data.theme === 'mobile' ? 'rounded-sm border border-gray-800' : 'rounded-lg'}`}>
                     <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {data.testimonials.length > 0 && (
            <div className={`${data.theme === 'bakery' ? 'text-center' : ''}`}>
              <div className={theme.sectionTitle}>Testimonials</div>
              <div className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 no-scrollbar snap-x">
                 {data.testimonials.map(t => (
                   <div key={t.id} className={`snap-center shrink-0 w-64 p-5 flex flex-col justify-between shadow-sm ${theme.card}`}>
                      <div className="mb-4 relative text-center">
                        <p className={`text-sm italic relative z-10 ${theme.cardText}`}>"{t.text}"</p>
                      </div>
                      <div className="flex items-center justify-center gap-3 mt-auto pt-3 border-t border-gray-200/10">
                         <p className={`text-xs font-bold ${theme.titleColor}`}>- {t.name}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          )}

          {/* Business Hours */}
          {data.hours.some(h => !h.isClosed) && (
            <div className={`p-5 shadow-sm ${theme.card}`}>
              <div className={`text-sm font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-2 ${theme.titleColor} opacity-90`}>
                <Clock className={`w-4 h-4 ${theme.iconColor}`} /> Business Hours
              </div>
              <div className="space-y-2.5">
                {data.hours.map((day) => (
                  <div key={day.day} className={`flex justify-between text-xs items-center border-b border-gray-200/10 last:border-0 pb-1 last:pb-0 ${theme.cardText}`}>
                    <span className="font-medium opacity-80">{day.day}</span>
                    {day.isClosed ? (
                      <span className="text-red-500 font-bold text-[10px] uppercase">Closed</span>
                    ) : (
                      <span className="font-medium">{day.open} - {day.close}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* App Download Section (Custom) */}
          {data.appSection?.enabled && (
             <div className={`p-5 shadow-lg text-center relative overflow-hidden ${theme.card}`}>
                <div className="flex flex-col items-center justify-center gap-3 mb-4">
                  {data.appSection.iconUrl && (
                    <img src={data.appSection.iconUrl} className="w-16 h-16 object-contain drop-shadow-md" alt="" />
                  )}
                  <h3 className={`font-bold text-lg leading-tight ${theme.titleColor}`}>{data.appSection.title}</h3>
                </div>
                <button
                  onClick={() => {
                     if(data.appSection.installPwa) {
                        alert('Install App Prompt');
                     } else {
                        window.open(data.appSection.buttonLink, '_blank');
                     }
                  }}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 ${theme.accent} hover:opacity-90 transition-all active:scale-95`}
                >
                  <Download className="w-5 h-5" />
                  {data.appSection.buttonText}
                </button>
            </div>
          )}

          {/* QR Code Section */}
          {data.settings.showQrCode && (
            <div className={`p-6 shadow-sm text-center ${theme.card}`}>
              <h3 className={`font-bold mb-4 ${theme.titleColor}`}>Scan to Connect</h3>
              <div className="bg-white p-3 rounded-xl inline-block shadow-sm mx-auto border border-gray-100">
                 <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('https://example.com')}`} 
                  alt="QR Code" 
                  className="w-32 h-32"
                />
              </div>
              <p className={`text-xs mt-2 ${theme.cardText}`}>Scan to view card</p>
            </div>
          )}

          {/* Spacer */}
          {data.settings.allowSaveContact && (
            <div className="h-10"></div>
          )}
        </div>
      </div>

      {/* Floating Action Button (Overlay) */}
      {data.settings.showFloatingButton && (
        <div className="absolute bottom-6 right-6 z-20">
           <button className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${theme.accent} hover:brightness-110 transition-all active:scale-95`}>
             <Share2 className="w-6 h-6" />
           </button>
        </div>
      )}
      
      {/* Save Contact Bottom Bar (Overlay) */}
      {data.settings.allowSaveContact && (
         <div className={`absolute bottom-[14px] left-[14px] right-[14px] p-3 rounded-b-[1.5rem] z-20 ${data.theme === 'mobile' ? 'bg-[#0a0a0a] border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
            <button className={`w-full py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 ${theme.accent}`}>
              <Download className="w-4 h-4" /> Save Contact
            </button>
         </div>
      )}
    </div>
  );

  if (scale === 1) {
    return <Content />;
  }

  return (
    <div style={containerStyle}>
       <div style={contentStyle}>
         <Content />
       </div>
    </div>
  );
};
