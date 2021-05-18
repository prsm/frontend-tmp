import fs from 'fs';

export async function getStaticProps() {
  const fileNames = fs.readdirSync("content");
  console.log(fileNames)
  return {
    props: {
      fileNames
    }
  }
}

export default function Index(props) {

  const files = props.fileNames
  console.log(files)
  return (
    <div>
      <h1>{files}</h1>
    </div>
  );
}
