import { ProjectEntry } from 'src/types/ProjectEntry';
import { mdiLanguageC } from '@mdi/js';
import { mdiBash } from '@mdi/js';
import { mdiLanguageJava } from '@mdi/js';
import { mdiDocker } from '@mdi/js';
import { mdiDatabaseSearch } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiLanguageCsharp } from '@mdi/js';
import { mdiLanguageCpp } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiLanguageTypescript } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiUnity } from '@mdi/js';
import { mdiLinux } from '@mdi/js';
import { mdiWechat } from '@mdi/js';

const projects = [
  {
    name: 'My-shell',
    short_description: 'Minimum viable self programmed Linux shell.',
    long_description: 'Self programmed Linux shell in C. The main objective of the project is to satisfy the minimum requirements a normal Linux console will provide to a user. It also has some self built in commands like: cd, jobs, fg and exit. It also illustrates how pipes, signals and forks operate.',
    repo_link: 'https://github.com/AlvaroMartinezQ/my-shell',
    icon: [mdiLinux, mdiLanguageC],
  },
  {
    name: 'Clickandbuy',
    short_description: 'E-commerce simulation.',
    long_description: 'The aim of this project is to understand distributed applications with different servers running different technologies and communicating between them. For a better description of this project, head into the repo link.',
    repo_link: 'https://github.com/AlvaroMartinezQ/clickandbuy',
    icon: [mdiLinux, mdiLanguageJava, mdiDocker, mdiDatabaseSearch, mdiBootstrap, mdiLanguageHtml5, mdiWechat],
  },
  {
    name: 'MyOnlineCV',
    short_description: 'Online personal cv.',
    long_description: 'This project is serving you this page via GithubPages! The code is open source :)',
    repo_link: 'https://github.com/AlvaroMartinezQ/myonlinecv',
    icon: [mdiVuejs, mdiLanguageTypescript, mdiLanguageJavascript],
  },
  {
    name: 'Computer Graphics',
    short_description: 'OpenGL Solar System simulaton & Unity game.',
    long_description: 'This repo presents two projects, made with OpenGL and Unity. The OpenGL project is a Solar System the user can control with some keyboard keys. The Unity project is a simple game with different scenes and features some hidden coins to collect throughout the game.',
    repo_link: 'https://github.com/AlvaroMartinezQ/computer_graphics',
    icon: [mdiUnity, mdiLanguageCsharp, mdiLanguageCpp],
  },
  {
    name: 'MPI parking',
    short_description: 'Parking lot simulation with MPI.',
    long_description: 'An introduction into threading, master and worker processes, simulating a parking lot. The project runs under Open MPI, a Message Passing library. The project is editable via the Makefile in the repo, with the possibility of modifying the number of parking slots, cars and trucks.',
    repo_link: 'https://github.com/AlvaroMartinezQ/mpi_parking',
    icon: [mdiLinux, mdiLanguageC],
  },
  {
    name: 'Shell Scripting intro',
    short_description: 'An introduction into shell scripts.',
    long_description: 'Script receives a number of arguments: a destination directory followed by n number of target directories. The script will copy all files in the target directories and its subdirectories into the destination directory, skipping copies of the same files (a copy is identified by the name and will always save the newer one).',
    repo_link: 'https://github.com/AlvaroMartinezQ/shell_scripting_project',
    icon: [mdiLinux, mdiBash],
  },
  {
    name: 'Electronic Agenda',
    short_description: 'Simple agenda.',
    long_description: 'Agenda developed in C. This project illustrates an introduction to the C programming language basics, with characteristics like: functions, the main process, writing into files, loops...',
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
