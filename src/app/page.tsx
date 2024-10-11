import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto" id="tools">
      <h2 className="text-4xl font-bold text-center mb-12">Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-2xl font-semibold">Text Formatter</h3>
          <p className="mt-4">Format your text to meet your needs.</p>
          <Link
            href="/formatter"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Free
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-2xl font-semibold">QR Code Generator</h3>
          <p className="mt-4">Generate QR code from your text.</p>
          <Link
            href="/qr-code-generator-page"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Free
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-2xl font-semibold">Text Comparison</h3>
          <p className="mt-4">Compare different texts.</p>
          <Link
            href="/comparison"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Free
          </Link>
        </div>
      </div>
    </div>
  );
}
