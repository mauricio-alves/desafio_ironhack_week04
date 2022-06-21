export function MovieCard(props) {
  return (
    <div>
      <h1>{props.original_title}</h1>
      <p>{props.overview}</p>
      <strong>{props.release_date}</strong>
    </div>
  );
}

