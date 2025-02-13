import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function AiSuggestions() {
  const suggestions = [
    "Consider adding more quantifiable achievements to highlight your impact.",
    "Your resume could benefit from a stronger opening summary that showcases your unique value proposition.",
    "Ensure your skills section is tailored to the job description for better ATS matching.",
    "Use more action verbs at the beginning of your bullet points to make your experiences more dynamic.",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Suggestions</CardTitle>
        <CardDescription>Here are some tips to improve your resume</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <span className="flex items-center justify-center w-6 h-6 mr-2 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                {index + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
