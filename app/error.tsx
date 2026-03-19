'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';
import Container from '@/app/components/shared/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to analytics service
    console.error(error);
  }, [error]);

  return (
    <Container className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-serif text-deep-blue mb-4">Something went wrong</h1>
        <p className="text-charcoal mb-8 text-lg">
          We apologize for the inconvenience. Our team has been notified and is working on a fix.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" onClick={reset}>
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline-pink">Return Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}