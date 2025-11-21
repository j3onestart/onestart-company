import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEO({
  title = '원스타트컴퍼니 - 중소기업 경영 컨설팅 전문',
  description = '10년 경력의 중소기업 컨설팅 전문 기업. 정부지원사업, 투자유치, 기업인증, 경영전략 수립 등 중소기업 성장을 위한 맞춤형 컨설팅 서비스를 제공합니다. 무료상담 1800-5714',
  keywords = '중소기업 컨설팅, 정부지원사업, 투자유치, 사업계획서, 회사소개서, IR, 벤처기업인증, 이노비즈, 경영컨설팅, 기업컨설팅, 원스타트컴퍼니, 창업컨설팅, 소상공인지원, 스타트업컨설팅, 중소벤처기업부, 산업통상자원부, 정부지원금, 기업성장, 경영전략, 사업개발',
  ogImage = 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=1200&h=630&fit=crop',
  url = typeof window !== 'undefined' ? window.location.href : 'https://www.onestart-company.com',
}: SEOProps) {
  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <html lang="ko" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="원스타트컴퍼니" />
      
      {/* 추가 메타 정보 */}
      <meta name="contact" content="1800-5714" />
      <meta name="email" content="onestart-company@naver.com" />
      <meta name="geo.region" content="KR-11" />
      <meta name="geo.placename" content="Seoul" />
      <meta name="page-topic" content="중소기업 컨설팅" />
      <meta name="audience" content="기업, 예비창업자, 소상공인, 스타트업" />
      
      {/* 검색 엔진 크롤링 허용 */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="yeti" content="index, follow" />
      <meta name="NaverBot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph - 네이버가 이것을 확인합니다 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="원스타트컴퍼니" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}