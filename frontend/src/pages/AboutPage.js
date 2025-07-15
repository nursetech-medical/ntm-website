import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent } from '../components/ui/card';
import { Users, Award, Heart, Target } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient-Centered",
      description: "Every innovation starts with improving patient outcomes and safety"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Nurse-Driven",
      description: "Built by nurses who understand the daily challenges in ICU environments"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Evidence-Based",
      description: "All solutions backed by rigorous clinical research and real-world testing"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Focused",
      description: "Measurable improvements in efficiency, safety, and patient care quality"
    }
  ];

  const timeline = [
    { year: "2020", event: "Company founded by ICU nurses" },
    { year: "2021", event: "First Cordflex prototypes developed" },
    { year: "2022", event: "Clinical trials begin" },
    { year: "2023", event: "FDA registration obtained" },
    { year: "2024", event: "Commercial launch and expansion" }
  ];

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
                  About Nursetech Medical
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're a team of ICU nurses and biomedical engineers dedicated to creating innovative solutions 
                  that improve patient care and make healthcare professionals' lives easier. Founded in 2020, 
                  we've been focused on solving real-world problems in intensive care units.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  To empower healthcare professionals with innovative, evidence-based solutions that enhance 
                  patient safety, improve clinical outcomes, and streamline workflows in critical care environments.
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#214140' }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Our Journey
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  From concept to commercial success, here's how we've grown
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <StaggeredList delay={150} className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg"
                         style={{ backgroundColor: '#214140' }}>
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Leadership Team
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Meet the experienced professionals driving innovation in healthcare
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", background: "ICU Nurse, 15 years experience" },
                { name: "Michael Rodriguez", role: "CTO & Co-Founder", background: "Biomedical Engineer, Medical Device Expert" },
                { name: "Dr. Lisa Johnson", role: "Chief Medical Officer", background: "Critical Care Physician, Research Leader" }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#214140' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.background}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;