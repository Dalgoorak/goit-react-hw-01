import { UserProfile } from './SocialProfile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/Transaction';
import Section from './Sections/Section';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

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

      <Section title={'Task - 3'}>
        <FriendList friends={friends} />
      </Section>

      <Section title={'Task - 4'}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
