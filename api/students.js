import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // READ JSON SAFELY
  const filePath = path.join(process.cwd(), "students.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const students = JSON.parse(fileData);

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
