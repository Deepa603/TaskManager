export default function Progresstracker({ tasks}) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  // Status message
let msg = "Let's begin!";
if (progress > 0 && progress < 40) msg = "Keep going";
else if (progress >= 40 && progress < 80) msg = "Great progress";
else if (progress >= 80 && progress < 100) msg = "Almost done";
else if (progress === 100) msg = " Hurray, All tasks completed....";
  return (
  <div className="progress-tracker">
    <p>{completedTasks} of {totalTasks} tasks completed — {msg}</p>

    <div className="progress-bar">
      <div
        className={`progress ${progress > 80 ? "glow" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>

      <span className="progress-text">{Math.round(progress)}%</span>
    </div>
  </div>
);
}