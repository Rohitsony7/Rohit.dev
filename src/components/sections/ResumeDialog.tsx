
import React from "react";
import { motion } from "framer-motion";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@/components/ui/button";
import { Download, Printer, X } from "lucide-react";
import { MutedButton } from "../ui/muted-button";
import { resumeData } from "../../utils/resume-data";

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  // Dynamically resolve the base URL
  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumePath = `${baseUrl}resume.pdf`;

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Rohit_Soni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    // Open PDF in a new tab for printing
    const printWindow = window.open(resumePath, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onOpenChange(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      />
      
      {/* Dialog content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-4xl max-h-[90vh] flex flex-col translate-x-[-50%] translate-y-[-50%] bg-background border rounded-xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold leading-none tracking-tight">Resume - {resumeData.name}</h2>
            <button 
              onClick={() => onOpenChange(false)} 
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <MutedButton onClick={handlePrint} className="flex items-center gap-2">
              <Printer size={16} />
              Print
            </MutedButton>
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download size={16} />
              Download
            </Button>
          </div>
        </div>
        
        {/* Scrollable content */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="border rounded-lg shadow-md overflow-hidden" style={{ minHeight: "70vh" }}>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl={resumePath}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </div>
      </motion.div>
    </>
  );
}
