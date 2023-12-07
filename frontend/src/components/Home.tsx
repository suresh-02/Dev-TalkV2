const Home = () => {
  const posts = [
    {
      id: 1,
      name: "Suresh",
      desc: "lorem epsdjhbd gyfcdak ihuhfouqf ouhyiuwlqhlu",
    },
    {
      id: 2,
      name: "Suresh",
      desc: "lorem epsdjhbd gyfcdak ihuhfouqf ouhyiuwlqhlu",
    },
    {
      id: 3,
      name: "Suresh",
      desc: "lorem epsdjhbd gyfcdak ihuhfouqf ouhyiuwlqhlu",
    },
    {
      id: 4,
      name: "Suresh",
      desc: "lorem epsdjhbd gyfcdak ihuhfouqf ouhyiuwlqhlu",
    },
    {
      id: 5,
      name: "Suresh",
      desc: "lorem epsdjhbd gyfcdak ihuhfouqf ouhyiuwlqhlu",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <h1 className="text-4xl">{post.name}</h1>
      ))}
    </div>
  );
};

export default Home;
