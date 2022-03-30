export const getStaticPaths = async () => {
  //the url
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });

  return { paths, fallback: false }; //fallback false sends you to the 404 page
};

export const getStaticProps = async (context) => {
  //generates pages in .next/server/pages/ on build
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return { props: { ninja: data } };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
