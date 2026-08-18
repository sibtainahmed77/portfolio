export const nav = ['About','Experience','Projects','Skills','Education','Certifications','Contact'];
export const social = {
  github: 'https://github.com/sibtainahmed77',
  linkedin: 'https://www.linkedin.com/in/sibtain-ahmed-632292290/',
  email: 'mailto:sibtain.ahmed19@gmail.com'
};
export const experience = { company:'1LINK (Pvt) Limited', role:'SQA Intern', team:'Digital Technology & Solutions', period:'Present', location:'Karachi, Pakistan', summary:'Learning how APIs, specifications, and transaction flows are tested within a professional payment environment.', areas:['Manual testing','API testing','Postman','Swagger / OpenAPI','REST & JSON','Payment flows','ISO 8583 concepts','Certification testing'] };
export const projects = [
  {number:'01',name:'Job Application Tracking System',description:'A MERN dashboard for managing applications and interview progress.',tech:['React.js','Node.js','Express.js','MongoDB','JWT','Docker'],features:['Application tracking','Secure authentication','Central dashboard'],tone:'amber',imagePosition:'left',github:'https://github.com/sibtainahmed77/Job-Application-Tracker'},
  {number:'02',name:'Student Management System',description:'An ASP.NET Core MVC system for students, courses, and academic records.',tech:['ASP.NET Core','MVC','REST APIs','Swagger','SQL'],features:['Student and course records','Modular services','API documentation'],tone:'blue',imagePosition:'right',github:'https://github.com/sibtainahmed77/StudentManagementSystem'}
];
export const skills = [
  {group:'Frontend',items:['React.js','JavaScript','HTML','CSS']},
  {group:'Backend',items:['Node.js','Express.js','RESTful APIs','ASP.NET Core']},
  {group:'Databases',items:['MongoDB','MySQL','SQL Server']},
  {group:'Testing & QA',items:['Playwright','Postman','Swagger','API Testing','Manual Testing']},
  {group:'Tools & Workflow',items:['Git','GitHub','Jira','Docker']}
];
export const education = [
  {degree:'Bachelor of Science in Software Engineering',school:'SZABIST University',period:'2023 — Present',location:'Karachi, Pakistan'},
  {degree:'Intermediate — Pre-Engineering',school:'The City School',period:'2021 — 2023',location:'Larkana, Pakistan'}
];
export const certifications = [
  {name:'Scrum Foundation Professional Certification',issuer:'CertiProf',url:'https://www.linkedin.com/in/sibtain-ahmed-632292290/overlay/Certifications/786441080/treasury/?profileId=ACoAAEaFQgYBTjyxRmmxOPufmHpHvNhD0tgXkp8'},
  {name:'HR Foundations: Core Human Resources',issuer:'LinkedIn Learning',url:'https://www.linkedin.com/learning/certificates/0d2af90b18c28839e79a705a7551e81be4c67df95f5dbfa7729861e86adf8396'},
  {name:'Ethics in the Age of Generative AI',issuer:'LinkedIn Learning',url:'https://www.linkedin.com/learning/certificates/defd9166f5005b82aa8a5cc4f1b514cd8147195be96257dd2c400f426ce74adb'},
  {name:'Calculus for Machine Learning and Data Science',issuer:'Coursera',url:'https://www.coursera.org/account/accomplishments/verify/VPJ4SE2QZ77R'},
  {name:'Introduction to MERN Stack',issuer:'Simplilearn SkillUp',url:'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTYxMDE5NF85ODc1MTY1MTc2NjE2NDIyMzU4NC5wbmciLCJ1c2VybmFtZSI6IlNpYnRhaW4gQWhtZWQifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1583688492382358657&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT%2FLLMjQKyMlLjUqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGkwOYBBAAAA'}
].map((certificate,index)=>({...certificate,number:String(index+1).padStart(2,'0')}));
