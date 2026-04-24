export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-6 md:px-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 tracking-wide">
        <span>© {new Date().getFullYear()} Murat Arslan. All rights reserved.</span>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/pm-muratarslan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mergenhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
