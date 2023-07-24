type Props = {
  text: string[];
};

const ScrollingTextBanner = ({ text }: Props) => {
  return (
    <div className="banner">
      <div className="scrollContainer">
        {text.map((item, index) => (
          <span key={index} style={{ paddingRight: '10rem', whiteSpace: 'nowrap' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};