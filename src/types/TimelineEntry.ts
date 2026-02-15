type TimelineEntry = {
  title: string;
  subtitle: string;
  side: 'right' | 'left';
  text: string;
  link: string;
  icon: string;
  url?: string;
  urlText?: string;
};

export default TimelineEntry;
