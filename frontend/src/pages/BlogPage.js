import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways Cordflex Improves ICU Safety",
      excerpt: "Discover how proper line management directly impacts patient safety and staff confidence in critical care environments.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "Safety",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "The True Cost of Line Management Inefficiency",
      excerpt: "A comprehensive analysis of hidden costs associated with poor line management in intensive care units.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      category: "Economics",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Implementing Cordflex: A Step-by-Step Guide",
      excerpt: "Learn best practices for successfully introducing Cordflex into your ICU workflow with minimal disruption.",
      author: "Lisa Johnson",
      date: "2024-01-08",
      category: "Implementation",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Nurse Testimonials: Real Experiences with Cordflex",
      excerpt: "Hear directly from ICU nurses about how Cordflex has transformed their daily patient care routines.",
      author: "Amanda Parker",
      date: "2024-01-05",
      category: "Testimonials",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Science Behind Cordflex Design",
      excerpt: "Exploring the biomedical engineering principles that make Cordflex an effective line management solution.",
      author: "Dr. James Wilson",
      date: "2024-01-02",
      category: "Technology",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "ROI Analysis: Cordflex in Practice",
      excerpt: "Real-world data showing the financial impact of implementing Cordflex in hospital ICUs.",
      author: "Rachel Martinez",
      date: "2023-12-28",
      category: "Analytics",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Safety", "Economics", "Implementation", "Testimonials", "Technology", "Analytics"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Cordflex Blog
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stay updated with the latest insights, research, and best practices in ICU line management 
                  and patient safety from our team of healthcare professionals.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Featured Article
                </h2>
              </div>
            </AnimatedSection>

            {blogPosts.filter(post => post.featured).map((post) => (
              <AnimatedSection key={post.id} animation="scale-up">
                <Card className="max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl" style={{ color: '#214140' }}>
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <button className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Recent Articles
                </h2>
                <p className="text-xl text-gray-600">
                  Explore our latest insights and updates
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-200">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Subscribe to our newsletter to receive the latest articles, research updates, and industry insights directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    className="px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    Subscribe
                  </button>
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

export default BlogPage;