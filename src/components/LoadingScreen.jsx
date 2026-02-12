import { useState, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import logo from '../assets/image/logo.png'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit before hiding the loading screen
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
  <div className="fixed inset-0 z-[9999] 
  bg-gradient-to-br from-blueDark via-secondary to-primary 
  flex items-center justify-center">

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
            
           {/* Logo container */}
            <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Logo C-MAP Kota Cimahi"
                className="w-20 h-20 object-contain animate-bounce"
              />
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in-up">
          C-MAP
        </h1>
        <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
          Cimahi Map for Action & Policy
        </p>

        {/* Loading Bar */}
        <div className="w-80 max-w-md mx-auto animate-fade-in-up animation-delay-400">
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-3 overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-white to-cyan-200 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-white/30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between items-center text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading spatial data...
            </span>
            <span className="font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="mt-8 text-white/70 text-sm animate-fade-in-up animation-delay-600">
          {progress < 30 && "Initializing geoportal..."}
          {progress >= 30 && progress < 60 && "Loading map layers..."}
          {progress >= 60 && progress < 90 && "Preparing datasets..."}
          {progress >= 90 && "Almost ready!"}
        </div>

        {/* Animated dots */}
        <div className="mt-4 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Decorative map pins around the screen */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20">
        <MapPin className="w-full h-full text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-20 right-20 w-12 h-12 opacity-20">
        <MapPin className="w-full h-full text-white animate-bounce" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-40 right-40 w-10 h-10 opacity-20">
        <MapPin className="w-full h-full text-white animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
