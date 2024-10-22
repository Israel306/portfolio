export default function EducationCard({
  year,
  degree,
  courses,
  university,
  cgpa,
  logo,
}) {
  return (
    <div className="flex flex-col md:flex-row border-[1px] rounded-lg overflow-hidden shadow-lg w-full max-w-2xl mx-auto">
      {/* Left Section: Year and Degree */}
      <div className="bg-purple-950 p-6 flex flex-col items-center justify-center text-white w-full md:w-1/3">
        <h2 className="text-3xl font-bold">{year}</h2>
        <p className="mt-2 text-lg font-medium">{degree}</p>
      </div>

      {/* Right Section: Course Details */}
      <div className="bg-white p-6 w-full md:w-2/3">
        <ul className="space-y-2">
          <li className="text-lg font-semibold">
            <span className=""> </span> {courses}
          </li>
          <li className="text-lg font-semibold flex items-center">
            <img className="w-12 h-12" src={logo} alt="" />
            <span className="text-gray-600"> </span> {university}
          </li>
          <li className="text-lg font-semibold">
            <span className="text-gray-600"></span> {cgpa}
          </li>
        </ul>
      </div>
    </div>
  );
}
