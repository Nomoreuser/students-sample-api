import students from "../students.json";

export default function handler(req, res) {
  // CORS FIX
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { id } = req.query;

  if (id) {
    const student = students.find(s => s.studentId === id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json(student);
  }

  res.status(200).json(students);
}
