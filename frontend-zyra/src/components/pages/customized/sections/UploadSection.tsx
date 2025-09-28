'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';

interface UploadSectionProps {
  onFileSelect?: (file: File, previewUrl: string) => void;
}

export default function UploadSection({ onFileSelect }: UploadSectionProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onFileSelect?.(file, url);
    }
  };

  return (
    <div className="px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-light text-obsidian-black mb-3 sm:mb-4">
            Upload Your Design
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-graphite max-w-2xl mx-auto">
            Start by uploading your image, logo, or artwork. We support JPG, PNG, and SVG formats.
          </p>
        </div>

        <div className="bg-pearl-white border-2 border-dashed border-champagne/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center hover:border-royal-gold/50 transition-all duration-300 group">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-3 sm:space-y-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-royal-gold/10 rounded-full flex items-center justify-center group-hover:bg-royal-gold group-hover:text-obsidian-black transition-all duration-300">
              <Upload size={32} className="sm:w-10 sm:h-10 text-royal-gold group-hover:text-obsidian-black transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-obsidian-black mb-1 sm:mb-2">
                {selectedFile ? 'File Selected' : 'Choose File or Drag & Drop'}
              </h3>
              <p className="text-xs sm:text-sm text-graphite">
                {selectedFile ? selectedFile.name : 'Supports JPG, PNG, SVG up to 10MB'}
              </p>
            </div>
          </label>

          {previewUrl && (
            <div className="mt-6 sm:mt-8">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg sm:rounded-xl mx-auto border border-champagne/30"
              />
              <button className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-royal-gold text-obsidian-black rounded-lg hover:bg-royal-gold/90 transition-colors duration-300 font-medium text-sm sm:text-base">
                Continue to Design
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
