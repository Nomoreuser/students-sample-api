import students from "../students.json";

export default function handler(req, res) {
  const { id } = req.query; // get ?id= from URL

  if (id) {
    const student = students.find(s => s.studentId === id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json(student);
  }

  // if no id, return all students
  res.status(200).json(students);
}
