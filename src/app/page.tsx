const Home = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">ScreenCode</h1>
          <p className="mt-4 text-lg">
            Powerful tools for managing and manipulating your text.
          </p>
          <a
            href="#tools"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Explore Tools
          </a>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto" id="tools">
          <h2 className="text-4xl font-bold text-center mb-12">Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-semibold">Text Formatter</h3>
              <p className="mt-4">
                Format your text to meet your needs.
              </p>
              <a
                href="/formatter"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Free
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-semibold">QR Code Generator</h3>
              <p className="mt-4">
                Generate QR code from your text.
              </p>
              <a
                href="/analyzer"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Free
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-semibold">Text Comparison</h3>
              <p className="mt-4">Compare different texts.</p>
              <a
                href="/comparison"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Free
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-10 text-center">
        <p>
          &copy; {new Date().getFullYear()} ScreenCode. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
