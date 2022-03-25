import Section from "components/Section";
import songs from "data/songs";

const Home = () => {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/more1" items={songs} />
      <Section title="Shows to try" more="/more2" items={songs} />
      <Section title="Made for Osman Çalıkoğlu" more="/more2" items={songs} />
    </div>
  );
};

export default Home;
