import { Download, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  pages?: Array<{
    src: string;
    alt: string;
    fileName: string;
  }>;
}

const GuideImage = ({
  src,
  alt,
  fileName,
  isPartOfDocument,
  nextPage,
  prevPage,
  pages = []
}: GuideImageProps) => {
  const allPages = pages.length > 0 
    ? pages 
    : [
        { src, alt, fileName },
        ...(nextPage ? [nextPage] : [])
      ];
  
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = allPages[currentPageIndex];

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNextPage = () => {
    if (currentPageIndex < allPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const hasNextPage = currentPageIndex < allPages.length - 1;
  const hasPrevPage = currentPageIndex > 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="glass-card p-4 cursor-pointer hover:shadow-lg transition-shadow relative group">
          <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 transition-colors rounded-lg flex items-center justify-center bg-transparent">
            <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[85vw] h-[90vh] p-4">
        <div className="relative h-full flex flex-col">
          <ScrollArea className="flex-1">
            <div className="relative min-h-full flex items-center justify-center p-2">
              {(isPartOfDocument || hasPrevPage) && (
                <Button 
                  variant="ghost" 
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10" 
                  onClick={handlePrevPage}
                  disabled={!hasPrevPage}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
              )}
              <img 
                src={currentPage.src} 
                alt={currentPage.alt} 
                className="max-h-[75vh] w-auto object-contain mx-auto" 
              />
              {(isPartOfDocument || hasNextPage) && (
                <Button 
                  variant="ghost" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10" 
                  onClick={handleNextPage}
                  disabled={!hasNextPage}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              )}
            </div>
          </ScrollArea>
          
          <div className="absolute bottom-6 right-6 z-20">
            <Button 
              onClick={() => downloadImage(currentPage.src, currentPage.fileName)}
              className="shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Page {currentPageIndex + 1} of {allPages.length}
            </Button>
          </div>
          
          {allPages.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
              {allPages.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentPageIndex ? "default" : "outline"}
                  size="sm"
                  className="w-8 h-8 p-0"
                  onClick={() => setCurrentPageIndex(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideImage;
