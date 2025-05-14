const courses = [
  {
    code: 'WDD 130',
    name: 'Web Fundamentals',
    credits: 3,
    completed: true
  },
  {
    code: 'WDD 231',
    name: 'Frontend Development II',
    credits: 3,
    completed: false
  },
  {
    code: 'CSE 121b',
    name: 'JavaScript Language',
    credits: 3,
    completed: true
  }
  // Add more as needed
];

const container = document.getElementById('courses-container');
const creditSpan = document.getElementById('total-credits');

function displayCourses(filteredCourses) {
  container.innerHTML = '';
  let totalCredits = 0;

  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.className = `course ${course.completed ? 'completed' : ''}`;
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditSpan.textContent = totalCredits;
}

// Event listeners for filtering
document.getElementById('all-courses').addEventListener('click', () => {
  displayCourses(courses);
});
document.getElementById('wdd-courses').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.code.startsWith('WDD')));
});
document.getElementById('cse-courses').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.code.startsWith('CSE')));
});

// Initial load
displayCourses(courses);
