import { ProjectEntry } from 'src/types/ProjectEntry';
import {
  mdiLanguageC,
  mdiBash,
  mdiLanguageJava,
  mdiDocker,
  mdiDatabaseSearch,
  mdiLanguageHtml5,
  mdiBootstrap,
  mdiLanguageCsharp,
  mdiLanguageCpp,
  mdiVuejs,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
  mdiUnity,
  mdiLinux,
  mdiWechat,
  mdiAndroid,
  mdiAndroidStudio,
  mdiCellphone,
  mdiCodeJson,
  mdiGitlab,
  mdiLanguagePython,
  mdiClockIn,
  mdiCalendarCheckOutline,
  mdiKubernetes,
} from '@mdi/js';

const projects = [
  {
    name: 'Application Monitoring',
    short_description: 'Local monitoring workspace',
    long_description:
      'Local monitoring workspace with the Grafana stack (Loki, Mimir, Grafana, Alloy and more). All running locally with Docker and Kind. Coming soon!',
    repo_link: '',
    icon: [mdiKubernetes, mdiDocker],
  },
  {
    name: 'CodeFlow',
    short_description: 'Local CI/CD environment',
    long_description:
      'Local CI/CD with Gitlab & Gitlab Runner on Minikube with Docker, all running locally!',
    repo_link: 'https://gitlab.com/AlvaroMartinezQ/codeflow',
    icon: [mdiGitlab, mdiLinux, mdiDocker],
  },
  {
    name: 'App4Auctions',
    short_description: 'Online auction system - Final university project',
    long_description:
      'Auctions & bids online live system. Scheduled tasks with Celery, WebSocket protocol communications and more.',
    repo_link: 'https://gitlab.com/AlvaroMartinezQ/app4auctions',
    icon: [
      mdiGitlab,
      mdiLinux,
      mdiLanguagePython,
      mdiVuejs,
      mdiLanguageTypescript,
      mdiDocker,
      mdiClockIn,
      mdiCalendarCheckOutline,
    ],
  },
  {
    name: 'My-shell',
    short_description: 'Minimum viable self programmed Linux shell.',
    long_description:
      'Self programmed Linux shell in C. The main objective of the project is to satisfy the minimum requirements a normal Linux console will provide to a user. It also has some self built in commands like: cd, jobs, fg and exit. It also illustrates how pipes, signals and forks operate.',
    repo_link: 'https://github.com/AlvaroMartinezQ/my-shell',
    icon: [mdiLinux, mdiLanguageC],
  },
  {
    name: 'Clickandbuy',
    short_description: 'E-commerce simulation.',
    long_description:
      'The aim of this project is to understand distributed applications with different servers running different technologies and communicating between them. For a better description of this project, head into the repo link.',
    repo_link: 'https://github.com/AlvaroMartinezQ/clickandbuy',
    icon: [
      mdiLinux,
      mdiLanguageJava,
      mdiDocker,
      mdiDatabaseSearch,
      mdiBootstrap,
      mdiLanguageHtml5,
      mdiWechat,
    ],
  },
  {
    name: 'NASA APOD',
    short_description: 'Get the Astronomy Pic of the Day published by NASA.',
    long_description:
      'View the APOD (Astronomy Pic of the Day) published by NASA. This application shows how to make HTTP requests in Android and parse its reponses (with OkHTTP). As well as how to use the well known library Glide to render images based on URL links.',
    repo_link: 'https://github.com/AlvaroMartinezQ/apodNASAapp',
    icon: [mdiAndroid, mdiAndroidStudio, mdiCellphone],
  },
  {
    name: 'MyOnlineCV',
    short_description: 'Online personal cv.',
    long_description:
      'This project is serving you this page via GithubPages! The code is open source :)',
    repo_link: 'https://github.com/AlvaroMartinezQ/myonlinecv',
    icon: [mdiVuejs, mdiLanguageTypescript, mdiLanguageJavascript, mdiCodeJson],
  },
  {
    name: 'Computer Graphics',
    short_description: 'OpenGL Solar System simulaton & Unity game.',
    long_description:
      'This repo presents two projects, made with OpenGL and Unity. The OpenGL project is a Solar System the user can control with some keyboard keys. The Unity project is a simple game with different scenes and features some hidden coins to collect throughout the game.',
    repo_link: 'https://github.com/AlvaroMartinezQ/computer_graphics',
    icon: [mdiUnity, mdiLanguageCsharp, mdiLanguageCpp],
  },
  {
    name: 'MPI parking',
    short_description: 'Parking lot simulation with MPI.',
    long_description:
      'An introduction into threading, master and worker processes, simulating a parking lot. The project runs under Open MPI, a Message Passing library. The project is editable via the Makefile in the repo, with the possibility of modifying the number of parking slots, cars and trucks.',
    repo_link: 'https://github.com/AlvaroMartinezQ/mpi_parking',
    icon: [mdiLinux, mdiLanguageC],
  },
  {
    name: 'Shell Scripting intro',
    short_description: 'An introduction into shell scripts.',
    long_description:
      'Script receives a number of arguments: a destination directory followed by n number of target directories. The script will copy all files in the target directories and its subdirectories into the destination directory, skipping copies of the same files (a copy is identified by the name and will always save the newer one).',
    repo_link: 'https://github.com/AlvaroMartinezQ/shell_scripting_project',
    icon: [mdiLinux, mdiBash],
  },
  {
    name: 'Electronic Agenda',
    short_description: 'Simple agenda.',
    long_description:
      'Agenda developed in C. This project illustrates an introduction to the C programming language basics, with characteristics like: functions, the main process, writing into files, loops...',
    repo_link: 'https://github.com/AlvaroMartinezQ/electronicAgenda',
    icon: [mdiLanguageC],
  },
] as ProjectEntry[];

export default projects;

/* Project template to copy
  {
    name: '',
    short_description: '',
    long_description: '',
    repo_link: '',
    icon: [],
  }
*/
