"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{error.message}</h2>
      <button
        className="mt-4 rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
