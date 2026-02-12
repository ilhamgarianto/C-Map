import { useState, useEffect } from 'react';
import { MapPin, Navigation, Layers } from 'lucide-react';

const LoadingScreenAlt = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);

  const loadingPhases = [
    { icon: Layers, text: 'Initializing geoportal...', color: 'from-blue-500 to-cyan-500' },
    { icon: MapPin, text: 'Loading map layers...', color: 'from-purple-500 to-pink-500' },
    { icon: Navigation, text: 'Preparing datasets...', color: 'from-green-500 to-emerald-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        
        // Update phase based on progress
        if (newProgress >= 33 && newProgress < 66) {
          setCurrentPhase(1);
        } else if (newProgress >= 66) {
          setCurrentPhase(2);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  const CurrentIcon = loadingPhases[currentPhase].icon;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated map background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          {/* Grid lines */}
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * 100}
                y1="0"
                x2={i * 100}
                y2="1080"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur="3s"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="0"
                y1={i * 60}
                x2="1920"
                y2={i * 60}
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur="3s"
                  begin={`${i * 0.1}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
          
          {/* Animated pins */}
          <circle cx="400" cy="300" r="5" fill="#3b82f6">
            <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="500" r="5" fill="#8b5cf6">
            <animate attributeName="r" values="5;8;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="400" r="5" fill="#06b6d4">
            <animate attributeName="r" values="5;8;5" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Logo Circle */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">C</div>
                <CurrentIcon className="w-10 h-10 text-cyan-400 mx-auto animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Orbiting elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <MapPin className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <MapPin className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 text-purple-400" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              C-MAP
            </span>
          </h1>
          <p className="text-xl text-blue-200/80 tracking-wide">
            Cimahi Map for Action & Policy
          </p>
        </div>

        {/* Progress Section */}
        <div className="w-full max-w-md space-y-6">
          {/* Circular Progress */}
          <div className="relative w-32 h-32 mx-auto">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                className="transition-all duration-300"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{progress}%</span>
            </div>
          </div>

          {/* Linear Progress Bar */}
          <div className="relative">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full bg-gradient-to-r ${loadingPhases[currentPhase].color} rounded-full transition-all duration-300 ease-out relative`}
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Loading Phase Text */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
              <CurrentIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
              <p className="text-white/90 font-medium">
                {loadingPhases[currentPhase].text}
              </p>
            </div>
            
            {/* Phase Indicators */}
            <div className="flex justify-center gap-2 pt-4">
              {loadingPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentPhase
                      ? 'w-12 bg-gradient-to-r ' + phase.color
                      : index < currentPhase
                      ? 'w-8 bg-white/50'
                      : 'w-8 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-blue-200/60 text-sm">
          <p>Powered by Cimahi City Government</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreenAlt;
