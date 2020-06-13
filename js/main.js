// XMLHttpRequest

// jquery ($.get(), $.ajax())

// fetch()

function createTable(){

}
function getCourses() {
    fetch('https://golf-courses-api.herokuapp.com/courses').then((response) => {
      response.json().then((data) => {
        const courses = data.courses;
        let courseOptions = '';
        courses.forEach((course) => {
          courseOptions += `<option value="${course.id}">${course.name}</option>`;
        });
        document.getElementById('course-select').innerHTML = courseOptions;
        const id = courses[0].id
        getCourse(id);
      });
    });
  }
  
  function getCourse(id) {
    fetch(`https://golf-courses-api.herokuapp.com/courses/${id}`).then(
      (response) => {
        response.json().then((data) => {
          const course = data.data;
          document.getElementById('course-info').innerHTML = `
        <h3>${course.name}</h3>
        <img class="thumbnail" src="${course.thumbnail}">
        `;
        const holes = course.holes;
  
        let holesHtml = ''
        const teeBox = 0;
        holes.forEach(hole => {
          holesHtml += 
          `<div>
          <p>yardage: ${hole.teeBoxes[teeBox].yards}</p>
          <p>par: ${hole.teeBoxes[teeBox].par}</p>
          <p>handicap: ${hole.teeBoxes[teeBox].hcp}</p>
          </div>`
        })
  
        document.getElementById('holes').innerHTML = holesHtml;
  
        });
      }
    );
  }
  
  getCourses();

