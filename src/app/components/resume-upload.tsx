"use client"

import { useState } from "react"
import { Upload, type File, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Your Resume</CardTitle>
        <CardDescription>Supported formats: PDF, DOCX, TXT</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {file ? (
                <>
                  <CheckCircle className="w-8 h-8 mb-4 text-green-500" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">{file.name}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOCX, or TXT (MAX. 5MB)</p>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.docx,.txt"
            />
          </label>
        </div>
        <div className="mt-4">
          <Button className="w-full" disabled={!file}>
            Analyze Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
