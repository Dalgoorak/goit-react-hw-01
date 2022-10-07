import { UserProfile } from './SocialProfile/Profile';
import { Statistics } from './Statistics/Statistics';
import Section from './Sections/Section';
import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div>
      <Section title={'Task - 1'}>
        <UserProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={'Task - 2'}>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section>
        <Statistics stats={data} />
      </Section>
    </div>
  );
};
