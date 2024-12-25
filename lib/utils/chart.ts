export function getChartData() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  
  return months.map((name) => ({
    name,
    tickets: Math.floor(Math.random() * 100) + 30,
  }));
}