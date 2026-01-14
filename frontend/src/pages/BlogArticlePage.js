import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogArticlePage = () => {
  const { id } = useParams();

  // Mock article data - in production, this would fetch from API
  const articles = {
    1: {
      id: 1,
      title: "5 Ways Cordflex Improves ICU Safety",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "Safety",
      readTime: "5 min read",
      headerImage: "/images/blog/icu-safety-header.jpg",
      content: [
        {
          type: "paragraph",
          text: "Patient safety in intensive care units is paramount, and every innovation that contributes to safer outcomes deserves attention. The Cordflex Clip has emerged as a game-changer in ICU line management, directly impacting patient safety in multiple ways."
        },
        {
          type: "heading",
          text: "1. Reducing Line Pullouts"
        },
        {
          type: "paragraph",
          text: "One of the most significant safety improvements comes from the 40% reduction in accidental line pullouts. When lines are properly organized and secured, the risk of accidental disconnection during patient movement drops dramatically."
        },
        {
          type: "image",
          src: "/images/blog/line-organization.jpg",
          alt: "Organized medical lines with Cordflex",
          caption: "Proper line organization reduces tangles and pullout risk"
        },
        {
          type: "heading",
          text: "2. Faster Emergency Response"
        },
        {
          type: "paragraph",
          text: "In critical situations, every second counts. With 37% faster line identification, medical staff can respond more quickly to emergencies, accessing the right line without delay."
        },
        {
          type: "heading",
          text: "3. Improved Patient Mobility"
        },
        {
          type: "paragraph",
          text: "Safe patient ambulation is crucial for recovery, yet line tangles often limit movement. Cordflex enables 25% more patient ambulation by keeping lines organized and manageable."
        },
        {
          type: "heading",
          text: "4. Reduced Staff Stress"
        },
        {
          type: "paragraph",
          text: "When 78% of nurses report feeling safer during patient ambulation, it reflects reduced anxiety and improved confidence in their ability to manage complex line configurations."
        },
        {
          type: "heading",
          text: "5. Standardized Best Practices"
        },
        {
          type: "paragraph",
          text: "Cordflex provides a standardized approach to line management, ensuring consistent safety practices across all shifts and staff members."
        },
        {
          type: "paragraph",
          text: "The cumulative effect of these improvements creates a significantly safer ICU environment for both patients and healthcare providers."
        }
      ]
    },
    2: {
      id: 2,
      title: "The True Cost of Line Management Inefficiency",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      category: "Economics",
      readTime: "7 min read",
      headerImage: "/images/blog/cost-analysis-header.jpg",
      content: [
        {
          type: "paragraph",
          text: "Healthcare administrators often overlook the hidden costs associated with inefficient line management in ICU settings. This comprehensive analysis reveals the true financial impact."
        },
        {
          type: "heading",
          text: "Direct Costs"
        },
        {
          type: "paragraph",
          text: "Line-related incidents cost the average ICU over $40,000 annually. This includes replacement equipment, extended patient stays, and treatment for complications."
        },
        {
          type: "heading",
          text: "Indirect Costs"
        },
        {
          type: "paragraph",
          text: "Staff time spent managing tangled lines represents significant labor cost. With nurses spending 61% of ambulation time on line management, the opportunity cost is substantial."
        },
        {
          type: "image",
          src: "/images/blog/time-savings.jpg",
          alt: "Time management chart",
          caption: "Staff time allocation before and after Cordflex implementation"
        },
        {
          type: "paragraph",
          text: "When you factor in the improved efficiency and reduced incident rates, Cordflex typically pays for itself within the first quarter of implementation."
        }
      ]
    }
  };

  const article = articles[id] || articles[1];

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4" style={{ color: '#214140' }}>
            {block.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
            {block.text}
          </p>
        );
      case 'image':
        return (
          <div key={index} className="my-8">
            <img
              src={block.src}
              alt={block.alt}
              className="w-full rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUM5RkE1IiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkJsb2cgSW1hZ2U8L3RleHQ+Cjwvc3ZnPg==';
              }}
            />
            {block.caption && (
              <p className="text-sm text-gray-600 text-center mt-2 italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Back Button */}
        <section className="py-6 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </section>

        {/* Header Image */}
        {article.headerImage && (
          <section className="relative h-96 bg-gray-200">
            <img
              src={article.headerImage}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxNjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMjE0MTQwIi8+Cjx0ZXh0IHg9IjgwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRkZGRkZGIiBmb250LXNpemU9IjQ4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkJsb2cgSGVhZGVyIEltYWdlPC90ZXh0Pgo8L3N2Zz4=';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </section>
        )}

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                  >
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  {article.title}
                </h1>

                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: article.title,
                          url: window.location.href
                        });
                      }
                    }}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <div className="prose prose-lg max-w-none">
                  {article.content.map((block, index) => renderContent(block, index))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Ready to Learn More?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Discover how Cordflex can transform your ICU line management
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/trial-request'}
                  >
                    Request a Trial
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticlePage;
