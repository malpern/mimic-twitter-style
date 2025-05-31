
import { Heart, MessageCircle, Repeat2, BarChart3, Bookmark, Share, MoreHorizontal, Play } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [likedTweets, setLikedTweets] = useState<Set<string>>(new Set());
  const [retweetedTweets, setRetweetedTweets] = useState<Set<string>>(new Set());

  const toggleLike = (tweetId: string) => {
    const newLiked = new Set(likedTweets);
    if (newLiked.has(tweetId)) {
      newLiked.delete(tweetId);
    } else {
      newLiked.add(tweetId);
    }
    setLikedTweets(newLiked);
  };

  const toggleRetweet = (tweetId: string) => {
    const newRetweeted = new Set(retweetedTweets);
    if (newRetweeted.has(tweetId)) {
      newRetweeted.delete(tweetId);
    } else {
      newRetweeted.add(tweetId);
    }
    setRetweetedTweets(newRetweeted);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold">Home</h1>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {/* Tweet */}
        <div className="border-b border-gray-800 px-4 py-3 hover:bg-gray-950/50 transition-colors cursor-pointer">
          <div className="flex space-x-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
              <img 
                src="/lovable-uploads/38f3892d-3b50-4831-a39b-1e74eaf05f4f.png" 
                alt="Santiago"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tweet Content */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-white text-lg">Santiago</span>
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <span className="text-gray-500 text-base">@svpino</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500 text-base">3h</span>
                <div className="flex-1"></div>
                <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Tweet Text */}
              <div className="text-white mb-4">
                <p className="mb-4 text-lg leading-relaxed">MCP is an absolute game-changer.</p>
                <p className="mb-4 text-lg leading-relaxed">Yesterday, I taught a 2-hour session about MCP covering the following topics:</p>
                <ol className="list-decimal list-inside space-y-2 mb-4 text-lg leading-relaxed">
                  <li>Introduction to the protocol</li>
                  <li>Why do we need it?</li>
                  <li>Protocol architecture</li>
                  <li>MCP Server and Client primitives</li>
                  <li>An MCP demo</li>
                </ol>
                <p className="mb-3 text-lg leading-relaxed">Here is the full 2-hour video, free</p>
                <span className="text-blue-400 text-lg">Show more</span>
              </div>

              {/* Video Preview */}
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-gray-900">
                <img 
                  src="/lovable-uploads/38f3892d-3b50-4831-a39b-1e74eaf05f4f.png"
                  alt="Video thumbnail"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  2:23:16
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Santiago Valdarrama
                </div>
              </div>

              {/* Engagement Buttons */}
              <div className="flex items-center justify-between max-w-md text-gray-500">
                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-base">13</span>
                </button>

                <button 
                  onClick={() => toggleRetweet('1')}
                  className={`flex items-center space-x-2 hover:text-green-400 transition-colors group ${
                    retweetedTweets.has('1') ? 'text-green-400' : ''
                  }`}
                >
                  <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                    <Repeat2 className="w-5 h-5" />
                  </div>
                  <span className="text-base">23</span>
                </button>

                <button 
                  onClick={() => toggleLike('1')}
                  className={`flex items-center space-x-2 hover:text-red-500 transition-colors group ${
                    likedTweets.has('1') ? 'text-red-500' : ''
                  }`}
                >
                  <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                    <Heart className={`w-5 h-5 ${likedTweets.has('1') ? 'fill-current' : ''}`} />
                  </div>
                  <span className="text-base">272</span>
                </button>

                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-base">10K</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sample tweets with larger fonts */}
        <div className="border-b border-gray-800 px-4 py-3 hover:bg-gray-950/50 transition-colors cursor-pointer">
          <div className="flex space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-white text-lg">Developer</span>
                <span className="text-gray-500 text-base">@developer</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500 text-base">5h</span>
              </div>
              <div className="text-white mb-4">
                <p className="text-lg leading-relaxed">Just shipped a new feature using the MCP protocol. The developer experience is incredible! 🚀</p>
              </div>
              <div className="flex items-center justify-between max-w-md text-gray-500">
                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-base">8</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                    <Repeat2 className="w-5 h-5" />
                  </div>
                  <span className="text-base">12</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-base">45</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-base">1.2K</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-800 px-4 py-3 hover:bg-gray-950/50 transition-colors cursor-pointer">
          <div className="flex space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-white text-lg">Tech News</span>
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <span className="text-gray-500 text-base">@technews</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500 text-base">1d</span>
              </div>
              <div className="text-white mb-4">
                <p className="text-lg leading-relaxed">Breaking: New AI protocol revolutionizes how applications communicate. Early adopters report 10x improvement in development speed.</p>
              </div>
              <div className="flex items-center justify-between max-w-md text-gray-500">
                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-base">156</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                    <Repeat2 className="w-5 h-5" />
                  </div>
                  <span className="text-base">892</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-base">2.1K</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-base">25K</span>
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
