import React from "react";

const stats = [
  ["👨‍🎓", "Students", "1,250", "+5 this month"],
  ["👨‍🏫", "Teachers", "85", "+2 this month"],
  ["🏫", "Classes", "32", "Active classes"],
  ["💰", "Fees Collected", "₹12.5L", "83.3% collected"],
];

const timetable = [
  ["08:00", "Mathematics", "10-A", "Mr. Sharma"],
  ["09:00", "Physics", "10-A", "Ms. Gupta"],
  ["10:00", "English", "10-A", "Mrs. Singh"],
  ["11:30", "Chemistry", "10-A", "Mr. Verma"],
];

const notices = [
  ["📢", "Parent Teacher Meeting", "PTM will be held on 20 September 2026."],
  ["📝", "Half-Yearly Examination", "Examination timetable has been published."],
  ["🏫", "School Holiday", "School will remain closed on 25 September."],
];

const events = [
  ["20", "SEP", "Parent Teacher Meeting", "09:00 AM - 01:00 PM"],
  ["25", "SEP", "Annual Sports Day", "School Ground"],
  ["02", "OCT", "Gandhi Jayanti", "School Holiday"],
];

const exams = [
  ["📐", "Mathematics", "10-A", "22 Sep"],
  ["🔬", "Science", "10-A", "24 Sep"],
  ["📖", "English", "10-A", "26 Sep"],
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6">

      {/* Header */}
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Good Morning, Admin 👋
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back to your School ERP Dashboard
          </p>
        </div>

        <div className="rounded-lg bg-white px-4 py-3 text-sm shadow-sm">
          📅 Monday, 14 September 2026
        </div>
      </header>

      {/* Quick Actions */}
      <div className="mb-6 flex flex-wrap gap-3">
        {[
          "➕ Add Student",
          "📝 Attendance",
          "📢 Notice",
          "📊 Reports",
        ].map((item) => (
          <button
            key={item}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([icon, title, value, sub]) => (
          <div
            key={title}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-blue-50 p-3 text-2xl">
                {icon}
              </div>

              <div>
                <p className="text-sm text-slate-500">{title}</p>

                <h2 className="text-2xl font-bold text-slate-800">
                  {value}
                </h2>

                <p className="text-xs text-green-600">
                  {sub}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Attendance + Summary */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">

        {/* Attendance */}
        <section className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="font-semibold text-slate-800">
            Today's Attendance
          </h2>

          <p className="mb-5 text-sm text-slate-500">
            Student attendance overview
          </p>

          <div className="flex items-center justify-around">

            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-[12px] border-blue-600">
              <b className="text-xl">93.6%</b>
              <span className="text-xs text-slate-500">
                Present
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <p>🟢 Present <b>1,170</b></p>
              <p>🔴 Absent <b>60</b></p>
              <p>🟡 Leave <b>20</b></p>
            </div>

          </div>
        </section>

        {/* Summary */}
        <section className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="font-semibold text-slate-800">
            Quick Summary
          </h2>

          <p className="mb-4 text-sm text-slate-500">
            Today's school overview
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["👨‍🎓", "1,170 Students", "Present today"],
              ["👨‍🏫", "82 Teachers", "Present today"],
              ["📚", "32 Classes", "Running today"],
              ["📝", "3 Exams", "This week"],
            ].map(([icon, title, sub]) => (
              <div
                key={title}
                className="rounded-lg bg-slate-50 p-4"
              >
                <span className="text-xl">{icon}</span>

                <p className="mt-1 font-semibold">
                  {title}
                </p>

                <small className="text-slate-500">
                  {sub}
                </small>
              </div>
            ))}
          </div>

        </section>
      </div>

      {/* Timetable + Notices */}
      <div className="mb-6 grid gap-6 xl:grid-cols-2">

        {/* Timetable */}
        <section className="overflow-x-auto rounded-xl bg-white p-5 shadow-sm">

          <h2 className="font-semibold text-slate-800">
            Today's Timetable
          </h2>

          <table className="mt-4 w-full min-w-[500px] text-left text-sm">

            <thead className="border-b text-slate-500">
              <tr>
                <th className="p-3">Time</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Class</th>
                <th className="p-3">Teacher</th>
              </tr>
            </thead>

            <tbody>
              {timetable.map((row) => (
                <tr
                  key={row[0]}
                  className="border-b hover:bg-slate-50"
                >
                  {row.map((item) => (
                    <td key={item} className="p-3">
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </section>

        {/* Notices */}
        <section className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="font-semibold text-slate-800">
            Latest Notices
          </h2>

          <div className="mt-4 space-y-4">
            {notices.map(([icon, title, text]) => (
              <div
                key={title}
                className="flex gap-3 border-b pb-4 last:border-0"
              >
                <span className="rounded-lg bg-blue-50 p-3">
                  {icon}
                </span>

                <div>
                  <h3 className="font-semibold">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {text}
                  </p>
                  <small className="text-slate-400">
                    Recently
                  </small>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Events + Exams */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        {/* Events */}
        <section className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-800">
            Upcoming Events
          </h2>
          <div className="mt-4 space-y-4">
            {events.map(([day, month, title, info]) => (
              <div
                key={title}
                className="flex items-center gap-4"
              >
                <div className="rounded-lg bg-blue-50 p-2 text-center">
                  <b className="block text-xl text-blue-600">
                    {day}
                  </b>
                  <small>{month}</small>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Exams */}
        <section className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-800">
            Upcoming Exams
          </h2>
          <div className="mt-4 space-y-4">
            {exams.map(([icon, subject, cls, date]) => (
              <div
                key={subject}
                className="flex items-center gap-4 border-b pb-4 last:border-0"
              >
                <span className="rounded-lg bg-slate-100 p-3 text-xl">
                  {icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {subject}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Class {cls}
                  </p>
                </div>
                <b className="text-sm text-blue-600">
                  {date}
                </b>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Fees + Performance */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        {/* Fees */}
        <section className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-800">
            Fee Overview
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Total", "₹15L"],
              ["Collected", "₹12.5L"],
              ["Pending", "₹2.5L"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-lg bg-slate-50 p-3"
              >
                <small className="text-slate-500">
                  {title}
                </small>
                <p className="font-bold">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-sm">
              <span>Collection Progress</span>
              <b>83.3%</b>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[83.3%] rounded-full bg-blue-600" />
            </div>
          </div>
        </section>
        {/* Performance */}
        <section className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-800">
            Academic Performance
          </h2>
          <div className="mt-4 space-y-3">
            {[
              ["Class 10-A", "86%"],
              ["Class 9-A", "83%"],
              ["Class 8-A", "79%"],
            ].map(([cls, score]) => (
              <div
                key={cls}
                className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
              >
                <span>{cls}</span>
                <b className="text-blue-600">
                  {score}
                </b>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Recent Activities */}
      <section className="rounded-xl bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-800">
          Recent Activities
        </h2>
        <div className="mt-4 space-y-3">
          {[
            "Rahul Kumar was added as a new student.",
            "Fee payment received from Ananya Sharma.",
            "Attendance submitted for Class 10-A.",
            'New notice "PTM 2026" was published.',
          ].map((activity) => (
            <div
              key={activity}
              className="flex gap-3 border-b pb-3 last:border-0"
            >
              <span className="text-blue-600">●</span>
              <p className="text-sm text-slate-600">
                {activity}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;