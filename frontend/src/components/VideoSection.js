import React, { useState } from 'react';
import { Button } from './ui/button';
import { Play, Users, Calendar } from 'lucide-react';
import { mockData } from '../mockData';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { product } = mockData;

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleScheduleDemo = () => {
    console.log('Schedule demo clicked');
  };

  const handleRequestSample = () => {
    console.log('Request sample clicked');
  };

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
            See Cordflex in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how Cordflex transforms ICU line management in real-world scenarios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl mb-8">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140' }}>
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Cordflex Demo Video
                    </h3>
                    <p className="text-gray-600">
                      See how easy it is to implement Cordflex in your ICU
                    </p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center group hover:bg-black/10 transition-colors duration-200"
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#214140' }}>
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src={getYouTubeEmbedUrl(product.youtubeVideoId)}
                title="Cordflex Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span className="text-sm">12,000+ views</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Updated monthly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
              <div className="font-semibold text-gray-800 mb-1">0:00 - Product Overview</div>
              <div className="text-sm text-gray-600">Introduction to Cordflex</div>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
              <div className="font-semibold text-gray-800 mb-1">1:30 - Installation Demo</div>
              <div className="text-sm text-gray-600">30-second setup process</div>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-left">
              <div className="font-semibold text-gray-800 mb-1">2:45 - Clinical Results</div>
              <div className="text-sm text-gray-600">Real-world outcomes</div>
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRequestSample}
              size="lg"
              className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: '#214140', color: 'white' }}
            >
              Request Your Sample Kit
            </Button>
            <Button
              onClick={handleScheduleDemo}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
              style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
            >
              Schedule a Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;