import { Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { ConsultationDialog } from './ConsultationDialog';
import logo from 'figma:asset/eac1ac447b0c0136bbf5c9773cd8830cb4c0e542.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="원스타트컴퍼니 로고" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl" style={{ color: '#0065b3' }}>원스타트컴퍼니</span>
              <span className="text-xs text-gray-500">ONESTART COMPANY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 transition-colors" style={{ '--hover-color': '#0065b3' } as any} onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              회사소개
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              사업소개
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              성공사례
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              고객후기
            </button>
            <button onClick={() => setConsultationDialogOpen(true)} className="text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              상담신청
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              블로그
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2" style={{ color: '#0065b3' }}>
            <Phone className="w-5 h-5" />
            <span className="font-semibold">1800-5714</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              회사소개
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              사업소개
            </button>
            <button 
              onClick={() => scrollToSection('cases')} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              성공사례
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              고객후기
            </button>
            <button 
              onClick={() => setConsultationDialogOpen(true)} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              상담신청
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="block w-full text-left py-2 text-gray-700 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0065b3'} 
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
              블로그
            </button>
            <div className="flex items-center gap-2 pt-2 border-t" style={{ color: '#0065b3' }}>
              <Phone className="w-5 h-5" />
              <span className="font-semibold">1800-5714</span>
            </div>
          </div>
        )}
      </div>

      {/* Consultation Dialog */}
      <ConsultationDialog open={consultationDialogOpen} onOpenChange={setConsultationDialogOpen} />
    </header>
  );
}