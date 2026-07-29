import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold text-white">
          AI Powered{" "}
          <span className="text-blue-500">Resume Analyzer</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Analyze your resume using AI, improve ATS score, compare with Job
          Descriptions and prepare for interviews.
        </p>

        <div className="mt-8 flex gap-5">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black">
            Upload Resume
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-950 py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-white mb-14">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Resume Analysis"
            description="Analyze your resume using Gemini AI."
          />

          <FeatureCard
            icon="📄"
            title="ATS Score"
            description="Improve ATS score with keyword optimization."
          />

          <FeatureCard
            icon="🎯"
            title="JD Matching"
            description="Compare resume with any Job Description."
          />

          <FeatureCard
            icon="💬"
            title="Interview Questions"
            description="Generate personalized interview questions."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-900 py-20 px-10">
        <h2 className="text-4xl text-white font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            number="1"
            title="Upload Resume"
            description="Upload your resume in PDF format securely."
          />

          <StepCard
            number="2"
            title="AI Analysis"
            description="Gemini AI analyzes your resume and extracts key insights."
          />

          <StepCard
            number="3"
            title="ATS Score"
            description="Get ATS score, keyword suggestions and skill gap analysis."
          />

          <StepCard
            number="4"
            title="Improve Resume"
            description="Apply AI suggestions and prepare confidently for interviews."
          />
        </div>
      </section>
    </>
  );
}

export default Home;