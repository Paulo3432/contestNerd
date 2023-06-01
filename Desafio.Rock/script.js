const studentList = [
    {
      name: "Paulo",
      firstTestScore: 8.9,
      secondTestGrade: 7.9,
    },
  ];
  
  const studentListSecond = [
    {
      name: "Maria",
      firstTestScore: 5,
      secondTestGrade: 1,
    },
  ];
  
  let studentListEx = [];
  
  for (let student of studentList) {
    studentListEx.push(student.name);
    studentListEx.push(" A nota da primeira prova foi: " + student.firstTestScore);
    studentListEx.push(" A nota da segunda prova foi: " + student.secondTestGrade);
    let result = (student.firstTestScore + student.secondTestGrade) / 2;
    studentListEx.push("Sua média foi: " + result.toFixed(2));
    
    if (result >= 7) {
      alert(`Parabéns, você foi aprovado`);
    } else {
      alert(`Você não foi aprovado`);
    }
  }
  
  alert(studentListEx);
  
  let studentListSecondEx = [];
  
  for (let student of studentListSecond) {
    studentListSecondEx.push(student.name);
    studentListSecondEx.push(" A nota da primeira prova foi: " + student.firstTestScore);
    studentListSecondEx.push(" A nota da segunda prova foi: " + student.secondTestGrade);
    let result = (student.firstTestScore + student.secondTestGrade) / 2;
    studentListSecondEx.push("Sua média foi: " + result.toFixed(2));
  
    if (result >= 7) {
      alert(`Parabéns, você foi aprovado`);
    } else {
      alert(`Você não foi aprovado`);
    }
  }
  
  alert(studentListSecondEx);
  