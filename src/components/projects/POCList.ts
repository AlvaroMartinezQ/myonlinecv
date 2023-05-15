import { ProjectEntry } from 'src/types/ProjectEntry';
import {
  mdiClockIn,
  mdiCalendarCheckOutline,
  mdiDocker,
  mdiLanguagePython,
} from '@mdi/js';

const pocs = [
  {
    name: 'Celery, celery beat and flower',
    short_description: 'Steps to run Celery locally.',
    long_description:
      'Deploy Redis as a broker and Mongo as a result database to be used by the Celery workers the user spins up and the beat scheduler.',
    repo_link: 'https://github.com/AlvaroMartinezQ/celery-example/tree/master',
    icon: [mdiLanguagePython, mdiDocker, mdiClockIn, mdiCalendarCheckOutline],
  },
] as ProjectEntry[];

export default pocs;
