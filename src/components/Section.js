import SongItem from "./SongItem";
import Title from "./Title";

const Section = ({ title, more = false, items }) => {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <SongItem item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
