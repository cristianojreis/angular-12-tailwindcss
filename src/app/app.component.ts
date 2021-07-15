import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    pageHeroImage: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80",
    pageTitle: "Boilerplate Angular 12 + TailWindCSS",
    pageSocialLink: {
      link: "https://github.com/cristianojreis/angular-12-tailwindcss",
      faIcon: "fa-github",
      color: "black-900"
    },
    authorName: "Cristiano José dos Reis",
    authorLocation: "Santo André, SP",
    authorProfession: "Software Engineer / Full Stack / DevOps",
    authorFirstGraduation: "Information Systems",
    authorFirstGraduationUniversity: "Iberian American Institute",
    authorSecondGraduation: "MBA | Software Engineering",
    authorSecondGraduationUniversity: "Metropolitan Education",
    authorDescription: "Apaixonado pelo mundo de desenvolvimento de software, atuando na área desde 1997 sempre se atualizando com conhecimento em diversas tecnologias das quais pode-se destacar DotNet Core & Dotnet Framework, Java Springboot, DevOps, React, Typesript, NodejS, SQL Server, Oracle e Shellscript. Autodidata, curioso e com sede de conhecimento e agora ainda mais focado em disseminar seu conhecimento e compartilhá-lo.",
    socialLinks: [
      {
        link: "https://www.linkedin.com/in/cristianojreis",
        faIcon: "fa-linkedin",
        color: "blue-900"
      },
      {
        link: "https://github.com/cristianojreis",
        faIcon: "fa-github",
        color: "black-900"
      },
    ]
  };
}
