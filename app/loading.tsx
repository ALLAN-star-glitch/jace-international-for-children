import Container from '@/app/components/shared/Container';

export default function Loading() {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-vibrant-pink border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-deep-blue font-serif text-xl">Loading...</p>
      </div>
    </Container>
  );
}