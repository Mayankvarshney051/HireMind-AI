import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("/api/resume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setResume(data.resume);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    const token = localStorage.getItem("token");

    try {
      setAnalyzing(true);

      const res = await axios.post(
        "/api/ai/analyze",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setAnalysis(res.data.analysis);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Failed to analyze resume."
      );
    } finally {
      setAnalyzing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {resume ? (
        <>
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              📄 {resume.originalName}
            </h2>

            <p className="mt-2 text-gray-400">
              Resume uploaded successfully ✅
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={resume.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 px-4 py-2 rounded"
              >
                View Resume
              </a>

              <button
                onClick={handleAnalyze}
                disabled={analyzing}
                className="bg-green-600 px-4 py-2 rounded disabled:opacity-50"
              >
                {analyzing ? "Analyzing..." : "Analyze Resume"}
              </button>
            </div>
          </div>

          {analysis && (
  <div className="mt-8 bg-[#161f36] p-6 rounded-xl shadow-lg text-white">

    <h2 className="text-3xl font-bold mb-6">
      🤖 AI Resume Analysis
    </h2>

    {/* ATS Score */}
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-lg">
          ATS Score
        </span>

        <span className="font-bold text-2xl text-green-400">
          {analysis.atsScore}/100
        </span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-700"
          style={{ width: `${analysis.atsScore}%` }}
        ></div>
      </div>
    </div>

    {/* Summary */}

    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">
        📄 Summary
      </h3>

      <p className="text-gray-300 leading-8">
        {analysis.summary}
      </p>
    </div>

    {/* Strengths */}

    <div className="mb-8">

      <h3 className="text-xl font-bold text-green-400 mb-3">
        ✅ Strengths
      </h3>

      <ul className="space-y-2">

        {analysis.strengths.map((item, index) => (

          <li
            key={index}
            className="bg-green-900/30 p-3 rounded-lg"
          >
            {item}
          </li>

        ))}

      </ul>

    </div>

    {/* Weaknesses */}

    <div className="mb-8">

      <h3 className="text-xl font-bold text-red-400 mb-3">
        ❌ Weaknesses
      </h3>

      <ul className="space-y-2">

        {analysis.weaknesses.map((item, index) => (

          <li
            key={index}
            className="bg-red-900/30 p-3 rounded-lg"
          >
            {item}
          </li>

        ))}

      </ul>

    </div>

    {/* Missing Skills */}

    <div className="mb-8">

      <h3 className="text-xl font-bold text-yellow-300 mb-3">
        🚀 Missing Skills
      </h3>

      <div className="flex flex-wrap gap-3">

        {analysis.missingSkills.map((skill, index) => (

          <span
            key={index}
            className="bg-yellow-600 px-3 py-2 rounded-full text-black font-semibold"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

    {/* Suggestions */}

    <div className="mb-8">

      <h3 className="text-xl font-bold text-blue-400 mb-3">
        💡 Suggestions
      </h3>

      <ul className="space-y-2">

        {analysis.suggestions.map((item, index) => (

          <li
            key={index}
            className="bg-blue-900/30 p-3 rounded-lg"
          >
            {item}
          </li>

        ))}

      </ul>

    </div>

    {/* Interview Questions */}

    <div>

      <h3 className="text-xl font-bold text-purple-400 mb-3">
        🎤 Interview Questions
      </h3>

      <ol className="list-decimal ml-6 space-y-2">

        {analysis.interviewQuestions.map((item, index) => (

          <li
            key={index}
            className="text-gray-300"
          >
            {item}
          </li>

        ))}

      </ol>

    </div>

  </div>
)}
        </>
      ) : (
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl">No Resume Uploaded</h2>
        </div>
      )}
    </div>
  );
}

export default Dashboard;