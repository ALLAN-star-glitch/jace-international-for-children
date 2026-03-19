import Link from 'next/link';
import Button from '@/app/components/shared/Button';
import Container from '@/app/components/shared/Container';

export default function NotFound() {
  return (
    <Container className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-serif text-deep-blue mb-4">404</h1>
        <h2 className="text-3xl font-serif text-deep-blue mb-6">Page Not Found</h2>
        <p className="text-charcoal mb-8 text-lg">
          We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          But children in Kenya still need your support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
          <Link href="/get-involved">
            <Button variant="outline-pink">Support Our Cause</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}