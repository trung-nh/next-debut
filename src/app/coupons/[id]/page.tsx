export default async function Coupon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    console.log(params);
    
    const slug = (await params).id
    return <div>My Post: {slug}</div>
}
