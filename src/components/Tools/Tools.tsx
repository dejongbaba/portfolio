import { Section } from 'components/UI/Section';

const Tools: React.FC = () => {
    // External links
const externalLinks = [
    { title: 'Typescript', url: '#' },
    { title: 'React', url: '#' },
    { title: 'Next.js', url: '#' },
    { title: 'Tailwind CSS', url: '#' },
    { title: 'Redux Toolkit', url: '#' },
    { title: 'Docker', url: '#' },
    { title: 'Kubernetes', url: '#' },
    { title: 'AWS', url: '#' },
    { title: 'Git', url: '#' },
    { title: 'Github', url: '#' },
    { title: 'Gitlab', url: '#' },
    { title: 'Jira', url: '#' },
    { title: 'Confluence', url: '#' },
    { title: 'Figma', url: '#' },
    { title: 'Angular', url: '#' },
    { title: 'Node.js', url: '#' },
    { title: 'Express', url: '#' },
    { title: 'MongoDB', url: '#' },
    { title: 'PostgreSQL', url: '#' },
    { title: 'MySQL', url: '#' },
    { title: 'Redis', url: '#' },
    { title: 'GraphQL', url: '#' },
    { title: 'REST', url: '#' },
    { title: 'Postman', url: '#' },
    { title: 'Swagger', url: '#' },
    { title: 'Jest', url: '#' },
    { title: 'Mocha', url: '#' },
    { title: 'React Native', url: '#' },
    { title: 'Expo', url: '#' },
    { title: 'React Testing Library', url: '#' },
    
    
  ];
  return <Section id="tools" title="Tools">
    <nav>
                <ul className="flex flex-wrap items-center gap-6">
                  {externalLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
  </Section>;
};

export default Tools;