export default function Layout({
  children,
  data,
  stats,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  data: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="flex">
        <div className="col-6">
        {data}
        </div>
        {stats}
      </div>
    </>
  );
}
