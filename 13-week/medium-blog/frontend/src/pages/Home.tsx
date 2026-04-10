import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col" style={{ fontFamily: "'Playfair Display', serif" }}>


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;600&display=swap');
        .lato { font-family: 'Lato', sans-serif; }
      `}</style>

      <nav className="flex justify-between items-center px-10 py-5 border-b border-stone-200">
        <span className="text-2xl font-bold tracking-tight text-stone-800">Medium</span>
        <div className="flex gap-3">
          <Link to="/signin">
            <button type="button" className="lato text-sm text-stone-600 px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-100 transition-all cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="lato text-sm text-white bg-stone-800 px-4 py-2 rounded-full hover:bg-stone-700 transition-all cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-24">

       
        <div className="lato mb-6 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>
          A place for curious minds
        </div>

        {/* Headline */}
        <h1 className="text-6xl lg:text-7xl font-bold text-stone-900 leading-tight max-w-3xl mb-6">
          Ideas worth
          <span className="italic text-stone-400"> reading.</span>
        </h1>

      
        <p className="lato text-lg text-stone-500 max-w-xl mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
          Discover stories, thinking, and expertise from writers on any topic that matters to you.
        </p>

       
        <Link to="/blogs" className="mt-2">
          <button type="button" className="lato bg-stone-900 text-white text-sm px-8 py-3 rounded-full hover:bg-stone-700 transition-all shadow-sm cursor-pointer">
            View Blogs →
          </button>
        </Link>

        <p className="lato mt-6 text-stone-400 text-sm" style={{ fontWeight: 300 }}>
          Please sign up to access our blogs.
        </p>

      </main>

      <footer className="lato text-center py-6 text-xs text-stone-400 border-t border-stone-200">
        © 2026 Medium Clone · Built with ❤️
      </footer>

    </div>
  );
};

export default Home;