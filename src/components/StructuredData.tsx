import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "원스타트컴퍼니",
      "alternateName": "ONESTART COMPANY",
      "description": "중소기업 경영 컨설팅 전문 기업. 정부지원사업, 투자유치, 기업인증, 경영전략 수립 등 중소기업 성장을 위한 맞춤형 컨설팅 서비스 제공",
      "url": "https://www.onestart-company.com",
      "telephone": "1800-5714",
      "email": "onestart-company@naver.com",
      "image": "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=800",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressLocality": "서울",
        "addressRegion": "서울특별시"
      },
      "foundingDate": "2016",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "10"
      },
      "areaServed": {
        "@type": "Country",
        "name": "대한민국"
      },
      "serviceType": [
        "중소기업 컨설팅",
        "정부지원사업 컨설팅",
        "투자유치 컨설팅",
        "사업계획서 작성",
        "회사소개서 제작",
        "기업인증 컨설팅",
        "경영전략 수립",
        "창업컨설팅",
        "소상공인지원",
        "스타트업컨설팅"
      ],
      "slogan": "중소기업의 성공적인 성장 파트너",
      "knowsAbout": [
        "중소기업 경영",
        "정부지원사업",
        "투자유치",
        "기업인증",
        "사업계획",
        "경영전략"
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Consulting",
      "provider": {
        "@type": "Organization",
        "name": "원스타트컴퍼니",
        "telephone": "1800-5714",
        "email": "onestart-company@naver.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "대한민국"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "컨설팅 서비스",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "정부 지원사업 컨설팅",
              "description": "중소벤처기업부, 산업통상자원부 등 정부 지원사업 기획 및 신청 대행"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "투자유치 및 IR 컨설팅",
              "description": "사업계획서 작성부터 IR 피칭까지 전 과정 컨설팅"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "기업 인증 컨설팅",
              "description": "벤처기업, 이노비즈, 메인비즈 등 기업 인증 취득 지원"
            }
          }
        ]
      }
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "원스타트컴퍼니",
      "image": "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=800",
      "telephone": "1800-5714",
      "email": "onestart-company@naver.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressLocality": "서울"
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "홈",
          "item": typeof window !== 'undefined' ? window.location.origin : ''
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "회사소개",
          "item": typeof window !== 'undefined' ? `${window.location.origin}#about` : ''
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "사업소개",
          "item": typeof window !== 'undefined' ? `${window.location.origin}#services` : ''
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "성공사례",
          "item": typeof window !== 'undefined' ? `${window.location.origin}#cases` : ''
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "상담신청",
          "item": typeof window !== 'undefined' ? `${window.location.origin}#contact` : ''
        }
      ]
    };

    // 스키마 삽입
    const schemas = [organizationSchema, serviceSchema, localBusinessSchema, breadcrumbSchema];
    
    schemas.forEach((schema, index) => {
      let script = document.querySelector(`script[data-schema="${index}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', String(index));
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });

  }, []);

  return null;
}