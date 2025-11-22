import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} {personalInfo.name}. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-300 hover:text-white transition"
                aria-label="Email"
              >
                Email
              </a>
            )}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              Inicio
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition">
              Proyectos
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition">
              Sobre Mí
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

