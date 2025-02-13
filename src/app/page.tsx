import ResumeUpload from "./components/resume-upload"
import AiSuggestions from "./components/ai-suggestions"
import AtsScore from "./components/ats-score"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Resume Analyzer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Upload your resume for AI-powered suggestions and ATS score analysis
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ResumeUpload />
            <AtsScore score={85} />
          </div>
          <AiSuggestions />
        </div>
      </main>
    </div>
  )
}
