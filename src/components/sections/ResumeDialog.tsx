
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Resume - {resumeData.name}</DialogTitle>
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
        </DialogHeader>
        
        <div className="flex-1 border rounded-lg shadow-md overflow-hidden mt-4" style={{ height: "70vh" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={resumePath}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </DialogContent>
    </Dialog>
  );
}
