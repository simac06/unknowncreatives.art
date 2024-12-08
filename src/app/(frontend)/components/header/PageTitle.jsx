export default function PageTitle({ title }) {
  return (
    <header className="w-full flex justify-between text-3xl py-6">
      <h1>{title}</h1>
    </header>
  );
}
