import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AEP - Servicios Agropecuarios de Precisión',
  description: 'Maquinaria de última generación para maximizar la productividad y eficiencia de tu campo. Siembra neumática y labores de labranza en Córdoba y el país.',
  keywords: 'servicios agropecuarios, siembra directa, siembra neumatica, crucianelli, pierobon, labranza, silvio pellico, cordoba, agricultura de precision',
  authors: [{ name: 'AEP Servicios Agropecuarios' }],
  creator: 'AEP',
  publisher: 'AEP',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-earth-gray text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
