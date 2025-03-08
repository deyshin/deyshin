import Link from 'next/link';
import Container from './_components/container';
import Header from './_components/header';

export default function NotFound() {
  return (
    <main>
      <Container>
        <Header />
        <div className="flex flex-col items-center mt-8 mb-16">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl mb-8">Page Not Found</h2>
          <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/" className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 duration-200 transition-colors">
            Return to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}