import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
// import Github from './Github'; 
import ResumeSection from './ResumeSection';
import Techstack from './TechStack';
import TimelineItem from './TimelineItem';
import Tools from './Tools';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-black-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            style={{marginTop: '40px', display: 'flex', flexWrap: 'wrap'}}>
            <Techstack />
          </div>
        </ResumeSection>
        <ResumeSection title="Tools">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            style={{marginTop: '40px', display: 'flex', flexWrap: 'wrap'}}>
            <Tools />
          </div>
        </ResumeSection>
        {/* <div className="grid grid-cols-1 py-8 gap-y-4 first:pt-0 last:pb-0 md:grid-cols-4">
          <div className="flex justify-center col-span-1 md:justify-start">
            <div className="relative h-max">
              <h2 className="text-xl font-bold uppercase text-neutral-800">
                <span style={{color: 'white'}}>Days I</span> Code
              </h2>
              
            </div>
          </div>
            <div className="flex flex-col col-span-1 md:col-span-3">
            <Github />
          </div> 
        </div> */}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
