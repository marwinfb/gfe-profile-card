import { useEffect } from 'react';

function Page({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen flex items-center justify-center px-[18px]">
      {children}
    </main>
  );
}
export default Page;
