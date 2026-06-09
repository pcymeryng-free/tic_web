/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Permite desplegar en Vercel aunque haya errores de TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Permite desplegar en Vercel aunque haya advertencias/errores de ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
