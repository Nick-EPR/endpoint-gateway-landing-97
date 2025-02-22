
import { Download, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GuideImageProps {
  src: string;
  alt: string;
  fileName: string;
  isPartOfDocument?: boolean;
  nextPage?: {
    src: string;
    alt: string;
    fileName: string;
  };
  prevPage?: {
    src: string;
    alt: string;
    fileName: string;
  };
}

const GuideImage = ({ src, alt, fileName, isPartOfDocument, nextPage, prevPage }: GuideImageProps) => {
  const [currentPage, setCurrentPage] = useState({
    src,
    alt,
    fileName
  });

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="glass-card p-4 cursor-pointer hover:shadow-lg transition-shadow relative group">
          <img 
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
            <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-6">
        <div className="relative h-full flex items-center justify-center">
          {isPartOfDocument && prevPage && (
            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={handlePrevPage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}
          <img 
            src={currentPage.src}
            alt={currentPage.alt}
            className="w-full h-full object-contain"
          />
          {isPartOfDocument && nextPage && (
            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={handleNextPage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}
          <Button
            className="absolute bottom-4 right-4"
            onClick={() => downloadImage(currentPage.src, currentPage.fileName)}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Page {isPartOfDocument ? (prevPage ? '2' : '1') : ''}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideImage;
