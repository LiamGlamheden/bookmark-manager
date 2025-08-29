export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-4 text-center text-sm text-gray-600">
      <div className="flex justify-center gap-6">
        <a href="https://github.com/LiamGlamheden" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://se.linkedin.com/in/liam-glamheden-b45463262" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="mailto:liam.l.glamheden@gmail.com" className="hover:underline">
          Mail
        </a>
        <a href="https://liamglamheden.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Portfolio
        </a>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        © {new Date().getFullYear()} – All rights reserved
      </p>
    </footer>
  );
}
