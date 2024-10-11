import QrCodeGenerator from "@/components/QrCodeGenerator";
import MainLayout from "@/layouts/MainLayout";

export default function QrGeneratorPage () {
  return (
    <MainLayout>
      <div className="container mx-auto" id="tools">
        <h2 className="text-4xl font-bold text-center mb-12">
          QR Code Generator
        </h2>
        <QrCodeGenerator />
      </div>
    </MainLayout>
  );
};
