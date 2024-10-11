import "@/styles/globals.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">ScreenCode</h1>
          <p className="mt-4 text-lg">
            Powerful tools for managing and manipulating your text.
          </p>
        </div>
      </header>

      <main className="flex-grow py-20">{children}</main>

      <footer className="bg-gray-800 text-white py-10 text-center">
        <p>
          &copy; {new Date().getFullYear()} ScreenCode. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
