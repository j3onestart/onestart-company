import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

// 블로그 URL 설정
const BLOG_URL = 'https://blog.naver.com/apple-management';
const RSS_URL = `https://rss.blog.naver.com/apple-management.xml`;

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  url: string;
}

// 기본 샘플 포스트 (RSS 로딩 실패시 또는 로딩 중 표시)
const defaultPosts: BlogPost[] = [
  {
    title: '중소기업 컨설팅 전문가와 함께하세요',
    excerpt: '10년의 경험으로 귀사의 성공을 지원합니다. 정부 지원사업부터 경영 컨설팅까지 원스톱으로 해결하세요.',
    date: '2025.03.15',
    category: '컨설팅',
    image: '',
    url: BLOG_URL,
  },
  {
    title: '정책자금 지원사업 안내',
    excerpt: '중소기업을 위한 정부 지원사업 정보를 확인하세요. 최신 정책 동향과 신청 방법을 상세히 안내드립니다.',
    date: '2025.03.10',
    category: '정책정보',
    image: '',
    url: BLOG_URL,
  },
  {
    title: '스타트업 성장 전략',
    excerpt: '성공적인 스타트업을 위한 필수 전략을 소개합니다. 투자 유치부터 조직 관리까지 실전 노하우를 공유합니다.',
    date: '2025.03.05',
    category: '창업/투자',
    image: '',
    url: BLOG_URL,
  },
  {
    title: '기업 인증 획득 가이드',
    excerpt: '벤처인증, 이노비즈 등 각종 인증 정보를 안내합니다. 인증 절차와 필요 서류를 체크리스트로 정리했습니다.',
    date: '2025.02.28',
    category: '인증/평가',
    image: '',
    url: BLOG_URL,
  },
];

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // RSS 피드 가져오기
    const fetchRSS = async () => {
      try {
        // CORS 이슈를 우회하기 위한 프록시 서비스 사용
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`;
        const response = await fetch(proxyUrl);
        const text = await response.text();
        
        // XML 파싱
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        
        if (items.length > 0) {
          const posts: BlogPost[] = Array.from(items).slice(0, 4).map((item) => {
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || BLOG_URL;
            const description = item.querySelector('description')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            
            // 설명에서 HTML 태그 제거
            const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 200).trim();
            
            // 날짜 포맷 변경
            const date = pubDate ? new Date(pubDate).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }).replace(/\. /g, '.').replace(/\.$/, '') : '';

            // 카테고리는 제목에서 추출하거나 기본값 사용
            let category = '컨설팅';
            if (title.includes('정책') || title.includes('지원')) category = '정책정보';
            else if (title.includes('창업') || title.includes('투자')) category = '창업/투자';
            else if (title.includes('인증') || title.includes('평가')) category = '인증/평가';
            else if (title.includes('세무') || title.includes('회계')) category = '세무/회계';

            return {
              title,
              excerpt: cleanDescription,
              date,
              category,
              image: '',
              url: link,
            };
          });
          
          setBlogPosts(posts);
        }
      } catch (error) {
        console.log('RSS 로딩 중 오류 발생, 기본 컨텐츠를 표시합니다:', error);
        // 에러 발생시 기본 포스트 사용
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  const handleBlogClick = (url?: string) => {
    window.open(url || BLOG_URL, '_blank');
  };

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm sm:text-base">INSIGHT</span>
          <h2 className="mt-2 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">전문가 인사이트</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            중소기업 경영에 도움이 되는 최신 정보와 전문가 노하우를 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {loading ? (
            // 로딩 스켈레톤
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-20 mb-4" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h4 className="mb-3 line-clamp-2 min-h-[3rem]">
                    {post.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 line-clamp-4 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
                    onClick={() => handleBlogClick(post.url)}
                  >
                    자세히 보기
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => handleBlogClick()}
          >
            블로그 전체 보기
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}