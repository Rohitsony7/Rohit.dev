
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
      {/* Backdrop overlay with Aceternity-style blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onOpenChange(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      />
      
      {/* Dialog content with Aceternity-style animations and design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl max-h-[95vh] flex flex-col -translate-x-1/2 -translate-y-1/2 bg-background border rounded-xl shadow-xl overflow-hidden"
      >
        {/* Header with Aceternity-style gradient border */}
        <div className="flex flex-col space-y-1.5 p-6 border-b bg-gradient-to-b from-background to-background/80">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Resume - {resumeData.name}</h2>
            <motion.button 
              onClick={() => onOpenChange(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full w-8 h-8 flex items-center justify-center bg-background/10 hover:bg-background/20 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </motion.button>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <MutedButton onClick={handlePrint} className="flex items-center gap-2 hover:bg-gray-100/10 transition-colors">
                <Printer size={16} />
                Print
              </MutedButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleDownload} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                <Download size={16} />
                Download
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scrollable content with Aceternity styling */}
        <div className="flex-1 p-4 overflow-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="border rounded-lg shadow-xl overflow-hidden bg-white/5 backdrop-blur-sm h-full flex justify-center"
            style={{ minHeight: "70vh" }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <div style={{ height: '100%', width: '100%', maxHeight: '70vh', display: 'flex' }}>
                <Viewer
                  fileUrl={resumePath}
                  plugins={[defaultLayoutPluginInstance]}
                  defaultScale={1.0}
                />
              </div>
            </Worker>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
