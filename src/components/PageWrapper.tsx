interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${className}`}>
      {children}
    </main>
  );
}
