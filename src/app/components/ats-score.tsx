import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function AtsScore({ score }: { score: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ATS Score</CardTitle>
        <CardDescription>How well your resume performs against Applicant Tracking Systems</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-green-500 progress-ring__circle stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / 100)}`}
                transform="rotate(-90 50 50)"
              ></circle>
              <text x="50" y="50" fontFamily="Verdana" fontSize="20" textAnchor="middle" alignmentBaseline="middle">
                {score}%
              </text>
            </svg>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {score >= 80
            ? "Great job! Your resume is well-optimized for ATS."
            : "There's room for improvement. Follow the AI suggestions to boost your score."}
        </p>
      </CardContent>
    </Card>
  )
}
