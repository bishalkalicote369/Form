const enrollments = [];

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const experience = document.getElementById("experience").value;

  const enrollment = { name, email, phone, experience };
  enrollments.push(enrollment);

  console.log("Enrollment data:", enrollments);
  alert("Form submitted successfully!");


  document.getElementById("enrollForm").reset();

  return false;
}
